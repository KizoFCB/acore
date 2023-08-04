import { useNavigate, useParams } from "react-router-dom";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { BOOKS_ROWS } from "utils/constants/books";
import FormFields from "components/addBook/formFields";
import { BookFields } from "interfaces/forms";
import { pathnames } from "routes";
import { useEffect } from "react";

const EditBook = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id: bookId } = useParams();
  // TODO This also should be a request to fetch the book by id from the server and possibly map the values
  const book = BOOKS_ROWS[+(bookId || "0")];

  const defaultValues = {
    title: "",
    author: "",
    category: "",
    price: "",
    link: undefined,
    coverImage: undefined,
    version: "",
    olderVersion: "",
    edition: "",
    isbn: "",
    releaseDate: null,
    brief: "",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<BookFields>({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  useEffect(() => {
    reset({
      ...book,
    });
  }, [book]);

  const handleFormReset = () => {
    reset();
    navigate(pathnames.BOOKS);
  };

  const onSubmit: SubmitHandler<BookFields> = (data) => {
    console.log("Edit Book Form values", data);
    if (isValid) {
      // TODO This should an async function to edit the book on the server and refetch all the books
      navigate(pathnames.BOOKS);
    }
  };

  return (
    <Stack gap="16px" sx={{ marginTop: "16px", height: "100%" }}>
      <Typography variant="h4">Edit Book</Typography>

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
          <FormFields
            submitHandler={handleSubmit(onSubmit)}
            control={control}
            errors={errors}
            handleFormReset={handleFormReset}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default EditBook;
