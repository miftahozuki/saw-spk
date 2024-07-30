import { SubmitButton } from "@/components/button";
import { Icons } from "@/components/Icon";
import { BackButton } from "@/components/back-button";
import { saveAlternatif } from "@/lib/action";

export const CreateAlternatif = async () => {

  return (
    <div className="row align-items-center">
      <form action={saveAlternatif}>
        <div className="col-md">
          <div className="form-label">
            <Icons.nama className="me-2" />
            Nama Alternatif
          </div>
          <input
            type="text"
            className="form-control mt-4"
            name="nama"
            placeholder="Masukkan Nama"
          required/>
        </div>
        <div className=" bg-transparent mt-4">
          <div className="btn-list justify-content-between">
            <BackButton />
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
};
