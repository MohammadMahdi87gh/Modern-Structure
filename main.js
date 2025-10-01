import './swiper'
import './gsap'
import './Dynamic'



// scroll
AOS.init();


// dark mode
const html = document.documentElement;
const toggleBtn = document.getElementById('dark-toggle');
// چک کن ببین قبلاً تم ذخیره شده یا نه
if (localStorage.theme === "dark") {
    html.classList.add("dark");
} else if (localStorage.theme === "light") {
    html.classList.remove("dark");
}
// وقتی روی دکمه کلیک میشه
toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    // ذخیره تو localStorage
    if (html.classList.contains("dark")) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
});




// sidebar
const openmenu = document.getElementById("openmenu");
const sidebar = document.getElementById("sidebar");
openmenu.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full");
});

// submenu
const menu = document.getElementById("menu");
const submenu = document.getElementById("submenu");
// باز و بسته کردن زیرمنو
menu.addEventListener("click", (e) => {
    e.stopPropagation();
    submenu.classList.toggle("hidden");
});

// submenu1
const menu1 = document.getElementById("menu1");
const submenu1 = document.getElementById("submenu1");
// باز و بسته کردن زیرمنو
menu1.addEventListener("click", (e) => {
    e.stopPropagation();
    submenu1.classList.toggle("hidden");
});




// range
const pricerange = document.getElementById("pricerange");
const pricevalue = document.getElementById("pricevalue");
pricerange.addEventListener("input", () => {
    pricevalue.textContent = pricerange.value;
});

// section1-toggle1
const villatoggle = document.getElementById("villatoggle");
const earthtoggle = document.getElementById("earthtoggle");
villatoggle.addEventListener("click", () => {
    if (!villatoggle.classList.contains("border-gray-900")) {
        // اگر ویلا انتخاب نشده بود، انتخابش کن
        villatoggle.classList.add("border-gray-900");
        earthtoggle.classList.remove("border-gray-900");
    }
});
earthtoggle.addEventListener("click", () => {
    if (!earthtoggle.classList.contains("border-gray-900")) {
        // اگر زمین انتخاب نشده بود، انتخابش کن
        earthtoggle.classList.add("border-gray-900");
        villatoggle.classList.remove("border-gray-900");
    }
});

// section1-toggle2
const villatoggle2 = document.getElementById("villatoggle2");
const earthtoggle2 = document.getElementById("earthtoggle2");
villatoggle2.addEventListener("click", () => {
    if (!villatoggle2.classList.contains("border-gray-900")) {
        // اگر ویلا انتخاب نشده بود، انتخابش کن
        villatoggle2.classList.add("border-gray-900");
        earthtoggle2.classList.remove("border-gray-900");
    }
});
earthtoggle2.addEventListener("click", () => {
    if (!earthtoggle2.classList.contains("border-gray-900")) {
        // اگر زمین انتخاب نشده بود، انتخابش کن
        earthtoggle2.classList.add("border-gray-900");
        villatoggle2.classList.remove("border-gray-900");
    }

});



