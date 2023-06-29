//Основы JS


// zadanie 1
function typeOfArg(arg)
{
  arg = typeof arg;
  return arg
}

console.log(typeOfArg(true))

//zadanie 2

// const a = () => console.log("a");
// const b = () => console.log("b");
// const c = a || b ? a() : b();
// console.log(c);

// //В консоль выведется:
// a
// undefined

//  a || b вернет функцию a, так как она является первым истинным значением в логическом операторе ИЛИ. Далее будет вызвана
//a()  и выведет строку "a" в консоль. Но, результат вызова функции a() это undefined, так как эта функция не возвращает никакое значение.
//Поэтому в консоль будет выведено "undefined".

// Функции
// zadanie 1

function sumOfNumbers() {
    let sum = 0;
    
    for (let i = 0; i < 5; i++) {
      if (typeof arguments[i] === 'number') {
        sum += arguments[i];
      }
    }
    
    return sum;
  }

  console.log(sumOfNumbers(10, "sadas", 15, true, 1))

  //Объекты и массивы
  // Zadanie 1 
  function convertArrToObj(arr) {
    const obj = {};
    
    arr.forEach((element, index) => {
      obj[index] = element;
    });
    
    return obj;
  }

  const arr = [14, 'Mastodon', false, 'Tool'];
  console.log(convertArrToObj(arr))

  //Zadanie 2

  function countFromArr(arr) {
    const counts = {};
    
    arr.forEach((element) => {
      if (counts[element]) {
        counts[element]++;
      } else {
        counts[element] = 1;
      }
    });
    
    return counts;
  }

  const arr2 = [1, 5, 5, 1, 'abc', 'abc'];
  console.log(countFromArr(arr2))

  //Прототипы, наследование
  // Zadanie 1

  
  Number.prototype.plus = function(num) {
    return this + num;
  };

  console.log((14).plus(6));


  // Асинхронная работа в JS
 
// console.log("start");
// setTimeout(() => console.log("timeout"), 0);
// new Promise((resolve, reject) => {
// console.log("promise constructor");
// reject();
// })
// .then(() => console.log("p1"))
// .catch(() => console.log("p2"))
// .catch(() => console.log("p3"))
// .then(() => console.log("p4"))
// .then(() => console.log("p5"));
// console.log("final")


// Выведется
// start
// promise constructor
// final
// p2
// p4
// p5
// timeout
