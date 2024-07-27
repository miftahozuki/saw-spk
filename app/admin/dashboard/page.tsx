import { Icons } from "@/components/Icon";

export default function DashboardPage() {
  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              {/* Page pre-title */}
              <h2 className="page-title">
                <Icons.dashboard className="me-2" />
                Dashboard
              </h2>
            </div>
            {/* Page title actions */}
            <div className="col-auto ms-auto d-print-none">
              <h2 className="page-title d-none d-sm-inline-block">
                Selamat datang, Miftahus!
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Page body */}
      <div className="page-body">
        <div className="container-xl">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title h1">
                Sistem Pendukung Keputusan Metode SAW
              </h3>
              <p className="text-secondary">
                Sitem Pendukung Keputusan (SPK) merupakan suatu sistem informasi
                spesifik yang ditujukan untuk membantu manajemen dalam mengambil
                keputusan yang berkaitan dengan persoalan yang bersifat semi
                terstruktur.{" "}
              </p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                illo iure optio fuga expedita accusantium possimus, accusamus
                saepe minima maxime deserunt, perferendis quia id delectus?
                Voluptatibus temporibus minus repudiandae tempora, eum sequi
                numquam veritatis consequatur modi aut, cumque harum! Alias
                accusantium quisquam exercitationem aliquam nulla unde,
                dignissimos qui ex, excepturi eaque velit numquam rem adipisci
                ipsam ut sed. Eos est deserunt dolor porro cum ipsum qui quas
                vero vitae excepturi?
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
