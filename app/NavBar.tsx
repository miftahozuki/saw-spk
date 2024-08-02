"use client"

import React from "react";
import Link from 'next/link';
import {Icons} from "@/components/Icon";
import Image from 'next/image';
import Clock from "react-live-clock";

export default function NavBar() {
  return (
    <>
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <a href="#">
              <Image
                src="/logo.png"
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <div className="nav-item d-none d-md-flex me-3">
              <div className="btn-list">
              <div className="btn">
                <Clock format={"HH:mm:ss"} ticking={true} />
              </div>
              </div>
            </div>
            <div className="d-none d-md-flex">
              <a
                href="?theme=dark"
                className="nav-link px-0 hide-theme-dark"
                title="Enable dark mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
              </a>
              <a
                href="?theme=light"
                className="nav-link px-0 hide-theme-light"
                title="Enable light mode"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                </svg>
              </a>
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <a
                  href="#"
                  className="nav-link px-0"
                  data-bs-toggle="dropdown"
                  tabIndex={-1}
                  aria-label="Show notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <span className="badge bg-red"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Notifikasi</h3>
                    </div>
                    <div className="list-group list-group-flush list-group-hoverable">
                      <div className="list-group-item">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <span className="status-dot status-dot-animated bg-red d-block"></span>
                          </div>
                          <div className="col text-truncate">
                            <a href="#" className="text-body d-block">
                            
                            </a>
                            {/* <div className="d-block text-muted text-truncate mt-n1">
                              Nothing to see Lorem ipsum dolor sit amet.
                            </div> */}
                          </div>
                          <div className="col-auto">
                            <a href="#" className="list-group-item-actions">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon text-muted"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                aria-label="Open user menu"
              >
                <div>
                  <span className="avatar avatar-sm me-2">
                    <Icons.avatar/>
                  </span>
                </div>
                <div className="d-none d-xl-block ps-2">
                  <div>Miftahus</div>
                  <div className="mt-1 small text-muted">miftahzk</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a href="{{ url('admin/profile') }}" className="dropdown-item">
                  Settings
                </a>
                <a
                  href=""
                  className="dropdown-item"
                  data-bs-toggle="modal"
                  data-bs-target="#exit"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar">
            <div className="container-xl">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" href={'/admin/dashboard'}>
                  {/* <a className="nav-link" href="#"> */}
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Beranda</span>
                    </Link>
                  {/* </a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/admin/kriteria">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <Icons.kriteria/>
                    </span>
                    <span className="nav-link-title">Data Kriteria</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/admin/kriteria/subkriteria">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <Icons.subkriteria/>
                    </span>
                    <span className="nav-link-title">Data Sub Kriteria</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/admin/alternatif">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <Icons.alternatif/>
                    </span>
                    <span className="nav-link-title">Data Alternatif</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <Icons.penilaian/>
                    </span>
                    <span className="nav-link-title">Data Penilaian</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <Icons.perhitungan/>
                    </span>
                    <span className="nav-link-title">Data Perhitungan</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <Icons.hasil/>
                    </span>
                    <span className="nav-link-title">Data Hasil Akhir</span>
                  </a>
                </li>
              </ul>
              {/* <!-- end nav --> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
