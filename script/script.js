for (let e of document.querySelectorAll('input[type="range"].form__field_scroll')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
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

function openQuestion(rowWrapperElement) {
  rowWrapperElement.querySelector('.questions__title').classList.add('questions__title_opened');
  rowWrapperElement.querySelector('.questions__text').classList.add('questions__text_opened');
  rowWrapperElement.querySelector('.questions__arrow').classList.add('questions__arrow_opened');
}

function closeQuestion(rowWrapperElement) {
  rowWrapperElement.querySelector('.questions__title').classList.remove('questions__title_opened');
  rowWrapperElement.querySelector('.questions__text').classList.remove('questions__text_opened');
  rowWrapperElement.querySelector('.questions__arrow').classList.remove('questions__arrow_opened');
}

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

  question.addEventListener('click', handleQuestionClick);

  document.querySelector('#checkbox-form1').addEventListener('input', function (evt) {
    console.log(evt.value);
  })

}



init();