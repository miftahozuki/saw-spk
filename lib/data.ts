import { prisma } from "@/lib/prisma";
import { Kriteria, Penilaian, subKriteria } from "@prisma/client";
import { AlternatifPenilaian, KriteriaSubKriteria, rPenilaian } from "@/utils/type";
import { unstable_noStore as noStore } from "next/cache";


export const getalternatifs = async () => {
    noStore()
    try {
        const alternatif = await prisma.alternatif.findMany({
            select: {
                id: true,
                nama: true,
                createdAt: true,
                updatedAt: true,
                penilaian: true

            },
            orderBy: {
                id: 'asc'
            }
        });
        return alternatif;
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch alternatif data ");
    }
};

export const getAlternatifById = async (id: number) => {
    try {
        const alternatif = await prisma.alternatif.findUnique({
            where: { id },
            select: {
                id: true,
                nama: true,
                penilaian: true,
                createdAt: true,
                updatedAt: true
            }
        });
        return alternatif;
    } catch (error) {
        throw new Error("Failed to fect alternatif data");
    }
};

export const getKriteria = async () => {
    noStore()
    try {
        const kriteria = await prisma.kriteria.findMany({
            select: {
                id: true,
                kode: true,
                nama: true,
                bobot: true,
                jenis: true,
                createdAt: true,
                updatedAt: true,
                subkriteria: true
            }, orderBy: { kode: 'asc' }
        });
        return kriteria

    } catch (error) {
        throw new Error("Failed to fetch kriteria data")
    }
}

export const getKriteriaById = async (id: number) => {
    try {
        const kriteria = await prisma.kriteria.findUnique({
            where: { id }
        })
        return kriteria

    } catch (error) {
        throw new Error("Failed to fetch kriteria data.")
    }
}

export const getSubKriteriaByID = async (id: number) => {

    try {
        const subkriteria = await prisma.subKriteria.findUnique({
            where: { id }
        })
        return subkriteria

    } catch (error) {
        throw new Error("Failed to fetch subkriteria data.")
    }
}

// Perhitungan Metode SAW

const getMax = (alternatif: AlternatifPenilaian[], subKriteria: subKriteria[], kriteria: Kriteria[]) => {
    
    const maxValue: { [kriteriaId: number]: number } = {}
    alternatif.forEach(alternatif => {
        alternatif.penilaian.forEach(penilaian => {
            const { kriteriaId, subkriteriaId } = penilaian;
            const kriteriaName = kriteria.find(k => k.id === kriteriaId)?.nama
            let nilai: number;
            switch(kriteriaName) {
                case 'Kehadiran':
                case 'Masa Kerja':
                     nilai = penilaian.nilai ?? 0
                    break;
                default:
                     nilai = subKriteria.find(sub => sub.id === subkriteriaId)?.nilai ?? 0
            }
            
            if (!maxValue[kriteriaId] || nilai > maxValue[kriteriaId]) {
                maxValue[kriteriaId] = nilai
            
            }
        })
    })

    return maxValue
}


const getMin = (alternatif: AlternatifPenilaian[], subKriteria: subKriteria[], kriteria:Kriteria[]) => {
    const minValue: { [kriteriaId: number]: number } = {}

    alternatif.forEach(alternatif => {
        alternatif.penilaian.forEach(penilaian => {
            const { kriteriaId, subkriteriaId } = penilaian;
            const kriteriaName = kriteria.find(k => k.id === kriteriaId)?.nama
            let nilai: number;
            switch(kriteriaName) {
                case 'Kehadiran':
                case 'Masa Kerja':
                     nilai = penilaian.nilai ?? 0
                    break;
                default:
                     nilai = subKriteria.find(sub => sub.id === subkriteriaId)?.nilai ?? 0
            }

            if (!minValue[kriteriaId] || nilai < minValue[kriteriaId]) {
                minValue[kriteriaId] = nilai
            }
        })
    })

    return minValue
}

const getNilai = (subId: number, subkriteria: subKriteria[]) => {
    return subkriteria.find(sub => sub.id === subId)?.nilai ?? 0
}

export const normalisasi = (alternatif: AlternatifPenilaian[], kriterias: KriteriaSubKriteria[]) => {

    const subkriteria = kriterias.flatMap(k => {
       return k.subkriteria
    })

    const kriteria = kriterias.map(({ subkriteria, ...kriteria }) => kriteria);

 

    const maxValue = getMax(alternatif, subkriteria, kriteria)
    const minValue = getMin(alternatif, subkriteria, kriteria)
    
    
    const ternormalisasi = alternatif.map(alternatif => ({
        ...alternatif,
        penilaian: alternatif.penilaian.map(penilaian => {
            const criteria = kriterias.find(k => k.id === penilaian.kriteriaId)
            if (!criteria) {
                throw new Error('Something went wrong')
            }

            let normalisasi: number
            const kriteriaName = kriteria.find(k => k.id === penilaian.kriteriaId)?.nama
            let nilai;
            switch(kriteriaName) {
                case 'Kehadiran':
                case 'Masa Kerja':
                    nilai = penilaian.nilai ?? 0
                    break;
                default:
                    nilai = getNilai(penilaian.subkriteriaId ?? 0, subkriteria)
            }
            

            switch (criteria.jenis) {
                case "Benefit":
                    normalisasi = nilai / maxValue[penilaian.kriteriaId];
                    break;
                case "Cost":
                    normalisasi = minValue[penilaian.kriteriaId] / nilai
                    break;
                default:
                    normalisasi = 0
                    break;
            }

            return {
                ...penilaian,
                nilai: Number.isInteger(normalisasi) ? normalisasi : parseFloat(normalisasi.toFixed(3))
            }
        })
    }))

    return ternormalisasi
}

export const getPreferensi = (penilaian : rPenilaian[], kriteria: KriteriaSubKriteria[]) => {

    const nilai = penilaian.reduce((acc, alternatif) => {
        const bobot = kriteria.find((kriteria) => alternatif.kriteriaId === kriteria.id)?.bobot
        const nilai = alternatif.nilai ?? 0

        return acc + (bobot? nilai * (bobot/100) : 0)
    }, 0)
    
    return Number.isInteger(nilai) ? nilai: nilai.toFixed(2)
}