import { Icons } from './Icon'
import { getPreferensi } from '@/lib/data'
import { AlternatifPenilaian, KriteriaSubKriteria } from '@/utils/type'
import { Penilaian } from '@prisma/client'

const PerhitunganTabel = ({ alternatif, kriteria }: { alternatif: AlternatifPenilaian[], kriteria: KriteriaSubKriteria[] }) => {

    const nilaiPreferensi = (penilaian : Penilaian[]) => {
        const nilai = getPreferensi(penilaian, kriteria)
        
        return nilai
    }
    
    return (
        <>
            <div className="card mb-5">
                <div className="card-header">
                    <h3 className="card-title text-primary me-3">
                        <Icons.tabel className="me-2" />
                        Perhitungan (𝑣)
                    </h3>
                </div>
                <div className="table-responsive mx-4 mt-3">
                    <table id="tabel" className="table table-vcenter table-nowrap">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">
                                    NO
                                </th>
                                <th scope="col" className="text-center">
                                    Nama Alternatif
                                </th>
                                <th scope="col" className="text-center">
                                    Perhitungan
                                </th>
                                <th scope="col" className="text-center">
                                    Nilai
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {alternatif.map((alternatif, idx) => (
                                <tr key={alternatif.id}>
                                    <td className="text-center">{idx + 1}</td>
                                    <td>{alternatif.nama}</td>
                                    <td>SUM {alternatif.penilaian.map((alternatif) => (
                                        <span key={alternatif.id}>({alternatif.nilai} x {kriteria.find((kriteria) => alternatif.kriteriaId === kriteria.id)?.bobot} ) </span>
                                    ))}</td>
                                    <td>{nilaiPreferensi(alternatif.penilaian)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PerhitunganTabel
