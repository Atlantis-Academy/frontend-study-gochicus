document.addEventListener('DOMContentLoaded', () => {
  const menuParent: HTMLElement = document.querySelector('.tabheader__items')
  const menuImage: NodeListOf<Element> = document.querySelectorAll('.slidecontent')
  const menuItems: NodeListOf<Element> = document.querySelectorAll('.slideheader__item')

  function hideContent(): void {
    menuImage.forEach((image) => {
      image.classList.add('hide')
      image.classList.remove('show', 'fade')
    })
    menuItems.forEach((item) => {
      item.classList.remove('slideheader__item_active')
    })
  }

  function showContent(index = 0): void {
    menuImage[index].classList.add('show', 'fade')
    menuImage[index].classList.remove('hide')
    menuItems[index].classList.add('slideheader__item_active')
  }

  hideContent()
  showContent()

  menuParent.addEventListener('click', (evt): void => {
    const { target } = evt
    if (target && (target as HTMLElement).classList.contains('slideheader__item')) {
      menuItems.forEach((item: HTMLElement, i: number) => {
        if (target === item) {
          hideContent()
          showContent(i)
        }
      })
    }
  })
  /* Countdown timer food delivery */
  const deadline: string = '2021-05-11'
  function getTimeRemaining(endTime: string): Object {
    const now: Date = new Date()
    const timeCurrent: number = Date.parse(endTime) - Number(now)
    const days: number = Math.floor(timeCurrent / (1000 * 60 * 60 * 24))
    const hours: number = Math.floor((timeCurrent / (1000 * 60 * 60)) % 24)
    const minutes: number = Math.floor((timeCurrent / 1000 / 60) % 60)
    const seconds: number = Math.floor((timeCurrent / 1000) % 60)

    return {
      total: timeCurrent,
      days,
      hours,
      minutes,
      seconds,
    }
  }
  function getZero(num: number): string | number {
    if (num >= 0 && num < 10) {
      return `0${num}`
    }
    return num
  }
  function setTimer(selector: any, endTime: string) {
    const timer: HTMLElement = document.querySelector(selector)
    const days: HTMLElement = timer.querySelector('#days')
    const hours: HTMLElement = timer.querySelector('#hours')
    const minutes: HTMLElement = timer.querySelector('#minutes')
    const seconds: HTMLElement = timer.querySelector('#seconds')
    const timeInterval = setInterval(updateTimer, 1000)
    updateTimer()
    function updateTimer() {
      const time: any = getTimeRemaining(endTime)
      days.innerHTML = String(getZero(time.days))
      hours.innerHTML = String(getZero(time.hours))
      minutes.innerHTML = String(getZero(time.minutes))
      seconds.innerHTML = String(getZero(time.seconds))
      if (time.total <= 0) {
        clearInterval(timeInterval)
      }
    }
  }
  setTimer('.timer', deadline)
  /* Modal Window */
  const modalTrigger: NodeListOf<Element> = document.querySelectorAll('[data-modal]')
  const modalWindow: HTMLElement = document.querySelector('.modal')
  const modalCloseButton: HTMLElement = document.querySelector('[data-close]')

  modalTrigger.forEach((button) => {
    button.addEventListener('click', openModal)
  })
  function closeModal() {
    modalWindow.classList.add('hide')
    modalWindow.classList.remove('show')
    document.body.style.overflow = ''
  }
  function openModal() {
    modalWindow.classList.add('show')
    modalWindow.classList.remove('hide')
    document.body.style.overflow = 'hidden'
  }
  modalCloseButton.addEventListener('click', closeModal)
  modalWindow.addEventListener('click', (event) => {
    if (event.target === modalWindow) {
      closeModal()
    }
  })
  /* Menu class */
  class MenuCard {
    imageSrc: string

    alt: string

    title: string

    description: string

    price: number

    parentSelector: HTMLElement

    classes: string[]

    defaultClass: string

    constructor(
      src: string,
      alt: string,
      title: string,
      description: string,
      price: number,
      parentSelector: string,
      defaultClass: string,
      ...classes: string[]
    ) {
      this.imageSrc = src
      this.alt = alt
      this.title = title
      this.description = description
      this.price = price
      this.classes = classes
      this.defaultClass = 'menu__item'
      this.parentSelector = document.querySelector(parentSelector)
    }

    render() {
      const element = document.createElement('div')

      if (this.classes.length === 0) {
        element.classList.add(this.defaultClass)
      } else {
        this.classes.forEach((className) => element.classList.add(className))
      }

      element.innerHTML = `
                <img src=${this.imageSrc} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `
      this.parentSelector.append(element)
    }
  }
  new MenuCard(
    '../src/assets/img/tabs/vegy.jpg',
    'fitness',
    `Меню "Фитнес"`,
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и   фруктов. 
    Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким
  качеством!`,
    10,
    '.menu .container',
    'menu__item'
  ).render()
  new MenuCard(
    '../src/assets/img/tabs/elite.jpg',
    'premium',
    `Меню “Премиум”`,
    `В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.
     Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
    18,
    '.menu .container',
    'menu__item'
  ).render()

  new MenuCard(
    '../src/assets/img/tabs/post.jpg',
    'post',
    `Меню "Постное"`,
    `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов  животного происхождения, 
    молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет
    тофу и импортных вегетарианских стейков.`,
    22,
    '.menu .container',
    'menu__item'
  ).render()
})
