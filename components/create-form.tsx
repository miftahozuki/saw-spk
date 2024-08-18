import { SubmitButton } from "@/components/button";
import { Icons } from "@/components/Icon";
import { BackButton } from "@/components/back-button";
import { inputPenilaian, saveAlternatif, saveKriteria, saveSubKriteria } from "@/lib/action";
import { Kriteria, subKriteria } from "@prisma/client";

type KriteriaSubKriteria = Kriteria &{
  subkriteria: subKriteria[]
}

export const CreateAlternatif = async () => {
  return (
    <div className="row align-items-center">
      <form action={saveAlternatif}>
        <div className="col-md">
          <div className="form-label">
            <Icons.nama className="me-2" />
            Nama Alternatif
          </div>
          <input
            type="text"
            className="form-control mt-4"
            name="nama"
            placeholder="Masukkan Nama"
            required
          />
        </div>
        <div className=" bg-transparent mt-4">
          <div className="btn-list justify-content-between">
            <BackButton />
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
};

export const CreateKriteria = async () => {
  return (
    <>
    <form action={saveKriteria}>
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
          required/>
        </div>
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-envelope-at-fill me-2" />
            Jenis Kriteria
          </div>
          <select className="form-select" name="jenis">
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

export const CreateSubKriteria = async ({id}: {id:number}) => {
  const AddSubKriteria = saveSubKriteria.bind(null, id)

  return (
    <>
    <form action={AddSubKriteria}>
      <div className="row g-3">
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-card-list me-2" />
            Nama Sub Kriteria
          </div>
          <input
            type="text"
            className="form-control"
            name="nama"
            placeholder="Masukkan Nama"
          required/>
        </div>
        <div className="col-md">
          <div className="form-label">
            <i className="bi bi-at me-1" />
            Nilai
          </div>
          <input
            type="number"
            className="form-control"
            name="nilai"
            placeholder="Masukkan Nilai"
          required/>
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

export const CreatePenilaian = ({kriteria, id}:{kriteria: KriteriaSubKriteria[], id: number}) => {
  const inputNilai = inputPenilaian.bind(null, id)

  return (
    <>
    <form action={inputNilai}>
      {kriteria.map((kriteria) => (
        <div key={kriteria.id} className="col-md mb-3">
          <div className="form-label">
            <i className="bi bi-envelope-at-fill me-2" />
            {kriteria.nama}
          </div>
          <select
            className="form-select"
            name={`${kriteria.id}`}
          >
            {kriteria.subkriteria.map((subkriteria) => (
              <option key={subkriteria.id} value={subkriteria.id}>
                {subkriteria.nama}
              </option>
            ))}
          </select>
        </div>
      ))}
      <div className=" bg-transparent mt-4">
        <div className="btn-list justify-content-between">
          <BackButton />
          <SubmitButton />
        </div>
      </div>
    </form>
  </>
  )
}
