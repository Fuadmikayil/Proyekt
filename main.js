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
    head.style.display = 'flex';

    navMenu(sec);

    main_section.className = "main_section";
    const hiro_img = document.createElement("img");
    hiro_img.className = "hiro_img"
    hiro_img.setAttribute("src", array.hiro_wrapper);

    const Selection_forher = document.createElement("section");
    Selection_forher.className = "Selection_forher";
    const Selection_text = document.createElement("h2");
    Selection_text.textContent = "Selection for her";
    const product_forher = document.createElement("section");
    product_forher.className = "product_forher";
    let Selection_forher_array = array.CLOTHING.SHİRTS;
    Selection_forher_array.forEach(element => {
        const product_div = document.createElement("div");
        product_div.className = "product_div";
        const product_heart = document.createElement("i");
        product_heart.className = "bx bx-heart";
        const product_img = document.createElement("img");
        product_img.setAttribute("src",element.İmg);
        const product_name = document.createElement("h2");
        product_name.textContent = element.name;
        const product_price = document.createElement("h3");
        product_price.textContent = element.Price;
        product_div.append(product_heart,product_img,product_name,product_price);
        product_forher.append(product_div);

    });
    Selection_forher.append(product_forher);
    main_section.append(hiro_img,Selection_text, Selection_forher);
    ///////Mousun  x sini götürün traslete ile deyişirik  koda deyme!!!!!!/////////////////
   /* Selection_forher.addEventListener('mousemove', function(e) {
        var mouseX = e.clientX; // Mouse'un X koordinatı
        product_forher.style.transform = `translate( ${-mouseX}px)`;
    });*/
    
}