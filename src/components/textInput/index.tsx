import { ErrorMessage } from "@hookform/error-message";
import { FormControl, TextField, useTheme } from "@mui/material";
import { ITextField } from "interfaces/components/textField";

// TODO This shared component could be furthermore generic by adding the same props that is used app-wide
const TextInput = ({ errorMessage, errors, sx, ...rest }: ITextField) => {
  const theme = useTheme();
  return (
    <FormControl>
      <TextField
        {...rest}
        error={!!errorMessage}
        sx={{
          justifyContent: "center",
          borderRadius: "8px",
          paddingInline: "8px",
          minHeight: "50px",
          backgroundColor: theme.palette.grey[500],
          ...sx,
        }}
      />
      {errors && (
        <ErrorMessage
          style={{
            color: theme.palette.error.main,
            marginTop: "16px",
          }}
          errors={errors}
          name={rest?.id || ""}
          as="p"
        />
      )}
    </FormControl>
  );
};

export default TextInput;
