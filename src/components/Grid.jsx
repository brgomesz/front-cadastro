import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import "./Grid.css";
const columns = ({ deleteUsers, favoriteUsers }) => [
  { field: "name", headerName: "Nome", width: 130 },
  { field: "age", headerName: "Idade", width: 130 },
  { field: "email", headerName: "E-mail", width: 130 },
  { field: "city", headerName: "Cidade", width: 130 },
  {
    field: "actions",
    headerName: "Ações",
    width: 130,
    renderCell: (params) => (
      <div>
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

        <button
          onClick={() => favoriteUsers(params.row.id, params.row.fav)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color: params.row.fav ? "red" : "gray",
            fontSize: "20px",
            marginLeft:"10px"
          }}
        >
          ❤
        </button>
      </div>
    ),
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ rows, deleteUsers, favoriteUsers }) {
  return (
    <Paper sx={{ height: 400, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns({ deleteUsers, favoriteUsers })}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ borderRadius: "10px" }}
      />
    </Paper>
  );
}
