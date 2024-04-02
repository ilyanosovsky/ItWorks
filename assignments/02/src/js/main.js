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

const resultSortedByLastName = sortedByLastName(contacts.results);

console.log("sorted task result ->", resultSortedByLastName);

// Write a function to return the array of contacts in reverse order. Do not use the built-in reverse() method.

const sortedReverseByLastName = (contacts) => {
  return contacts.reduce((acc, curr) => {
    // Add each contact to the beginning of the new array
    acc.unshift(curr);
    return acc;
  }, []);
};

const resultReverseSortedByLastName = sortedReverseByLastName(contacts.results);

console.log("sorted reverse task result ->", resultReverseSortedByLastName);

//   Write a function that returns the first 5 contacts from the sorted list (by last name).

const getFirstFive = () => {
  return resultSortedByLastName.slice(0, 5);
};

const resultFirstFive = getFirstFive();

console.log("first five task result ->", resultFirstFive);

// Create a function that returns an array of all unique first names. No duplicates should be present.

const getOnlyUnique = (contacts) => {
  const unique = contacts.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  return unique;
};

const resultOnlyUnique = getOnlyUnique(contacts.results);

console.log("only unique task result ->", resultOnlyUnique);

// Write a function that concatenates the first and last name of each contact into a new array of full names.

const getFullName = (contacts) => {
  const fullName = contacts.map((contact) => {
    return contact.name.first + " " + contact.name.last;
  });
  return fullName;
};

const resultFullName = getFullName(contacts.results);

console.log("get full name task result ->", resultFullName);

// Looping Through Arrays
// Write a loop that iterates through the array and logs each contact's email to the console.

contacts.results.forEach((el) =>
  console.log("get emails task result ->", el.email)
);

// Write a function that takes an ID as a parameter and returns the contact with that ID.

const getContactById = (id) => {
  for (let i = 0; i < contacts.results.length; i++) {
    // Check if the ID of the current contact matches the provided ID
    if (contacts.results[i].id.value === id) {
      return contacts.results[i];
    }
  }
  return null;
};

const resultContactById = getContactById("204012150375");

console.log("contact by id task result ->", resultContactById);
