const reducer = (state, action) => {

  // Selectors
  const accordion = {
    selectors: {
      header: '.js-accordion-header',
      content: '.js-accordion-content',
      paragraph: '.js-accordion-paragraph',
      icon: '.js-acordion-icon',
    }
  }

  if (action.type === 'TOGGLE_ACCORDION_ITEM') {
    console.log(action.payload.target);
    const e = action.payload;
    console.log(action.payload.target)
    const accordionItem = e.currentTarget.parentElement;
    const header = e.currentTarget;
    const content = accordionItem.querySelector(accordion.selectors.content);
    const paragraph = content.querySelector(accordion.selectors.paragraph);
    const paragraphHeight = paragraph.offsetHeight;
    const icons = accordionItem.querySelectorAll(accordion.selectors.icon);
    if ([...header.classList].includes('accordion__header--active')) {
      header.classList.remove('accordion__header--active');
      content.style.maxHeight = 0;
      icons[0].classList.add('display-none')
      icons[1].classList.remove('display-none')
    } else {
      header.classList.add('accordion__header--active');
      content.style.maxHeight = `${paragraphHeight + 40}px`;
      icons[0].classList.remove('display-none')
      icons[1].classList.add('display-none')
    }
  }

}

export default reducer;