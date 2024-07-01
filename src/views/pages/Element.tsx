const Element = () => {
  return (
    <>
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">General Form</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  General Form
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card card-primary card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Quick Example</div>
                </div>
                <form>
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3"> <label className="formLabel">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="input-group mb-3">
                      <input type="file" className="form-control" />
                      <label className="input-group-text">Upload</label>
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label">Check me out</label>
                    </div>
                  </div>
                  <div className="card-footer"> <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              <div className="card card-success card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Input Group</div>
                </div>
                <div className="card-body">
                  <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="Username" /> </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" />
                    <span className="input-group-text">@example.com</span> </div>
                  <div className="mb-3">
                    <label className="form-label">Your vanity URL</label>
                    <div className="input-group">
                      <span className="input-group-text">https://example.com/users/</span>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-text" id="basic-addon4">
                      Example help text goes outside the input group.
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <span className="input-group-text">.00</span> </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" placeholder="Server" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">With textarea</span>
                    <textarea className="form-control" ></textarea>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </div>
              <div className="card card-warning card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Horizontal Form</div>
                </div>
                <form>
                  <div className="card-body">
                    <div className="row mb-3"> <label className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Password</label>
                      <div className="col-sm-10">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <fieldset className="row mb-3">
                      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="gridRadios" defaultChecked />
                          <label className="form-check-label">
                            First radio
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="gridRadios" />
                          <label className="form-check-label">
                            Second radio
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <input className="form-check-input" type="radio" name="gridRadios" disabled />
                          <label className="form-check-label">
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div className="row mb-3">
                      <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" />
                          <label className="form-check-label">
                            Example checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-warning">Sign in</button>
                    <button type="submit" className="btn float-end">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-secondary card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Different Height</div>
                </div>
                <div className="card-body">
                  <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" /><br />
                  <input className="form-control" type="text" placeholder="Default input" /><br />
                  <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
                </div>
              </div>
              <div className="card card-danger card-outline mb-4">
                <div className="card-header">
                  <div className="card-title">Different Width</div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-3"> <input type="text" className="form-control" placeholder=".col-3" /></div>
                    <div className="col-4"> <input type="text" className="form-control" placeholder=".col-4" /></div>
                    <div className="col-5"> <input type="text" className="form-control" placeholder=".col-5" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Element;