import { Icons } from "@/components/Icon";

export default function DashboardPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              {/* Page pre-title */}
              <h2 className="page-title">
                <Icons.dashboard/> Dashboard
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
          <div className="row row-deck row-cards">
            <div className="col-12 mb-4">
              <div className="card card-md">
                <div className="card-stamp card-stamp-lg">
                  <div className="card-stamp-icon bg-primary">
                    {/* Download SVG icon from http://tabler-icons.io/i/ghost */}
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
                      <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />
                      <path d="M10 10l.01 0" />
                      <path d="M14 10l.01 0" />
                      <path d="M10 14a3.5 3.5 0 0 0 4 0" />
                    </svg>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-10">
                      <h3 className="h1">
                        Sistem Pendukung Keputusan Metode SAW
                      </h3>
                      <div className="markdown text-muted">
                        <p className="text-justify">
                          Sitem Pendukung Keputusan (SPK) merupakan suatu sistem
                          informasi spesifik yang ditujukan untuk membantu
                          manajemen dalam mengambil keputusan yang berkaitan
                          dengan persoalan yang bersifat semi terstruktur.{" "}
                        </p>
                        <p className="text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Enim, illo iure optio fuga expedita accusantium
                          possimus, accusamus saepe minima maxime deserunt,
                          perferendis quia id delectus? Voluptatibus temporibus
                          minus repudiandae tempora, eum sequi numquam veritatis
                          consequatur modi aut, cumque harum! Alias accusantium
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid accusantium aspernatur, velit voluptates repellendus magnam distinctio amet optio enim? Quidem laborum consectetur saepe accusamus amet omnis ullam, itaque quia adipisci natus dignissimos sed officiis, distinctio voluptate.
                        </p>
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
