export const SkeletonTable = () => {
  const array = Array.from({ length: 6 });

  return (
    <div className="table-responsive mx-4">
      <table id="tabel" className="table table-vcenter table-nowrap mt-4">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              <span className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </span>
            </th>
            <th scope="col" className="w-75 text-center">
              <span className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </span>
            </th>
            <th scope="col" className="text-center">
              <span className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {array.map((_,idx) => (
            <tr key={idx +1}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
