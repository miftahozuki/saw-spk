import { forwardRef } from "react";
interface dataPrint {
  nama: string;
  score: number | string;
  rank: number;
}

interface Props {
  data: dataPrint[];
}

const PdfTemplate = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  return (
    <div ref={ref} id="print-content">
      <h2 className="text-center text-primary">Hasil Perankingan Metode SAW</h2>
      <div className="table-responsive">
        <table id="tabel" className="table table-vcenter">
          <thead>
            <tr>
              <th className="text-center fw-bold w-75">Nama</th>
              <th className="text-center fw-bold">Nilai</th>
              <th className="text-center fw-bold">Rank</th>
            </tr>
          </thead>
          <tbody>
            {data.map((alternatif, idx) => (
              <tr className={idx % 2 === 1 ? "bg-indigo-lt" : ""}>
                <td className="text-primary fw-bold">{alternatif.nama}</td>
                <td className="text-primary fw-bold text-center">
                  {alternatif.score}
                </td>
                <td className="text-primary fw-bold text-center">
                  {alternatif.rank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default PdfTemplate;
