export const SkeletonTableAlternatif = () => {
  const array = Array.from({ length: 10 });

  return (
    <div className="table-responsive mx-4">
      <table id="tabel" className="table table-vcenter table-nowrap mt-4">
        <thead>
          <tr>
            <th scope="col">
              No.
            </th>
            <th scope="col" className="w-75 text-center">
              Nama
            </th>
            <th scope="col" className="text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {array.map((_,idx) => (
            <tr key={idx +1}>
              <td className="text-start">
                <span className="placeholder-glow">
                  <span className="placeholder col-5"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-9"></span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const SkeletonTableKriteria = () => {
  const array = Array.from({ length: 6 });

  return (
    <div className="table-responsive mx-4">
      <table id="tabel" className="table table-vcenter table-nowrap mt-4">
        <thead>
          <tr>
            <th scope="col">
              No.
            </th>
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
          {array.map((_,idx) => (
            <tr key={idx +1}>
              <td className="text-start">
                <span className="placeholder-glow">
                  <span className="placeholder col-5"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-9"></span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const SkeletonTableSubKriteria = () => {
  const array = Array.from({ length: 4 });

  return (
    <div className="card mb-5">
    <div className="card-header justify-content-between">
      <h3 className="card-title text-primary me-3">
        Memuat<span className="animated-dots ms-2"></span>
      </h3>
    </div>
    <div className="table-responsive mx-4 mt-3">
      <table id="tabel" className="table table-vcenter table-nowrap">
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
        {array.map((_,idx) => (
            <tr key={idx +1}>
              <td className="text-start">
                <span className="placeholder-glow">
                  <span className="placeholder col-5"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-4"></span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export const SkeletonTablePerankingan = () => {
  const array = Array.from({ length: 10 });

  return (
    <div className="table-responsive mx-4">
      <table id="tabel" className="table table-vcenter table-nowrap mt-4">
        <thead>
          <tr>
            <th scope="col" className="w-75 text-center">
              Nama
            </th>
            <th scope="col" className="text-center">
              Nilai
            </th>
            <th scope="col" className="text-center">
              Rank
            </th>
          </tr>
        </thead>
        <tbody>
          {array.map((_,idx) => (
            <tr key={idx +1}>
              <td className="text-start">
                <span className="placeholder-glow">
                  <span className="placeholder col-5"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </span>
              </td>
              <td className="text-center">
                <span className="placeholder-glow">
                  <span className="placeholder col-4"></span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
