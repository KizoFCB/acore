import { useNavigate } from "react-router-dom";
import { Stack, Typography, useTheme, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import FormFields from "components/addBook/formFields";
import { BookFields } from "interfaces/forms";
import { pathnames } from "routes";

const AddBook = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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

  const handleFormReset = () => {
    reset();
    navigate(pathnames.BOOKS);
  };

  const onSubmit: SubmitHandler<BookFields> = (data) => {
    console.log("Add Book form values", data);
    if (isValid) {
      // TODO This should be an async function where we send the data to the server and maybe map the value beforehand to what the BE is expecting
      // TODO This should trigger a refetch to get all the books
      navigate(pathnames.BOOKS);
    }
  };

  return (
    <Stack gap="16px" sx={{ marginTop: "16px", height: "100%" }}>
      <Typography variant="h4">Add Book</Typography>

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

export default AddBook;
