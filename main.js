const selectMenu = async (sec) => {
    const main_section = document.getElementById("section");
    let array = [];
    if (sec === "Man") {
        array = (await (await fetch('baza.json')).json()).Man;
    }
    else if (sec === "Woman") {
        array = (await (await fetch('baza.json')).json()).Woman;
    }
    else {
        array = (await (await fetch('baza.json')).json()).Baby;
    }
    main_section.innerHTML = '';
    select.innerHTML = '';
    select.style.display = 'none';

    navMenu(sec);

    main_section.className = "main_section"
    const hiro_img = document.createElement("img");
    hiro_img.className = "hiro_img"
    hiro_img.setAttribute("src", array.hiro_wrapper);

    main_section.append(hiro_img)
}