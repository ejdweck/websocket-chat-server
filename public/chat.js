var socket = io.connect('http://localhost:8080')

var message = document.getElementById('message')
var handle = document.getElementById('handle')
var btn = document.getElementById('send')
var output = document.getElementById('output')
var feedback = document.getElementById('feedback')
// emit events
btn.addEventListener('click', function(){
  // takes 2 params (name of message, data within message)
  socket.emit('chat', {
    message: message.value,
    handle: handle.value,
  })
})

message.addEventListener('keypress', function(){
  socket.emit('typing', handle.value)
})


// listen for events!

socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>'
  feedback.innerHTML = ''
})

socket.on('typing', function(data){
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>'
})
