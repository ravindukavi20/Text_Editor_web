
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
