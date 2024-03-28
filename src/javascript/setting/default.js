const getYearPMB = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const startYear = currentMonth >= 9 ? currentYear + 1 : currentYear;
  $('#pmb').val(startYear);
}
getYearPMB();

const changeType = () => {
  let type = $('#url').attr('type');
  if(type === 'password'){
    $('#url').attr('type', 'text');
  } else {
    $('#url').attr('type', 'password');
  }
}