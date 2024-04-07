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

const getFullNames2 = (contacts) => {
  return contacts.map((contact) => Object.values(contact.name).join(" "));
};

console.log("results -----> ", getFullNames2(contacts.results));

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

// Create a function that counts how many contacts are from a specific country. The country should be a parameter of the function.

// const countByCountry = (country) => {
//   for (let i = 0; i < contacts.results.length; i++) {
//     if (contacts.results[i].location.country === country) {
//       i++;
//       return i;
//     }
//   }
//   return null;
// };

// const countCountry = (contacts) => {
//     return contacts.reduce((acc, contact) => {
//       if (!acc[contact.location.country]) {
//         acc[contact.location.country] = 0;
//       }
//       acc[contact.location.country]++;
//       return acc;
//     }, {});
//   };

function countContactsFromCountry(contacts, country) {
  return contacts.reduce((count, contact) => {
    return contact.location.country === country ? count + 1 : count;
  }, 0);
}

console.log("number of contacts with US ->", countContactsFromCountry(contacts.results, "United States"));

// const resultCounterByCountry = countByCountry("United States");

// console.log("number of contacts with US ->", resultCounterByCountry);

// Write a function that returns a new array of contacts that are within a given age range, e.g., 25 to 35 years old.

const getAgeRange = (contacts) => {
  let newArr = [];
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].dob.age >= 25 && contacts[i].dob.age <= 35) {
      newArr.push(contacts[i]);
    }
  }
  return newArr;
};

const resultGetAgeRange = getAgeRange(contacts.results);

console.log("age range 25 - 35 result ->", resultGetAgeRange);

// Small App Assignment: Contact Search Tool
// Build a small web application that allows users to search for contacts by name or phone number.
// Create a simple HTML page with an input field and a submit button.

// Implement a function to handle the submit event.
// Determine if the input is a string (name) or a number (phone number).
// Based on the input type, search the contacts array:
// If it's a string, filter contacts whose first or last name contains the string. Consider case sensitivity.
// If it's a number, find contacts whose phone number matches.
// Display the matching contacts below the input field. You can list their names and phone numbers as a simple unordered list in HTML. Add styling to improve the layout.

const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector(".searchInput");
const resultsDiv = document.querySelector(".results");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();
  resultsDiv.innerHTML = "";

  if (isNaN(searchTerm)) {
    // If searchTerm is not a number (string search)
    const filteredContacts = contacts.results.filter((contact) => {
      const fullName = `${contact.name.first} ${contact.name.last}`;
      return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    displayResults(filteredContacts);
  } else {
    // If searchTerm is a number (phone number search)
    const foundContacts = contacts.results.filter((contact) =>
      contact.phone.includes(searchTerm)
    );
    displayResults(foundContacts);
  }
});

const displayResults = (contacts) => {
  if (contacts.length === 0) {
    resultsDiv.innerHTML = "<p>No contacts found</p>";
    return;
  }

  const ul = document.createElement("ul");
  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name.first} ${contact.name.last} - ${contact.phone}`;
    ul.appendChild(li);
  });
  resultsDiv.appendChild(ul);
};
