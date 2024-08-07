import { prisma } from "@/lib/prisma";
import { Alternatif, Penilaian, Kriteria, subKriteria } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

type AlternatifPenilaian = Alternatif & {
    penilaian: Penilaian[]
}

type KriteriaSubKriteria = Kriteria & {
    subkriteria: subKriteria[];
};

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
            }, orderBy: { id: 'asc' }
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

// export const getPenilaianById = async(id: number) => {
//     try {
//         const 
//     } catch (error) {
        
//     }
// }

// export const getPenilaian = async () => {
//     try {
//         const nilai = await prisma.penilaian.findMany()
//         return nilai
//     } catch (error) {
//         throw new Error("Failed to fetch nilai data.")
//     }
// }



// Perhitungan Metode SAW

const getMax = (alternatif: AlternatifPenilaian[]) => {
    const maxValue: { [kriteriaId: number]: number } = {}
    alternatif.forEach(alternatif => {
        alternatif.penilaian.forEach(penilaian => {
            const { kriteriaId, nilai } = penilaian;
            if (!maxValue[kriteriaId] || nilai > maxValue[kriteriaId]) {
                maxValue[kriteriaId] = nilai
            }
        })
    })

    return maxValue
}

const getMin = (alternatif: AlternatifPenilaian[]) => {
    const minValue: { [kriteriaId: number]: number } = {}

    alternatif.forEach(alternatif => {
        alternatif.penilaian.forEach(penilaian => {
            const { kriteriaId, nilai } = penilaian;
            if (!minValue[kriteriaId] || nilai < minValue[kriteriaId]) {
                minValue[kriteriaId] = nilai
            }
        })
    })

    return minValue
}

export const normalisasi = (alternatif: AlternatifPenilaian[], kriteria: KriteriaSubKriteria[]) => {
    const maxValue = getMax(alternatif)
    const minValue = getMin(alternatif)

    const ternormalisasi = alternatif.map(alternatif => ({
        ...alternatif,
        penilaian: alternatif.penilaian.map(penilaian => {
            const criteria = kriteria.find(k => k.id === penilaian.kriteriaId)
            if (!criteria) {
                throw new Error('Something went wrong')
            }

            let normalisasi: number
            
            switch (criteria.jenis) {
                case "Benefit":
                    normalisasi = penilaian.nilai / maxValue[penilaian.kriteriaId];
                    break;
                case "Cost":
                    normalisasi = minValue[penilaian.kriteriaId] / penilaian.nilai
                    break;
                default:
                    normalisasi = penilaian.nilai
                    break;
            }

            return {
                ...penilaian,
                nilai: Number.isInteger(normalisasi) ? normalisasi : parseFloat(normalisasi.toFixed(2))
            }
        })
    }))

    return ternormalisasi
}

export const getPreferensi = (penilaian : Penilaian[], kriteria: KriteriaSubKriteria[]) => {
    const nilai = penilaian.reduce((acc, alternatif) => {
        const bobot = kriteria.find((kriteria) => alternatif.kriteriaId === kriteria.id)?.bobot

        return acc + (bobot? alternatif.nilai * bobot : 0)
    }, 0)

    return Number.isInteger(nilai) ? nilai: nilai.toFixed(2)
}