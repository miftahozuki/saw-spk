import { getKriteria, getPreferensi, getalternatifs, normalisasi } from "@/lib/data";
import { Penilaian } from "@prisma/client";

export const PerankinganTable = async () => {
    const alternatifs = await getalternatifs();
    const kriteria = await getKriteria();
    const r = normalisasi(alternatifs, kriteria);

    const nilai = (nilai: Penilaian[]) => {
        const result = getPreferensi(nilai, kriteria);
        return result;
    };

    const rankedAlternatifs = r
        .map((alternatif) => ({
            id: alternatif.id,
            nama: alternatif.nama,
            score: nilai(alternatif.penilaian),
        }))
        .sort((a, b) => Number(b.score) - Number(a.score))
        .map((alternatif, idx) => ({
            ...alternatif,
            rank: idx + 1,
        }));

    console.log(rankedAlternatifs);

    return (
        <div className="table-responsive mx-4 mt-3">
            <table id="tabel" className="table table-vcenter table-nowrap">
                <thead>
                    <tr>
                        <th scope="col" className="w-75 text-center">
                            Nama
                        </th>
                        <th scope="col" className="text-center">
                            Nilai
                        </th>
                        <th scope="col" className="text-center">
                            Ranking
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rankedAlternatifs.map((alternatif) => (
                        <tr key={alternatif.id}>
                            <td>{alternatif.nama}</td>
                            <td className="text-center">{alternatif.score}</td>
                            <td className="text-center">{alternatif.rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
