import { contacts } from "../data/contacts.js";

console.log(contacts);

// Array Order Methods

// Write a function that takes the array of contacts and returns a new array sorted by last name.

const sortedByLastName = (contacts) => {
  const sortedContacts = contacts.slice().sort((a, b) => {
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();

    if (lastNameA < lastNameB) {
      return -1; // lastNameA comes before lastNameB
    }
    if (lastNameA > lastNameB) {
      return 1; // lastNameA comes after lastNameB
    }
    return 0; // names are equal
  });
  return sortedContacts;
};

console.log(sortedByLastName(contacts.results));

