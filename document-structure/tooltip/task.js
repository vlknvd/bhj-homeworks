const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < hasTooltip.length; i++) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    let coords = hasTooltip[i].getBoundingClientRect();
    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = (coords.top + coords.height) + 'px';
    tooltip.style.position = 'absolute';
    tooltip.innerText = hasTooltip[i].title;

    hasTooltip[i].insertAdjacentElement("afterend", tooltip);

    hasTooltip[i].addEventListener('click', (event) => {
        event.preventDefault();
        tooltip.classList.add('tooltip_active');
    })
}
