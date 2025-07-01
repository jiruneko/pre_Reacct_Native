const numbers = [1, 2, 3, 4]
console.log(numbers);
for (let i = 0; i < numbers.length; i += 1) {
    // console.log(i)
    console.log(numbers[i]);
}

let sum = 0
for (let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i]
}
console.log(sum)

numbers.forEach((num) => {
    console.log(num)
})

numbers.forEach((num) => {
    console.log(sum + num)
})