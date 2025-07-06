// I will first define the object
// I want to convert date of birth to age - I found this function that returns how many full years have passed sinced the year the person was born. 
function calculateAge(dob) {
    var birthDate = new Date(dob);
    var ageDifMs = Date.now() - birthDate.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
//Math abs ensures that the result is positive, it is actually not needed here, but its nice to practise.
// Array of the people in the file provided
var people = [
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
var firstAge = calculateAge(people[0].dateOfBirth);
var lastAge = calculateAge(people[people.length - 1].dateOfBirth);
console.log("1. First person older than last?", firstAge > lastAge);
