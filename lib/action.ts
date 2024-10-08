"use server";
import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { JenisKriteria, Kriteria } from "@prisma/client";
import { AuthError, User } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema } from "./zod";
import { errorMessage } from "@/utils/type";

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
    console.error(error);
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
    console.error(error);
    return { message: "Failed to delete alternatif" };
  }

  revalidatePath("/admin/alternatif");
};

export const updateUser = async (id: string, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  try {
    await prisma.user.update({
      data: {
        name: data.name.toString(),
        email: data.email.toString(),
        username: data.username.toString(),
      },
      where: { id },
    });
  } catch (error) {
    console.error(error);
    return { message: "Failed to update alternatif." };
  }

  return { message: "success" };
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
    console.error(error);
    return { message: "Failed to update alternatif." };
  }

  revalidatePath("admin/alternatif");
  redirect("/admin/alternatif");
};

export const saveKriteria = async (bobot: number, prevState:unknown ,formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  if(bobot + Number(data.bobot) > 100) {
    
    return {message: "Bobot lebih dari 100%, harap kurangi bobot dari kriteria lain."}
  }
  

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
    console.error(error);
    return { message: "Failed to create kriteria." };
  }

  revalidatePath("/admin/kriteria");
  redirect("/admin/kriteria");
};

export const updateKriteria = async (bobot: number, id: number, prevState:unknown ,formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  if(bobot + Number(data.bobot) > 100) {
    return {message: "Bobot lebih dari 100%, harap kurangi bobot dari kriteria lain."}
  }
  
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
    console.error(error);
    return {message: "Failed to update kriteria"};
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
    console.error(error);
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
    console.error(error);
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
    console.error(error);
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
    console.error(error);
    return { message: "Failed to update sub kriteria" };
  }

  revalidatePath("/admin/kriteria/subkriteria");
  redirect("/admin/kriteria/subkriteria");
};

const convertMS = (x: number) => {
  return (x - 1) * 3 + 5;
};

export const inputPenilaian = async (
  kriteria: Kriteria[],
  id: number,
  prevState: unknown,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries());
  const namaKriteria = (kId: number) => kriteria.find((k) => k.id === kId)?.nama;

  const penilaian = Object.keys(data).map((key) => {
    const nilai = Number(data[key])
    const k = namaKriteria(Number(key))

    return {
      kriteriaId: Number(key),
      subkriteriaId: !(k === "Masa Kerja" || k === "Kehadiran") ? nilai: null,
      nilai: k === "Masa Kerja" ? convertMS(nilai) : k === "Kehadiran" ? nilai : null,
      alternatifId: id,
    };
  });

  const nilai = penilaian.filter((item) => !isNaN(item.kriteriaId));

  const kehadiran = nilai.find(k => k.kriteriaId === kriteria.find(k => k.nama === 'Kehadiran')?.id)
  if(kehadiran && kehadiran.nilai !== null && kehadiran.nilai > 100) {
    return {
      message: {Kehadiran: "Kehadiran maksimal adalah 100%."} as errorMessage
    } 
  }
  

  try {
    await prisma.penilaian.createMany({ data: nilai });
  } catch (error) {
    console.error(error);
    return { message: {Header: "Failed to input nilai alternatif."} as errorMessage };
  }

  revalidatePath("/admin/penilaian");
  redirect("/admin/penilaian");
};

// ternary ?
export const updatePenilaian = async (id: number, prevState: unknown ,formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const penilaian = Object.keys(data)
    .filter((key) => !key.startsWith("id-"))
    .map((key) => {
      const kriteria = formData.get(`id-${key}`);

      return {
        id: key,
        nama: kriteria,
        alternatif: id,
        nilai: Number(data[key]),
      };
    });

  const kehadiran = penilaian.find(k => k.nama === 'Kehadiran')
  if(kehadiran && kehadiran.nilai > 100) {
    return {message:
      {Kehadiran: "Nilai maksimal kehadiran adalah 100%."} as errorMessage
    }
  }
  
  
  const updates = [];
  const creates = [];

  for (const data of penilaian) {
    const id = Number(data.id);

    if (isNaN(id)) {
      updates.push({
        id: { id: data.id },
        data: {
          alternatifId: data.alternatif,
          nilai: data.nama === "Masa Kerja" ? convertMS(data.nilai) : data.nama === "Kehadiran" ? data.nilai : null,
          subkriteriaId: !(data.nama === 'Masa Kerja' || data.nama === 'Kehadiran') ? data.nilai : null,
        },
      });
    } else {
      creates.push({
        kriteriaId: id,
        alternatifId: data.alternatif,
        nilai: data.nama === "Masa Kerja" ? convertMS(data.nilai) : data.nama === "Kehadiran" ? data.nilai : null,
        subkriteriaId: !(data.nama === 'Masa Kerja' || data.nama === 'Kehadiran') ? data.nilai : null,
      });
    }
  } 


  try {
    if (creates.length > 0) {
      await prisma.penilaian.createMany({ data: creates });
    }

    if (updates.length > 0) {
      await Promise.all(
        updates.map((update) =>
          prisma.penilaian.update({
            where: update.id,
            data: update.data,
          })
        )
      );
    }
  } catch (error) {
    console.error(error);
    return { message: {Header: "Failed to edit nilai alternatif."} };
  }

  revalidatePath("/admin/penilaian");
  redirect("/admin/penilaian");
};

export const getUserByUsername = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (prevState: unknown, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("pw"),
    role: "Admin",
    redirectTo: "/admin/dashboard",
  };

  const validatedData = loginSchema.safeParse(data);
  if (!validatedData.success) {
    return {
      Error: {
        auth: undefined,
        message: validatedData.error.flatten().fieldErrors,
      },
    };
  }

  try {
    await signIn("credentials", validatedData.data);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { Error: { auth: "Username atau Password salah!" } };
        default:
          return { Error: { auth: "something went wrong!" } };
      }
    }
    throw error;
  }

  revalidatePath("/login");
};

export const logout = async () => {
  await signOut({
    redirectTo: "/login",
  });
  revalidatePath("/login");
};
