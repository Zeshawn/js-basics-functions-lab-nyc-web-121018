// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
      if (someValue > 42){
      return someValue - 42
    }
    else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(value1, value2){
  if (value1 < value2)
    return (value2 - value1) * 264

else
{
  return (value1 - value2) * 264
}
}

function calculatesFarePrice(start, destination){
  let feets = distanceTravelledInFeet(start, destination)

  if (feets <= 400) {
    return 0
  }
  else if (feets > 400 && feets <= 2000 ) {
    return (feets - 400) * 2 / 100
  }
  else if (feets >2000 && feets < 2500) {
    return 25
  }
  else if (feets > 2500) {
    return "cannot travel that far"
  }
}
