import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, useTheme, Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { BOOKS_COLUMNS, BOOKS_ROWS } from "utils/constants/books";
import TextInput from "components/textInput";
import { pathnames } from "routes";

const Books = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [rows, setRows] = useState(BOOKS_ROWS);
  const [columns, setColumns] = useState(BOOKS_COLUMNS);
  const [searchValue, setSearchValue] = useState("");

  const handleAddBook = () => navigate(pathnames.ADD_BOOK);
  const handleEditBook = (bookId: string) =>
    navigate(pathnames.EDIT_BOOK.replace(":id", bookId));
  const handleViewBook = (bookId: string) =>
    navigate(pathnames.BOOK_DETAILS.replace(":id", bookId));
  const handleDeleteBook = (bookId: string) => {};

  const handleSearchChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchKeyDown:
    | React.KeyboardEventHandler<HTMLDivElement>
    | undefined = (e) => {
    if (e.key === "Enter") {
      setRows(
        BOOKS_ROWS?.filter(
          (book) =>
            book?.title?.startsWith(searchValue) ||
            book?.author?.startsWith(searchValue)
        )
      );
    }
  };

  useEffect(() => {
    setColumns((columns) => {
      return columns.map((column) => {
        if (column?.field === "actions")
          return {
            ...column,
            renderCell: (params) => {
              return (
                <Stack direction="row" gap="16px">
                  <VisibilityIcon
                    onClick={handleViewBook?.bind(null, params?.row?.id)}
                    sx={{ cursor: "pointer", "& :hover": { color: "blue" } }}
                  />
                  <EditIcon
                    onClick={handleEditBook?.bind(null, params?.row?.id)}
                    sx={{ cursor: "pointer", "& :hover": { color: "green" } }}
                  />
                  <DeleteIcon
                    onClick={handleDeleteBook?.bind(null, params?.row?.id)}
                    sx={{ cursor: "pointer", "& :hover": { color: "red" } }}
                  />
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
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TextInput
          name="search"
          variant="standard"
          value={searchValue}
          onKeyDown={handleSearchKeyDown}
          onChange={handleSearchChange}
          placeholder="Search"
          sx={{
            background: theme.palette.secondary.main,
            borderRadius: "8px",
            paddingInline: "8px",
            width: "350px",
            height: "40px",
          }}
          InputProps={{
            endAdornment: <SearchIcon />,
            disableUnderline: true,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBook}
          sx={{ borderRadius: "8px", textTransform: "none" }}
        >
          + Add Book
        </Button>
      </Stack>
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
              padding: "8px",
            }}
            pageSizeOptions={[6]}
            checkboxSelection={false}
            disableRowSelectionOnClick
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Books;
