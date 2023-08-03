import { useRef } from "react";
import { Controller } from "react-hook-form";
import { Box, Button, Stack, Typography, useTheme, Link } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ErrorMessage } from "@hookform/error-message";
import { IFormFields } from "interfaces/forms";
import TextInput from "components/textInput";

const RightSection = ({ errors, control, handleFormReset }: IFormFields) => {
  const theme = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<HTMLInputElement>(null);

  return (
    <Stack gap="16px" sx={{ flex: 1, paddingInline: "16px" }}>
      <Controller
        control={control}
        name="coverImage"
        rules={{
          required: "Cover Image is required",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Stack gap="16px" sx={{ alignSelf: "center", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              <Box
                {...(value
                  ? {
                      component: "img",
                      alt: "book cover",
                      src:
                        typeof value !== "string"
                          ? URL.createObjectURL(value)
                          : value,
                    }
                  : {})}
                sx={{
                  background: value ? "" : theme.palette.secondary.main,
                  width: "128px",
                  height: "200px",
                  borderRadius: "8px",
                  border: `1px solid ${theme.palette.grey[500]}`,
                  boxShadow: `8px 8px ${theme.palette.grey[500]}`,
                }}
              />
              <BookmarkIcon
                color="disabled"
                sx={{ position: "absolute", bottom: "-16px", left: "24px" }}
              />
            </Box>
            <Typography>
              Best dimensions for book cover image are 128*200
            </Typography>

            <Box component="label" htmlFor="image-input">
              <TextInput
                inputProps={{
                  accept: "image/*",
                }}
                inputRef={fileRef}
                id="image-input"
                hidden
                sx={{ display: "none" }}
                onChange={(e) => {
                  onChange(
                    (e?.target as EventTarget & HTMLInputElement)?.files?.[0]
                  );
                }}
                type="file"
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => fileRef?.current?.click()}
                sx={{ borderRadius: "8px", textTransform: "none" }}
              >
                Upload Book Cover *
              </Button>
            </Box>
            <ErrorMessage
              style={{
                color: theme.palette.error.main,
                marginTop: "16px",
              }}
              errors={errors}
              name="coverImage"
              as="p"
            />
          </Stack>
        )}
      />
      <Controller
        control={control}
        name="link"
        rules={{
          required: "Book PDF is required",
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Stack gap="16px" sx={{ alignSelf: "center", alignItems: "center" }}>
            <Box component="label" htmlFor="file-input">
              <TextInput
                inputProps={{
                  accept: "application/pdf",
                }}
                inputRef={pdfRef}
                id="file-input"
                hidden
                sx={{ display: "none" }}
                onChange={(e) => {
                  onChange(
                    (e?.target as EventTarget & HTMLInputElement)?.files?.[0]
                  );
                }}
                type="file"
              />
              {value ? (
                <Link
                  href={URL.createObjectURL(value)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview PDF
                </Link>
              ) : (
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => pdfRef?.current?.click()}
                  sx={{ borderRadius: "8px", textTransform: "none" }}
                >
                  Upload Book PDF *
                </Button>
              )}
            </Box>
            <ErrorMessage
              style={{
                color: theme.palette.error.main,
                marginTop: "16px",
              }}
              errors={errors}
              name="link"
              as="p"
            />
          </Stack>
        )}
      />
      <Controller
        name="brief"
        control={control}
        rules={{
          required: "Book Brief is required",
          maxLength: {
            value: 800,
            message: "Book Brief has a max length of 800 characters",
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <TextInput
            id="brief"
            multiline
            fullWidth
            rows={6}
            errorMessage={error?.message}
            placeholder="Book Brief *"
            {...field}
            variant="standard"
            helperText={`${field.value.length}/800`}
            InputProps={{ disableUnderline: true }}
            sx={{
              p: 1,
              "& .MuiFormHelperText-root": { textAlign: "right" },
            }}
          />
        )}
      />
      <Stack direction="row" gap="16px" justifyContent="end">
        <Button
          onClick={handleFormReset}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            background: theme.palette.grey[500],
            color: "black",
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ textTransform: "none", borderRadius: "8px" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default RightSection;
