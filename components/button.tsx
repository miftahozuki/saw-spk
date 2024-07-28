import Link from "next/link";
import { Icons } from "@/components/Icon";
import { deleteAlternatif } from "@/lib/action";

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
        <Icons.add stroke={1} />
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

export const DeleteButton = ({id}:{id:number}) => {
  const DeleteAlternatifById = deleteAlternatif.bind(null, id);

  return (
    <form action={DeleteAlternatifById}>
    <button
      className="btn btn-outline-danger">
      Hapus
    </button>
    </form>
  );
};

export const CancelButton = () => {
  return (
    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
      Batal
    </button>
  );
};

export const SubmitButton = () => {
  return (
    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
      <i className="bi bi-floppy-fill me-2" />
      Simpan
    </button>
  );
};
