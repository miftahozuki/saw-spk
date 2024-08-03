import { getKriteria } from "@/lib/data"
import { Icons } from "./Icon"
import { Kriteria, subKriteria } from "@prisma/client"

type KriteriaSubKriteria = Kriteria &{
  subkriteria: subKriteria[]
}

export const BobotTable = async({kriteria}:{kriteria:KriteriaSubKriteria[]}) => {

    
    return (
        <>
          <div key={1} className="card mb-5">
            <div className="card-header">
              <h3 className="card-title text-primary me-3">
                <Icons.tabel className="me-2" />
                Bobot Preferensi (W)
              </h3>
            </div>
            <div className="table-responsive mx-4 mt-3">
              <table className="table table-vcenter table-nowrap">
                <thead>
                  <tr>
                    {kriteria.map((kriteria) => (
                    <th key={kriteria.id} scope="col" className="text-center">
                      {kriteria.kode} ({kriteria.jenis})
                    </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    {kriteria.map((kriteria) => (
                        <td key={kriteria.id} className="text-center">{kriteria.bobot}</td>
                    ))}
                    </tr>
           
                </tbody>
              </table>
            </div>
          </div>
        </>
    )
}