function leapYear(firstYear, secondYear) {
  let year_range = [];
  for (let i = firstYear; i <= secondYear; i++) {
    year_range.push(i);
  }
  let new_array = [];

  year_range.forEach(function (year) {
    if (testLeapYear(year)) new_array.push(year);
  });

  return new_array;
}

function testLeapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || (year % 100 == 0 && year % 400 == 0)) {
    return year;
  } else {
    return false;
  }
}

console.log(leapYear(1900, 2020));
