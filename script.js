

function toggleBold() {
    document.execCommand('bold', false, null);
}
function toggleUnderline() {
    document.execCommand('underline', false, null);

}
function toggleItalic() {
    document.execCommand('italic', false, null);
}
//color picker
function openColorPicker() {
    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.addEventListener('input', function() {
        setFontColor(colorPicker.value);
    });

    colorPicker.style.position = 'fixed';
    colorPicker.style.top = '50%';
    colorPicker.style.left = '50%';
    colorPicker.style.transform = 'translate(-50%, -50%)';

    // Trigger the color picker dialog
    colorPicker.click();
}
function setFontColor(color) {
    document.execCommand('styleWithCSS', false, true);
    document.execCommand('foreColor', false, color);
    document.execCommand('styleWithCSS', false, false);

}
 
//text alignment
function left_align() {

    document.execCommand('justifyLeft', false, null);

}
function alignCenter() {
    document.execCommand('justifyCenter', false, null);
}

function justifyText() {
   
    document.execCommand("justifyFull", false, null);
}

function right_align() {

    document.execCommand('justifyRight', false, null);
}

//undo redo function
let textHistory = [];
let currentIndex = -1;

function undoText() {
      if (currentIndex > 0) {
            currentIndex--;
            const textArea = document.getElementById('text_area');
            if (textArea) {
                textArea.innerHTML = textHistory[currentIndex];
             }
       }
 }
 function redoText() {
       if (currentIndex < textHistory.length - 1) {
            currentIndex++;
            const textArea = document.getElementById('text_area');
            if (textArea) {
                textArea.innerHTML = textHistory[currentIndex];
            }
        }
  }

  document.getElementById('text_area').addEventListener('input', function () {
        currentIndex++;
        if (currentIndex < textHistory.length) {
            textHistory = textHistory.slice(0, currentIndex);
        }
        textHistory.push(document.getElementById('text_area').innerHTML);
    });

