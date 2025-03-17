// logical operator = used to combine or manipulate boolean values
//                    (true or false)

//                    AND = &&
//                    OR  = ||
//                    NOT = !

const temp = -20;

if (temp <= 0 || temp > 30) {
  console.log("bad");
} else {
  console.log("good");
}

const isSunny = true;

if (!isSunny) {
  console.log("not sunny");
} else {
  console.log("it is sunny");
}
