class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /[,\n]/;
    let tempNum = numbers;

    if (numbers.startsWith("//")) {
      const numWithDelimiter = numbers.split("\n");
      delimiter = new RegExp(numWithDelimiter[0].substring(2));
      tempNum = numWithDelimiter.slice(1).join("\n");
    }

    const numArray = tempNum.split(delimiter).map(Number);

    const negativeNumbers = numArray.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      console.log("negative numbers not allowed " + negativeNumbers.join(", "));
    }

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

const calculator = new StringCalculator();

console.log(calculator.add(""));
console.log(calculator.add("1"));
console.log(calculator.add("1,5"));
console.log(calculator.add("1\n2,3"));
console.log(calculator.add("//;\n1;2"));

console.log(calculator.add("-1,2"));
console.log(calculator.add("1,-2,-3"));
