import { caloriesCalculator } from './modules/caloriesCalculator'
import { setTimer }           from './modules/countdownTimer'
import { formDataExtraction } from './modules/formsDataExtraction'
import { menuRender }         from './modules/menuCards'
import { menuTabs }           from './modules/menuTabs'
import { userModalWindow }    from './modules/modalWindow'
import { productSlider }      from './modules/productSlider'

document.addEventListener('DOMContentLoaded', () => {
  menuTabs('.slideContent', '.slideHeaderItem', '.slideHeaderItems')
  caloriesCalculator()
  menuRender('https://6027afc0dd4afd001754a9b0.mockapi.io/api/menu')
  setTimer('.timer', '2021-12-31')
  formDataExtraction('form')
  userModalWindow('[data-modal]', '.modal')
  productSlider({
    container: '.offer__slider',
    image: '.offer__slide',
    nextArrow: '.offer__slider-next',
    previousArrow: '.offer__slider-prev',
    totalCount: '#total',
    currentCount: '#current',
  })
})
