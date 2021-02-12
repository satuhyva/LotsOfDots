export const getCodeValidity = (code: string): boolean => {
    const onlyNumbersRegex = /^[0-9]+$/
    return code.length === 6 && onlyNumbersRegex.test(code)
}