import { CancelButton, SubmitButton } from "@/components/button"
import { saveAlternatif } from "@/lib/action"

export const CreateAlternatif = () => {
  return (
    <div className="modal" id="add" tabIndex={-1}>
  <div className="modal-dialog modal-md" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Tambah Karyawan</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <form action={saveAlternatif}>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Nama Karyawan</label>
            <input type="text" className="form-control" name="nama" required/>
          </div>
        </div>
        <div className="modal-footer justify-content-end">
            <CancelButton/>
            <SubmitButton/>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}
