// switch replaces many else if statements

let studentScore = 40;
let letterGrade;

switch(true){
    case studentScore >= 90:
        letterGrade = "A";
        break;
    case studentScore >= 80:
        letterGrade = "B";
        break;
    case studentScore >= 70:
        letterGrade = "C";
        break;
    case studentScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";

}
console.log(letterGrade);