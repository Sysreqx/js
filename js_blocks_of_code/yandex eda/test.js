let createButton = Array.from(document.querySelectorAll('.x6s0dn4')).find(el => el.textContent === 'Создать');
createButton.click();
let dropArea = document.querySelector('._ac2r');

file = "https://esquire.kz/wp-content/uploads/2022/12/2-2.jpg"

function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result

        dropArea.drop(img);
    }
}

