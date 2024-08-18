import { getalternatifs } from "@/lib/data"
import { EditNilaiButton, InputNilaiButton } from "./button"

export const PenilaianTable = async() => {
    const alternatifs = await getalternatifs()
    
    
    return (
        <div className="table-responsive mx-4 mt-4">
        <table id="tabel" className="table table-vcenter table-nowrap">
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
            {alternatifs.map((alternatif, idx) => (
            <tr key={alternatif.id}>
              <td className="text-start">{idx +1}</td>
              <td>{alternatif.nama}</td>
              <td className="d-flex justify-content-center">
                <InputNilaiButton id={alternatif.id} hidden={!!alternatif.penilaian.find((alternatif) => alternatif.id)}/>
                <EditNilaiButton id={alternatif.id} hidden={!alternatif.penilaian.find((alternatif) => alternatif.id)}/>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}