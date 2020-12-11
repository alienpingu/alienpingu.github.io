// Form control
// Submit button
let inBtn = $('button')[0]
let accordion = $('#accordion')

let accordionConfig = [
    {
        title: 'Lorem Ipsum 1',
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        title: 'Lorem Ipsum 2',
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        title: 'Lorem Ipsum 3',
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        title: 'Lorem Ipsum 4',
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
      {
        title: 'Lorem Ipsum 5',
        description: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    }
]

// Spawn card in accondition
spawnAccordion = (target) => {
    target.classList.toggle('d-none');
    accordionConfig.map((e, i) => {
        let tempCard = `
            <div class="card">
            <div class="card-header rounded-pill" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                ${e.title}
                </button>
            </h5>
            </div>
            <div id="collapse${i}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
                ${e.description}
            </div>
            </div>
        </div>
        `
        accordion.append(tempCard)
    })
}


// Controller for email input
validateEmail = (emailAdress) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}
// Controller for general input
checkInput = (input, condition) => {
    if (condition) {
        inBtn.classList.remove('disabled')
        input.className = 'form-control is-valid'
    } else {
        input.className = 'form-control is-invalid'
        inBtn.classList.add('disabled')
    }
} 
// Controller for checkbox input
checkCheckbox = (input, condition) => {
    if (condition) {
        input.className = 'custom-control-input is-valid'        
        inBtn.classList.remove('disabled')
    } else {
        input.className = 'custom-control-input is-invalid'        
        inBtn.classList.add('disabled')
    }
}
// General function for check all from
validateForm = (index, input) => {

    switch (index) {
        case 0:
            checkInput(input, Boolean(input.value != 0))
            break;
        case 1:
            checkInput(input, Boolean(input.value != 0))
            break;
        case 2:
            checkInput(input, validateEmail(input.value))
        break;
        case 3:
            checkInput(input, Boolean(input.value.length > 9))
            break;
        case 4:
            checkInput(input, Boolean(input.value.length > 9))
            break;
        case 5:
            checkCheckbox(input, Boolean(input.checked === true))        
            break;
        default:
            break;
    }
}

// Add event listener
// HeroBtn event listener
$('#heroBtn0').on('click', () => window.open("tel:390221119572"));
$('#heroBtn1').on('click', () => $('#footer')[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}));
// Form event listener for check data
// On input in input field
$('form input, textarea').on('input', () => $('form input, textarea').each((index, input) => validateForm(index, input)))
// On submit 
$('.disabled').on('click', (e) => {
    e.preventDefault();
    $('form input, textarea').each((index, input) => validateForm(index, input));
})
$('#accordion .btn').on('click', (e) => spawnAccordion(e.currentTarget))


// Google Analisi
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LV3V2VJQ6N');
// Initialize AOS
AOS.init();