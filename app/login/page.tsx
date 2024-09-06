import { ClockButton, LoginButton } from "@/components/button"
import { login } from "@/lib/action"

const LoginPage = () => {
    return (
        <div className="card card-md">
            <div className="card-body">
                <h2 className="h2 text-center mb-4">Masuk</h2>
                <form action={login} autoComplete="off">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control"
                            placeholder="admin"
                            autoComplete="off"
                            required
                        />

                        {/* <div className="invalid-feedback">
        </div> */}

                    </div>
                    <div className="mb-2">
                        <label className="form-label">Kata Sandi</label>
                        <div className="input-group input-group-flat">
                            <input
                                name="pw"
                                type="password"
                                className="form-control"
                                placeholder="*****"
                                autoComplete="off"
                                required
                            />
                            <span className="input-group-text">
                                <a
                                    href="#"
                                    className="link-secondary"
                                    title="Show password"
                                    data-bs-toggle="tooltip"
                                >
                                    {/* Download SVG icon from http://tabler-icons.io/i/eye */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                </a>
                            </span>

                            {/* <div className="invalid-feedback">
          </div> */}

                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <span className="form-check-label">Remember me on this device</span>
                        </label>
                    </div>
                    <div className="form-footer">
                        <LoginButton/>
                    </div>
                </form>
            </div>
            <div className="hr-text">Jam</div>
            <div className="card-body">
                <div className="d-flex justify-content-center">
                    <ClockButton/>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
