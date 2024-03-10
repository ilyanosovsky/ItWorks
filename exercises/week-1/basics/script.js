// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.splice(1, 2);
// numbers[3] = 1;
// const arr = numbers.slice(0, -4);
// arr.unshift(0);
// console.log(arr);

// const p1 = {
//   name: "Robert",
//   age: 25,
//   city: "Haifa",
// };

// const p2 = {
//   name: "Jill",
//   age: 25,
//   city: "Haifa",
// };

// if (p1.age === p2.age && p1.city === p2.city) {
//   console.log("Jill wanted to date Robert");
// } else if (p1.city !== p2.city) {
//   console.log("Jill wanted to date Robert, but couldn’t");
// }

//ex0
// const reservations = {
//   Bob: { claimed: false },
//   Ted: { claimed: true },
// };

// // Get the name input from the user
// const name = prompt("Please enter the name for your reservation:");

// // Convert the name to lowercase for case-insensitive checking
// const lowercaseName = name.toLowerCase();

// // Check if the reservation exists in the object
// if (reservations.hasOwnProperty(lowercaseName)) {
//   // Reservation exists
//   if (!reservations[lowercaseName].claimed) {
//     // Unclaimed reservation - Welcome the user
//     console.log(`Welcome, ${name}`);
//   } else {
//     // Claimed reservation - Inform the user
//     console.log(`Hmm, someone already claimed this reservation for ${name}`);
//   }
// } else {
//   // No reservation for the name, so create a new one (using lowercase)
//   reservations[lowercaseName] = { claimed: true };
//   console.log(`Welcome, ${name}! We've added you to our list.`);
// }

//ex1
// const names = ["Ashley", "Donovan", "Lucas"];
// const ages = [23, 47, 18];
// const people = [];

// for (let i = 0; i < names.length; i++) {
//   people.push({ name: names[i], age: ages[i] });
// }

// console.log(people);

// for (let person of people) {
//   console.log(`${person.name} is ${person.age} years old`);
// }

//ex2
// const posts = [
//   { id: 1, text: "Love this product" },
//   { id: 2, text: "This is the worst. DON'T BUY!" },
//   { id: 3, text: "So glad I found this. Bought four already!" },
// ];

// // Find the index of the post with id 2
// const indexToRemove = posts.findIndex(post => post.id === 2);

// // Check if the post with id 2 was found
// if (indexToRemove !== -1) {
//   posts.splice(indexToRemove, 1);
//   console.log("Post with id 2 removed successfully!");
// } else {
//   console.log("No post with id 2 found in the array.");
// }

// console.log(posts);

//ex3

// const posts = [
//   {
//     id: 1,
//     text: "Love this product",
//     comments: [],
//   },
//   {
//     id: 2,
//     text: "This is the worst. DON'T BUY!",
//     comments: [
//       { id: 1, text: "Idiot has no idea" },
//       { id: 2, text: "Fool!" },
//       { id: 3, text: "I agree!" },
//     ],
//   },
//   {
//     id: 3,
//     text: "So glad I found this. Bought four already!",
//     comments: [],
//   },
// ];

// const targetPostId = 2;
// const targetCommentId = 3;

// // Find the post with the target ID
// const targetPost = posts.find((post) => post.id === targetPostId);

// // Check if the target post was found
// if (targetPost) {
//   // Find the index of the comment with the target ID within the target post
//   const commentIndex = targetPost.comments.findIndex(
//     (comment) => comment.id === targetCommentId
//   );

//   // Check if the target comment was found
//   if (commentIndex !== -1) {
//     // Remove the comment using splice
//     targetPost.comments.splice(commentIndex, 1);
//     console.log("Comment with ID 3 removed successfully!");
//   } else {
//     console.log("No comment with ID 3 found in the post.");
//   }
// } else {
//   console.log("No post with ID 2 found in the array.");
// }

// console.log(posts);

// let x = [
//   { name: "ant", color: "brown" },
//   { name: "flower", color: "green" },
// ];

// x.push({ name: "ant", color: "green" });

// console.log(x);

// let car = {wheels: 4};

// car["color"] = "blue"

// console.log(car);

let x = [ {human: {name: 'Daena', age: 31} } ][0].age
console.log(x);