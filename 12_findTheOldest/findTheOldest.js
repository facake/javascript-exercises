const findTheOldest = function(persons) {
  let oldest = 0;
  let oldestAge = 0;
  persons.forEach((person, index) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
    age = person.yearOfDeath - person.yearOfBirth;
    if (age > oldestAge) {
      oldestAge = age;
      oldest = index;
    }
  })
  return persons[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
