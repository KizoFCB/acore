import { IDeleteDialogProps } from "interfaces/components/deleteDialog";
import {
  Button,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DeleteDialog = ({
  open,
  handleClose,
  handleConfirmation,
}: IDeleteDialogProps) => {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "16px",
          minWidth: "700px",
          padding: "8px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">Delete Book?</DialogTitle>
      <DialogContent sx={{ marginTop: "8px" }}>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this Book?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            background: theme.palette.grey[500],
            color: "black",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirmation}
          color="error"
          sx={{ textTransform: "none", borderRadius: "8px" }}
          variant="contained"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
