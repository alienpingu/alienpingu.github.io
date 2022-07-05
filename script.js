let cardGridDom = document.getElementById('porfolio-grid');

let createCard = (cardData) => `<div class="card"><h3 class="card-title">${cardData.title}</h3><p>${cardData.desc}</p><a href="${cardData.href}" class="btn-card">Demo</a>`

let portfolioData = [
    {
        title: 'GoldInvestimenti',
        desc: 'Template for a estate agency, elegant and purple',
        href: '/demo/1'
    },
    {
        title: 'FormAI',
        desc: 'Form for train an Artificial Intelligence, PWA fast and modulable',
        href: '/demo/2'
    },
    {
        title: 'SmartCV',
        desc: 'Create your Curriculum Vitae with this PWA, optimized for desktop but work on phone',
        href: '/demo/3'
    },
    {
        title: 'ColorOfDay',
        desc: 'Website that show a random color every time you visit, usefull for color inspiration',
        href: '/demo/4'
    },
    {
        title: '12DotGame',
        desc: 'Little logic game with good background, the game mechanic is simple but the game itself it is really hard',
        href: '/demo/5'
    },
    {
        title: 'Zeerconia',
        desc: 'Template for an ecommerce built in V8 with the feature of a 3D render in desktop version',
        href: '/demo/6'
    },
    {
        title: 'ThreeJS Spinning Scene',
        desc: 'First Personal Experiment with ThreeJS, a simple orbit rotating scene',
        href: '/demo/7'
    },
    {
        title: 'TeeniJS - Tennis Game Engine',
        desc: 'Generator of result of a tennis game, without UI',
        href: '/demo/8'
    },
    {
        title: 'UPGVNG - Ecommerce example with Ecwid ',
        desc: 'First experiment of an ecommerce with a custum Front End with Ecwid',
        href: '/demo/9'
    },
    {
        title: 'PRO ecwid - Ecommerce example with Ecwid ',
        desc: 'Ecommerce full template for commercial use, never used before',
        href: '/demo/10'
    },
    

]

portfolioData.forEach((cardData) => {
    let newCard = createCard(cardData);
    cardGridDom.innerHTML = cardGridDom.innerHTML + newCard;
})