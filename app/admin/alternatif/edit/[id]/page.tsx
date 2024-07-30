import { Icons } from "@/components/Icon";
import { EditAlternatif } from "@/components/edit-form";
import { getAlternatifById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateAlternatifPage = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const alternatif = await getAlternatifById(id);

  if (!alternatif) {
    notFound();
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
                Edit Alternatif
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
                        <EditAlternatif alternatif={alternatif} />
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
};

export default UpdateAlternatifPage;
