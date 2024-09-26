import { auth } from "@/auth"
import { UpdateButton } from "@/components/button"
import { updateUser } from "@/lib/action"
import { useSession } from "next-auth/react"


const PengaturanPage = async () => {
    const session = await auth()
    if (!session?.user) {
        return null
    }
    
    const user = session.user
    const id = user.id ?? ''
    const updateProfile = updateUser.bind(null, id)

    // const updateSession = () => {
    //     update({name: 'John Doe'})
    // }

    return (
        <div>
            <>
                {/* Page header */}
                <div className="page-header d-print-none">
                    <div className="container-xl">
                        <div className="row g-2 align-items-center">
                            <div className="col">
                                <h2 className="page-title">
                                    <i className="bi bi-person-bounding-box me-3" />
                                    Profil Saya
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page body */}
                <div className="page-body">
                    <div className="container-xl">
                        <div className="row row-cards mb-6">
                            <div className="col-12">
                                <div className="card">
                                    <div className="container">
                                        <div className="justify-content-center row g-3 mb-5">
                                            <div className="col d-flex flex-column">
                                                <form action={updateProfile}>
                                                    <div className="card-body">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                <span
                                                                    className="avatar avatar-xl me-4"
                                                                />
                                                            </div>
                                                            <div className="col-auto">
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline-success"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#avatar"
                                                                >
                                                                    <i className="bi bi-camera me-2" /> Ganti avatar
                                                                </a>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3 mt-2">
                                                            <div className="col-md">
                                                                <div className="form-label">
                                                                    <i className="bi bi-card-list me-2" />
                                                                    Nama
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="name"
                                                                    defaultValue={user.name as string}
                                                                />
                                                            </div>
                                                            <div className="col-md">
                                                                <div className="form-label">
                                                                    <i className="bi bi-at me-1" />
                                                                    Username
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="username"
                                                                    defaultValue={user.username}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row g-3 mt-2">
                                                            <div className="col-md">
                                                                <div className="form-label">
                                                                    <i className="bi bi-envelope-at-fill me-2" />
                                                                    Email
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="email"
                                                                    defaultValue={user.email as string}
                                                                />
                                                            </div>
                                                            <div className="d-grid col-md">
                                                                <div className="form-label">
                                                                    <i className="bi bi-key me-2" />
                                                                    Password
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-outline-danger"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#pw"
                                                                >
                                                                    Ganti
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer bg-transparent mt-auto">
                                                        <div className="btn-list justify-content-end">
                                                            {/* <UpdateButton />
                                                            <button onClick={() => updateSession()}>update session</button> */}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal password*/}
                <div className="modal" id="pw" tabIndex={-1}>
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ganti Password</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <form action="/" method="POST">
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Password Lama</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="pw"
                                            placeholder="********"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password Baru</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="pw_baru"
                                            placeholder="********"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Verifikasi Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="pw_baru_confirmation"
                                            placeholder="********"
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Batal
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-floppy-fill me-2" />
                                        Ubah
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* modal avatar*/}
                <div className="modal" id="avatar" tabIndex={-1}>
                    <div className="modal-dialog modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Ganti Avatar</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <form
                                action="{{ route('profile.update') }}"
                                method="POST"
                                encType="multipart/form-data"
                            >

                                <div className="modal-body">
                                    <div>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="formFile"
                                            name="img"
                                            accept=".jpg,.png"
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Batal
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-upload me-2" />
                                        Unggah
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default PengaturanPage
