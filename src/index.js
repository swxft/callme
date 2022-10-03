const phoneFormatter = (digits) => {
    const stringInput = digits.toString()
    const formattedArr = Array.from(stringInput)
    formattedArr.splice(0, 0, '(')
    formattedArr.splice(4, 0, ')')
    formattedArr.splice(-4, 0, '-')
    return formattedArr.join('')
}
// console.log(phoneFormatter('4448916567'))
// console.log(phoneFormatter(4448916577))
console.log(phoneFormatter(4155448375))