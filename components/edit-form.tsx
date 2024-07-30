import { UpdateButton } from "@/components/button";
import { Icons } from "@/components/Icon";
import { BackButton } from "@/components/back-button";
import type { Alternatif } from "@prisma/client";
import { updateAlternatif } from "@/lib/action";

export const EditAlternatif = async ({
  alternatif,
}: {
  alternatif: Alternatif;
}) => {
  const UpdateAlternatifWithId = updateAlternatif.bind(null, alternatif.id);

  return (
    <div className="row align-items-center">
      <form action={UpdateAlternatifWithId}>
        <div className="col-md">
          <div className="form-label">
            <Icons.nama className="me-2" />
            Nama Alternatif
          </div>
          <input
            type="text"
            className="form-control mt-4"
            name="nama"
            defaultValue={alternatif.nama}
            placeholder="Masukkan Nama"
          />
        </div>
        <div className=" bg-transparent mt-4">
          <div className="btn-list justify-content-between">
            <BackButton />
            <UpdateButton />
          </div>
        </div>
      </form>
    </div>
  );
};
