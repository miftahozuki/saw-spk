import Link from "next/link";
import { Icons } from "./Icon";
import { AddButton, DeleteButton, EditButton } from "./button";
import { getKriteria } from "@/lib/data";

const SubKriteriaTable = async() => {
    const kriteria = await getKriteria()
    console.log(kriteria);
    

  return (
    <>
    {kriteria.map((kriteria, idx) => (
      <div key={kriteria.id} className="card mb-5">
        <div className="card-header justify-content-between">
          <h3 className="card-title text-primary me-3">
            <Icons.tabel className="me-2" />
            {kriteria.nama} ({kriteria.kode})
          </h3>
          <AddButton href={`/admin/kriteria/subkriteria/add/${kriteria.id}`}/>
        </div>
        <div className="table-responsive mx-4 mt-3">
          <table className="table table-vcenter table-nowrap">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col" className="w-50 text-center">
                  Nama Sub Kriteria
                </th>
                <th scope="col" className="text-center">
                  Nilai
                </th>
                <th scope="col" className="text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {kriteria.subkriteria.map((subkriteria, idx) => (
              <tr key={subkriteria.id}>
                <td className="text-center">{idx +1}</td>
                <td>{subkriteria.nama}</td>
                <td className="text-center">{subkriteria.nilai}</td>
                <td className="d-flex justify-content-center">
                  <div className="btn-list flex-nowrap">
                    <EditButton id={subkriteria.id} href="/admin/kriteria/subkriteria/edit" />
                    <DeleteButton id={subkriteria.id} aksi="subkriteria" />
                  </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
    </>
  );
};

export default SubKriteriaTable;
