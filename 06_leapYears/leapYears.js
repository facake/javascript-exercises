/* 
whether or not a given year is a leap year
int, >0   boolean

Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years 
(such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
(Yes, it's all pretty confusing)
 */
const leapYears = function(year) {
  // if (!Number.isInteger(year) || year <= 0) {
  //   return false;
  // }
  if (year % 100 == 0) {
    return year % 400 == 0;
  } else if (year % 4 == 0) {
    return true;
  }
  return false;
  
};  

// Do not edit below this line
module.exports = leapYears;
