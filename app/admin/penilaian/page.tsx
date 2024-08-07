import { Icons } from "@/components/Icon"
import { PenilaianTable } from "@/components/penilaian-table"

const PenilaianPage = () => {
  return (
    <>
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* Page pre-title */}
            <h2 className="page-title">
              <Icons.penilaian className='me-2'/>
              Data Penilaian
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
            <div className="card">
              <div className="card-header">
                <h3 className="card-title text-primary me-3">
                  <Icons.tabel className='me-2'/>
                  Daftar Data Penilaian
                </h3>
              </div>
              <PenilaianTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default PenilaianPage
