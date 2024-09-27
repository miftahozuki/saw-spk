import { AlternatifPenilaian, KriteriaSubKriteria } from "@/utils/type";
import { Icons } from "./Icon";

export const MatriksKeputusanTable = ({
  alternatif,
  kriteria,
}: {
  alternatif: AlternatifPenilaian[];
  kriteria: KriteriaSubKriteria[];
}) => {

  const getSubId = (alternatif: AlternatifPenilaian, kriteriaId: number) => {
    const penilaian = alternatif.penilaian.find(p => p.kriteriaId === kriteriaId)
    return penilaian?.subkriteriaId
    
  }

  return (
    <>
      <div className="card mb-5">
        <div className="card-header">
          <h3 className="card-title text-primary me-3">
            <Icons.tabel className="me-2" />
            Matriks Keputusan (𝑥)
          </h3>
        </div>
        <div className="table-responsive mx-4 mt-3">
          <table id="tabel" className="table table-vcenter table-nowrap">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  NO
                </th>
                <th scope="col" className="text-center">
                  Nama Alternatif
                </th>
                {kriteria.map((kriteria) => (
                  <th key={kriteria.id}>{kriteria.kode}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {alternatif.map((alternatif, idx) => (
                <tr key={alternatif.id}>
                  <td className="text-center">{idx + 1}</td>
                  <td>{alternatif.nama}</td>
                  {kriteria.map((kriteria) => (
                    
                    <td key={kriteria.id}>
                      {
                       kriteria.nama === 'Masa Kerja' ? (
                        alternatif.penilaian.find((k) => k.kriteriaId === kriteria.id)?.nilai
                       ) : (
                        kriteria.subkriteria.find(sub => sub.id === getSubId(alternatif, kriteria.id))?.nilai
                       )
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
