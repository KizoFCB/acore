import { IDeleteDialogProps } from "interfaces/components/deleteDialog";
import {
  Button,
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
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Book?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this book?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirmation} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
