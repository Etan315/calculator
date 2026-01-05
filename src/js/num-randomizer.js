export const getRandomNums = () => {
    let uniqueNums = new Set();

    while(uniqueNums.size < 10) {
        uniqueNums.add(Math.floor(Math.random() * 10))
    }

    return Array.from(uniqueNums)
}