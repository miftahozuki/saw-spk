import {Icons} from '@/components/Icon'
import { AddButton } from '@/components/button';
import AlternatifTable from '@/components/alternatif-table'

export default function AlternatifPage() {
  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              {/* Page pre-title */}
              <h2 className="page-title">
                <Icons.alternatif className='me-2'/>
                Data Alternatif
              </h2>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <AddButton/>
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
                    Daftar Data Alternatif
                  </h3>
                </div>
                  <AlternatifTable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
