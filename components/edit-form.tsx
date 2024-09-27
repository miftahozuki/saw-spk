"use client"

import { SubmitButton, UpdateButton } from "@/components/button";
import { Icons } from "@/components/Icon";
import { BackButton } from "@/components/back-button";
import { KriteriaSubKriteria, AlternatifPenilaian } from "@/utils/type";
import type {
  Alternatif,
  Kriteria,
  Penilaian,
  subKriteria,
} from "@prisma/client";
import {
  updateAlternatif,
  updateKriteria,
  updateSubKriteria,
  updatePenilaian,
} from "@/lib/action";
import { useFormState } from "react-dom";

export const EditAlternatif =  ({
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

export const EditKriteria =  ({ kriteria, totalBobot }: { kriteria: Kriteria, totalBobot: number }) => {
  const bobot = totalBobot - kriteria.bobot
  const UpdateKriteriaWithId = updateKriteria.bind(null, bobot, kriteria.id);
  const [state, update] = useFormState( UpdateKriteriaWithId, null)
  
  
  return (
    <>
      <form action={update}>
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
              required
            />
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
              required
            />
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
              className={`form-control ${state?.message ? 'is-invalid' : ''}`}
              name="bobot"
              placeholder="Masukkan Bobot"
              defaultValue={kriteria.bobot}
              required
            />
            <div className="invalid-feedback">{state?.message}</div>
          </div>
          <div className="col-md">
            <div className="form-label">
              <i className="bi bi-envelope-at-fill me-2" />
              Jenis Kriteria
            </div>
            <select
              className="form-select"
              name="jenis"
              defaultValue={kriteria.jenis}
            >
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

export const EditSubKriteria =  ({
  subkriteria,
}: {
  subkriteria: subKriteria;
}) => {
  const UpdateSubKriteriaWithId = updateSubKriteria.bind(null, subkriteria.id);
  return (
    <>
      <form action={UpdateSubKriteriaWithId}>
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
              defaultValue={subkriteria.nama}
              required
            />
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
              defaultValue={subkriteria.nilai}
              required
            />
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

export const EditPenilaian = ({ id,
  alternatif,
  kriteria,
}: {
  id: number
  alternatif: AlternatifPenilaian;
  kriteria: KriteriaSubKriteria[];
}) => {

  const updateNilai = updatePenilaian.bind(null, id)

  const convertMS = (x: number | null | undefined) => {
    if(!x) {
      return ''
    }
    return (x - 5) / 3 + 1
  }

  return (
    <>
      <form action={updateNilai}>
        {kriteria.map((kriteria) => (
          // <div className="row g-3 mt-2">

          <div key={kriteria.id} className="col-md mb-3">
            <div className="form-label">
              <i className="bi bi-envelope-at-fill me-2" />
              {kriteria.nama}
            </div>
            {
              kriteria.nama == 'Masa Kerja' ? (
                <div className="input-group mb-2">
                  <input name={`${alternatif.penilaian.find(p => p.kriteriaId === kriteria.id)?.id ?? kriteria.id}`} type="number" className="form-control" defaultValue={convertMS(alternatif.penilaian.find((nilai) => nilai.kriteriaId === kriteria.id)?.nilai)} data-kriteria={kriteria.nama} required/>
                  <input type="hidden" name={`id-${alternatif.penilaian.find(p => p.kriteriaId === kriteria.id)?.id ?? kriteria.id}`} value={kriteria.nama}/>
                  <span className="input-group-text">
                    Tahun
                  </span>
                </div>
              ) : (
                <select
                  className="form-select"
                  // name={`${kriteria.id}`}
                  name={`${alternatif.penilaian.find(p => p.kriteriaId === kriteria.id)?.id ?? kriteria.id}`}
                  defaultValue={
                    alternatif.penilaian.find(
                      (nilai) => nilai.kriteriaId === kriteria.id
                    )?.subkriteriaId ?? 'default'
                  }
                >
                  <option value={'default'} disabled>Belum di nilai</option>
                  {kriteria.subkriteria.map((subkriteria) => (
                    <option key={subkriteria.id} value={subkriteria.id}>
                      {subkriteria.nama}
                    </option>
                  ))}
                </select>
              )
            }
            <input type="hidden" name={`id-${alternatif.penilaian.find(p => p.kriteriaId === kriteria.id)?.id ?? kriteria.id}`} value={kriteria.nama}/>
          </div>

        ))}

        <div className=" bg-transparent mt-4">
          <div className="btn-list justify-content-between">
            <BackButton />
            <UpdateButton />
          </div>
        </div>
      </form>
    </>
  );
};
