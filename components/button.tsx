"use client";

import Link from "next/link";
import { Icons } from "@/components/Icon";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import PdfTemplate from "./template-pdf";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {logout} from "@/lib/action"

interface dataPrint {
  rank: number
  nama: string
  score: string | number
}

export const AddButton = ({ href }: { href: string }) => {
  return (
    <>
      <Link href={href} className="btn btn-primary d-none d-sm-inline-block">
      <Icons.add size={20}/> Tambah
      </Link>
      <Link href={href} className="btn btn-primary d-sm-none btn-icon">
        <Icons.add size={20} />
      </Link>
    </>
  );
};

export const EditButton = ({ id, href }: { id: number; href: string }) => {
  return (
    <Link href={`${href}/${id}`} className="btn btn-outline-success">
      <small>Edit</small>
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
      <small>Hapus</small>
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
      <Icons.simpan className="me-2" size={20}/>
      <small>Simpan</small>
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
      <Icons.simpan className="me-2" size={20}/>
      <small>Ubah</small>
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
  
  return (
    <>
      <button className="btn btn-primary" onClick={handlePrint} disabled={isPrinting}>
        <Icons.cetak className="me-2" size={20} />
        {isPrinting ? <span className="animated-dots"></span> : 'Cetak'}
      </button>
      <PdfTemplate ref={ref} data={data}/>
    </>
  );
};

export const InputNilaiButton = ({hidden, id}:{hidden:boolean, id:number}) => {
  const display = hidden ? 'd-none' : ''

  return (
  <Link href={`/admin/penilaian/add/${id}`} className={`btn btn-outline-primary ${display}`}>
    <Icons.add className="me-1" size={20}/> <small>Input</small>
  </Link>
  )
}

export const EditNilaiButton = ({hidden, id}:{hidden:boolean, id:number}) => {
  const display = hidden ? 'd-none' : ''

  return (
  <Link href={`/admin/penilaian/edit/${id}`} className={`btn btn-outline-success ${display}`}>
    <Icons.edit className="me-2" size={20}/>
    <small>Edit</small>
  </Link>
  )
}

export const ClockButton = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const Clock = (date : Date) => {
    const jam = String(date.getHours()).padStart(2, '0')
    const menit = String(date.getMinutes()).padStart(2, '0')
    const detik = String(date.getSeconds()).padStart(2, '0')

    return `${jam} : ${menit} : ${detik}`
  }

  return (
    <div className="btn">
      <span suppressHydrationWarning>{Clock(time)}</span>
    </div>
  )
}

export const LoginButton = () => {
  const {pending} = useFormStatus()

  return (
    <button disabled={pending} type="submit" className="btn btn-primary w-100">
      {pending ? 'Go...' : 'Go'}
    </button>
  )
}

export const LogoutButton = () => {

  return (
    <button className="dropdown-item" onClick={() => logout()}>
      Logout
    </button>
  )
}
