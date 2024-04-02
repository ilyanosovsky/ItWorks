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

console.log("sorted task result ->", sortedByLastName(contacts.results));


// Write a function to return the array of contacts in reverse order. Do not use the built-in reverse() method.

const sortedReverseByLastName = (contacts) => {
    return contacts.reduce((acc, curr) => {
        // Add each contact to the beginning of the new array
        acc.unshift(curr);
        return acc;
      }, []);
  };
  
  console.log("sorted reverse task result ->", sortedReverseByLastName(contacts.results));