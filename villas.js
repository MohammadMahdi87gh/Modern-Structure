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





// دیتای زمین های جدید (section7)
const villas2 = [
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "/imgs/villa20.jpg" },
    { code: "0106", location: "سراوان", name: " تیپ تریبلکس ", price: "1,200,000,000", size: "170 متر", image: "./imgs/villa14.jpg" },
    { code: "0107", location: "رودبار", name: " ویلای مدرن ", price: "4,600,000,000", size: "230 متر", image: "../imgs/villa18.jpg" },
    { code: "0108", location: "کیاشهر", name: " ویلا باغ ", price: "7,600,000,000", size: "330 متر", image: "../imgs/villa17.jpg" },
    { code: "0109", location: "کلاچای", name: " ویلا لوکس ", price: "8,990,000,000", size: "510 متر", image: "../imgs/villa16.jpg" },
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "../imgs/villa13.jpg" },
    { code: "0106", location: "سراوان", name: " تیپ تریبلکس ", price: "1,200,000,000", size: "170 متر", image: "../imgs/villa12.jpg" },
    { code: "0107", location: "رودبار", name: " ویلای مدرن ", price: "4,600,000,000", size: "230 متر", image: "../imgs/villa11.jpg" },
    { code: "0108", location: "کیاشهر", name: " ویلا باغ ", price: "7,600,000,000", size: "330 متر", image: "../imgs/villa10.jpg" },
    { code: "0109", location: "کلاچای", name: " ویلا لوکس ", price: "8,990,000,000", size: "510 متر", image: "../imgs/villa9.jpg" },
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "../imgs/villa8.jpg" },
    { code: "0106", location: "سراوان", name: " تیپ تریبلکس ", price: "1,200,000,000", size: "170 متر", image: "../imgs/villa7.jpg" },
    { code: "0107", location: "رودبار", name: " ویلای مدرن ", price: "4,600,000,000", size: "230 متر", image: "../imgs/villa6.jpg" },
    { code: "0108", location: "کیاشهر", name: " ویلا باغ ", price: "7,600,000,000", size: "330 متر", image: "../imgs/villa5.jpg" },
    { code: "0109", location: "کلاچای", name: " ویلا لوکس ", price: "8,990,000,000", size: "510 متر", image: "../imgs/villa3.jpg" },
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "../imgs/villa2.jpg" },
    { code: "0106", location: "سراوان", name: " تیپ تریبلکس ", price: "1,200,000,000", size: "170 متر", image: "../imgs/villa1.jpg" },
    { code: "0107", location: "رودبار", name: " ویلای مدرن ", price: "4,600,000,000", size: "230 متر", image: "../imgs/emarat1.jpg" },
    { code: "0108", location: "کیاشهر", name: " ویلا باغ ", price: "7,600,000,000", size: "330 متر", image: "../imgs/emarat1.jpg" },
    { code: "0109", location: "کلاچای", name: " ویلا لوکس ", price: "8,990,000,000", size: "510 متر", image: "../imgs/emarat2.jpg" },
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "../imgs/emarat3.jpg" },
    { code: "0106", location: "سراوان", name: " تیپ تریبلکس ", price: "1,200,000,000", size: "170 متر", image: "../imgs/emarat4.webp" },
    { code: "0107", location: "رودبار", name: " ویلای مدرن ", price: "4,600,000,000", size: "230 متر", image: "../imgs/emarat5.webp" },
    { code: "0108", location: "کیاشهر", name: " ویلا باغ ", price: "7,600,000,000", size: "330 متر", image: "../imgs/emarat6.jpg" },
    { code: "0109", location: "کلاچای", name: " ویلا لوکس ", price: "8,990,000,000", size: "510 متر", image: "../imgs/emarat8.jpg" },
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "../imgs/emarat10.webp" },
    { code: "0105", location: "رشت", name: " تیپ دوبلکس ", price: "6,200,000,000", size: "300 متر", image: "../imgs/villa2.jpg" },
];

// انتخاب کانتینر
const containervilla = document.getElementById("villa-all");

// ساخت کارت‌ها داینامیک
villas2.forEach(villass => {
    const cards = document.createElement("div");
    cards.className = "w-full responsive-villas !flex flex-col items-center !h-80 xl:h-96 !cursor-pointer xl:mb-14";

    cards.innerHTML = `
    
    <img src="${villass.image}" alt="" class="!bg-cover !bg-center rounded-2xl w-full h-64 xl:h-72">

                        <!-- content -->
                        <div class="w-full items-center flex flex-col gap-2 -mt-3">

                            <!-- code && location -->
                            <div class="w-1/2 xl:w-full flex flex-row items-center justify-center gap-3">

                                <!-- code -->
                                <div class="px-2 bg-white dark:bg-gray-900 text-black dark:text-white pt-0.5 xl:py-1 xl:px-4 text-[12px] xl:text-sm shadow-sm text-center rounded-full flex gap-0.5">

                                    <p>کد</p>
                                    <p>${villass.code}</p>

                                </div>

                                <!-- location -->
                                <div class="px-2 py-0.5 xl:py-1 xl:px-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-sm rounded-full flex items-center gap-0.5">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 xl:size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    <p class="text-[12px] xl:text-sm ">${villass.location}</p>

                                </div>

                            </div>

                            <!-- name villa -->
                            <div class="w-full text-center lg:mb-2">

                                <h6 class="text-sm lg:text-base xl:text-lg font-semibold dark:font-medium text-black dark:text-white">${villass.name}</h6>

                            </div>

                            <!-- price && Meterage -->
                            <div class="w-4/5 lg:w-full xl:w-4/5 bg-gray-200 dark:bg-gray-900 shadow-sm rounded-2xl justify-center flex flex-row items-center gap-3 px-4 py-1 xl:py-2">

                                <!-- price -->
                                <div class="bg-white dark:bg-gray-800 px-2 pb-0.5 pt-1 lg:py-1 flex items-center gap-1 rounded-2xl">

                                    <p class="text-[12px] lg:text-sm xl:text-base text-green-800 dark:text-green-400 font-semibold">${villass.price}</p>
                                    <p class="text-[11px] lg:text-sm xl:text-base text-black dark:text-white"> تومان </p>

                                </div>

                                <!-- Meterage -->
                                <div class="bg-white dark:bg-gray-800 px-2 pb-0.5 pt-1 lg:py-1 flex items-center gap-1 rounded-2xl">


                                    <p class="text-[12px] lg:text-sm xl:text-base xl:px-2 text-black dark:text-white">${villass.size}</p>

                                </div>

                            </div>

                        </div>

    `;

    containervilla.appendChild(cards);

});
