const phoneFormatter = (digits: string | number): string => {
    const stringInput = digits.toString()
    if (stringInput.length !== 10) {
        return 'error: input should be 10 numbers'
    }
    const formattedArr = Array.from(stringInput)
    formattedArr.splice(0, 0, '(')
    formattedArr.splice(4, 0, ')')
    formattedArr.splice(-4, 0, '-')
    return formattedArr.join('')
}
console.log(phoneFormatter(4155448375));
const x = 10
export {phoneFormatter, x};