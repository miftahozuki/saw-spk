import { Icons } from "@/components/Icon"
import { EditSubKriteria } from "@/components/edit-form"
import { getKriteriaById, getSubKriteriaByID } from "@/lib/data"
import { notFound } from "next/navigation"

const UpdateSubKriteriaPage = async({params} : {params:{kriteriaId: string, id: string}}) => {
    const id = Number(params.id)
    const subkriteria = await getSubKriteriaByID(id)
    
    if(!subkriteria) {
        notFound()
    }

    const kriteria = await getKriteriaById(subkriteria.kriteriaId)

  return (
    <>
    <div className="page-header d-print-none">
      <div className="container-xl">
        <div className="row g-2 align-items-center">
          <div className="col">
            {/* <!-- Page pre-title --> */}
            <h2 className="page-title">
              <Icons.edit className="mx-2" />
              Edit {kriteria?.nama}
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
                        <EditSubKriteria  subkriteria={subkriteria}/>
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

export default UpdateSubKriteriaPage
