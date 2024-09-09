import DataTable from "react-data-table-component";

const CustomDatatable = (props: object) => {
  const data = props.data;
  const columns = props.columns;
  const loading = props.loading;
  const changePage = props.changePage;
  const totalRows = props.totalRows ?? 20;
  const handlePerRowsChange = props.handlePerRowsChange;
  return (
    <>
      <DataTable
        progressPending={loading}
        columns={columns}
        data={data}
        // selectableRows
        dense
        pagination
        // paginationServer
        paginationPerPage={20}
        paginationRowsPerPageOptions={[20, 50, 100, 200, 500]}
        persistTableHead={true}
        striped={true}
        highlightOnHover={true}
        responsive
        // pointerOnHover={true}
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={changePage}
      />
    </>
  );
}

export default CustomDatatable;