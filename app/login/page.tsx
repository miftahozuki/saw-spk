"use client"

import { ClockButton, LoginButton } from "@/components/button"
import { login } from "@/lib/action"
import { useFormState } from "react-dom"

const LoginPage = () => {
    const [state, loginAction] = useFormState(login, null)
    console.log(state);
    

    return (
        <>
            {state?.Error.auth && (
                <div className="alert alert-important alert-danger alert-dismissible" role="alert">
                    <div className="d-flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                        </div>
                        <div className="mx-auto">
                            {state.Error.auth}
                        </div>
                    </div>
                    <a className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="close"></a>
                </div>
            )}

            <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Masuk</h2>
                    <form action={loginAction} autoComplete="off">
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                name="username"
                                type="text"
                                className={`form-control ${state?.Error.message?.username ? 'is-invalid' : ''}`}
                                placeholder="admin"
                                autoComplete="off"
                            />
                            <div className="invalid-feedback">{state?.Error.message?.username}</div>

                        </div>
                        <div className="mb-2">
                            <label className="form-label">Kata Sandi</label>
                            <div className="input-group input-group-flat">
                                <input
                                    name="pw"
                                    type="password"
                                    className={`form-control ${state?.Error.message?.password ? 'is-invalid' : ''}`}
                                    placeholder="*****"
                                    autoComplete="off"
                                />
                                {/* <span className="input-group-text">
                                    <a
                                        href="#"
                                        className="link-secondary"
                                        title="Show password"
                                        data-bs-toggle="tooltip"
                                    >
                                       
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
                                </span> */}
                                <div className="invalid-feedback">{state?.Error.message?.password}</div>

                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <span className="form-check-label">Remember me on this device</span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <LoginButton />
                        </div>
                    </form>
                </div>
                <div className="hr-text">Jam</div>
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <ClockButton />
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginPage
