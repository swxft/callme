const phoneFormatter = (digits) => {
    const formattedArr = Array.from(digits)
    formattedArr.splice(0, 0, '(')
    formattedArr.splice(4, 0, ')')
    formattedArr.splice(-4, 0, '-')
    return formattedArr.join('')
}
console.log(phoneFormatter('4448916577'))