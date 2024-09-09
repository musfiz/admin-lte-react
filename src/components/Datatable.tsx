import DataTable from "react-data-table-component";

const CustomDatatable = (props: object) => {
  const data = props.data;
  const columns = props.columns;
  const loading = props.loading;
  const totalRows = props.totalRows;

  const handlePerPage = (value1: number) => {
    props.changePerPage(value1);
  }

  const handlePage = (value: number) => {
    props.changePage(value);
  }

  return (
    <>
      <DataTable
        progressPending={loading}
        columns={columns}
        data={data}
        // selectableRows
        dense
        pagination
        paginationServer
        paginationRowsPerPageOptions={[20, 50, 100, 200, 500]}
        striped={true}
        highlightOnHover={true}
        responsive
        // pointerOnHover={true}
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerPage}
        onChangePage={handlePage}
      />
    </>
  );
}

export default CustomDatatable;