import { Icons } from "@/components/Icon"
import { BobotTable } from "@/components/bobot-table"
import { MatriksKeputusanTable } from "@/components/matrik-keputusan-table"
import { MatriksNormalisasiTabel } from "@/components/matrik-normalisasi-table"
import { getKriteria, getalternatifs } from "@/lib/data"

const PerhitunganPage = async() => {
  const alternatif = await getalternatifs()
  const kriteria = await getKriteria()
  
  return (
    <>
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* Page pre-title */}
            <h2 className="page-title">
              <Icons.perhitungan className='me-2'/>
              Data Perhitungan
            </h2>
          </div>
        </div>
      </div>
    </div>

    {/* Page body */}
    <div className="page-body">
      <div className="container-xl">
        <div className="row row-cards">
          <div className="col-12">
            <MatriksKeputusanTable alternatif={alternatif} kriteria={kriteria}/>
            <BobotTable kriteria={kriteria}/>
            <MatriksNormalisasiTabel alternatif={alternatif} kriteria={kriteria}/>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default PerhitunganPage
