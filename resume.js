let name = "Joao Sousa";
let carrerField = "IT";
let description = " Just a normal guy";
let interest = ['games','movies','study','eating'];
let pastPosition = [{
    companyName: "Engesoftware",
    title: "Business analyst",
    shortDescription: "Gathering requirements"
},
    {
        companyName: "Ikhon",
        title: "Senior Business analyst",
        shortDescription: "meeting"
    },
    {
        companyName: "Foton",
        title: "Developer",
        shortDescription: "Java and stuffs"
    }
];

let skills = ['programming', 'business analsys', 'problem solver'];
function displaySkills(skill) {
    for (i = 0; i < skill.length; i++){
        console.log("* " + skill[i]);
    }
}
function displayPosition(previousExperience) {
    for (i = 0; i < previousExperience.length; i++){
        console.log("* " + previousExperience[i].title + " at " + previousExperience[i].companyName + " - " + previousExperience[i].shortDescription);
    }
}

console.log("Name: " + name.toUpperCase());
console.log("Career: " + carrerField);
console.log("Description: "+ description);

console.log("My Interests: ");
for (i = 0; i < interest.length; i++) {
    console.log("* " + interest[i]);
}

console.log("My previous experiences: ");
displayPosition(pastPosition);

console.log("My skills : ");
displaySkills(skills);