"use client";

import { AlternatifPenilaian, KriteriaSubKriteria } from "@/utils/type";
import { Icons } from "./Icon";
import { normalisasi } from "@/lib/data";
import PerhitunganTabel from "./perhitungan-table";

export const MatriksNormalisasiTabel = ({alternatif,kriteria,}: {
  alternatif: AlternatifPenilaian[];
  kriteria: KriteriaSubKriteria[];
}) => {
  const r = normalisasi(alternatif, kriteria)

  return (
    <>
      <div className="card mb-5">
        <div className="card-header">
          <h3 className="card-title text-primary me-3">
            <Icons.tabel className="me-2" />
            Matriks Ternormalisasi (𝑟)
          </h3>
        </div>
        <div className="table-responsive mx-4 mt-3">
          <table id="tabel" className="table table-vcenter table-nowrap">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  No
                </th>
                <th scope="col" className="text-center">
                  Nama Alternatif
                </th>
                {kriteria.map((kriteria, idx) => (
                  <th key={kriteria.id}>{kriteria.kode}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {r.map((alternatif, idx) => (
                <tr key={alternatif.id}>
                  <td className="text-center">{idx + 1}</td>
                  <td>{alternatif.nama}</td>
                  {kriteria.map((kriteria) => (
                    <td key={kriteria.id}>{alternatif.penilaian.find(p => p.kriteriaId === kriteria.id)?.nilai}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <PerhitunganTabel alternatif={r} kriteria={kriteria}/>
    </>
  );
};
