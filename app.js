// Alert Box
function alert_btn(){
  var input;
  input = document.getElementById('text').value;
  alert(input);
}

// write in div
function write_btn(){
  var write;
  write = document.getElementById('div').innerText = document.getElementById('text').value;
}

// Save
function save_btn(){
  var save = document.getElementById('text').value;
  localStorage.setItem('data', save);
}

// Alert Save
function alert_save(){
  var alert_saved = localStorage.getItem('data');
  alert(alert_saved);
}

// write in div
function write_btn2(){
  let write2 = localStorage.getItem('data');
  write2 = document.getElementById('div').innerText = localStorage.getItem('data');
}

// Clear Div

function clear_btn(){
  let clear = localStorage.getItem('data');
  clear = document.getElementById('div').innerText = "";
}

// Toggle Text

function toggle_text(){
  let x = document.getElementById('div-text');

  if (x.style.display === 'none') {
    x.style.display = 'block';
  }
  else{
    x.style.display = 'none';
  }
}

// Toggle Div

function toggle_div(){
  let x = document.getElementById('div-box');

  if (x.style.display === 'none') {
    x.style.display = 'block';
    
  }
  else{
    x.style.display = 'none';
  }
}

// Change Text

function change_text(){
  let  chng_txt = document.getElementById('div-text').innerText= prompt('Enter New Text');
}
