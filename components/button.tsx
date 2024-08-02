import Link from "next/link";
import { Icons } from "@/components/Icon";
import { deleteAlternatif, deleteKriteria, deleteSubKriteria } from "@/lib/action";

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

  return (
    <form action={Delete}>
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

