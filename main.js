const hours = [6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9];
const grumpyHours = [];
const happyHours = [];
for (const day of hours) {
  if (day < 7) {
    grumpyHours.push(day);
  } else {
    happyHours.push(day);
  }
}
console.log(`I was grumpy on ${grumpyHours.length} days.`);
console.log(`I was happy on ${happyHours.length} days.`);
