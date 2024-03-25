const socketSetup = () => {
  let server = localStorage.getItem('server');
  let socket;

  if (server) {
    socket = io(server);
    
    $('#url-container').hide();
    $('#link-container').show();
    $('#link').text(server);

    socket.on('connect', () => {
      $('body').css('background-color', '#10b981');
      console.log('Terhubung ke server');
    });

    socket.on('connect_error', (error) => {
      $('body').css('background-color', '#ef4444');
      console.log('Gagal terhubung ke server');
    });

    socket.on('qrcodeval', (qrcode) => {
      console.log(qrcode);
      $('#qrcode').attr('src', qrcode);
    });
  } else {
    $('#url-container').show();
    $('#link-container').hide();
    $('body').css('background-color', '#ef4444');
  }
}