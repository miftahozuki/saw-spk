import {Icons} from '@/components/Icon'

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
                <a
                  href="#"
                  className="btn btn-primary d-none d-sm-inline-block"
                  data-bs-toggle="modal"
                  data-bs-target="#add"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                  Tambah
                </a>
                <a
                  href="#"
                  className="btn btn-primary d-sm-none btn-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#add"
                  aria-label="Create new report"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </a>
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
                <div className="table-responsive mx-4 mt-3">
                  <table className="table table-vcenter table-nowrap">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col" className="w-75 text-center">Nama</th>
                        <th scope="col" className="text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1.</td>
                        <td>Algojer bin Kitu</td>
                        <td>
                          <div className="btn-list flex-nowrap">
                            <a href="#" className="btn btn-outline-success">
                              {" "}
                              Edit{" "}
                            </a>
                            <a
                              href="{{ route('data-karyawan.destroy', $item->id_karyawan) }}"
                              className="btn btn-outline-danger"
                              data-confirm-delete="true"
                            >
                              {" "}
                              Hapus{" "}
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
