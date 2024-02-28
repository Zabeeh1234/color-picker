const labels = document.querySelectorAll("label");
const copy_btns = document.querySelectorAll("label .copy");

document.addEventListener('keypress' , (e) => {
    if(e.key === ' '){
        generateColor();
    } 
})

function generateColor() {
    for (const label of labels) {
        let color_1 = '#' + Math.random().toString(16).substr(-6);
        let color_2 = '#' + Math.random().toString(16).substr(2,6)
        label.style.backgroundColor = color_1;
        document.body.style.backgroundImage = `linear-gradient(to bottom left, ${color_1} , ${color_2})`
        label.querySelector('.color-value').innerText = color_1;

        const color_picker = label.nextElementSibling;
        color_picker.value = color_1;

        color_picker.oninput = function(){
            this.previousElementSibling.style.backgroundColor = this.value
            this.previousElementSibling.querySelector('p').innerText = this.value
        }
    }
}

for (const copy_btn of copy_btns) {
    copy_btn.onclick = () => {
        copy_btn.innerText = 'copied';
        setTimeout(() => copy_btn.innerText = 'copy', 1500);

        const color_code = copy_btn.nextElementSibling.innerText;
        navigator.clipboard.writeText(color_code)
    }
    
}

generateColor();

