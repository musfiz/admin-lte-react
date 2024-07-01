const Blank = () => {
  return (
    <>
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Blank Page</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blank Page
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Title</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse" title="Collapse">
                      <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-remove" title="Remove">
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  Start creating your amazing application!
                </div>
                <div className="card-footer">Footer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blank;