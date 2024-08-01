import { SubmitButton, UpdateButton } from "@/components/button";
import { Icons } from "@/components/Icon";
import { BackButton } from "@/components/back-button";
import type { Alternatif, Kriteria } from "@prisma/client";
import { updateAlternatif, updateKriteria } from "@/lib/action";

export const EditAlternatif = async ({
  alternatif,
}: {
  alternatif: Alternatif;
}) => {
  const UpdateAlternatifWithId = updateAlternatif.bind(null, alternatif.id);

  return (
    <div className="row align-items-center">
      <form action={UpdateAlternatifWithId}>
        <div className="col-md">
          <div className="form-label">
            <Icons.nama className="me-2" />
            Nama Alternatif
          </div>
          <input
            type="text"
            className="form-control mt-4"
            name="nama"
            defaultValue={alternatif.nama}
            placeholder="Masukkan Nama"
          />
        </div>
        <div className=" bg-transparent mt-4">
          <div className="btn-list justify-content-between">
            <BackButton />
            <UpdateButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export const EditKriteria = async ({
  kriteria}: {kriteria:Kriteria}) => {
    const UpdateKriteriaWithId = updateKriteria.bind(null, kriteria.id)
  return (
    <>
    <form action={UpdateKriteriaWithId}>
      <div className="row g-3">
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-card-list me-2" />
            Kode Kriteria
          </div>
          <input
            type="text"
            className="form-control"
            name="kode"
            placeholder="Masukkan Kode"
            defaultValue={kriteria.kode}
          required/>
        </div>
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-at me-1" />
            Nama Kriteria
          </div>
          <input
            type="text"
            className="form-control"
            name="kriteria"
            placeholder="Masukkan Kriteria"
            defaultValue={kriteria.nama}
          required/>
        </div>
      </div>
      <div className="row g-3 mt-2">
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-envelope-at-fill me-2" />
            Bobot Kriteria
          </div>
          <input
            type="text"
            className="form-control"
            name="bobot"
            placeholder="Masukkan Bobot"
            defaultValue={kriteria.bobot}
          required/>
        </div>
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-envelope-at-fill me-2" />
            Jenis Kriteria
          </div>
          <select className="form-select" name="jenis" defaultValue={kriteria.jenis}>
            <option>Benefit</option>
            <option>Cost</option>
          </select>
        </div>
      </div>
      <div className=" bg-transparent mt-4">
        <div className="btn-list justify-content-between">
          <BackButton />
          <SubmitButton />
        </div>
      </div>
      </form>
    </>
  );
};
