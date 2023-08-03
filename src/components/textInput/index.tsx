import { ErrorMessage } from "@hookform/error-message";
import { FormControl, TextField, useTheme } from "@mui/material";
import { ITextField } from "interfaces/components/textField";

const TextInput = ({ errorMessage, errors, sx, ...rest }: ITextField) => {
  const theme = useTheme();
  return (
    <FormControl>
      <TextField
        {...rest}
        error={!!errorMessage}
        sx={{ justifyContent: "center", ...sx }}
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
