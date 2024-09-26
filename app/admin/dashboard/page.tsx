import { auth } from "@/auth";
import { Icons } from "@/components/Icon";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth()

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
                Selamat datang, {session?.user?.name}!
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
                
                <div className="card-body">
                  <div className="row align-items-center">
                    
                    <div className="col-md-3 mb-4 text-center">
                    <Image className="" src="/rsud.png" width={200} height={200} alt="rsud logo"/>
                    </div>
                    <div className="col-md-9">
                      <h3 className="h1">
                        Sistem Pendukung Keputusan Jasa Pelayanan
                      </h3>
                      <div className="markdown text-muted">
                        <p>RSUD Besuki merupakan fasilitas kesehatan tipe D di Kabupaten Situbondo, Jawa Timur. Tugas utama RSUD Besuki mencakup penyelenggaraan pelayanan kesehatan, penyembuhan penyakit dan pemulihan kondisi cacat, baik secara fisik maupun mental.</p>
                        <p className="text-justify">
                          Sitem Pendukung Keputusan (SPK) merupakan suatu sistem
                          informasi spesifik yang ditujukan untuk membantu
                          manajemen dalam mengambil keputusan yang berkaitan
                          dengan persoalan yang bersifat semi terstruktur.{" "}
                        </p>
                        <p className="text-justify">
                        Metode Simple Additive Weighting (SAW) adalah salah satu metode pengambilan keputusan multikriteria yang sering digunakan untuk menyelesaikan masalah keputusan berdasarkan sejumlah kriteria yang relevan. Metode ini dikenal juga sebagai metode penjumlahan terbobot. SAW bekerja dengan cara menjumlahkan bobot dari setiap alternatif pada setiap kriteria yang telah dinormalisasi, kemudian mencari alternatif dengan total nilai tertinggi.
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
