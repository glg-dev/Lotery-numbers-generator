number1.addEventListener("input", (e) => {
  const howManyRegularNumbers = Math.floor(e.target.value);
  let regularNumbersArray = [];
  regularContainer.innerHTML = "";
  for (let i = 0; i < howManyRegularNumbers; i++) {
    generate(50, regularNumbersArray);
  }
  regularNumbersArray.map((number, index) => {
    regularContainer.innerHTML += `
      <div>
        <span class="regular">${number}</span>
        <span class="index">${index + 1}</span>
      </div>
    `;
  });
});

number2.addEventListener("input", (e) => {
  const howManyChanceNumbers = Math.floor(e.target.value);
  let chanceNumbersArray = [];
  chanceContainer.innerHTML = "";
  for (let i = 0; i < howManyChanceNumbers; i++) {
    generate(10, chanceNumbersArray);
  }
  chanceNumbersArray.map((number, index) => {
    chanceContainer.innerHTML += `
      <div>
        <span class="chance">${number}</span>
        <span class="index">${index + 1}</span>
      </div>
    `;
  });
});

const generate = (multiplicator, array) => {
  const generatedNumber = Math.floor(Math.random() * multiplicator) + 1;
  if (array.indexOf(generatedNumber) === -1) {
    array.push(generatedNumber);
  } else {
    generate(multiplicator, array);
  }
  return array;
};
