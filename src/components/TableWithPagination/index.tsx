import { DataGrid, DataGridProps } from "@mui/x-data-grid";

interface TDataTable extends DataGridProps {
  rows: any[];
  columns: any;
}

const DataTable = ({ rows, columns, ...props }: TDataTable) => {
  console.log(rows);
  console.log(props);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...props}
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
      />
    </div>
  );
};
export default DataTable;
