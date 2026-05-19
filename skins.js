// Полный массив со всеми скинами для Бананового Кликера
const skins = [
    {
        id: "default",
        name: "Обычный банан",
        image: "banana-emoji.png", 
        cost: 0,
        unlocked: true
    },
    {
        id: "skin_20260516_182203568",
        name: "Банан №1",
        image: "InShot_20260516_182203568.png",
        cost: 50,
        unlocked: false
    },
    {
        id: "skin_20260517_155932487",
        name: "Банан №2",
        image: "InShot_20260517_155932487.png",
        cost: 100,
        unlocked: false
    },
    {
        id: "skin_20260517_155952875",
        name: "Банан №3",
        image: "InShot_20260517_155952875.png",
        cost: 150,
        unlocked: false
    },
    {
        id: "skin_20260517_160032304",
        name: "Банан №4",
        image: "InShot_20260517_160032304.png",
        cost: 200,
        unlocked: false
    },
    {
        id: "skin_20260517_160053290",
        name: "Банан №5",
        image: "InShot_20260517_160053290.png",
        cost: 250,
        unlocked: false
    },
    {
        id: "skin_20260517_160109559",
        name: "Банан №6",
        image: "InShot_20260517_160109559.png",
        cost: 300,
        unlocked: false
    },
    {
        id: "skin_20260517_160123741",
        name: "Банан №7",
        image: "InShot_20260517_160123741.png",
        cost: 350,
        unlocked: false
    },
    {
        id: "skin_20260517_160150086",
        name: "Банан №8",
        image: "InShot_20260517_160150086.png",
        cost: 400,
        unlocked: false
    },
    {
        id: "skin_20260517_160308036",
        name: "Банан №9",
        image: "InShot_20260517_160308036.png",
        cost: 450,
        unlocked: false
    },
    {
        id: "skin_20260517_160323855",
        name: "Банан №10",
        image: "InShot_20260517_160323855.png",
        cost: 500,
        unlocked: false
    },
    {
        id: "skin_20260517_160345166",
        name: "Банан №11",
        image: "InShot_20260517_160345166.png",
        cost: 600,
        unlocked: false
    },
    {
        id: "skin_20260517_160405603",
        name: "Банан №12",
        image: "InShot_20260517_160405603.png",
        cost: 700,
        unlocked: false
    },
    {
        id: "skin_20260517_160434550",
        name: "Банан №13",
        image: "InShot_20260517_160434550.png",
        cost: 800,
        unlocked: false
    },
    {
        id: "skin_20260517_160552252",
        name: "Банан №14",
        image: "InShot_20260517_160552252.png",
        cost: 900,
        unlocked: false
    },
    {
        id: "skin_20260517_160655802",
        name: "Банан №15",
        image: "InShot_20260517_160655802.png",
        cost: 1000,
        unlocked: false
    },
    {
        id: "skin_20260517_160846805",
        name: "Банан №16",
        image: "InShot_20260517_160846805.png",
        cost: 1200,
        unlocked: false
    },
    {
        id: "skin_20260517_160942467",
        name: "Банан №17",
        image: "InShot_20260517_160942467.png",
        cost: 1400,
        unlocked: false
    },
    {
        id: "skin_20260517_161412951",
        name: "Банан №18",
        image: "InShot_20260517_161412951.png",
        cost: 1600,
        unlocked: false
    },
    {
        id: "skin_20260517_161538307",
        name: "Банан №19",
        image: "InShot_20260517_161538307.png",
        cost: 1800,
        unlocked: false
    },
    {
        id: "skin_20260517_161718310",
        name: "Банан №20",
        image: "InShot_20260517_161718310.png",
        cost: 2000,
        unlocked: false
    },
    {
        id: "skin_20260517_161813916",
        name: "Банан №21",
        image: "InShot_20260517_161813916.png",
        cost: 2500,
        unlocked: false
    },
    {
        id: "skin_20260517_161908992",
        name: "Баanan №22",
        image: "InShot_20260517_161908992.png",
        cost: 3000,
        unlocked: false
    },
    {
        id: "skin_20260517_161958021",
        name: "Банан №23",
        image: "InShot_20260517_161958021.png",
        cost: 3500,
        unlocked: false
    },
    {
        id: "skin_20260517_162321285",
        name: "Банан №24",
        image: "InShot_20260517_162321285.png",
        cost: 4000,
        unlocked: false
    },
    {
        id: "skin_20260517_162354994",
        name: "Банан №25",
        image: "InShot_20260517_162354994.png",
        cost: 4500,
        unlocked: false
    },
    {
        id: "skin_20260517_162804892",
        name: "Банан №26",
        image: "InShot_20260517_162804892.png",
        cost: 5000,
        unlocked: false
    },
    {
        id: "skin_20260517_162841908",
        name: "Банан №27",
        image: "InShot_20260517_162841908.png",
        cost: 6000,
        unlocked: false
    },
    {
        id: "skin_20260519_170517730",
        name: "Серебряный банан",
        image: "InShot_20260519_170517730.png",
        cost: 10000,
        unlocked: false
    }
];

// Функция для поиска скина по его ID
function getSkinById(id) {
    return skins.find(skin => skin.id === id);
}

// Делаем данные доступными глобально для main.js без использования export
window.skins = skins;
window.getSkinById = getSkinById;

console.log("Все скины успешно загружены в систему!");

