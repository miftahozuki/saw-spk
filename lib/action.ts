"use server";
import {prisma} from "@/lib/prisma"
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