function toggleFaq(element) {
    const faqDisc = element.querySelector('.faq__disc');
    const faqArrow = element.querySelector('.faq__arrow');
  
    faqDisc.classList.toggle('active');
    faqArrow.classList.toggle('active');
  }