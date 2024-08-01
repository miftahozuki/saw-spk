import {prisma} from "@/lib/prisma";

export const getalternatifs = async() => {
    try {
        const alternatif = await prisma.alternatif.findMany({
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
        const kriteria = await prisma.kriteria.findMany();
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