"use server";
import { signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { JenisKriteria } from "@prisma/client";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema } from "./zod";

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

export const updatePenilaian = async (id: number,formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const penilaian = Object.keys(data).map((key) => ({
    id: key,
    alternatif: id,
    subkriteriaId: Number(data[key])
  }))

  console.log(penilaian);

  try {
    for (const data of penilaian) {
        await prisma.penilaian.upsert({
            where: {
              id: data.id,
            },
            create: {
              kriteriaId: isNaN(Number(data.id)) ? 0 : Number(data.id),
              alternatifId: data.alternatif,
              subkriteriaId: data.subkriteriaId
            },
            update: {
              subkriteriaId: data.subkriteriaId
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

export const getUserByUsername = async(username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      }
    })
    return user

  } catch (error) {
    console.error(error)
    return null

  }
}

export const login = async(prevState: unknown, formData: FormData) => {
 const data = {
  username: formData.get("username"),
  password: formData.get("pw"),
  role: 'Admin',
  redirectTo: "/admin/dashboard"
 }

 const validatedData = loginSchema.safeParse(data)
 if(!validatedData.success) {
  return {
    Error: {
      auth: undefined,
      message: validatedData.error.flatten().fieldErrors
    }
  }
 }

 try {
  await signIn("credentials", validatedData.data)
  
 } catch (error) {
   
   if (error instanceof AuthError) {
    switch (error.type) {
      case "CredentialsSignin":
        return { Error: {auth: "Username atau Password salah!"}};
      default:
        return {Error: {auth: "something went wrong!"}}
    }
  }
  throw error
 }
 
revalidatePath("/login")
}

export const logout = async() => {
  await signOut({
    redirectTo: "/login"
  })
  revalidatePath("/login")

}