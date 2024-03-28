var textarea = document.getElementById('message');

$('#add-fullname').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&fullname*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-firstname').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&firstname*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-whatsapp').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&whatsapp*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-var1').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&var1*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-var2').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&var2*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-var3').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&var3*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-var4').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&var4*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#add-var5').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = "*&var5*";
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#text-italic').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var selectedText = textarea.value.substring(startPos, endPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = `_${selectedText}_`;
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#text-bold').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var selectedText = textarea.value.substring(startPos, endPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = `*${selectedText}*`;
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#text-strike').on('click', () => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var selectedText = textarea.value.substring(startPos, endPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = `~${selectedText}~`;
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});

$('#emoticon > span').on('click', (e) => {
  var startPos = textarea.selectionStart;
  var endPos = textarea.selectionEnd;
  var textBefore = textarea.value.substring(0, startPos);
  var selectedText = textarea.value.substring(startPos, endPos);
  var textAfter = textarea.value.substring(endPos, textarea.value.length);
  var textToAdd = `${e.target.innerText}`;
  textarea.value = textBefore + textToAdd + textAfter;
  textarea.selectionStart = textarea.selectionEnd = startPos + textToAdd.length;
});