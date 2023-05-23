for (let e of document.querySelectorAll('input[type="range"].form__field-scroll')) {
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

}


init();