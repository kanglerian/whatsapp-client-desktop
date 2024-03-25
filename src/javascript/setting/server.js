const deletePath = () => {
  localStorage.removeItem('server');
  location.reload();
}

const setPath = () => {
  let newServer = $('#url').val();
  localStorage.setItem('server', newServer);
  location.reload();
}