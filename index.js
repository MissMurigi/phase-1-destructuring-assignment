 // String

// 1. Animal Sounds
const animalSounds = {
  cow: "moo",
  horse: "neigh",
  sheep: "baa",
  pig: "oink",
  chicken: "cluck"
};
const { moo, neigh, baa, oink, cluck } = animalSounds;
console.log(moo);    
console.log(neigh);  
console.log(baa);    
console.log(oink);  
console.log(cluck);  

// 2. Traditional Animals
const traditionalAnimals = ["cow", "sheep", "pig", "chicken"];
const [bessie, dolly, babe, little] = traditionalAnimals;

// 3. Animal Colors
const animalColors = ["cow", "sheep", "pig"];
const [blackAndWhite, black, pink] = animalColors;

// 4. Rainbow Colors
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// 5. Rainbow Colors Using Initials
const rainbowColorsInitials = ["red", "orange", "yellow", "green", "blue", "violet"];
const [r, o, y, g, b, v] = rainbowColorsInitials;

// 6. Indigo with Custom Variable
const [ , , , , , indg] = rainbowColors;

// 7. Object Destructuring
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
const { muppetName, color, song, job, partner } = muppet;

// 8. Nested Object Destructuring
const muppetDetails = {
  songs: [
    "The Rainbow Connection",
    "Moving Right Along",
    "Never Before, Never Again",
    "I Hope That Something Better Comes Along"
  ],
  details: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};
const [ , song2, , song4] = muppetDetails.songs;
const { job: nestedJob, partner: nestedPartner } = muppetDetails.details;

