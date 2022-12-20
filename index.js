const sum = (a, b) => {
    return a + b;
}

const inOneHour = () => {
    const now = Date.now();
    const onerHourinMili = 1 * 60 * 60 * 1000
    return now + onerHourinMili;
}

module.exports = { sum, inOneHour }