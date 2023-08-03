import {
  Stack,
  Select,
  MenuItem,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextInput from "components/textInput";
import { IFormFields } from "interfaces/forms";

const LeftSection = ({ errors, control }: IFormFields) => {
  const theme = useTheme();
  return (
    <Stack gap="16px" sx={{ flex: 1 }}>
      <Controller
        control={control}
        name="title"
        rules={{
          required: "Book Title is required",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            id="title"
            value={value}
            variant="standard"
            type="text"
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            errorMessage={error?.message || ""}
            placeholder="Book title *"
            errors={errors}
            InputProps={{ disableUnderline: true }}
          />
        )}
      />
      <Controller
        control={control}
        name="author"
        rules={{
          required: "Book Author is required",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            id="author"
            value={value}
            variant="standard"
            type="text"
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            errorMessage={error?.message || ""}
            placeholder="Book Author *"
            errors={errors}
            InputProps={{ disableUnderline: true }}
          />
        )}
      />
      <Controller
        name="category"
        control={control}
        rules={{
          required: "Book Category is required",
        }}
        render={({ field, fieldState: { error } }) => (
          <Box sx={{ width: "100%" }}>
            <Select
              fullWidth
              displayEmpty
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              renderValue={(value) => (value ? value : "Categories *")}
              sx={{
                height: "50px",
                borderRadius: "8px",
                backgroundColor: theme.palette.grey[500],
                "& .MuiInputBase-input": {
                  opacity: field?.value ? 1 : 0.5,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
              }}
              inputProps={{ "aria-label": "category" }}
            >
              {["First Category", "Second Category"]?.map((category) => (
                <MenuItem value={category} key={category}>
                  <Typography>{category}</Typography>
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage
              style={{
                color: theme.palette.error.main,
                marginTop: "16px",
              }}
              errors={errors}
              name="category"
              as="p"
            />
          </Box>
        )}
      />
      <Controller
        control={control}
        name="price"
        rules={{
          required: "Book Price is required",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            id="price"
            value={value}
            variant="standard"
            type="number"
            fullWidth
            onChange={(event) =>
              onChange(parseFloat(event.target.value).toFixed(2))
            }
            errorMessage={error?.message || ""}
            placeholder="Book Price *"
            errors={errors}
            InputProps={{ disableUnderline: true }}
            sx={{
              position: "relative",
              "& input": {
                paddingLeft: "8px",
              },
              ...(value
                ? {
                    "&:before": {
                      position: "absolute",
                      content: '"$"',
                      left: "8px",
                      top: "15px",
                    },
                  }
                : {}),
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="version"
        rules={{
          required: "Book Version is required",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            id="version"
            value={value}
            variant="standard"
            type="text"
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            errorMessage={error?.message || ""}
            placeholder="Book Version *"
            errors={errors}
            InputProps={{ disableUnderline: true }}
          />
        )}
      />
      <Controller
        name="olderVersion"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Box sx={{ width: "100%" }}>
            <Select
              fullWidth
              displayEmpty
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              renderValue={(value) => (value ? value : "Book Older Version")}
              sx={{
                height: "50px",
                borderRadius: "8px",
                backgroundColor: theme.palette.grey[500],
                "& .MuiInputBase-input": {
                  opacity: field?.value ? 1 : 0.5,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
              }}
              inputProps={{ "aria-label": "version" }}
            >
              {["1", "2"]?.map((version) => (
                <MenuItem value={version} key={version}>
                  <Typography>{version}</Typography>
                </MenuItem>
              ))}
            </Select>
            <ErrorMessage
              style={{
                color: theme.palette.error.main,
                marginTop: "16px",
              }}
              errors={errors}
              name="olderVersion"
              as="p"
            />
          </Box>
        )}
      />
      <Controller
        control={control}
        name="edition"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            id="edition"
            value={value}
            variant="standard"
            type="text"
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            errorMessage={error?.message || ""}
            placeholder="Book Edition"
            errors={errors}
            InputProps={{ disableUnderline: true }}
          />
        )}
      />
      <Controller
        control={control}
        name="isbn"
        rules={{
          required: "Book ISBN is required",
          pattern: {
            value: /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/,
            message: "Please enter a valid ISBN format",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            id="isbn"
            value={value}
            variant="standard"
            type="text"
            fullWidth
            onChange={(event) => onChange(event.target.value)}
            errorMessage={error?.message || ""}
            placeholder="Book ISBN *"
            errors={errors}
            InputProps={{ disableUnderline: true }}
          />
        )}
      />
      <Controller
        control={control}
        name="releaseDate"
        render={({
          field: { onChange, value, name },
          fieldState: { error },
        }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              sx={{
                borderRadius: "8px",
                backgroundColor: theme.palette.grey[500],
                "& .MuiInputBase-input": {
                  opacity: value ? 1 : 0.5,
                  border: "none",
                  justifyContent: "center",
                  borderRadius: "8px",
                  paddingInline: "8px",
                  backgroundColor: theme.palette.grey[500],
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                },
              }}
              label="Book release date"
              value={value}
              onChange={(newValue) => onChange(newValue)}
            />
            <ErrorMessage
              style={{
                color: theme.palette.error.main,
                marginTop: "16px",
              }}
              errors={errors}
              name="releaseDate"
              as="p"
            />
          </LocalizationProvider>
        )}
      />
    </Stack>
  );
};

export default LeftSection;
