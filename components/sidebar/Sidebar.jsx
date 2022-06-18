import React from 'react'

export default function 
() {
  return (
    <div className="page-main">
            <div className="app-header header sticky">
                <div className="container-fluid main-container">
                    <div className="d-flex">
                        <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar" href="javascript:void(0)"></a>
                        <a className="logo-horizontal " href="index.html"/>
                            <img src="images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo"/>
                            <img src="images/brand/logo-3.png" className="header-brand-img light-logo1"
                                alt="logo"/>
                        <div className="main-header-center ms-3 d-none d-lg-block">
                            <input className="form-control" placeholder="Search for results..." type="search"/>
                            <button className="btn px-0 pt-2"><i className="fe fe-search" aria-hidden="true"></i></button>
                        </div>
                        <div className="d-flex order-lg-2 ms-auto header-right-icons">
                            <div className="dropdown d-none">
                                <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="dropdown">
                                    <i className="fe fe-search"></i>
                                </a>
                                <div className="dropdown-menu header-search dropdown-menu-start">
                                    <div className="input-group w-100 p-2">
                                        <input type="text" className="form-control" placeholder="Search...."/>
                                        <div className="input-group-text btn btn-primary">
                                            <i className="fe fe-search" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                                aria-controls="navbarSupportedContent-4" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
                            </button>
                            <div className="navbar navbar-collapse responsive-navbar p-0">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                                    <div className="d-flex order-lg-2">
                                        <div className="dropdown d-lg-none d-flex">
                                            <a href="javascript:void(0)" className="nav-link icon" data-bs-toggle="dropdown">
                                                <i className="fe fe-search"></i>
                                            </a>
                                            <div className="dropdown-menu header-search dropdown-menu-start">
                                                <div className="input-group w-100 p-2">
                                                    <input type="text" className="form-control" placeholder="Search...."/>
                                                    <div className="input-group-text btn btn-primary">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                        {/* <div className="d-flex country">
                                            <a className="nav-link icon theme-layout nav-link-bg layout-setting">
                                                <span className="dark-layout"><i className="fe fe-moon"></i></span>
                                                <span className="light-layout"><i className="fe fe-sun"></i></span>
                                            </a>
                                        </div> */}
                                       
                                        <div className="dropdown d-flex profile-1">
                                            <a href="javascript:void(0)" data-bs-toggle="dropdown" className="nav-link leading-none d-flex">
                                                <img src="images/users/21.jpg" alt="profile-user"
                                                    className="avatar  profile-user brround cover-image"/>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <div className="drop-heading">
                                                    <div className="text-center">
                                                        <h5 className="text-dark mb-0 fs-14 fw-semibold">Percy Kewshun</h5>
                                                        <small className="text-muted">Senior Admin</small>
                                                    </div>
                                                </div>
                                                <div className="dropdown-divider m-0"></div>
                                                <a className="dropdown-item" href="profile.html">
                                                    <i className="dropdown-icon fe fe-user"></i> Profile
                                                </a>
                                                <a className="dropdown-item" href="email-inbox.html">
                                                    <i className="dropdown-icon fe fe-mail"></i> Inbox
                                                    <span className="badge bg-danger rounded-pill float-end">5</span>
                                                </a>
                                                <a className="dropdown-item" href="lockscreen.html">
                                                    <i className="dropdown-icon fe fe-lock"></i> Lockscreen
                                                </a>
                                                <a className="dropdown-item" href="login.html">
                                                    <i className="dropdown-icon fe fe-alert-circle"></i> Sign out
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
                <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
                <div style={{background: '#1170e4!important'}} className="app-sidebar ">
                    <div style={{background: '#1170e4!important'}} className="side-header">
                        <a className="header-brand1" href="index.html">
                            DIAMOND EXCH
                        </a>
                    </div>
                    <div className="main-sidemenu">
                        <div className="slide-left disabled" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg"
                                fill="#7b8191" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                            </svg></div>
                        <ul className="side-menu">
                            <li className="sub-category">
                                <h3>Main</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="index.html"><i
                                        className="side-menu__icon fe fe-home"></i><span
                                        className="side-menu__label">Home</span></a>
                            </li>
                            <li className="sub-category">
                                <h3>Navigation</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i
                                        className="side-menu__icon fa fa-child"></i><span
                                        className="side-menu__label">All Sports</span><i
                                        className="angle fe fe-chevron-right"></i></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">All Sports</a></li>
                                    <li><a href="#" className="slide-item"> Cricket</a></li>
                                    <li><a href="#" className="slide-item"> Football</a></li>
                                    <li><a href="#" className="slide-item"> Tennis</a></li>
                                    <li><a href="#" className="slide-item"> Casino</a></li>
                                </ul>
                            </li>
                            <li className="sub-category">
                                <h3>Others</h3>
                            </li>
                            <li className="slide">
                                <a className="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)"><i
                                        className="side-menu__icon fa fa-share"></i><span
                                        className="side-menu__label">Other Pages</span><i
                                        className="angle fe fe-chevron-right"></i></a>
                                <ul className="slide-menu">
                                    <li className="side-menu-label1"><a href="javascript:void(0)">All Sports</a></li>
                                    <li><a href="#" className="slide-item"> Ledgers</a></li>
                                    <li><a href="#" className="slide-item"> My Score</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                            </svg></div>
                    </div>
                </div>
            </div>
  )
}
