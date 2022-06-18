import React from "react";
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import { useEffect, useState } from "react";
import NoSSRWrapper from '../components/no-ssr/noSsr'

export default function main() {
  return (
      <NoSSRWrapper>
    <div className="app sidebar-mini ltr light-mode color-menu">
      <div className="page">
          <Sidebar/>
          <div className="main-content app-content mt-0">
                <div className="side-app">
                        <div className="page-header">
                            <h1 className="page-title">Home</h1>
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="">Home</a></li>
                                </ol>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Details</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="panel panel-primary">
                                            <div className="tab-menu-heading tab-menu-heading-boxed">
                                                <div className="tabs-menu-boxed">
                                                    <ul className="nav panel-tabs panel-info">
                                                        <li><a href="#tab25" className="active" data-bs-toggle="tab">Cricket</a></li>
                                                        <li><a href="#tab26" data-bs-toggle="tab">Football</a></li>
                                                        <li><a href="#tab27" data-bs-toggle="tab">Casino</a></li>
                                                        <li><a href="#tab28" data-bs-toggle="tab">Tennis</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="panel-body tabs-menu-body">
                                                <div className="tab-content">
                                                    <div className="tab-pane active" id="tab25">
                                                        <div className="col-xl-12">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Cricket</h3>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="table-responsive">
                                                                        <table className="table border text-nowrap text-md-nowrap table-borderless mb-0">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Game</th>
                                                                                    <th>1</th>
                                                                                    <th>X</th>
                                                                                    <th>2</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab26">
                                                        <div className="col-xl-12">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Football</h3>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="table-responsive">
                                                                        <table className="table border text-nowrap text-md-nowrap table-borderless mb-0">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Game</th>
                                                                                    <th>1</th>
                                                                                    <th>X</th>
                                                                                    <th>2</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab27">
                                                        <div className="col-xl-12">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Casino</h3>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="table-responsive">
                                                                        <table className="table border text-nowrap text-md-nowrap table-borderless mb-0">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Game</th>
                                                                                    <th>1</th>
                                                                                    <th>X</th>
                                                                                    <th>2</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="tab28">
                                                        <div className="col-xl-12">
                                                            <div className="card">
                                                                <div className="card-header">
                                                                    <h3 className="card-title">Tennis</h3>
                                                                </div>
                                                                <div className="card-body">
                                                                    <div className="table-responsive">
                                                                        <table className="table border text-nowrap text-md-nowrap table-borderless mb-0">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Game</th>
                                                                                    <th>1</th>
                                                                                    <th>X</th>
                                                                                    <th>2</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Test Y v Test Z / Apr 4 2022 6:00PM (IST)</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                    <td>-</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
      </div>
    </div>
    </NoSSRWrapper>
  );
}
