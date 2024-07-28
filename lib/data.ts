import {prisma} from "@/lib/prisma";

export const getalternatifs = async() => {
    try {
        const alternatif = await prisma.alternatif.findMany();
        return alternatif;
    } catch (error) {
        throw new Error("Failed to fetch alternatif data ");
    }
}