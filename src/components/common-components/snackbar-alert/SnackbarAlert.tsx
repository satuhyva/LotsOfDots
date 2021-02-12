import React from 'react'
import { Alert } from '../../../types/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type SnackbarAlertProps = {
    alert: Alert
}

const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ alert }) => {
    return (
        <Snackbar id='snackbar-alert' open={alert.isOpen} autoHideDuration={alert.autoHideDuration} onClose={alert.onClose}>
            <MuiAlert variant='filled' severity={alert.severity} onClose={alert.onClose} id={`alert-${alert.severity}`}>
                {alert.message}
            </MuiAlert>
        </Snackbar>
    )
}

export default SnackbarAlert
