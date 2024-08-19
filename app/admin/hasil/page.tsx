import { Icons } from "@/components/Icon"
import { PrintButton } from "@/components/button"
import { PerankinganTable } from "@/components/perankingan-table"
import { SkeletonTablePerankingan } from "@/components/skeleton"
import { getalternatifs, getKriteria, normalisasi, getPreferensi } from "@/lib/data"
import { Penilaian } from "@prisma/client"
import { Suspense } from "react"

const HasilPage = async() => {
  const alternatifs = await getalternatifs();
  const kriteria = await getKriteria();
  const r = normalisasi(alternatifs, kriteria);

  const nilai = (nilai: Penilaian[]) => {
    
      const result = getPreferensi(nilai, kriteria);
      return result;
  };

  const rankedAlternatifs = r
      .map((alternatif) => ({
          id: alternatif.id,
          nama: alternatif.nama,
          score: nilai(alternatif.penilaian),
      }))
      .sort((a, b) => Number(b.score) - Number(a.score))
      .map((alternatif, idx) => ({
          ...alternatif,
          rank: idx + 1,
      }));

  return (
    <>
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* Page pre-title */}
            <h2 className="page-title">
              <Icons.hasil className='me-2'/>
              Data Hasil Akhir
            </h2>
          </div>
          {/* Page title actions */}
          <div className="col-auto ms-auto d-print-none">
            <div className="btn-list">
              <PrintButton data={rankedAlternatifs}/>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Page body */}
    <div className="page-body">
      <div className="container-xl">
        <div className="row row-cards">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title text-primary me-3">
                  <Icons.tabel className='me-2'/>
                  Hasil Perankingan
                </h3>
              </div>
              <Suspense fallback={<SkeletonTablePerankingan/>}>
                <PerankinganTable alternatifs={rankedAlternatifs}/>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default HasilPage
