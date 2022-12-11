let input = document.querySelector('.input_eng');
let power = "";
let remembered = 0;

function insert_eng(num) {
  if (input.textContent == 0) {
    input.textContent = "";
    input.textContent += num;
  } else {
    input.textContent += num;
  }
}

function clean_eng() {
  input.textContent = "0";
  power = "";
}

function back_eng() {
  let exp = input.textContent;
  input.textContent = exp.substring(0, exp.length - 1);
  if (input.textContent == 0) {
    input.textContent = "0";
  }
}

function equal_eng() {
  let exp = input.textContent;
  if (input.textContent.includes('^')) {
    let tmp = input.textContent.split('^');
    let num = eval(power);
    let pow = +tmp[1];
    input.textContent = Math.pow(num, pow);
    power = "";
    return;
  }
  if (exp) {
    input.textContent = eval(exp);
  }
}

function percent() {
  input.textContent = eval(input.textContent) / 100
}

function constant(name) {
  if (input.textContent == 0) {
    input.textContent = "";
  }
  if (name == "pi") {
    input.textContent += Math.PI.toFixed(8);
  }
  if (name == "e") {
    input.textContent += Math.E.toFixed(8);
  }
}

function operation(name) {
  if (name == "sqrt") {
    input.textContent = Math.sqrt(eval(input.textContent));
  }
  if (name == "sqr") {
    input.textContent = Math.pow(eval(input.textContent), 2);
  }
  if (name == "^-1") {
    input.textContent = Math.pow(eval(input.textContent), -1);
  }
  if (name == "^") {
    power = input.textContent;
    input.textContent += "^";
  }
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
  input.textContent = factorial(+eval(input.textContent));
}

function log(name) {
  if (name == "lg") {
    input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
  }
  if (name == "In") {
    input.textContent = Math.log(eval(input.textContent)).toFixed(8);
  }
}

document.querySelector('.type').addEventListener('click', function () {
  if (document.querySelector('.type').textContent == "deg") {
    this.textContent = "rad";
  } else if (document.querySelector('.type').textContent == "rad") {
    this.textContent = "deg";
  }
})

function f(name) {
  if (name == "sin") {
    if (document.querySelector('.type').textContent == "deg") {
      input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if (name == "cos") {
    if (document.querySelector('.type').textContent == "deg") {
      input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if (name == "tan") {
    if (document.querySelector('.type').textContent == "deg") {
      input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
    }
  }
  if (name == "ctg") {
    if (document.querySelector('.type').textContent == "deg") {
      input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
    } else {
      input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)).toFixed(8).toString());
    }
  }
}

function memory(name) {
  if (name == "clear_memory") {
    remembered = 0;
  }
  if (name == "call_memory") {
    if (input.textContent == 0) {
      input.textContent = "";
      input.textContent += remembered;
    } else {
      input.textContent += remembered;
    }
  }
  if (name == "add_memory") {
    let exp = remembered + eval(input.textContent);
    remembered = eval(exp);
  }
  if (name == "sub_memory") {
    let exp = remembered - eval(input.textContent);
    remembered = eval(exp);
  }
}

// Калькулятор оценок
let divisible = 0
let divider = 0
let n = 1

document.querySelector('button.add_marks_btn').addEventListener('click', function (e) {
  let t = document.getElementById("tag").value
  let m = document.getElementById("mark").value
  let c = document.getElementById("coefficient").value
  if (c == null || c == "") {
    c = "1"
  }
  divisible += eval(m * c)
  divider += eval(c)
  let middle = eval(divisible / divider)
  middle = Math.round(middle * Math.pow(10, 2)) / Math.pow(10, 2);
  document.getElementById("middle_mark").innerHTML = `Средний балл: ${middle}.`
  let rounded = Math.round(middle)
  document.getElementById("final_mark").innerHTML = `Итоговая оценка: ${rounded}.`
  if (rounded == "5") {
    document.getElementById("final_mark").style.color = "green"
  } else if (rounded == "4") {
    document.getElementById("final_mark").style.color = "lightgreen"
  } else if (rounded == "3") {
    document.getElementById("final_mark").style.color = "orange"
  } else if (rounded == "2") {
    document.getElementById("final_mark").style.color = "red"
  } else {
    document.getElementById("final_mark").style.color = "blue"
  }
  document.querySelector('.list').insertAdjacentHTML('beforeend',
    ` 
<tr>
<td>${n}</td>
<td>${t}</td>
<td>${m}</td>
<td>${c}</td>
</tr>      
`)
  n++
})

document.querySelector('button.clear_marks_btn').addEventListener('click', function (e) {
  divisible = 0
  divider = 0
  n = 1
  document.getElementById("tag").value = ""
  document.getElementById("mark").value = ""
  document.getElementById("coefficient").value = ""
  document.querySelector('.list').innerHTML = ""
  document.getElementById("middle_mark").innerHTML = `Средний балл: 0.`
  document.getElementById("final_mark").innerHTML = `Итоговая оценка: 0.`
  document.getElementById("final_mark").style.color = "black"
})
