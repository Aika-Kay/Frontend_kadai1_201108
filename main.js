const buttonAdd = document.getElementById('button-add');
const buttonSub = document.getElementById('button-sub');
const buttonMul = document.getElementById('button-mul');
const buttonDiv = document.getElementById('button-div');

const getNum1 = () => {
  const num1 = document.getElementById('num1');
  return Number.parseFloat(num1.value);
};
const getNum2 = () => {
  const num2 = document.getElementById('num2');
  return Number.parseFloat(num2.value);
};

const showResult = (num) => {
  return document.getElementById('box').innerHTML = num;
};

buttonAdd.addEventListener('click', () => {
  const result = getNum1() + getNum2();
  return showResult(result);
});

buttonSub.addEventListener('click', () => {
  const result = getNum1() - getNum2();
  return showResult(result);
});

buttonMul.addEventListener('click', () => {
  const result = getNum1() * getNum2();
  return showResult(result);
});

buttonDiv.addEventListener('click', () => {
  const result = getNum1() / getNum2();
  return showResult(result);
});

