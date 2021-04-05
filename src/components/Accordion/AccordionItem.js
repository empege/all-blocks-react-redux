import React, { useState, useRef } from 'react';
// import { useAppContext } from '../../context';
import { connect } from 'react-redux';
import { TOGGLE_ACCORDION_ITEM } from '../../actions'

const AccordionItem = ({ title, text, toggleAccordionItem }) => {

  // const { toggleSlideAccordionItem } = useAppContext();

  const [accordionItemIcon, setAccordionItemIcon] = useState(true);

  const accordionHeaderRef = useRef(null);
  const accordionContentRef = useRef(null);
  const accordionParagraphRef = useRef(null);

  const handleAccordionItemClick = (e) => {
    const [header, content, paragraph] = [e.currentTarget, accordionContentRef.current, accordionParagraphRef.current];
    // dispatch({ type: TOGGLE_ACCORDION_ITEM, payload: 1 })
    setAccordionItemIcon(!accordionItemIcon);
  }
  // const handleAccordionItemClick = (e) => {
  //   toggleSlideAccordionItem(e.currentTarget, accordionContentRef.current, accordionParagraphRef.current);
  //   setAccordionItemIcon(!accordionItemIcon);
  // }

  return (
    <div className="accordion__item">
      <div
        ref={accordionHeaderRef}
        className="accordion__header"
        onClick={() => toggleAccordionItem()}>
        <h1 className="accordion__title">{title}</h1>
        <span className="accordion__icon">
          <i className={accordionItemIcon ? `fas fa-plus` : `fas fa-minus`}></i>
        </span>
      </div>
      <div className="accordion__content js-accordion-content" ref={accordionContentRef}>
        <p ref={accordionParagraphRef} className="accordion__paragraph js-accordion-paragraph">{text}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log({ state });
  return { probica: state.proba1 }
}

// ownProps je SAMO PROPS KOJI SU UBACENI OD RODITELJA, NE I od glavnog state iz mapStateProps
const mapDispatchToProps = (dispatch, ownProps) => {
  // const [header, content, paragraph] = [accordionHeaderRef.current, accordionContentRef.current, accordionParagraphRef.current]
  return { toggleAccordionItem: () => dispatch({ type: TOGGLE_ACCORDION_ITEM, payload: 1 }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionItem);
