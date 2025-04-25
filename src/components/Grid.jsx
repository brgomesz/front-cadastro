import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = ({ deleteUsers }) => [
  { field: "name", headerName: "Nome", width: 130 },
  { field: "age", headerName: "Idade", width: 130 },
  { field: "email", headerName: "E-mail", width: 130 },
  { field: "city", headerName: "Cidade", width: 130 },
  {
    field: "actions",
    headerName: "Ações",
    width: 130,
    renderCell: (params) => (
      <button
        onClick={() => deleteUsers(params.row.id)}
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        X
      </button>
    ),
  },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  //   },
];

// const rows = [{ name: user.name, age: user.age, email: user.email }];
// const rows = props.rows;

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ rows, deleteUsers }) {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns({ deleteUsers })}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
