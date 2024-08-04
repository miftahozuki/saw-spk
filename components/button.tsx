"use client"

import Link from "next/link";
import { Icons } from "@/components/Icon";
import { deleteAlternatif, deleteKriteria, deleteSubKriteria } from "@/lib/action";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

export const AddButton = ({href}: {href:string}) => {

  return (
    <>
      <Link
        href={href}
        className="btn btn-primary d-none d-sm-inline-block"
      >
        <Icons.add stroke={1} /> Tambah
      </Link>
      <Link
        href={href}
        className="btn btn-primary d-sm-none btn-icon">
        <Icons.add stroke={1} />
      </Link>
    </>
  );
};

export const EditButton =  ({ id, href }: { id: number, href: string }) => {
  
  return (
    <Link href={`${href}/${id}`} className="btn btn-outline-success">
      Edit
    </Link>
  );
};

export const DeleteButton = ({id, aksi}:{id:number, aksi:string}) => {
  let Delete
  if (aksi === 'alternatif') {
    Delete = deleteAlternatif.bind(null, id)
  } else if(aksi === 'kriteria') {
    Delete = deleteKriteria.bind(null, id)
  } else if(aksi == 'subkriteria') {
    Delete = deleteSubKriteria.bind(null, id)
  }

  const {pending} = useFormStatus()  
  const classname = clsx("btn btn-outline-danger", {
    "btn btn-outline-danger btn-loading" : pending
  })

  return (
    <form action={Delete}>
    <button
      className={classname}>
      Hapus
    </button>
    </form>
  );
};

export const SubmitButton = () => {
  const {pending} = useFormStatus()  
  const classname = clsx("btn btn-primary", {
    "btn btn-primary btn-loading" : pending
  })

  return (
    <button type="submit" className={classname}>
      <Icons.simpan className="me-2"/>
      Simpan
    </button>
  );
};

export const UpdateButton = () => {
  const {pending} = useFormStatus()  
  const classname = clsx("btn btn-primary", {
    "btn btn-primary btn-loading" : pending
  })

  return (
    <button type="submit" className={classname}>
      <Icons.simpan className="me-2"/>
      Ubah
    </button>
  );
};

