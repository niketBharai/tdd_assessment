class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
  }
}

const calculator = new StringCalculator();

console.log(calculator.add(""));
