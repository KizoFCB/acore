import { Stack } from "@mui/material";
import { IFormFields } from "interfaces/forms";
import LeftSection from "../leftSection";
import RightSection from "../rightSection";

const FormFields = ({ errors, control }: IFormFields) => {
  return (
    <Stack
      component="form"
      direction="row"
      justifyContent="space-between"
      alignItems="start"
      sx={{ padding: "32px" }}
    >
      <LeftSection errors={errors} control={control} />
      <RightSection errors={errors} control={control} />
    </Stack>
  );
};

export default FormFields;
