const filterHistory = async (status) => {
  socket.emit('getHistory', true);
  socket.on('histories', (data) => {
    let result = data.filter((contact) => {
      return contact.status == status
    })
    const link = document.createElement("a");
    let content = '';
    result.forEach(contact => {
      content += `${contact.name},${contact.phone}\n`;
    });
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = `${status == 0 ? 'tidak-terkirim.txt' : 'terkirim.txt'}`;
    link.click();
    URL.revokeObjectURL(link.href);
    content = '';
  })
}

const deleteHistory = () => {
  let message = confirm("Apakah anda yakin akan menghapus riwayat pengiriman?");
  if (message) {
    socket.emit('delete', true);
    setTimeout(() => {
      socketSetup();
    }, 500);
  }
}

const stop = () => {
  const result = confirm("Apakah anda yakin akan menghentikan pengiriman?");
  if (result) {
    socket.emit('stop', true);
    alert('Pengiriman dibatalkan!');
    socketSetup();
  }
}