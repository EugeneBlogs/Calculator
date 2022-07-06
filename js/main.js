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