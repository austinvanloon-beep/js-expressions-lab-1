//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const tempDay1 = 32;
const tempDay2 = (25 * 9 / 5) + 32;
const tempDay3 = 70;
const tempDay4 = (18 * 9 / 5) + 32;
const tempDay5 = 80;
const tempDay6 = (15 * 9 / 5) + 32;

const tempDay7 = 72;
const tempDay8 = (28 * 9 / 5) + 32;
const tempDay9 = 68;
const tempDay10 = (20 * 9 / 5) + 32;

const tempDay11 = 75;
const tempDay12 = (23 * 9 / 5) + 32;
const tempDay13 = 82;
const tempDay14 = (30 * 9 / 5) + 32;

const tempDay15 = 65;
const tempDay16 = (22 * 9 / 5) + 32;
const tempDay17 = 77;
const tempDay18 = (26 * 9 / 5) + 32;

const tempDay19 = 78;
const tempDay20 = (24 * 9 / 5) + 32;
const tempDay21 = 73;
const tempDay22 = (21 * 9 / 5) + 32;

const tempDay23 = 79;
const tempDay24 = (27 * 9 / 5) + 32;
const tempDay25 = 71;
const tempDay26 = (19 * 9 / 5) + 32;

const tempDay27 = 74;
const tempDay28 = (17 * 9 / 5) + 32;
const tempDay29 = 76;
const tempDay30 = (29 * 9 / 5) + 32;


const tot_temperature_in_fahrenheit =
  tempDay1 + tempDay2 + tempDay3 + tempDay4 + tempDay5 + tempDay6 +
  tempDay7 + tempDay8 + tempDay9 + tempDay10 + tempDay11 + tempDay12 +
  tempDay13 + tempDay14 + tempDay15 + tempDay16 + tempDay17 + tempDay18 +
  tempDay19 + tempDay20 + tempDay21 + tempDay22 + tempDay23 + tempDay24 +
  tempDay25 + tempDay26 + tempDay27 + tempDay28 + tempDay29 + tempDay30;


const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32 * 30) * 5 / 9;

const avg_temperature_in_celsius = (avg_temperature_in_fahrenheit - 32) * 5 / 9;

console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);


module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};
