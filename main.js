"use strict";
// I will first define the object
// I want to convert date of birth to age - I found this function that returns how many full years have passed sinced the year the person was born. 
function calculateAge(dob) {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
//Math abs ensures that the result is positive, it is actually not needed here, but its nice to practise.
// Array of the people in the file provided
const people = [
    {
        fullName: "Newton Espinho",
        dateOfBirth: "11/26/1973",
        children: 5,
        country: "Peru",
        knowsHowToProgram: false,
    },
    {
        fullName: "Jemima Tutill",
        dateOfBirth: "4/20/1989",
        children: 2,
        country: "China",
        knowsHowToProgram: false,
    },
    {
        fullName: "Dill Gawke",
        dateOfBirth: "11/25/1970",
        children: 3,
        country: "Chine",
        knowsHowToProgram: true
    },
    {
        fullName: "Yettie Petchell",
        dateOfBirth: "4/10/1988",
        children: 0,
        country: "Croatia",
        knowsHowToProgram: false,
    },
    {
        fullName: "Germayne Baxill",
        dateOfBirth: "2/9/1994",
        children: 2,
        country: "Colombia",
        knowsHowToProgram: true,
    },
];
//Is the first person in the array older than the last person?
// I will take first person from the array - people[0] is the first person, people[0].dateOfBirth gives the date of birth, calculateAge will give me the age and I will store it.
//const lastAge will give me age of last person. people[people.length - 1] is the last person. Again I will calculate age and save the result.
// and in console I will check if firstAge is greater than lastAge
const firstAge = calculateAge(people[0].dateOfBirth);
const lastAge = calculateAge(people[people.length - 1].dateOfBirth);
console.log("1. First person older than last?", firstAge > lastAge);
//Does the 2nd person have the same amount of kids as the 3rd?
/*console.log("2. Does the 2nd person have the same amount of kids as the 3rd?");
if (people[1].children === people[2].children) {
  console.log("Yes, they have the same amount of kids.");
} else {
  console.log("No, they do not have the same amount of kids.");
} */
//the code above is not working, not sure why, because for me logic is correct
//Because code above is not working I use simle solution than tells me if the second question is true or false. 
console.log("2. Does the 2nd person have the same amount of kids as the 3rd?", people[1].children === people[2].children);
// 3. Do 1st and 4th person both know how to program?
if (people[0].knowsHowToProgram && people[3].knowsHowToProgram) {
    console.log("3. Yay!");
}
else {
    console.log("3. LMGTFY");
}
// console should say LMGTFY as they dont know how to program. 
//Statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.
console.log("4. Greeting:");
switch (people[1].country) {
    case "Iceland":
        console.log("Hæ");
        break;
    case "Spain":
        console.log("Hola");
        break;
    case "Korea":
        console.log("여보세요");
        break;
    default:
        console.log("Hello");
}
// I decided to try to use a switch statement to check the 2nd person's nationality.
//I used the "default" in case the nationality.
//The console logs "Hello" since the person is not from Spain, Iceland nor Korea. 
