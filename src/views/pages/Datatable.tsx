import CustomDatatable from "../../components/Datatable";
const Datatable = () => {

  const columns = [
    {
      name: 'SI.',
      width: '6%',
      cell: (row, index) => index + 1,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
    },
    {
      name: 'Mobile No.',
      selector: (row) => row.mobile,
    },
    {
      name: 'Age',
      selector: (row) => row.age,
    },
    {
      name: 'Action',
      width: "12%",
      cell: (row) => (
        <>
          <a className="btn btn-outline-success btn-sm btn-flat"><i className="bi bi-pencil"></i></a>
          <a className="btn btn-outline-primary btn-sm btn-flat mx-1"><i className="bi bi-trash"></i></a>
        </>
      )
    }
  ];

  const data = [
    {
      id: 1,
      name: 'Mustafizur Rahman',
      email: 'mustafiz@gmail.com',
      mobile: '01761817861',
      age: '35'
    },
    {
      id: 2,
      name: 'Israt Jahan Mim',
      email: 'eva@gmail.com',
      mobile: '01568771568',
      age: '21'
    },
    {
      id: 3,
      name: 'Shayan Ibn Mustafiz',
      email: 'shayan@gmail.com',
      mobile: '01672770568',
      age: '2.5'
    }
  ]



  return (
    <>
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">Datatable</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Datatable
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="app-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <CustomDatatable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datatable;