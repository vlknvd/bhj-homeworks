const rotator = Array.from(document.querySelectorAll('.rotator__case'));

rotator.forEach((item, index) => {
    let count = 0;
    item = rotator[count];
    setInterval(()=> {
        item.classList.remove('rotator__case_active');
        count++;
    }, 1000)
    setInterval(()=>{
        item.classList.add('rotator__case_active');
        count++;
    }, 1000)
})