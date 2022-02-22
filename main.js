const output = document.querySelector('#output');
const input = document.querySelector('#input');
document.querySelector('#read').addEventListener('input', previewFile);

function previewFile() {
  const [file] = document.querySelector('#read').files;
  const reader = new FileReader();

  reader.addEventListener('load', () => {
      output.textContent = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsText(file);
  }
}

document.querySelector('#save').addEventListener('click', downloadFile);

function downloadFile() {
  const content = input.value;
  const a = document.createElement('a');
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
  a.download = 'my file.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
