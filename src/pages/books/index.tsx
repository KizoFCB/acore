import { useState, useEffect } from "react";
import { Stack, Typography, useTheme, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { BOOKS_COLUMNS, BOOKS_ROWS } from "utils/constants/books";

const Books = () => {
  const theme = useTheme();
  const [rows, setRows] = useState(BOOKS_ROWS);
  const [columns, setColumns] = useState(BOOKS_COLUMNS);

  useEffect(() => {
    setColumns((columns) => {
      return columns.map((column) => {
        if (column?.field === "actions")
          return {
            ...column,
            renderCell: () => {
              return (
                <Stack direction="row" gap="16px">
                  <VisibilityIcon />
                  <EditIcon />
                  <DeleteIcon />
                </Stack>
              );
            },
          };
        else return column;
      });
    });
  }, []);

  return (
    <Stack gap="16px" sx={{ marginTop: "16px" }}>
      <Typography variant="h4">Books</Typography>
      <Stack
        sx={{
          height: "100%",
          // borderRadius: "40px 0 0 40px",
        }}
      >
        <Box
          sx={{
            height: 400,
            width: "100%",
            background: theme.palette.secondary.main,
            borderRadius: "16px",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            sx={{
              borderRadius: "16px",
            }}
            pageSizeOptions={[6]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Books;
