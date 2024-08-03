"use client";

import { Alternatif, Kriteria, Penilaian, subKriteria } from "@prisma/client";
import { Icons } from "./Icon";
import { normalisasi } from "@/lib/data";
import { useEffect, useState } from "react";

type AlternatifPenilaian = Alternatif & {
  penilaian: Penilaian[];
};

type KriteriaSubKriteria = Kriteria & {
  subkriteria: subKriteria[];
};

export const MatriksNormalisasiTabel = ({alternatif,kriteria,}: {
  alternatif: AlternatifPenilaian[];
  kriteria: KriteriaSubKriteria[];
}) => {
  const [r, setR] = useState(alternatif);

  useEffect(() => {
    const result = normalisasi(alternatif, kriteria);
    setR(result);
  }, [alternatif]);

  return (
    <>
      <div key={1} className="card mb-5">
        <div className="card-header">
          <h3 className="card-title text-primary me-3">
            <Icons.tabel className="me-2" />
            Matriks Ternormalisasi (R)
          </h3>
        </div>
        <div className="table-responsive mx-4 mt-3">
          <table className="table table-vcenter table-nowrap">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  NO
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
                    <td key={kriteria.id}>
                      {
                        alternatif.penilaian.find(
                          (penilaian) => penilaian.kriteriaId === kriteria.id
                        )?.nilai
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
