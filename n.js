
    var fileInput = document.getElementById('file').value;
  
    var in1 = document.getElementById('inner');

    fileInput.onchange = () => in1.innerHTML = `<video controls width="400"><source src="${URL.createObjectURL(fileInput.files[0])}" type="${fileInput.files[0].type}">Your browser does not support the video tag.</video>`;
  
