interface alternatifs  {
    rank: number
    id: number
    nama: string
    score: string | number
}

export const PerankinganTable =  ({alternatifs}: {alternatifs: alternatifs[]}) => {


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
                    {alternatifs.map((alternatif) => (
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
