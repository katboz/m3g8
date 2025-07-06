// I will first define the object

type Person = {
  fullName: string;
  dateOfBirth: string;
  children: number;
  country: string;
  knowsHowToProgram: boolean;
};

// I want to convert date of birth to age - I found this function that returns how many full years have passed sinced the year the person was born. 
function calculateAge(dob: string): number {
  const birthDate = new Date(dob);
  const ageDifMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
//Math abs ensures that the result is positive, it is actually not needed here, but its nice to practise.

// Array of the people in the file provided

const people: Person[] = [
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
    knowsHowToProgram:true
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
]


