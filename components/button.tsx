"use client";

import Link from "next/link";
import { Icons } from "@/components/Icon";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import PdfTemplate from "./template-pdf";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

interface dataPrint {
  rank: number
  nama: string
  score: string | number
}

export const AddButton = ({ href }: { href: string }) => {
  return (
    <>
      <Link href={href} className="btn btn-primary d-none d-sm-inline-block">
        <Icons.add stroke={1} /> Tambah
      </Link>
      <Link href={href} className="btn btn-primary d-sm-none btn-icon">
        <Icons.add stroke={1} />
      </Link>
    </>
  );
};

export const EditButton = ({ id, href }: { id: number; href: string }) => {
  return (
    <Link href={`${href}/${id}`} className="btn btn-outline-success">
      Edit
    </Link>
  );
};

export const DeleteButton = () => {
  const { pending } = useFormStatus();
  const classname = clsx("btn btn-outline-danger", {
    "btn btn-outline-danger btn-loading": pending,
  });

  return (
    <button type="submit" className={classname}>
      Hapus
    </button>
  );
};

export const SubmitButton = () => {
  const { pending } = useFormStatus();
  const classname = clsx("btn btn-primary", {
    "btn btn-primary btn-loading": pending,
  });

  return (
    <button type="submit" className={classname}>
      <Icons.simpan className="me-2" />
      Simpan
    </button>
  );
};

export const UpdateButton = () => {
  const { pending } = useFormStatus();
  const classname = clsx("btn btn-primary", {
    "btn btn-primary btn-loading": pending,
  });

  return (
    <button type="submit" className={classname}>
      <Icons.simpan className="me-2" />
      Ubah
    </button>
  );
};

export const PrintButton = ({data}: {data: dataPrint[]}) => {
  const ref = useRef(null)
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "Hasil Perankingan",
    onBeforePrint: () => setIsPrinting(true),
    onAfterPrint: () => setIsPrinting(false)
  })

  console.log(handlePrint);
  
  return (
    <>
      <button className="btn btn-primary" onClick={handlePrint} disabled={isPrinting}>
        <Icons.cetak className="me-2" />
        {isPrinting ? <span className="animated-dots"></span> : 'Cetak'}
      </button>
      <PdfTemplate ref={ref} data={data}/>
    </>
  );
};
