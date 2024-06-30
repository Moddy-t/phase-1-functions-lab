// Code your solution in this file

function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
  }
  function distanceFromHqInFeet(street) {
    const hqStreet = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(street - hqStreet);
    return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264;
    return Math.abs(start - end) * feetPerBlock;
  }
  function distanceFromHqInFeet(street) {
    const hqStreet = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(street - hqStreet);
    return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; 
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }



