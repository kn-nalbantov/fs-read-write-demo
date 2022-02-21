const output = document.querySelector('#output');
document.querySelector('#read').addEventListener('input', previewFile);

function previewFile() {
    const [file] = document.querySelector('#read').files;
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      output.textContent = reader.result;
    }, false);
  
    if (file) {
      reader.readAsText(file);
    }
  }