// دیتای ویلا های جدید (section5)
const villas = [
    { code: "0065", location: "شمال، رامسر", name: "شهرک ساحلی-تیپ دوبلکس", price: "3,200,000,000", size: "250 متر", image: "/imgs/emarat1.jpg" },
    { code: "0066", location: "چالوس", name: "شهرک جنگلی-تیپ تریبلکس", price: "4,800,000,000", size: "300 متر", image: "/imgs/emarat2.jpg" },
    { code: "0067", location: "نور", name: "شهرک الهیه-ویلای مدرن", price: "5,500,000,000", size: "280 متر", image: "/imgs/emarat3.jpg" },
    { code: "0068", location: "محمودآباد", name: "شهرک بنفشه-ویلا باغ", price: "2,900,000,000", size: "200 متر", image: "/imgs/emarat6.jpg" },
    { code: "0069", location: "کلارآباد", name: "شهرک الماس-ویلا لوکس", price: "8,000,000,000", size: "350 متر", image: "/imgs/emarat8.jpg" },
    { code: "0070", location: "متل قو", name: "شهرک فردوس-ویلا دوبلکس", price: "6,700,000,000", size: "320 متر", image: "/imgs/emarat4.webp" }
];

// انتخاب کانتینر
const container = document.getElementById("villaContainer");

// ساخت کارت‌ها داینامیک
villas.forEach(villa => {
    const card = document.createElement("div");
    card.className = "swiper-slide !card w-full !flex flex-col items-center !h-80 xl:h-96 !cursor-pointer xl:mb-14";

    card.innerHTML = `
    
    <img src="${villa.image}" alt="" class="!bg-cover !bg-center rounded-2xl w-full h-64 xl:h-72">

                        <!-- content -->
                        <div class="w-full items-center flex flex-col gap-2 -mt-3">

                            <!-- code && location -->
                            <div class="w-1/2 xl:w-full flex flex-row items-center justify-center gap-3">

                                <!-- code -->
                                <div class="px-2 bg-white dark:bg-gray-900 dark:text-white pt-0.5 xl:py-1 xl:px-4 text-[12px] xl:text-sm shadow-sm text-center rounded-full flex gap-0.5">

                                    <p>کد</p>
                                    <p>${villa.code}</p>

                                </div>

                                <!-- location -->
                                <div class="px-2 py-0.5 xl:py-1 xl:px-4 bg-white dark:bg-gray-900 dark:text-white shadow-sm rounded-full flex items-center gap-0.5">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 xl:size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    <p class="text-[12px] xl:text-sm ">${villa.location}</p>

                                </div>

                            </div>

                            <!-- name villa -->
                            <div class="w-full text-center lg:mb-2">

                                <h6 class="text-sm lg:text-base xl:text-lg font-semibold dark:font-medium dark:text-white">${villa.name}</h6>

                            </div>

                            <!-- price && Meterage -->
                            <div class="w-4/5 lg:w-full xl:w-4/5 bg-gray-200 dark:bg-gray-900 shadow-sm rounded-2xl justify-center flex flex-row items-center gap-3 px-4 py-1 xl:py-2">

                                <!-- price -->
                                <div class="bg-white dark:bg-gray-800 px-2 pb-0.5 pt-1 lg:py-1 flex items-center gap-1 rounded-2xl">

                                    <p class="text-[12px] lg:text-sm xl:text-base text-green-800 dark:text-green-400 font-semibold">${villa.price}</p>
                                    <p class="text-[11px] lg:text-sm xl:text-base dark:text-white"> تومان </p>

                                </div>

                                <!-- Meterage -->
                                <div class="bg-white dark:bg-gray-800 px-2 pb-0.5 pt-1 lg:py-1 flex items-center gap-1 rounded-2xl">


                                    <p class="text-[12px] lg:text-sm xl:text-base xl:px-2 dark:text-white">${villa.size}</p>

                                </div>

                            </div>

                        </div>

    `;

    container.appendChild(card);
});





// دیتای زمین های جدید (section7)
const villas1 = [
    { code: "0105", location: "رشت", name: " بهشت باران ", price: "6,200,000,000", size: "300 متر", image: "../imgs/zamin1.jpeg" },
    { code: "0106", location: "سراوان", name: " چمنزار آفتاب ", price: "1,200,000,000", size: "170 متر", image: "../imgs/zamin2.jpg" },
    { code: "0107", location: "رودبار", name: " باغ سپیدار ", price: "4,600,000,000", size: "230 متر", image: "../imgs/zamin7.jpg" },
    { code: "0108", location: "کیاشهر", name: " باغچه مهتاب ", price: "7,600,000,000", size: "330 متر", image: "../imgs/zamin4.jpg" },
    { code: "0109", location: "کلاچای", name: " ویلا پارک آرامش ", price: "8,990,000,000", size: "510 متر", image: "../imgs/zamin5.jpg" },
    { code: "0110", location: "بندرانزلی", name: " زمین توسکا ", price: "5,800,000,000", size: "290 متر", image: "../imgs/zamin6.jpg" }
];

// انتخاب کانتینر
const container1 = document.getElementById("villaContainer1");

// ساخت کارت‌ها داینامیک
villas1.forEach(villa1 => {
    const card1 = document.createElement("div");
    card1.className = "swiper-slide !card w-full !flex flex-col items-center !h-80 xl:h-96 !cursor-pointer xl:mb-14";

    card1.innerHTML = `
    
    <img src="${villa1.image}" alt="" class="!bg-cover !bg-center rounded-2xl w-full h-64 xl:h-72">

                        <!-- content -->
                        <div class="w-full items-center flex flex-col gap-2 -mt-3">

                            <!-- code && location -->
                            <div class="w-1/2 xl:w-full flex flex-row items-center justify-center gap-3">

                                <!-- code -->
                                <div class="px-2 bg-white dark:bg-gray-900 dark:text-white pt-0.5 xl:py-1 xl:px-4 text-[12px] xl:text-sm shadow-sm text-center rounded-full flex gap-0.5">

                                    <p>کد</p>
                                    <p>${villa1.code}</p>

                                </div>

                                <!-- location -->
                                <div class="px-2 py-0.5 xl:py-1 xl:px-4 bg-white dark:bg-gray-900 dark:text-white shadow-sm rounded-full flex items-center gap-0.5">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 xl:size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>

                                    <p class="text-[12px] xl:text-sm ">${villa1.location}</p>

                                </div>

                            </div>

                            <!-- name villa -->
                            <div class="w-full text-center lg:mb-2">

                                <h6 class="text-sm lg:text-base xl:text-lg font-semibold dark:font-medium dark:text-white">${villa1.name}</h6>

                            </div>

                            <!-- price && Meterage -->
                            <div class="w-4/5 lg:w-full xl:w-4/5 bg-gray-200 dark:bg-gray-900 shadow-sm rounded-2xl justify-center flex flex-row items-center gap-3 px-4 py-1 xl:py-2">

                                <!-- price -->
                                <div class="bg-white dark:bg-gray-800 px-2 pb-0.5 pt-1 lg:py-1 flex items-center gap-1 rounded-2xl">

                                    <p class="text-[12px] lg:text-sm xl:text-base text-green-800 dark:text-green-400 font-semibold">${villa1.price}</p>
                                    <p class="text-[11px] lg:text-sm xl:text-base dark:text-white"> تومان </p>

                                </div>

                                <!-- Meterage -->
                                <div class="bg-white dark:bg-gray-800 px-2 pb-0.5 pt-1 lg:py-1 flex items-center gap-1 rounded-2xl">


                                    <p class="text-[12px] lg:text-sm xl:text-base xl:px-2 dark:text-white">${villa1.size}</p>

                                </div>

                            </div>

                        </div>

    `;

    container1.appendChild(card1);
});





// دیتای مجله و اخبار شرکت (section11)
const Customer = [
    { title: " شرایط ویژه خرید ویلا های شهرکی مدرن سازه ", data: "1404/8/5", image: "../imgs/majaleh1.jpg" },
    { title: " بررسی جدیدترین ترند های ساخت و ساز ویلا ", data: "1404/8/20", image: "../imgs/majaleh2.jpg" },
    { title: " مقایسه ویلا های شهرکی و ساحلی از نظر قیمت ", data: "1404/9/12", image: "../imgs/majaleh3.jpeg" },
];

// انتخاب کانتینر
const container2 = document.getElementById("Company-magazine");

// ساخت کارت‌ها داینامیک
Customer.forEach(Comments => {
    const card2 = document.createElement("div");
    card2.className = "w-full flex flex-col gap-5";

    card2.innerHTML = `

            <!-- Magazine1 -->
                    <div class="w-full lg:w-4/5 flex flex-row lg:gap-5 xl:gap-0">

                        <!-- image -->
                        <div class="w-1/3 lg:w-1/4">
                            <img src="${Comments.image}" alt="check net!" class="w-20 h-20 rounded-xl xl:w-24 xl:h-24">
                        </div>

                        <!-- content -->
                        <div class="w-2/3 lg:w-3/4 flex flex-col gap-3 justify-center">

                            <h3 class="text-[12px] font-semibold dark:text-white dark:font-medium lg:text-sm xl:text-xl">${Comments.title}</h3>

                            <!-- data && view all -->
                            <div class="w-full xl:w-2/3 flex flex-row items-center gap-2">

                                <!-- data -->
                                <div class="bg-cyan-800 w-2/5 flex-row py-1 px-2 rounded-full flex items-center justify-center gap-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-white xl:size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <p class="text-[10px] text-white pt-0.5 xl:pt-1 xl:text-[12px]">${Comments.data}</p>

                                </div>

                                <!-- wiew all -->
                                <div class="bg-indigo-100 w-2/5 flex-row py-1 px-2 rounded-full flex items-center cursor-pointer justify-center gap-2">

                                    <p class="text-[10px] text-indigo-800 font-semibold pt-0.5 xl:text-[12px]"> مشاهده </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-indigo-800">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>

                                </div>

                            </div>

                        </div>

                    </div>

                    <hr class="w-full border border-gray-200 dark:border-gray-700  rounded-full">

    `;

    container2.appendChild(card2);
});



// دیتای مجله و اخبار شرکت (section11)
const Customer1 = [
    { title: " تخفیف ویژه خرید ویلا های ساحلی مدرن سازه ", data: "1404/8/18", image: "../imgs/majaleh3.jpeg" },
    { title: " آغاز ساخت پروژه های جدید شرکت مدرن سازه ", data: "1404/9/9", image: "../imgs/majaleh4.jpg" },
    { title: " شرایط جدید پیش فروش واحد های ویلایی شرکت ", data: "1404/9/25", image: "../imgs/majaleh5.jpg" },
];

// انتخاب کانتینر
const container3 = document.getElementById("Company-news");

// ساخت کارت‌ها داینامیک
Customer1.forEach(Comments1 => {
    const card3 = document.createElement("div");
    card3.className = "w-full flex flex-col gap-5";

    card3.innerHTML = `

            <!-- news1 -->
                    <div class="w-full lg:w-4/5 flex flex-row lg:gap-5 xl:gap-0">

                        <!-- image -->
                        <div class="w-1/3 lg:w-1/4">
                            <img src="${Comments1.image}" alt="check net!" class="w-20 h-20 rounded-xl xl:w-24 xl:h-24">
                        </div>

                        <!-- content -->
                        <div class="w-2/3 lg:w-3/4 flex flex-col gap-3 justify-center">

                            <h3 class="text-[12px] font-semibold dark:text-white dark:font-medium lg:text-sm xl:text-xl">${Comments1.title}</h3>

                            <!-- data && view all -->
                            <div class="w-full xl:w-2/3 flex flex-row items-center gap-2">

                                <!-- data -->
                                <div class="bg-blue-800 w-2/5 flex-row py-1 px-2 rounded-full flex items-center justify-center gap-1">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-white xl:size-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <p class="text-[10px] text-white pt-0.5 xl:pt-1 xl:text-[12px]">${Comments1.data}</p>

                                </div>

                                <!-- wiew all -->
                                <div class="bg-orange-100 w-2/5 flex-row py-1 px-2 rounded-full flex items-center cursor-pointer justify-center gap-2">

                                    <p class="text-[10px] text-orange-500 font-semibold pt-0.5 xl:text-[12px]"> مشاهده </p>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-orange-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>

                                </div>

                            </div>

                        </div>

                    </div>

                    <hr class="w-full border border-gray-200 dark:border-gray-700  rounded-full">

    `;

    container3.appendChild(card3);

});

