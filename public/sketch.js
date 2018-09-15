
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

function setup() {
    createCanvas(window.innerWidth * 0.9, window.innerHeight * 0.9)
    background(0)
    noFill()
    stroke(255)
    strokeWeight(0.1)
}

function draw() {
    yields.push(generator.next().value)

    for (let i = 1; i < yields.length; i++) {
        const current = yields[i]
        const previous = yields[i - 1]
        
        let center = (current + previous) / 2
        let diameter = Math.abs(current - previous)
        
        arc(center, height / 2, diameter, diameter, i % 2 == 0 ? 0 : Math.PI, i % 2 != 0 ? 0 : Math.PI)
    }
}