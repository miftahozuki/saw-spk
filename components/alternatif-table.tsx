import { EditButton, DeleteButton } from "@/components/button";
import { getalternatifs } from "@/lib/data";

const AlternatifTable = async () => {
  const alternatifs = await getalternatifs();

  return (
    <div className="table-responsive mx-4 mt-3">
      <table className="table table-vcenter table-nowrap">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col" className="w-75 text-center">
              Nama
            </th>
            <th scope="col" className="text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {alternatifs.map((alternatif:any, index:number) => (
          <tr key={alternatif.id}>
            <td className="text-center">{index +1}.</td>
            <td>{alternatif.nama}</td>
            <td>
              <div className="btn-list flex-nowrap">
                <EditButton id={alternatif.id}/>
                <DeleteButton id={alternatif.id}/>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlternatifTable;
