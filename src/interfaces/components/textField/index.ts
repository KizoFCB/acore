import { StandardTextFieldProps } from "@mui/material";
import { FieldErrors } from "react-hook-form";

export interface ITextField extends StandardTextFieldProps {
  errorMessage: string;
  errors: FieldErrors;
}
