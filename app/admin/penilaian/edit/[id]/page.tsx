import { Icons } from "@/components/Icon"
import { EditPenilaian } from "@/components/edit-form"
import { getAlternatifById, getKriteria } from "@/lib/data"
import { notFound } from "next/navigation"

const UpdatePenilaianPage = async({params}:{params:{id: string}}) => {
  const id = Number(params.id)
  const alternatif = await getAlternatifById(id)
  const kriteria = await getKriteria()

  if(!alternatif) {
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
              Edit Penilaian
            </h2>
          </div>
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
                    <EditPenilaian id={id} alternatif={alternatif} kriteria={kriteria}/>
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

export default UpdatePenilaianPage
