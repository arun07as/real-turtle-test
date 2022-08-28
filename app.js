const turtle = new RealTurtle.default(
  document.getElementById("turtle-canvas"),
  {
    autoStart: true,
    async: true,
    image: null,
  }
)
window.turtle = turtle

run()

async function run() {
  await turtle.setSpeed(0.5)
  await turtle.setPosition(200, 300)

  await turtle.setStrokeColorRGB(255, 255, 0)
  await circle(200)
  await turtle.setFillStyle("yellow")
  await turtle.fill()
}

async function circle(radius) {
  await turtle.beginPath()
  await turtle.arc(radius, 360)
  await turtle.closePath()
}
