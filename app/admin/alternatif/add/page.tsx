import {Icons} from "@/components/Icon";
import { CreateAlternatif } from "@/components/create-form";

export const AddAlternatifPage = () => {
    return (
        <>
          <div className="page-header d-print-none">
            <div className="container-xl">
              <div className="row g-2 align-items-center">
                <div className="col">
                  {/* <!-- Page pre-title --> */}
                  <h2 className="page-title">
                    <Icons.edit className="mx-2" />
                    Tambah Alternatif
                  </h2>
                </div>
                {/* <!-- Page title actions --> */}
              </div>
            </div>
          </div>
    
          <div className="page-body">
            <div className="container-xl">
              <div className="row row-cards mb-6">
                <div className="col-12">
                  <div className="card">
                    <div className="container">
                      <div className="justify-content-center row g-3 mb-2">
                        <div className="col d-flex flex-column">
                          <div className="card-body">
                            <CreateAlternatif />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default AddAlternatifPage;