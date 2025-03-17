// SWITCH = can be an efficient replacement to many if statement

let day = 7;

switch (day) {
  case 1:
    console.log("it is monday");
    break;
  case 2:
    console.log("it is Tuesday");
    break;
  case 3:
    console.log("it is Wednesday");
    break;
  case 4:
    console.log("it is Thusday");
    break;
  case 5:
    console.log("it is Friday");
    break;
  case 6:
    console.log("it is Saturday");
    break;
  case 7:
    console.log("it is Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}

let testScore = 66;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  case testScore >= 50:
    letterGrade = "E";
    break;
  default:
    letterGrade = "F";
}

console.log(letterGrade);
