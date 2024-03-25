const socketSetup = () => {
  let server = localStorage.getItem('server');
  let socket;

  if (server) {
    const accounts = localStorage.getItem('accounts');
    const parsedData = JSON.parse(accounts);
    socket = io(server);
    
    $('#url-container').hide();

    socket.on('connect', () => {
      let icon = '<i class="fa-solid fa-server mr-1"></i>'
      let text = '<span class="text-sm">Terhubung ke server.</span>'
      $('#chat-container').css('background-color', '#25D366');
      $('#signal').css('display', 'block').html(`<span>${icon} ${text}</span>`);
      $('#loading-container').show();
      console.log('Terhubung ke server');
    });

    socket.on('connect_error', (error) => {
      let icon = '<i class="fa-solid fa-server mr-1"></i>'
      let text = '<span class="text-sm">Gagal terhubung ke server.</span>'
      $('#chat-container').css('background-color', '#ef4444');
      $('#signal').css('display', 'block').html(`<span>${icon} ${text}</span>`);
      $('#qrcode-container').hide();
      $('#loading-container').show();
      $('#message-container').hide();
      console.log('Gagal terhubung ke server');
    });

    socket.on('qrcodeval', (qrcode) => {
      getUser();
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
    })

    const setIdentity = async () => {
      let identity = document.getElementById('identity').value;
      await axios.get(`https://database.politekniklp3i-tasikmalaya.ac.id/api/user/info/${identity}`)
        .then((response) => {
          if (response.data.name !== "Tidak diketahui") {
            socket.emit('setIdentity', identity);
            getUser();
          } else {
            alert('Akun Tidak Ditemukan.')
          }
        })
        .catch((error) => {
          console.log(error);
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
          } else {
            $('#authentication-container').show();
            $('#loading-container').show();
            $('#message-container').hide();
          }
        } else {
          $('#identity-container').show();
        }
      });
      socket.emit('getHistory', true);
      socket.on('histories', (data) => {
        localStorage.setItem('histories', JSON.stringify(data));
      });
    }

    getUser();

    const getData = async () => {
      const accounts = localStorage.getItem('accounts');
      const parsedData = JSON.parse(accounts);
      const histories = localStorage.getItem('histories');
      const parsedHistories = JSON.parse(histories);

      const presenter = await checkAPI(parsedData.phone);
      const gurubk = await checkGuruBK();
    }

    const checkAPI = async (phone) => {
      try {
        const response = await axios.get(`https://whatsapp-account-lp3i.vercel.app/api/accounts/${phone}`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }

    const checkGuruBK = async () => {
      try {
        const response = await axios.get(`https://whatsapp-account-lp3i.vercel.app/api/gurubk`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  } else {
    $('#url-container').show();
    $('#chat-container').css('background-color', '#ef4444');
  }
}