const navMenu = async (sec) => {
    const header1 = document.getElementById('head');
    const nav = document.createElement('navbar');
    nav.className = "nav"
    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');
    h3.className = "advertisement"
    const a_login = document.createElement('div');
    let Gender_array = [];
    Gender_array = (await (await fetch('baza.json')).json()).Gender;
    let product_array = [];
    product_array = (await (await fetch('baza.json')).json()).discount;
    let logo = [];
    logo = (await (await fetch("baza.json")).json()).Logo;
    let Menu_array = [];
    Menu_array = (await (await fetch('baza.json')).json()).Menu;
    let Menu_icon_array = [];
    Menu_icon_array = (await (await fetch('baza.json')).json()).Menu_icon;
    let Man_array_CLOTHING = [];
    Man_array_CLOTHING = (await (await fetch('baza.json')).json()).Man.CLOTHING;
    let Man_array_FOOTWEAR = [];
    Man_array_FOOTWEAR = (await (await fetch('baza.json')).json()).Man.FOOTWEAR;

    Gender_array.forEach((element) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', element.linkMenu);
        a.textContent = element.MenuSelect;
        li.append(a);
        ul.append(li);
        if (element.MenuSelect === sec) {
            a.style.backgroundColor = 'white';
            a.style.color = '#1b1c1E';
        };
        a.addEventListener('click', (e) => {
            header1.innerHTML = '';
            header2.innerHTML = '';
            clearInterval(displayText)
            selectMenu(e.target.textContent);
        })

        // ul.addEventListener('click', (select) => {
        //     console.log(select.target.textContent);
        //     if (element.MenuSelect === select) {
        //         li.style.backgroundColor = 'white';
        //         a.style.color = '#1b1c1E';
        //     };
        // })
    });



    const icon = document.createElement('i');
    icon.className = "bx bxs-user";
    const text = document.createElement('span');
    text.textContent = " My Account";
    a_login.setAttribute("href", "#")
    a_login.className = "login_div"
    a_login.append(icon, text)
    header1.append(ul, h3, a_login)
    let currentIndex = 0;
    const displayDiv = document.getElementsByClassName('advertisement')[0];

    const callingText = () => {
        displayDiv.style.opacity = 0;

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % product_array.length;
            displayDiv.textContent = product_array[currentIndex];
            displayDiv.style.opacity = 1;
        }, 1000);
    };

    callingText();

    const displayText = () => {
        setTimeout(callingText, 100);
    };

    setInterval(displayText, 2000);


    const header2 = document.getElementById("head2");
    header2.className = "header2";
    const logo_img = document.createElement("img");
    logo_img.setAttribute("src", logo);
    logo_img.className = "img_logo";

    const nav2 = document.createElement("nav");
    nav2.className = "nav2";
    const clothing_div = document.createElement("div");
    clothing_div.className = "clothing_div";
    const FOOTWEAR_div = document.createElement("div");
    FOOTWEAR_div.className = "FOOTWEAR_div";
    const logo_img2 = document.createElement("img");
    logo_img2.setAttribute("src", logo);
    logo_img2.className = "img_logo2";
    const nav_ul = document.createElement("ul");
    nav_ul.className = "nav_ul";
    nav2.append(logo_img2)
    Menu_array.forEach((element) => {
        const a_li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", element.linkMenu);
        a.textContent = element.MenuSelect;
        a_li.append(a);
        nav_ul.append(a_li);
        if (element.MenuSelect == "CLOTHING") {
            for (let category1 in Man_array_CLOTHING) {
                const categoryTxt1 = document.createElement('h5');
                categoryTxt1.textContent = category1;
                clothing_div.append(categoryTxt1)
                a_li.append(clothing_div)
            }

        }
        else if (element.MenuSelect == "FOOTWEAR") {

            for (let category2 in Man_array_FOOTWEAR) {
                const categoryTxt2 = document.createElement('h5');
                categoryTxt2.textContent = category2;
                FOOTWEAR_div.append(categoryTxt2)
                a_li.append(FOOTWEAR_div)
            }
        }
    })

    const icons_div = document.createElement("div");
    icons_div.className = "icons_div";
    Menu_icon_array.forEach((iconName) => {
        const list = iconName.Select_num;
        const icon = document.createElement("i");
        icon.className = iconName.Menuİcon;
        if (iconName.Menuİcon !== "bx bx-search") {
            const select_num = document.createElement("h6");
            select_num.className = "select_num";
            select_num.textContent = list.length;
            icon.append(select_num);
            icons_div.append(icon);
        };

    })
    const icon_a_wrapper = document.createElement("div");
    icon_a_wrapper.className = "icon_a_wrapper";
    icon_a_wrapper.append(nav_ul, icons_div);
    nav2.append(icon_a_wrapper);

    header2.append(logo_img, nav2);
    window.addEventListener('scroll', function () {
        // Yatay ve dikey kaydırma konumlarını al
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 130) {
            head2.classList.add("row");
            logo_img2.style.opacity = "1";
            logo_img.style.opacity = "0";
        }
        else if (scrollTop < 40) {
            head2.classList.remove("row");
            logo_img2.style.opacity = "0";
            logo_img.style.opacity = "1";
        }
        console.log(scrollTop)
    });


}
