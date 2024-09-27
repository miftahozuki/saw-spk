import { Icons } from "@/components/Icon";
import { CreateKriteria } from "@/components/create-form";
import { getKriteria } from "@/lib/data";

const AddKriteriaPage = async() => {
  const kriteria = await getKriteria()
  const totalBobot = kriteria.reduce((acc, k) => {
    return acc + (k.bobot) 
  }, 0)
  
    return (
        <>
        <div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                {/* <!-- Page pre-title --> */}
                <h2 className="page-title">
                  <Icons.edit className="mx-2" />
                  Tambah Kriteria
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
                        <CreateKriteria totalBobot={totalBobot}/>
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
    )
}

export default AddKriteriaPage;