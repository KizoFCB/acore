import { ErrorMessage } from "@hookform/error-message";
import { FormControl, TextField, useTheme } from "@mui/material";
import { ITextField } from "interfaces/components/textField";

const TextInput = ({ errorMessage, errors, ...rest }: ITextField) => {
  const theme = useTheme();
  return (
    <FormControl>
      <TextField {...rest} error={!!errorMessage} />
      <ErrorMessage
        style={{
          color: theme.palette.error.main,
          marginTop: "16px",
        }}
        errors={errors}
        name={rest?.name || ""}
        as="p"
      />
    </FormControl>
  );
};

export default TextInput;
