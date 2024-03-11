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

const summary = getSummary(people_info[2]);

console.log(summary);
