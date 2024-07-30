import Link from "next/link";
import { Icons } from "@/components/Icon";
import { deleteAlternatif } from "@/lib/action";

export const AddButton = () => {
  return (
    <>
      <Link
        href="/admin/alternatif/add"
        className="btn btn-primary d-none d-sm-inline-block"
      >
        <Icons.add stroke={1} /> Tambah
      </Link>
      <Link
        href="/admin/alternatif/add"
        className="btn btn-primary d-sm-none btn-icon">
        <Icons.add stroke={1} />
      </Link>
    </>
  );
};

export const EditButton = ({id}:{id:string}) => {

  return (
    <Link href={`/admin/alternatif/edit/${id}`} className="btn btn-outline-success">
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
    <button type="submit" className="btn btn-primary">
      <Icons.simpan className="me-2"/>
      Simpan
    </button>
  );
};

export const UpdateButton = () => {
  return (
    <button type="submit" className="btn btn-primary">
      <Icons.simpan className="me-2"/>
      Ubah
    </button>
  );
};
