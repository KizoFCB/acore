import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Typography,
  useTheme,
  Box,
  Button,
  Pagination,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { BOOKS_COLUMNS, BOOKS_ROWS } from "utils/constants/books";
import TextInput from "components/textInput";
import { pathnames } from "routes";
import DeleteDialog from "components/deleteDialog";
import { BookFields } from "interfaces/forms";

const Books = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [deletedBookId, setDeletedBookId] = useState("");
  const [open, setOpen] = useState(false);
  // TODO This books array should be a BE request instead to fetch all books
  const [rows, setRows] = useState<BookFields[]>(BOOKS_ROWS);
  const [columns, setColumns] = useState<GridColDef[]>(BOOKS_COLUMNS);
  const [searchValue, setSearchValue] = useState("");

  const handleAddBook = () => navigate(pathnames.ADD_BOOK);
  const handleEditBook = (bookId: string) =>
    navigate(pathnames.EDIT_BOOK.replace(":id", bookId));
  const handleViewBook = (bookId: string) =>
    navigate(pathnames.BOOK_DETAILS.replace(":id", bookId));
  const handleDeleteBook = () => {
    // TODO This should actually be done on the server through a BE request and reflect a refetch for all books
    setRows((rows) => rows.filter((row) => row?.id !== +deletedBookId));
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setDeletedBookId("");
  };
  const handleOpen = (bookId: string) => {
    setDeletedBookId(bookId);
    setOpen(true);
  };

  const handleSearchChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchKeyDown:
    | React.KeyboardEventHandler<HTMLDivElement>
    | undefined = (e) => {
    // TODO This search should also be a BE request that is done on the server and reflected on the books request
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
                    onClick={handleOpen?.bind(null, params?.row?.id)}
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

  function CustomPagination() {
    // TODO This pagination should also be server side through a BE request and reflect on the request to fetch all books
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
    return (
      <Stack direction="row">
        <Pagination
          color="primary"
          count={pageCount}
          page={page + 1}
          sx={{
            "& .MuiPaginationItem-root": { borderRadius: "4px" },
          }}
          onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
      </Stack>
    );
  }

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
        }}
      >
        <Box
          sx={{
            height: "100%",
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
            slots={{
              pagination: CustomPagination,
            }}
            sx={{
              width: "100%",
              borderRadius: "16px",
              "& .MuiDataGrid-footerContainer": {
                background: theme.palette.grey[500],
              },
            }}
            pageSizeOptions={[6]}
            checkboxSelection={false}
            disableRowSelectionOnClick
          />
        </Box>
      </Stack>
      <DeleteDialog
        open={open}
        handleClose={handleClose}
        handleConfirmation={handleDeleteBook}
      />
    </Stack>
  );
};

export default Books;
