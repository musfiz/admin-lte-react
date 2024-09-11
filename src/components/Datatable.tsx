import DataTable from "react-data-table-component";

interface Props {
  data: object[],
  columns: object[],
  loading: boolean,
  totalRows: number,
  currentPage: number,
  rowsPerPage: number,
  handleRowsPerPageChange: any,
  handlePageChange: any,
  handleSelectedRowChange?: any,
  handleApplySelectedRows?: any
}

const CustomDatatable = (props: Props) => {
  const data = props.data;
  const columns = props.columns;
  const loading = props.loading;
  const totalRows = props.totalRows;
  const defaultPage = props.currentPage;
  const rowsPerPage = props.rowsPerPage;

  const handleRowsPerPageChange = (x: number) => {
    props.handleRowsPerPageChange(x);
  }

  const handlePageChange = (x: number) => {
    props.handlePageChange(x);
  }

  const handleSelectedRowChange = (row) => {
    props.handleSelectedRowChange(row);
  }

  const handleApplySelectedRows = (row: any) => {
    console.log('====================================');
    console.log(row);
    console.log('====================================');
  }

  return (
    <>
      <DataTable
        dense
        pagination
        paginationServer
        columns={columns}
        data={data}
        progressPending={loading}
        paginationTotalRows={totalRows}
        paginationDefaultPage={defaultPage}
        paginationRowsPerPageOptions={[20, 50, 100, 200, 500]}
        paginationPerPage={rowsPerPage}
        striped={true}
        highlightOnHover={true}
        responsive
        onChangeRowsPerPage={handleRowsPerPageChange}
        onChangePage={handlePageChange}

        selectableRows
        onSelectedRowsChange={handleSelectedRowChange}
      // selectableRowSelected={handleApplySelectedRows}
      />
    </>
  );
}

export default CustomDatatable;