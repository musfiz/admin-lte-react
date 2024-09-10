import DataTable from "react-data-table-component";

const CustomDatatable = (props: object) => {
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
      />
    </>
  );
}

export default CustomDatatable;