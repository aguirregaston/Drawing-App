const canvas = document.getElementById('drawingCanvas')
const ctx = canvas.getContext('2d')
const colorPicker = document.getElementById('colorPicker')
const sizePicker = document.getElementById('sizePicker')
const clearCanvas = document.getElementById('clearCanvas')

let drawing = false

canvas.addEventListener('mousedown', () => drawing = true)
canvas.addEventListener('mouseup', () => drawing = false)
canvas.addEventListener('mouseout', () => drawing = false)

canvas.addEventListener('mousemove', (event) => {
  if (!drawing) return

  const rect = canvas.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  ctx.fillStyle = colorPicker.value
  ctx.beginPath()
  ctx.arc(x, y, sizePicker.value / 2, 0, Math.PI * 2)
  ctx.fill()
})

clearCanvas.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})