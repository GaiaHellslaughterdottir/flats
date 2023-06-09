//Секция с карточками услуг
const containerServices = document.querySelector('.services__cards-container');
//Шаблон карточки места
const servicesCardElementTemplate = document.querySelector('#services-card-template').content;
//Секция с карточками отзывов
const containerReviews = document.querySelector('.reviews__cards-container');
//Шаблон карточки отзывов
const reviewsCardElementTemplate = document.querySelector('#reviews-card-template').content;
//Шаблон контейнера услуг
const finishingTypeElementTemplate = document.querySelector('#finishing-type-cost').content;
//Контейнер услуг
const containerFinishingTypes = document.querySelector('#finishing-type-cost-container');
//Вопрос и стрелочка в разделе вопросов
const question = document.querySelector('.questions__wrapper');

//Всплывающее окно рассчитать цену
const popupCost = document.querySelector('#popup-cost');

//Иконки закрытия всплывающих окон
const popupCloseIconList = document.querySelectorAll('.popup__close-icon');
//Окна popup
const popups = document.querySelectorAll('.popup');
//Кнопка открытия формы Узнать стоимость
const buttonCost = document.querySelector('#button_cost');
//
const keyEscCode = 27;

const servicesCards = [
  {
    image: 'https://proremontkaliningrad.ru/wp-content/uploads/2021/08/shernovoi-remont.jpg',
    title: 'Без отделки',
    text: 'Исправность розеток, канализация и водопровод, изгибы полов и потолков, еще 5',
    costMetre: '70₽/м²',
    minCost: 'от 3 000 ₽'
  },
  {
    image: 'https://podokonnik.pro/images/remont1.jpg',
    title: 'С отделкой',
    text: 'Исправность розеток, канализация и водопровод, изгибы полов и потолков, еще 5',
    costMetre: '100₽/м²',
    minCost: 'от 4 000 ₽'
  },
  {
    image: 'https://sanych-msk.ru/wp-content/uploads/2016/08/finishing-final-3.jpg',
    title: 'С предчистовой отделкой',
    text: 'Исправность розеток, канализация и водопровод, изгибы полов и потолков, еще 5',
    costMetre: '120₽/м²',
    minCost: 'от 5 000 ₽'
  },
];

//Массив с содержимым карточек отзывов
const reviewsCards = [
  {
    video: 'https://youtu.be/2IU7zaot30s',
    image: 'https://vertex-art.ru/wp-content/uploads/2016/10/portretvizo_.jpg',
    name: 'Сан Сергеич',
    comlex: 'Пушкин',
    developer: 'Питер Первый',
    flat: '105 м²',
    text: 'Обратился в эту организацию по совету друзей. Эксперт Денис осматривал двухкомнатную квартиру в ПИКовском доме. Всё прошло максимально комфортно, чётко и детально. Без участия эксперта я бы подписал акт о приёмке квартиры не увидев 80% «косяков». \n' +
      '\n' +
      'Эксперт всё показал, объяснил, отметил и проконсультировал. В считанные часы было предоставлено заключение со всеми недостатками и замечаниями. \n' +
      '\n' +
      'Цена за услугу приемлемая, жалеть не стоит. Компания предоставляет услуги по сопровождению дел в судах. Однозначно рекомендую.',
  },
  {
    video: 'https://youtu.be/2IU7zaot30s',
    image: 'https://briefly.ru/static/cache/authors/480/gogol.jpeg?1664704046',
    name: 'Гоголь',
    comlex: 'Диканька',
    developer: 'Мётвая душа',
    flat: '30 м²',
    text: 'Обратился в эту организацию по совету друзей. Эксперт Денис осматривал двухкомнатную квартиру в ПИКовском доме. Всё прошло максимально комфортно, чётко и детально. Без участия эксперта я бы подписал акт о приёмке квартиры не увидев 80% «косяков». \n' +
      '\n' +
      'Эксперт всё показал, объяснил, отметил и проконсультировал. В считанные часы было предоставлено заключение со всеми недостатками и замечаниями. \n' +
      '\n' +
      'Цена за услугу приемлемая, жалеть не стоит. Компания предоставляет услуги по сопровождению дел в судах. Однозначно рекомендую.',
  },
  {
    video: 'https://youtu.be/2IU7zaot30s',
    image: 'https://www.art-spb.ru/upload/good_image/16324.jpg',
    name: 'Ваня Гоги',
    comlex: 'Подсолнухи',
    developer: 'Цвет в каждый дом',
    flat: '150 м²',
    text: 'Обратился в эту организацию по совету друзей. Эксперт Денис осматривал двухкомнатную квартиру в ПИКовском доме. Всё прошло максимально комфортно, чётко и детально. Без участия эксперта я бы подписал акт о приёмке квартиры не увидев 80% «косяков». \n' +
      '\n' +
      'Эксперт всё показал, объяснил, отметил и проконсультировал. В считанные часы было предоставлено заключение со всеми недостатками и замечаниями. \n' +
      '\n' +
      'Цена за услугу приемлемая, жалеть не стоит. Компания предоставляет услуги по сопровождению дел в судах. Однозначно рекомендую.',
  },
  {
    video: 'https://youtu.be/2IU7zaot30s',
    image: 'https://www.art-spb.ru/upload/good_image/21062.jpg',
    name: 'Мона Лиза',
    comlex: 'Эрмитаж',
    developer: 'Не помню',
    flat: '1000+ м²',
    text: 'Обратился в эту организацию по совету друзей. Эксперт Денис осматривал двухкомнатную квартиру в ПИКовском доме. Всё прошло максимально комфортно, чётко и детально. Без участия эксперта я бы подписал акт о приёмке квартиры не увидев 80% «косяков». \n' +
      '\n' +
      'Эксперт всё показал, объяснил, отметил и проконсультировал. В считанные часы было предоставлено заключение со всеми недостатками и замечаниями. \n' +
      '\n' +
      'Цена за услугу приемлемая, жалеть не стоит. Компания предоставляет услуги по сопровождению дел в судах. Однозначно рекомендую.',
  },
  {
    video: 'https://youtu.be/2IU7zaot30s',
    image: 'https://mospraz.ru/image/catalog/image/data/0_1uchen/pt_203_2.jpg',
    name: 'Лермонтов',
    comlex: 'Пушкин хаус',
    developer: 'Питер Первый',
    flat: '56 м²',
    text: 'Обратился в эту организацию по совету друзей. Эксперт Денис осматривал двухкомнатную квартиру в ПИКовском доме. Всё прошло максимально комфортно, чётко и детально. Без участия эксперта я бы подписал акт о приёмке квартиры не увидев 80% «косяков». \n' +
      '\n' +
      'Эксперт всё показал, объяснил, отметил и проконсультировал. В считанные часы было предоставлено заключение со всеми недостатками и замечаниями. \n' +
      '\n' +
      'Цена за услугу приемлемая, жалеть не стоит. Компания предоставляет услуги по сопровождению дел в судах. Однозначно рекомендую.',
  },
  {
    video: 'https://youtu.be/2IU7zaot30s',
    image: 'https://vertex-art.ru/wp-content/uploads/2016/10/historic_.jpg',
    name: 'Леонардо',
    comlex: 'Калифорния флэтс',
    developer: 'Шварценеггер продакшн',
    flat: '500 м²',
    text: 'Обратился в эту организацию по совету друзей. Эксперт Денис осматривал двухкомнатную квартиру в ПИКовском доме. Всё прошло максимально комфортно, чётко и детально. Без участия эксперта я бы подписал акт о приёмке квартиры не увидев 80% «косяков». \n' +
      '\n' +
      'Эксперт всё показал, объяснил, отметил и проконсультировал. В считанные часы было предоставлено заключение со всеми недостатками и замечаниями. \n' +
      '\n' +
      'Цена за услугу приемлемая, жалеть не стоит. Компания предоставляет услуги по сопровождению дел в судах. Однозначно рекомендую.',
  }
];


// Массив тип отделки и стоимость
const finishingTypes = [
  {
    type: 'Без отделки',
    cost: 3000,
    costMetre: 70
  },
  {
    type: 'С отделкой',
    cost: 4000,
    costMetre: 100
  },
  {
    type: 'Предчистовая',
    cost: 5000,
    costMetre: 130
  }
];