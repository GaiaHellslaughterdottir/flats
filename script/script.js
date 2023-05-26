for (let e of document.querySelectorAll('input[type="range"].form__field_scroll')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

/**
 * Открытие всплывающего окна
 * @param popup - вслывающее окно
 */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.onkeydown = function (evt) {
    if (evt.keyCode === keyEscCode) {
      const openedPopup = document.querySelector('.popup_opened');
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  };
}

/**
 * Закрытие всплывающего окна
 * @param popup - всплывающее окно
 */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.onkeydown = null;
}

/**
 * Обработчик события закрытия всплывающего окна по крестику
 * @param evt - событие
 */
function handleClosePopup(evt) {
  const popup = evt.target.closest('.popup');
  closePopup(popup);
}

/**
 * Функция добавления новой карточки услуг в галерею
 * @param servicesCardElement - добавляемая карточка
 */
function addServicesCard(servicesCardElement) {
  containerServices.prepend(servicesCardElement);
}

/**
 * Функция добавления новой карточки отзывов в галерею
 * @param reviewsCardElement - добавляемая карточка
 */
function addReviewCard(reviewsCardElement) {
  containerReviews.prepend(reviewsCardElement);
}

/**
 * Функция добавления новой услуги в контейнер услуг
 * @param finishingTypeElement - добавляемая карточка
 */
function addFinishingType(finishingTypeElement) {
  containerFinishingTypes.prepend(finishingTypeElement);
}

/**
 * Функция создания новой карточки услуг
 * @param card - карточка
 */
function createServicesCard(card) {
  const cardElement = servicesCardElementTemplate.querySelector('.services__card-container').cloneNode(true);
  cardElement.querySelector('.services__card-image').src = card.image;
  cardElement.querySelector('.services__card-title').textContent = card.title;
  cardElement.querySelector('.services__card-text').textContent = card.text;
  cardElement.querySelector('.services__card-cost-metre').textContent = card.costMetre;
  cardElement.querySelector('.services__card-cost').textContent = card.minCost;
  return cardElement;
}

/**
 * Функция создания новой карточки отзывов
 * @param card - карточка
 */
function createReviewCard(card) {
  const cardElement = reviewsCardElementTemplate.querySelector('.reviews__card-container').cloneNode(true);
  cardElement.style.backgroundImage = `url('${card.image}')`;
  cardElement.querySelector('.reviews__card-name').textContent = card.name;
  cardElement.querySelector('#complex').textContent = card.comlex;
  cardElement.querySelector('#flat').textContent = card.flat;
  return cardElement;
}

/**
 * Функция создания контейнера выбора услуги
 * @param finishingType - тип услуги
 */
function createFinishingTypeCost(finishingType) {
  const finishingTypeElement = finishingTypeElementTemplate.querySelector('.radio-button__wrapper').cloneNode(true);
  finishingTypeElement.querySelector('.radio-button__text').textContent = finishingType.type;
  return finishingTypeElement;
}


/**
 * Обработчик события разворачивания и сворачивания вопросов
 * @param evt - событие
 */
function handleQuestionClick(evt) {
  const questionElement = evt.target;

  if (questionElement.classList.contains('questions__arrow')) {
    if (!questionElement.classList.contains('questions__arrow_opened')) {
      openQuestion(questionElement.parentElement);
    } else {
      closeQuestion(questionElement.parentElement);
    }
  }

  if (questionElement.classList.contains('questions__title')) {
    if (!questionElement.classList.contains('questions__title_opened')) {
      openQuestion(questionElement.parentElement.parentElement);
    } else {
      closeQuestion(questionElement.parentElement.parentElement);
    }
  }

  if (questionElement.classList.contains('questions__text-wrapper')) {
    if (!questionElement.querySelector('.questions__title').classList.contains('questions__title_opened')) {
      openQuestion(questionElement.parentElement);
    } else {
      closeQuestion(questionElement.parentElement);
    }
  }

}

/**
 * Функция разворачивания вопроса
 * @param rowWrapperElement - элемент обертки вопроса и стрелочки
 */
function openQuestion(rowWrapperElement) {
  rowWrapperElement.querySelector('.questions__title').classList.add('questions__title_opened');
  rowWrapperElement.querySelector('.questions__text').classList.add('questions__text_opened');
  rowWrapperElement.querySelector('.questions__arrow').classList.add('questions__arrow_opened');
}

/**
 * Функция сворачивания вопроса
 * @param rowWrapperElement - элемент обертки вопроса и стрелочки
 */
function closeQuestion(rowWrapperElement) {
  rowWrapperElement.querySelector('.questions__title').classList.remove('questions__title_opened');
  rowWrapperElement.querySelector('.questions__text').classList.remove('questions__text_opened');
  rowWrapperElement.querySelector('.questions__arrow').classList.remove('questions__arrow_opened');
}

function handleGgg(evt) {
  console.log(evt.value);
  const value = evt.target.parentElement.querySelector('.radio-button__text').textContent;
  console.log(value);
  const cost = document.querySelector('#cost');
  const costMetre = document.querySelector('#costMetre');

  finishingTypes.forEach(type => {
    if (type.type === value) {
      cost.textContent = type.cost;
      costMetre.textContent = type.costMetre;
    }
  });


}

/**
 * Инициализация сайта
 */
function init() {

  //Создание галереи услуг предустановленным набором карточек
  servicesCards.forEach(card => {
    const servicesCardElement = createServicesCard(card);
    addServicesCard(servicesCardElement);
  });

  //Создание галереи отзывов предустановленным набором карточек
  reviewsCards.forEach(card => {
    const reviewsCardElement = createReviewCard(card);
    addReviewCard(reviewsCardElement);
  });

  //Создание контейнера со списком услуг
  finishingTypes.forEach(finishingType => {
    const finishingTypeElement = createFinishingTypeCost(finishingType);
    addFinishingType(finishingTypeElement);

  });

  //Добавление слушателя на иконку закрытия окна
  popupCloseIconList.forEach(closeIcon => {
    closeIcon.addEventListener('click', handleClosePopup);
  });

  //Добавление слушателя на кнопку выбора услуги
  document.querySelectorAll('.radio-button__invisible').forEach(ggg => {
    ggg.addEventListener('click', handleGgg);

  });


  question.addEventListener('click', handleQuestionClick);

  buttonCost.addEventListener('click', function () {
    openPopup(popupCost);
  })


}

init();