import { useEffect, useState } from "react";
import CustomDatatable from "../../components/Datatable";
import { getAllProducts } from "../../services/product";


interface row {
  id: number,
  name: string,
  detail: string
}

const columns = [
  {
    name: 'SI.',
    width: '6%',
    cell: (row: row, index: number) => index + 1,
  },
  {
    name: 'Name',
    selector: (row: row) => row.name,
  },
  {
    name: 'Details',
    selector: (row: row) => row.detail,
  },
  {
    name: 'Action',
    width: "12%",
    cell: (row: row) => (
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
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRowsPerPage, setSelectedRowsPerPage] = useState([]);

  const fetchPeople = async (page: number, rowsPerPage: number) => {
    setLoading(true);
    const res = await getAllProducts(page, rowsPerPage);
    const dataWithSerails = res.data.data.map((item: object, i: number) => ({ serial: i, ...item }))
    setData(dataWithSerails);
    setTotalRows(res.data.total);
    setLoading(false);
  }

  let handleRowsPerPageChange = async (newRowsPerPage: number) => {
    if (!data.length) return;
    fetchPeople(1, newRowsPerPage);
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  }

  const handlePageChange = (page: number) => {
    fetchPeople(page, rowsPerPage);
    setCurrentPage(page);
  }

  useEffect(() => {
    fetchPeople(currentPage, rowsPerPage);
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
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                handleRowsPerPageChange={handleRowsPerPageChange}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datatable;