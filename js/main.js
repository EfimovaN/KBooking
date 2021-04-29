'use strict';

const numberAdverts = 8;
const titleOffer = 'Заголовок предложения';
const maxPrice = 10000;
const minPrice = 1;
const typeOffer = ['palace', 'flat', 'house', 'bungalo'];
const maxRooms = 5;
const minRooms = 1;
const maxGuest = 4;
const minGuest = 1;
const checkTimes = ['12:00', '13:00', '14:00'];
const featuresOffer = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const descriptionOffer = 'Описание предложения';
const photosOffer = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const maxXlocation = 1100;
const minXlocation = 100;
const maxYlocation = 630;
const minYlocation = 130;

const adverts = [];

const getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < numberAdverts; i++) {
    let numAvatar = 1 + i;
    const locationX = getRandomInt(minXlocation, maxXlocation); 
    const locationY = getRandomInt(minYlocation, maxYlocation); 
    const price = getRandomInt(minPrice, maxPrice); 
    const type = typeOffer[Math.floor(Math.random() * typeOffer.length)];
    const rooms = getRandomInt(minRooms, maxRooms); 
    const guests = getRandomInt(minGuest, maxGuest); 
    const checkin = checkTimes[Math.floor(Math.random() * checkTimes.length)];
    const checkout = checkTimes[Math.floor(Math.random() * checkTimes.length)];
    const features  = featuresOffer[Math.floor(Math.random() * checkTimes.length)];

    if (numAvatar < 10) {
        numAvatar = '0' + numAvatar;
    } 

    // const firstName = nameWizard[Math.floor(Math.random() * nameWizard.length)];
    // const secondName = surnameWizard[Math.floor(Math.random() * surnameWizard.length)];
    adverts[i] = {
        'author': {
            'avatar': `img/avatars/user${numAvatar}.png`
        },
        'offer': {
            'title': titleOffer,
            'address': `${locationX}, ${locationY}`, 
            'price': price,
            'type': type,
            'rooms': rooms,
            'guests': guests,
            'checkin': checkin,
            'checkout': checkout,
            'features': features,

        },

        'location': {
            'x': locationX,
            'y': locationY
        }





        // name: firstName + ' ' + secondName,
        // coatColor: coatColorWizard[Math.floor(Math.random() * coatColorWizard.length)],
        // eyesColor: eyesColorWizard[Math.floor(Math.random() * eyesColorWizard.length)]
    };
};

console.log(adverts);

  
    // 'offer': {
    //   'features': ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'], //массив строк случайной длины из ниже предложенных 
    //   'description': 'Cтрока с описанием',
    //   'photos': ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'] //массив строк случайной длины, содержащий адреса фотографий 
    // },
  
    // 'location': {
    //   'x': случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
    //   'y': случайное число, координата y метки на карте от 130 до 630.
    // }
