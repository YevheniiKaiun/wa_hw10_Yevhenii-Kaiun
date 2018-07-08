export function accordion() {
    const accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', toggleAccordion);
    const accordionHeaders = accordion.querySelectorAll('.item__header');

    function toggleAccordion(e) {
        const itemHeader = e.target.closest('.item__header');
        if (itemHeader) {
            itemHeader.parentNode.classList.toggle('item--open');
            toggleOtherItems(itemHeader)
        }

    }function toggleOtherItems(accordionHeader) {
        Array.from(accordionHeaders).forEach(header => {
            if (header !== accordionHeader) {
                header.parentNode.classList.remove('item--open')
            }
        });
    }
}






