let socket;
let parsedData;
let server;

const socketSetup = () => {
  server = localStorage.getItem('server');

  if (server) {
    const accounts = localStorage.getItem('accounts');
    parsedData = JSON.parse(accounts);
    socket = io(server);

    $('#url-container').hide();
    $('#sent-percent-container').hide();
    $('#sent-container').hide();
    $('#percent-container').hide();

    socket.on('connect', () => {
      let icon = '<i class="fa-solid fa-server mr-1"></i>'
      let text = '<span class="text-xs">Terhubung ke server.</span>'
      $('#chat-container').css('background-color', '#25D366');
      $('#signal').css('display', 'block').html(`<span>${icon} ${text}</span>`);
      $('#loading-container').show();
      getUser();
      console.log('Terhubung ke server');
    });

    socket.on('percent', (data) => {
      let persen = (data.counter / data.length) * 100;
      $('#percent').text(`${persen.toFixed()}%`);
      $('#percent').attr('style', `width: ${persen}%`);
      $('#sent-percent-container').show();
      $('#percent-container').show();
    })

    socket.on('connect_error', () => {
      let icon = '<i class="fa-solid fa-server mr-1"></i>'
      let text = '<span class="text-xs">Gagal terhubung ke server.</span>'
      $('#chat-container').css('background-color', '#ef4444');
      $('#signal').css('display', 'block').html(`<span>${icon} ${text}</span>`);
      $('#qrcode-container').hide();
      $('#loading-container').show();
      $('#authentication-container').show();
      $('#message-container').hide();
      $('#history-container').hide();
      $('#identity-container').hide();
      $('#info-container').removeClass('h-2/6').addClass('h-full');
      $('#logging').text('');
      console.log('Gagal terhubung ke server');
    });

    socket.on('qrcodeval', (qrcode) => {
      $('#qrcode').attr('src', qrcode);
      $('#qrcode-container').show();
      $('#loading-container').hide();
    })

    socket.on('ready', () => {
      $('#qrcode-container').hide();
      getUser();
      setTimeout(() => {
        getData();
      }, 1000);
    });

    socket.on('info', (info) => {
      getHistory();
      $('#sent-percent-container').show();
      $('#sent-container').show();
      $('#sent-container').html(info);
    });

    socket.on('stop', () => {
      stopFlag = true
    });

    socket.on('logging', (log) => {
      $('#logging').text(log);
    });

    const getHistory = () => {
      socket.emit('getHistory', true);
      socket.on('histories', (data) => {
        localStorage.setItem('histories', JSON.stringify(data));
        let bucket = '';
        if (data.length > 0) {
          data.forEach((contact, i) => {
            bucket += `
          <tr>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${i + 1}</th>
            <td class="px-6 py-4">${contact.name}</td>
            <td class="px-6 py-4">${contact.phone}</td>
            <td class="px-6 py-4">${contact.status == 1 ? `<i class="text-emerald-600 fas fa-check-circle"></i>` : '<i class="text-red-600 fas fa-circle-xmark"></i>'}</td>
          </tr>
        `
          });
        } else {
          bucket += `<tr><td class="px-6 py-4 text-gray-600" colspan="4">Data Riwayat Belum Tersedia.</td></tr>`
        }
        $('#history').html(bucket);
      });
    }

    const getUser = () => {
      socket.emit('getUsers', true);
      socket.on('users', (data) => {
        localStorage.setItem('accounts', JSON.stringify(data));
        let code = data.code;
        if (code) {
          $('#identity-container').hide();
          if (data.status == 1) {
            $('#authentication-container').hide();
            $('#loading-container').hide();
            $('#message-container').show();
            $('#history-container').show();
            $('#info-container').removeClass('h-full').addClass('h-2/6');
          } else {
            $('#authentication-container').show();
            $('#loading-container').show();
            $('#message-container').hide();
            $('#qrcode-container').hide();
            $('#history-container').hide();
            $('#info-container').removeClass('h-2/6').addClass('h-full');
            console.log('tutup qrcode');
          }
        } else {
          $('#qrcode-container').hide();
          $('#identity-container').show();
          $('#qrcode-container').hide();
          $('#history-container').hide();
          $('#info-container').removeClass('h-2/6').addClass('h-full');
        }
      });
    }

    getUser();
    getHistory();

  } else {
    $('#identity-container').hide();
    $('#qrcode-container').hide();
    $('#history-container').hide();
    $('#sent-percent-container').hide();
    $('#info-container').removeClass('h-2/6').addClass('h-full');
    $('#chat-container').css('background-color', '#ef4444');
    $('#logging').text('');
  }
}