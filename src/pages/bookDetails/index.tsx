import { useNavigate, useParams } from "react-router-dom";
import { Stack, Typography, useTheme, Box, Button, Chip } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookCover from "assets/book.jpeg";

import { pathnames } from "routes";
import { BOOKS_ROWS } from "utils/constants/books";

const BookDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id: bookId } = useParams();
  const book = BOOKS_ROWS[+(bookId || "0")];

  const handleEditBook = (bookId: string) =>
    navigate(pathnames.EDIT_BOOK.replace(":id", bookId));
  const handleDeleteBook = (bookId: string) => {};

  return (
    <Stack gap="16px" sx={{ marginTop: "16px", height: "100%" }}>
      <Typography variant="h4">Book Details</Typography>

      <Stack
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: theme.palette.secondary.main,
            borderRadius: "16px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            sx={{ padding: "32px" }}
          >
            <Stack gap="32px">
              <Stack direction="row" gap="32px">
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    alt="book cover"
                    src={BookCover}
                    sx={{
                      width: "150px",
                      height: "200px",
                      borderRadius: "8px",
                      boxShadow: `8px 8px ${theme.palette.grey[500]}`,
                    }}
                  />
                  <BookmarkIcon
                    color="disabled"
                    sx={{ position: "absolute", bottom: "-16px", left: "24px" }}
                  />
                </Box>
                <Stack gap="24px">
                  <Typography variant="subtitle1">{book?.title}</Typography>
                  <Stack direction="row" gap="16px">
                    <Stack>
                      <Typography variant="subtitle2" color="primary">
                        478
                      </Typography>
                      <Typography
                        fontWeight={600}
                        color={theme.palette.grey[500]}
                      >
                        Pages
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography variant="subtitle2" color="primary">
                        20h
                      </Typography>
                      <Typography
                        fontWeight={600}
                        color={theme.palette.grey[500]}
                      >
                        To read
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" gap="128px">
                <Stack gap="16px">
                  <Typography>{`By ${
                    book?.author
                  } | ${new Date().toDateString()}`}</Typography>
                  <Typography color="primary">$1</Typography>
                  <Typography>{`ISBN: ${book?.isbn}`}</Typography>
                  <Typography>{`Version: ${book?.version}`}</Typography>
                  <Chip label="Medical genetics" />
                </Stack>
                <Stack>
                  <Typography variant="subtitle1">Brief</Typography>
                  <Typography>Book brief should be written here</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" gap="8px">
              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "8px", textTransform: "none" }}
                onClick={handleDeleteBook?.bind(null, bookId || "")}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "8px", textTransform: "none" }}
                onClick={handleEditBook?.bind(null, bookId || "")}
              >
                Edit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default BookDetails;
