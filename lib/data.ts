import {prisma} from "@/lib/prisma";
import { Alternatif, Penilaian } from "@prisma/client";

type AlternatifPenilaian = Alternatif & {
    penilaian: Penilaian[]
}

export const getalternatifs = async() => {
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

export const getAlternatifById = async(id: number) => {
    try {
        const alternatif = await prisma.alternatif.findUnique({
            where: {id}
        });
        return alternatif;
    } catch (error) {
        throw new Error("Failed to fect alternatif data");
    }
};

export const getKriteria = async() => {
    try {
        const kriteria = await prisma.kriteria.findMany({
            select:{
                id: true,
                kode: true,
                nama: true,
                bobot: true,
                jenis: true,
                createdAt: true,
                updatedAt: true,
                subkriteria: true
            }, orderBy: {id: 'asc'}
        });
        return kriteria

    } catch (error) {
        throw new Error("Failed to fetch kriteria data")
    }
}

export const getKriteriaById = async(id: number) => {
    try {
        const kriteria = await prisma.kriteria.findUnique({
            where: {id}
        })
        return kriteria

    } catch (error) {
        throw new Error("Failed to fetch kriteria data.")
    }
}

export const getSubKriteriaByID = async(id: number) => {

    try {
        const subkriteria = await prisma.subKriteria.findUnique({
            where: {id}
        })
        return subkriteria

    } catch (error) {
        throw new Error("Failed to fetch subkriteria data.")
    }
}

export const getPenilaian = async() => {
    try {
       const nilai = await prisma.penilaian.findMany()
       return nilai
    } catch (error) {
        throw new Error("Failed to fetch nilai data.")   
    }
}

export const normalisasi = (alternatif: AlternatifPenilaian[]) => {
    console.log(alternatif);
    
}