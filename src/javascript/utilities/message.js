const saveMessage = () => {
  let message = $('#message').val();
  console.log(message);
  localStorage.setItem('message', message)
}

const getMessage = () => {
  let message = localStorage.getItem('message');
  $('#message').val(message);
}

const checkRestoreMessage = () => {
  let message = localStorage.getItem('message');
  if (message == null) {
    $('#restoreMessage').removeClass('flex');
    $('#removeMessage').removeClass('flex');
    $('#restoreMessage').addClass('hidden');
    $('#removeMessage').addClass('hidden');
  } else {
    $('#restoreMessage').removeClass('hidden');
    $('#removeMessage').removeClass('hidden');
    $('#restoreMessage').addClass('flex');
    $('#removeMessage').addClass('flex');
  }
}

const removeMessage = () => {
  localStorage.removeItem('message');
}