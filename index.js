// Code your solution here
function findMatching(driver, search) {
  return driver.filter(
    (theyMatch) => theyMatch.toLowerCase() === search.toLowerCase()
  );
}

function fuzzyMatch(driver, output) {
  return driver.filter(
    (theyMatch) =>
      theyMatch.toLowerCase().indexOf(output.toLowerCase()) === 0
  );
}

function matchName(driver, search) {
  return driver.filter((record) => record.name === search);
}