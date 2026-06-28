function calculate(){
    const value1 =document.getElementById('value1').value
    const value2 =document.getElementById('value2').value
    const operator =document.getElementById('operator').value
    const result =document.getElementById('result')

    if (value1 ===''|| value2 === ''){
        result.textContent= '両方の数値を入力してください';
        return;
    }const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (operator === '/' && num2 === 0) {
        result.textContent = '0で割ることはできません。';
        return;
    }

    let answer;
    if (operator === '+') {
        answer = num1 + num2;
    } else if (operator === '-') {
        answer = num1 - num2;
    } else if (operator === '*') {
        answer = num1 * num2;
    } else if (operator === '/') {
        answer = num1 / num2;
    }

    result.textContent = `${num1} ${operator} ${num2} = ${answer}`;
}

document.getElementById('value1').addEventListener('input', calculate);
document.getElementById('value2').addEventListener('input', calculate);
document.getElementById('operator').addEventListener('change', calculate);
