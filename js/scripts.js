async function loadAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    const quote = document.getElementById("quote");
    const id = document.getElementById("id");

    quote.innerHTML = `"${data.slip.advice}"`;
    id.innerHTML = data.slip.id;
}

window.onload = ()=>{
    loadAdvice();

    const card = document.querySelector('.card')
    const cardID = document.querySelector('.card__id')
    const cardQuote = document.querySelector('.card__content')
    const cardImg = document.querySelector('.card__img')
    const cardBtn = document.querySelector('.card__btn')
    const attribution = document.querySelector('.attribution')

    const startAnimation = (entries, observe)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        });
    }
    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    })

    observer.observe(card)
    observer.observe(cardID)
    observer.observe(cardQuote)
    observer.observe(cardImg)
    observer.observe(cardBtn)
    observer.observe(attribution)
}

