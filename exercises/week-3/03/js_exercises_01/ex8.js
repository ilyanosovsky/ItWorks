// The following exercise contains the following subjects:
// ● functions
// Instruction

// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.

function percentageOfWorld1(population) {
    const world = 7900;
    return (population / world * 100).toFixed(2) + "%";
}

const china = percentageOfWorld1(1441);
console.log(china);

const russia = percentageOfWorld1(145);
console.log(russia);

const italy = percentageOfWorld1(35);
console.log(italy);


// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations)

const percentageOfWorld2 = (population) => {
    const world = 7900;
    return (population / world * 100).toFixed(2) + "%";
}

const china2 = percentageOfWorld1(1441);
console.log(china2);

const russia2 = percentageOfWorld1(145);
console.log(russia2);

const italy2 = percentageOfWorld1(35);
console.log(italy2);
