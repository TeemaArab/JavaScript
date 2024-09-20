// Date objects = objects that contain values that represent dates and times
//                These date objects can be changed and formatted
const date= new Date();
console.log(date);

// to create customized date and object, we have to pass an argument
// Date(year,month,day,hour,minute,second,ms)
const date2 = new Date(2024,0,1,2,3,4); //0 is January
console.log(date2);

// passing string time is also valid
const date3 = new Date("2024,09,20");
console.log(date3);

const year = date.getFullYear();
const month = date.getMonth();
console.log(month);
const date4 = date.getDate();
console.log(date4);

// we can also set the date 
const time= new Date();
time.setFullYear(2025);
