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

  await turtle.setPosition(400, 100)
  await turtle.setStrokeColorRGB(0, 255, 0)
  // await triangle(215)
  await turtle.beginPath()
  await turtle.right(150)
  await turtle.forward(350)
  await turtle.right(120)
  await turtle.forward(350)
  await turtle.right(120)
  await turtle.forward(350)
  await turtle.closePath()
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

function parseColor(color) {
  let rgb = null
  let hex = null
  if (Array.isArray(color)) {
    rgb = color
    hex = rgbToHex(...color)
  } else {
    hex = color
    rgb = hexToRgb(color)
  }
  return {
    rgb: rgb,
    hex: hex,
  }
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (_m, r, g, b) {
    return r + r + g + g + b + b
  })

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
