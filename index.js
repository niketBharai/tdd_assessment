class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[,\n]/;

    const numArray = numbers.split(delimiter).map(Number);

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

const calculator = new StringCalculator();

console.log(calculator.add(""));
console.log(calculator.add("1"));
console.log(calculator.add("1,5"));
