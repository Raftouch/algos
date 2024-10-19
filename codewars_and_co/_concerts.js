// array of keys only
// eliminate past concerts
// chronological order
// result []

const concerts = {
  Paris: new Date('2024-10-08'),
  Seoul: new Date('2024-11-24'),
  Moscow: new Date('2024-11-20'),
  Madrid: new Date('2024-12-31'),
}

function concertsToArray(cityConcerts) {
  return Object.keys(cityConcerts)
    .filter((city) => concerts[city] > new Date())
    .sort((a, b) => concerts[a] - concerts[b])
}

// -345600000 ==> concerts["Moscow"] - concerts["Seoul"] // -4 days ==> -4 * 24 * 60 * 60 * 1000
// 3542400000 ==> concerts["Madrid"] - concerts["Moscow"] // 41 days ==> 41 * 24 * 60 * 60 * 1000
// 3196800000 ==> concerts["Madrid"] - concerts["Seoul"] // 37 days ==> 37 * 24 * 60 * 60 * 1000

console.log(concertsToArray(concerts)) // [ 'Moscow', 'Seoul', 'Madrid' ]
