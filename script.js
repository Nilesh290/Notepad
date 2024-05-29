const notepad = document.getElementById('notepad');
const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', () => {
    const text = notepad.value;
    localStorage.setItem('notepad', text);
    alert('Saved!');
});

document.addEventListener('DOMContentLoaded', () => {
    const savedText = localStorage.getItem('notepad');
    if (savedText) {
        notepad.value = savedText;
    }
});