import { Icons } from "@/components/Icon";
import AlternatifTable from "@/components/alternatif-table";
import { AddButton } from "@/components/button";
import KriteriaTable from "@/components/kriteria-table";

export default function KriteriaPage() {
    return(
        <>
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                {/* Page pre-title */}
                <h2 className="page-title">
                  <Icons.kriteria className='me-2'/>
                  Data Kriteria
                </h2>
              </div>
              {/* Page title actions */}
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <AddButton href="/admin/kriteria/add"/>
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
                  <KriteriaTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}