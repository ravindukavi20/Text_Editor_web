//text alignment
function left_align() {

    document.execCommand('justifyLeft', false, null);

}
function alignCenter() {
    document.execCommand('justifyCenter', false, null);
}

function justifyText() {
    const textArea = document.getElementById('text_area');
    if (textArea) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);

        const div = document.createElement('div');
        div.style.textAlign = 'justify';
        range.surroundContents(div);
    }
}
function right_align() {

    document.execCommand('justifyRight', false, null);
}

