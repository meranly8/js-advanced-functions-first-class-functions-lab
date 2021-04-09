const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = (fare) => { 
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, firstOrLast) {
    return firstOrLast(drivers)
}