import { Icons } from "@/components/Icon";
import { AddButton } from "@/components/button";
import KriteriaTable from "@/components/kriteria-table";
import SubKriteriaTable from "@/components/sub-kriteria-table";

export default function SubKriteriaPage() {
    return (
        <>
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                {/* Page pre-title */}
                <h2 className="page-title">
                  <Icons.subkriteria className='me-2'/>
                  Data Sub Kriteria
                </h2>
              </div>
              {/* Page title actions */}
              {/* <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  <AddButton href="/admin/add"/>
                </div>
              </div> */}
            </div>
          </div>
        </div>
  
        {/* Page body */}
        <div className="page-body">
          <div className="container-xl">
          <div className="row row-cards">
            <div className="col-12">
                <SubKriteriaTable/>
            </div>
          </div>
          </div>
        </div>
      </>
    )
}