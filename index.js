function distanceFromHqInBlocks(x) {
    return Math.max(42 - x, x - 42);
}

function distanceFromHqInFeet(x) {
    return Math.max(42 - x, x - 42) * 264;
}

function distanceTravelledInFeet(x, y) {
    return distanceFromHqInFeet(distanceFromHqInBlocks(y - x));
}

