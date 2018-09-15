
function* racSequenceGenerator() {
    let visited = []
    for (let index = 0, value = 0; ; index++) {
        let next = value - index
        value = next >= 0 && !visited[next] ? next : value + index
        visited[value] = true
        yield value
    }
}

const generator = racSequenceGenerator()
const yields = []
let biggest = 1

function setup() {
    createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.9)

    noFill()
    strokeWeight(0.5)
    colorMode(HSB)
}

function draw() {
    let current = generator.next().value
    yields.push(current)
    biggest = Math.max(biggest, current)

    translate(0, height / 2)
    scale(width / biggest)
    background(0)

    for (let i = 1; i < yields.length; i++) {
        const current = yields[i]
        const previous = yields[i - 1]

        let center = (current + previous) / 2
        let diameter = Math.abs(current - previous)

        stroke(i % 360, 100, 100)
        arc(center, 0, diameter, diameter, i % 2 == 0 ? 0 : Math.PI, i % 2 != 0 ? 0 : Math.PI)
    }
}