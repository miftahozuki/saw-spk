import { getKriteria } from "@/lib/data";
import { EditButton, DeleteButton } from "./button";
import { deleteKriteria } from "@/lib/action";


const KriteriaTable = async() => {
    const kriteria = await getKriteria()

    return (
        <div className="table-responsive mx-4 mt-3">
        <table className="table table-vcenter table-nowrap">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col" className="text-center">
                Kode Kriteria
              </th>
              <th scope="col" className="text-center">
                Nama Kriteria
              </th>
              <th scope="col" className="text-center">
                Bobot
              </th>
              <th scope="col" className="text-center">
                Jenis
              </th>
              <th scope="col" className="text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {kriteria.map((kriteria, idx) => (
            <tr key={kriteria.id}>
              <td>{idx +1}</td>
              <td className="text-center">{kriteria.kode}</td>
              <td className="text-center">{kriteria.nama}</td>
              <td className="text-center">{kriteria.bobot}</td>
              <td className="text-center text-capitalize">{kriteria.jenis}</td>
              <td className="d-flex justify-content-center">
                <div className="btn-list flex-nowrap">
                  <EditButton id={kriteria.id} href="/admin/kriteria/edit"/>
                  <form action={deleteKriteria.bind(null, kriteria.id)}>
                    <DeleteButton/>
                  </form>
                </div>
              </td>
            </tr>
            ))}
  
          </tbody>
        </table>
      </div>
    )
}

export default KriteriaTable;