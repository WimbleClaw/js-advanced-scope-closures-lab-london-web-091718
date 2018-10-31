
const produceDrivingRange = function(value) {
    return function(firstv, secondv) {
      const distance = parseInt(secondv) - parseInt(firstv)

      return (distance < value) ? `within range by ${distance}` : `${distance - value} blocks out of range`;
    }
}

const produceTipCalculator = (decimalvalue) => {
  return (number) => {
    return number * decimalvalue
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId
    }
  }
}
