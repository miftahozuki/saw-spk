import { Icons } from "@/components/Icon"
import { CreateSubKriteria } from "@/components/create-form"
import { getKriteriaById } from "@/lib/data"
import { notFound } from "next/navigation"

const AddSubKriteriaPage = async({params}: {params:{id:string}}) => {
  const id = Number(params.id)
  const kriteria = await getKriteriaById(id)

  if(!kriteria) {
    notFound()
  }
  
  return (
    <>
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* <!-- Page pre-title --> */}
            <h2 className="page-title">
              <Icons.edit className="mx-2" />
              Tambah {kriteria.nama}
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
                    <CreateSubKriteria id={kriteria.id}/>
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

export default AddSubKriteriaPage
