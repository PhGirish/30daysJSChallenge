//task1
function checkpositive(a){
    if(a>0){
        console.log("positive")
    }
    else if(a==0){
        console.log("zero")
    }
    else{
        console.log("negative")
    }
}

checkpositive(0)

//tsak2
function eligibletovote(age){
    if(age>=18){
        console.log("eligible")
        
    }
    else{
        console.log('not old enough');
    }
}
eligibletovote(17)

//task3
function largestnumber(a,b,c){
    if(a>b&&a>c){
        console.log(a)
    }
    else if(b>a&&b>c){
        console.log(b)
    }
    else{
        console.log(c)
    }

}
largestnumber(3,2,1)

//task4

function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
            break;
    }
    console.log(dayName)
    return dayName;
    
}

getDayOfWeek(7)

//task5
function gradeCalculator(grade) {
    let res;

    switch (true) {
        case grade < 30:
            res = "Fail";
            break;
        case grade >= 30 && grade < 60:
            res = "Pass";
            break;
        case grade >= 60 && grade < 70:
            res = "1st Class";
            break;
        case grade >= 70:
            res = "Distinction";
            break;
        default:
            res = "Oops";
            break;
    }

    console.log(res); 
    return res; 
}

gradeCalculator(10); 















//task6

function oddeven(a){
    a%2==0?console.log('even'):console.log('odd');;
}
oddeven(7)

//task7

function leapyear(year){
  if((year%4==0 && year%100!==0) ||  (year%400==0)){
    console.log("leap year")
  }
  else{
    console.log("not leap year")
  }

}

leapyear(2021)