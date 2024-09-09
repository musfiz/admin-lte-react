import { useEffect, useState } from "react";
import CustomDatatable from "../../components/Datatable";
import { getAllPeople } from "../../services/people";

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
    name: 'Gender',
    selector: (row) => row.gender,
  },
  {
    name: 'Address',
    selector: (row) => row.address,
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

const Datatable = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);

  const fetchPeople = async (page: number, perPage: number) => {
    setLoading(true);
    console.log('====================================');
    console.log(page, perPage);
    console.log('====================================');
    const response = await getAllPeople(page, perPage);
    setData(response.data);
    setTotalRows(response.total);
    setLoading(false);
  }

  let changePerPage = (limit: number) => {
    console.log('==========changePerPage=============');
    console.log(limit);
    console.log('====================================');
    fetchPeople(1, limit);
  }

  let changePage = (offset: number) => {
    console.log('==========changePage=============');
    console.log(offset);
    console.log('====================================');
    setPage(offset);
    fetchPeople(offset, perPage);
  }

  useEffect(() => {
    fetchPeople(page, perPage);
  }, []);

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
              <CustomDatatable
                columns={columns}
                data={data}
                totalRows={totalRows}
                loading={loading}
                changePerPage={changePerPage}
                changePage={changePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datatable;