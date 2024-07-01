const Table = () => {
  return (
    <>
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Simple Tables</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Simple Tables
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="card-title">Bordered Table</h3>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th style={{ width: '10px' }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: '40px' }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{ width: '55%' }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-danger">55%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar text-bg-warning" style={{ width: '70' }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-warning">70%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-primary" style={{ width: '30' }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-primary">30%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-success" style={{ width: '90' }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-success">90%</span> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer clearfix">
                  <ul className="pagination pagination-sm m-0 float-end">
                    <li className="page-item"> <a className="page-link" href="#">«</a> </li>
                    <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                    <li className="page-item"> <a className="page-link" href="#">2</a> </li>
                    <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                    <li className="page-item"> <a className="page-link" href="#">»</a> </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="card-title">Condensed Full Width Table</h3>
                </div>
                <div className="card-body p-0">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th style={{ width: '10px' }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: '40px' }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{ width: 55 }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-danger">55%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar text-bg-warning" style={{ width: 70 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-warning">70%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-primary" style={{ width: 30 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-primary">30%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-success" style={{ width: 90 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-success">90%</span> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="card-title">Simple Full Width Table</h3>
                  <div className="card-tools">
                    <ul className="pagination pagination-sm float-end">
                      <li className="page-item"> <a className="page-link" href="#">«</a> </li>
                      <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                      <li className="page-item"> <a className="page-link" href="#">2</a> </li>
                      <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                      <li className="page-item"> <a className="page-link" href="#">»</a> </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body p-0">
                  <table className="table">
                    <thead>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{ width: 55 }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-danger">55%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar text-bg-warning" style={{ width: 70 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-warning">70%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-primary" style={{ width: 30 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-primary">30%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-success" style={{ width: 90 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-success">90%</span> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="card-title">Striped Full Width Table</h3>
                </div>
                <div className="card-body p-0">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th style={{
                          width: 10
                        }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-middle">
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar progress-bar-danger" style={{ width: 55 }}></div>
                          </div>
                        </td>
                        <td><span className="badge text-bg-danger">55%</span></td>
                      </tr>
                      <tr className="align-middle">
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div className="progress-bar text-bg-warning" style={{ width: 70 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-warning">70%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-primary" style={{ width: 30 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-primary">30%</span> </td>
                      </tr>
                      <tr className="align-middle">
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div className="progress-bar text-bg-success" style={{ width: 90 }}></div>
                          </div>
                        </td>
                        <td> <span className="badge text-bg-success">90%</span> </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default Table;