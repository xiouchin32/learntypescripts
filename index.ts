enum requestStatusCodes {
  error = 400,
  success = 200,
}

enum requestWrongCodes {
  missingParameter = "A",
  wrongParameterType = "B",
  invalidToken = "C",
}

console.log(requestStatusCodes.error);
