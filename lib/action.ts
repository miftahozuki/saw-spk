"use server";
import { prisma } from "@/lib/prisma";
import { JenisKriteria } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveAlternatif = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  try {
    await prisma.alternatif.create({
      data: {
        nama: data.nama.toString(),
      },
      
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to add alternatif." };
  }
  
  revalidatePath("admin/alternatif");
  redirect("/admin/alternatif");
};

export const deleteAlternatif = async (id: number) => {
  console.log(id);

  try {
    await prisma.alternatif.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to delete alternatif" };
  }

  revalidatePath("/admin/alternatif");
};

export const updateAlternatif = async (id: number, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  try {
    await prisma.alternatif.update({
      data: {
        nama: data.nama.toString(),
      },
      where: { id },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to update alternatif." };
  }

  revalidatePath("admin/alternatif");
  redirect("/admin/alternatif");
};

export const saveKriteria = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  try {
    await prisma.kriteria.create({
      data: {
        kode: data.kode.toString(),
        nama: data.kriteria.toString(),
        bobot: parseFloat(data.bobot.toString()),
        jenis: data.jenis.toString() as JenisKriteria,
      },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to cretate kriteria." };
  }

  revalidatePath("/admin/kriteria");
  redirect("/admin/kriteria");
};

export const updateKriteria = async (id: number, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  try {
    await prisma.kriteria.update({
      data: {
        kode: data.kode.toString(),
        nama: data.kriteria.toString(),
        bobot: parseFloat(data.bobot.toString()),
        jenis: data.jenis.toString() as JenisKriteria,
      },
      where: { id },
    });
  } catch (error) {
    console.error(error)
    throw new Error("Failed to update kriteria");
  }
  revalidatePath("/admin/kriteria");
  redirect("/admin/kriteria");
};

export const deleteKriteria = async (id: number) => {
  try {
    await prisma.kriteria.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to delete kriteria." };
  }

  revalidatePath("/admin/kriteria");
  redirect("/admin/kriteria");
};

export const saveSubKriteria = async (id: number, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  

  try {
    await prisma.subKriteria.create({
      data: {
        nama: data.nama.toString(),
        nilai: Number(data.nilai),
        kriteriaId: id,
      },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to add subkritria." };
  }

  revalidatePath("/admin/kriteria/subkriteria");
  redirect("/admin/kriteria/subkriteria");
};

export const deleteSubKriteria = async (id: number) => {
  try {
    await prisma.subKriteria.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to delete sub kriteria." };
  }

  revalidatePath("/admin/kriteria/subkriteria");
  redirect("/admin/kriteria/subkriteria");
};

export const updateSubKriteria = async (id: number, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  try {
    await prisma.subKriteria.update({
      data: {
        nama: data.nama.toString(),
        nilai: Number(data.nilai),
      },
      where: { id },
    });
  } catch (error) {
    console.error(error)
    return { message: "Failed to update sub kriteria" };
  }

  revalidatePath("/admin/kriteria/subkriteria");
  redirect("/admin/kriteria/subkriteria");
};

export const inputPenilaian = async (id: number, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const penilaian = Object.keys(data).map((key) => ({
    kriteriaId: Number(key),
    subkriteriaId: Number(data[key]),
    alternatifId: id,
  }));

  try {
    await prisma.penilaian.createMany({ data: penilaian });
  } catch (error) {
    console.error(error)
    return { message: "Failed to input nilai alternatif." };
  }

  revalidatePath("/admin/penilaian");
  redirect("/admin/penilaian");
};

export const updatePenilaian = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const penilaian = Object.keys(data).map((key) => ({
    id: Number(key),
    subkriteriaId: Number(data[key])
  }))

  console.log(penilaian);

  try {
    for (const p of penilaian) {
        await prisma.penilaian.update({
            where: {id: p.id},
            data: {
                subkriteriaId: p.subkriteriaId
            }
        })
    }
  } catch (error) {
    console.error(error)
    return { message: "Failed to edit nilai alternatif." };
  }

  revalidatePath("/admin/penilaian")
  redirect("/admin/penilaian")
};
