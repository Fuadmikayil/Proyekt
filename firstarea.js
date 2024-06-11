const select = document.getElementById("select");
const area = async () => {
    const array = (await (await fetch('baza.json')).json()).Gender;

    array.forEach(element => {
        const div_main = document.createElement('div');
        div_main.className = 'div_main';
        const div_img = document.createElement('div');
        div_img.className = 'div_img';
        const div_text = document.createElement('button');
        div_text.className = 'div_text';
        div_text.textContent = element.MenuSelect;
        const img = document.createElement('img');
        img.setAttribute('src', element.foto)
        div_img.append(img, div_text)
        div_main.append(div_img);
        select.append(div_main)
        div_text.addEventListener('click', (e) => {
            selectMenu(e.target.textContent);
        })

    });
}

area()