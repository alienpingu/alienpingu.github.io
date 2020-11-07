// 6/11/2020 - Samuele Bertocco

$('.card-body .btn-block').each((index, element) => element.addEventListener('click', () => $('#hover-wrap').css('display', 'flex')))

$('#hover-wrap')[0].addEventListener('click', () => $('#hover-wrap').css('display', 'none'))