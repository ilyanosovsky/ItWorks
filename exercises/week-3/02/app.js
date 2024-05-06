people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = (str) => {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1); //add the rest of str normally return capitalizedStr
  return capitalizedStr;
};

const getAge = (age) => {
  if (age < 21) {
    return "an underage";
  } else if (age > 55) {
    return "55+";
  } else {
    return age + " year old";
  }
};

const getProfession = (job) => {
  const words = job.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  const result = words.join(" ");
  return result;
};

const getLocation = (country, city) => {
  let location = "";
  location += capitalize(city) + ", " + capitalize(country);
  return location;
};

const getPhrase = (phrase) => {
  let catchphrase = "";
  catchphrase += capitalize(phrase);
  return catchphrase;
};

const getSummary = (person) => {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += `${getProfession(person.profession)}`; //call function for profession
  summary += ` from ${getLocation(person.country, person.city)}.`; //call function for country + city
  summary += ` ${capitalize(person.name)} loves to say "${getPhrase(
    person.catchphrase
  )}".`; //call function for catchphrasereturn summary
  return summary;
};

const summary = () => {
  for (i = 0; i < people_info.length; i++) {
    console.log(getSummary(people_info[i]));
  }
};

summary();

const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const getCleaned = (sentence) => {
  let cleanedSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    // Check if the character is not in the list of special characters
    if (!specialChars.includes(char)) {
      cleanedSentence += char;
    }
  }
  return cleanedSentence;
};

const getCounter = (sentence) => {
  const words = sentence.split(/\s+/);
  // Loop through the array of words
  words.forEach((word) => {
    // Convert the word to lowercase to make counting case-insensitive
    const lowercaseWord = word.toLowerCase();
    // Check if the word already exists in the object
    if (wordCounts[lowercaseWord]) {
      // If it does, increment its count
      wordCounts[lowercaseWord]++;
    } else {
      // If it doesn't, add it to the object with a count of 1
      wordCounts[lowercaseWord] = 1;
    }
  });
  return wordCounts;
};

const getResult = (story) => {
    const cleanedSent = getCleaned(story);

    getCounter(cleanedSent);

    for (let word in wordCounts) {
        console.log(`${word}: ${wordCounts[word]}`);
    }
};

getResult(story);