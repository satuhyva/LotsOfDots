export enum Severity {
    ERROR = 'error',
    WARNING = 'warning',
    SUCCESS = 'success'
}

export type Alert = {
    isOpen: boolean,
    severity: Severity,
    message: string,
    onClose: () => void,
    autoHideDuration: number
}