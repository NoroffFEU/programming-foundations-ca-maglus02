const car = {
    brand: "BMW",
    model: "i4 M50",
    speed: 0,
    topSpeed: 225,
    mileage: 19000,
    power: 536,
    torque: 795,
    electric: true,
    modes: ["Park", "Neutral", "Drive", "Brake"],
    lowRange: false,
    rangeWarning: function() {
        if (lowRange === true) {
            return "Low range. Charge battery."
        }
    }
}