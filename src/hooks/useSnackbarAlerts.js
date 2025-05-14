import { useSnackbar } from "../context/snackbarProvider";

export function useSnackbarAlerts(){
    const {showSnackbar} = useSnackbar()

    const showSuccessSnackbar = (msg) => {
        showSnackbar(msg, "success")
    }

    const showInfoSnackbar = (msg) => {
        showSnackbar(msg, "info")
    }

    return {showSuccessSnackbar, showInfoSnackbar}
}