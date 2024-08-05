import { Icons } from "@/components/Icon"
import AlternatifTable from "@/components/alternatif-table"
import { AddButton, PrintButton } from "@/components/button"
import { PerankinganTable } from "@/components/perankingan-table"


const HasilPage = () => {
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
              <PrintButton/>
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
                <PerankinganTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default HasilPage
