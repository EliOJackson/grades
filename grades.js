var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var aGrade = 0;
var bGrade = 0;
var cGrade = 0;
var dGrade = 0;
var fGrade = 0;

var low = Math.min(...scores);
var high = Math.max(...scores);

// function scoreGrades (scores) {
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] < 60){
            fGrade ++;
        } else if (scores[i] < 70){
            dGrade ++;
        } else if (scores[i] < 80){
            cGrade ++;
        } else if (scores[i] < 90){
            bGrade ++;
        } else {
            aGrade ++;
        }
    };
    // return (scores);

     
// };
console.log("There are " + fGrade + " F grades");
console.log("There are " + dGrade + " D grades");
console.log("There are " + cGrade + " C grades");
console.log("There are " + bGrade + " B grades");
console.log("There are " + aGrade + " A grades");
console.log("The lowest grade is " + low);
console.log("The higest grade is " + high);


