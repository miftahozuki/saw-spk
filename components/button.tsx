import Link from "next/link";
import { Icons } from "@/components/Icon";

export const AddButton = () => {
  return (
    <>
      <Link
        href="#"
        className="btn btn-primary d-none d-sm-inline-block"
        data-bs-toggle="modal"
        data-bs-target="#add"
      >
        <Icons.add stroke={1} /> Tambah
      </Link>
      <Link
        href="#"
        className="btn btn-primary d-sm-none btn-icon"
        data-bs-toggle="modal"
        data-bs-target="#add"
        aria-label="Create new report"
      >
        <Icons.add stroke={1} /> Tambah
      </Link>
    </>
  );
};

export const EditButton = () => {
  return (
    <Link href="#" className="btn btn-outline-success">
      Edit
    </Link>
  );
};

export const DeleteButton = () => {
  return (
    <Link
      href="#"
      className="btn btn-outline-danger"
      data-confirm-delete="true"
    >
      Hapus
    </Link>
  );
};
