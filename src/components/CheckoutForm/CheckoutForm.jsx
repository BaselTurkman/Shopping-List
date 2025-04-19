import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

export default function CheckoutForm({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle p>Confirm Purchase</DialogTitle>
      <DialogContent>
        <DialogContentText mt={2} p={1}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            sx={{ mt: 1, px: 1 }}
          />
          <TextField
            id="standard-basic"
            label="username"
            variant="standard"
            fullWidth
            sx={{ mt: 1, px: 1 }}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" variant="contained">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
