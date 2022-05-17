function distanceFromHqInBlocks (x) {
    return Math.max(42 - x, x - 42)
}

function distanceFromHqInFeet (x) {
    return Math.max(42 - x, x - 42) * 264
}

function distanceTravelledInFeet (x, y) {
    return distanceFromHqInFeet(distanceFromHqInBlocks(y - x))
}

function calculatesFarePrice (x, y) {
    const distance = distanceTravelledInFeet(x, y)
    switch (true) {
        case (distance < 400): return 0
        case (distance >= 400 && distance <= 2000): return ((distance - 400) * 0.02)
        case (distance >= 2000 && distance <= 2500): return 25
        case (distance > 2500): return 'cannot travel that far'
    }
}