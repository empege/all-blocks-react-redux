import { TOGGLE_ACCORDION_ITEM } from './actions';

const reducer = (state, action) => {
  // console.log({ state, action });

  if (action.type === TOGGLE_ACCORDION_ITEM) {
    // (accordionItemHeader, accordionContentRef, accordionParagraphRef)
    // const accordionItem = e.currentTarget.parentElement;
    console.log(action);
    // const header = accordionItemHeader;
    // const content = accordionContentRef;
    // const paragraph = accordionParagraphRef;
    // const paragraphHeight = paragraph.offsetHeight;
    // if ([...header.classList].includes('accordion__header--active')) {
    //   header.classList.remove('accordion__header--active');
    //   content.style.maxHeight = 0;
    // } else {
    //   header.classList.add('accordion__header--active');
    //   content.style.maxHeight = `${paragraphHeight + 40}px`;
    // }
  }
  return state;
}

export default reducer;