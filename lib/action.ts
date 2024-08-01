"use server";
import {prisma} from "@/lib/prisma"
import { JenisKriteria } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveAlternatif = async(formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    
    try {
        await prisma.alternatif.create({
            data: {
                nama: data.nama.toString()
            }
        })
    } catch (error) {
        return {message: "Failed to add alternatif."}
    }
    
    revalidatePath("admin/alternatif");
    redirect("/admin/alternatif");
}

export const deleteAlternatif = async(id: number) => {
    console.log(id);
    
    try {
        await prisma.alternatif.delete({
            where: {id}
        })
    } catch (error) {
        return { message: "Failed to delete alternatif" }
    }

    revalidatePath("/admin/alternatif");
}

export const updateAlternatif = async(id: number, formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    
    try {
        await prisma.alternatif.update({
            data: {
                nama: data.nama.toString()
            }, where: {id}
        })
    } catch (error) {
        return {message: "Failed to update alternatif."}
    }

    revalidatePath("admin/alternatif");
    redirect("/admin/alternatif");
}

export const saveKriteria = async(formData: FormData) => {
    const data = Object.fromEntries(formData.entries())    

    try {
        await prisma.kriteria.create({
            data: {
                kode: data.kode.toString(),
                nama: data.kriteria.toString(),
                bobot: parseFloat(data.bobot.toString()),
                jenis: data.jenis.toString() as JenisKriteria

            }
        })
    } catch (error) {
        return {message: "Failed to cretate kriteria."}
    }

    revalidatePath("/admin/kriteria")
    redirect("/admin/kriteria")
}

export const updateKriteria = async(id: number, formData: FormData) => {
    const data = Object.fromEntries(formData.entries())

    try {
        await prisma.kriteria.update({
            data: {
                kode: data.kode.toString(),
                nama: data.kriteria.toString(),
                bobot: parseFloat(data.bobot.toString()),
                jenis: data.jenis.toString() as JenisKriteria
            }, where: {id}
        })
    } catch (error) {
        throw new Error("Failed to update kriteria")
    }
    revalidatePath("/admin/kriteria")
    redirect("/admin/kriteria")
}

export const deleteKriteria = async(id: number) => {
    
    try {
        await prisma.kriteria.delete({
            where: {id}
        })
    } catch (error) {
        return {message: "Failed to delete kriteria."}
    }

    revalidatePath("/admin/kriteria")
    redirect("/admin/kriteria")
}