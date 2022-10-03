const phoneFormatter = (digits: string | number): string => {
    const stringInput = digits.toString()
    const formattedArr = Array.from(stringInput)
    formattedArr.splice(0, 0, '(')
    formattedArr.splice(4, 0, ')')
    formattedArr.splice(-4, 0, '-')
    return formattedArr.join('')
}
console.log(phoneFormatter(4155448375));

export {phoneFormatter};