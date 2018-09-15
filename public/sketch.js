
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
}

function draw() {
    const next = generator.next().value
    yields.push(next)
    console.log(next)
}