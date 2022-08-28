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
  await turtle.setSpeed(0.8)
  await turtle.setPosition(200, 300)

  await turtle.setStrokeColorRGB(255, 255, 0)
  await circle(200)
  await turtle.setFillStyle("yellow")
  await turtle.fill()

  await turtle.setStrokeColorRGB(255, 0, 0)
  await rectangle(100, 180)
  await turtle.setFillStyle("red")
  await turtle.fill()

  await turtle.setPosition(420, 300)
  await rectangle(100, 180)
  await turtle.fill()

  await turtle.setPosition(385, 100)
  await turtle.setStrokeColorRGB(0, 255, 0)
  await triangle(215)
  await turtle.setFillStyle("green")
  await turtle.fill()
}

async function circle(radius) {
  await turtle.beginPath()
  await turtle.arc(radius, 360)
  await turtle.closePath()
}

async function rectangle(height, width) {
  await turtle.beginPath()
  await turtle.forward(height)
  await turtle.right(90)
  await turtle.forward(width)
  await turtle.right(90)
  await turtle.forward(height)
  await turtle.right(90)
  await turtle.forward(width)
  await turtle.right(90)
  await turtle.closePath()
}

async function triangle(length) {
  await turtle.beginPath()
  await turtle.right(120)
  await turtle.forward(length)
  await turtle.right(120)
  await turtle.forward(length)
  await turtle.right(120)
  await turtle.forward(length)
  await turtle.closePath()
}
