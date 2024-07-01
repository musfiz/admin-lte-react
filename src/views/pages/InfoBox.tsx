const InfoBox = () => {
  return (
    <>
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Info Box</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Info Box
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <h5 className="mb-2">Info Box</h5>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon text-bg-primary shadow-sm">
                  <i className="bi bi-gear-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">10<small>%</small></span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon text-bg-success shadow-sm">
                  <i className="bi bi-cart-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">760</span>
                </div>
              </div>
            </div>
            {/* <div className="clearfix hidden-md-up"></div> */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon text-bg-warning shadow-sm">
                  <i className="bi bi-people-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon text-bg-danger shadow-sm">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mb-2"> Info Box With Custom Shadows <small><i>Using Bootstrap's Shadow Utility</i></small> </h5>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box shadow-none">
                <span className="info-box-icon text-bg-primary shadow-sm">
                  <i className="bi bi-gear-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">CPU Traffic</span>
                  <span className="info-box-number">10<small>%</small>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box shadow-sm">
                <span className="info-box-icon text-bg-success shadow-sm">
                  <i className="bi bi-cart-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Sales</span>
                  <span className="info-box-number">760</span>
                </div>
              </div>
            </div>
            {/* <div className="clearfix hidden-md-up"></div> */}
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box shadow">
                <span className="info-box-icon text-bg-warning shadow-sm">
                  <i className="bi bi-people-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">New Members</span>
                  <span className="info-box-number">2,000</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box shadow-lg">
                <span className="info-box-icon text-bg-danger shadow-sm">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-primary">
                <span className="info-box-icon">
                  <i className="bi bi-bookmark-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-success">
                <span className="info-box-icon">
                  <i className="bi bi-hand-thumbs-up"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-warning">
                <span className="info-box-icon">
                  <i className="bi bi-calendar3"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Events</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-danger">
                <span className="info-box-icon"><i className="bi bi-chat-text-fill"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Comments</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-4 mb-2">Info Box With <code>bg-gradient</code></h5>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-primary bg-gradient">
                <span className="info-box-icon">
                  <i className="bi bi-bookmark-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-success bg-gradient">
                <span className="info-box-icon">
                  <i className="bi bi-hand-thumbs-up"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-warning bg-gradient">
                <span className="info-box-icon">
                  <i className="bi bi-calendar3"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Events</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="info-box text-bg-danger bg-gradient">
                <span className="info-box-icon">
                  <i className="bi bi-chat-text-fill"></i>
                </span>
                <div className="info-box-content">
                  <span className="info-box-text">Comments</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBox;