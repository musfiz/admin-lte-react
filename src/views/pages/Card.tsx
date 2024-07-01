const Card = () => {
  return (
    <>
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Cards</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cards
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <h4 className="mb-2">Cards</h4>
          <h5 className="mb-2">Abilities</h5>
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card card-primary collapsed-card">
                <div className="card-header">
                  <h3 className="card-title">Expandable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      {/* <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-success">
                <div className="card-header">
                  <h3 className="card-title">Collapsable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      {/* <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-warning">
                <div className="card-header">
                  <h3 className="card-title">Removable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                      {/* <i className="bi bi-x-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-danger">
                <div className="card-header">
                  <h3 className="card-title">Maximizable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-maximize">
                      {/* <i data-lte-icon="maximize" className="bi bi-fullscreen"></i>
                      <i data-lte-icon="minimize" className="bi bi-fullscreen-exit"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
          </div>
          <h5 className="mb-2">Card Outlined</h5>
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card card-outline card-primary collapsed-card">
                <div className="card-header">
                  <h3 className="card-title">Expandable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      {/* <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-outline card-success">
                <div className="card-header">
                  <h3 className="card-title">Collapsable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      {/* <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-outline card-warning">
                <div className="card-header">
                  <h3 className="card-title">Removable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                      {/* <i className="bi bi-x-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card card-outline card-danger">
                <div className="card-header">
                  <h3 className="card-title">Maximizable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-maximize">
                      {/* <i data-lte-icon="maximize" className="bi bi-fullscreen"></i>
                      <i data-lte-icon="minimize" className="bi bi-fullscreen-exit"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
          </div>
          <h5 className="mb-2">Card with <code>.text-bg-*</code></h5>
          <div className="row g-4 mb-4">
            <div className="col-md-3">
              <div className="card text-bg-primary collapsed-card">
                <div className="card-header">
                  <h3 className="card-title">Expandable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      {/* <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-bg-success">
                <div className="card-header">
                  <h3 className="card-title">Collapsable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      {/* <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-bg-warning">
                <div className="card-header">
                  <h3 className="card-title">Removable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                      {/* <i className="bi bi-x-lg"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-bg-danger">
                <div className="card-header">
                  <h3 className="card-title">Maximizable</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-maximize">
                      {/* <i data-lte-icon="maximize" className="bi bi-fullscreen"></i>
                      <i data-lte-icon="minimize" className="bi bi-fullscreen-exit"></i> */}
                    </button>
                  </div>
                </div>
                <div className="card-body">The body of the card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;