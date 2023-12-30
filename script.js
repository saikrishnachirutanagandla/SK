/*-------------Show Menu------------ */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*----- Menu Show---------*/
/*--------Validate if constant exist--------- */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*----- Menu Hide---------*/
/*--------Validate if constant exist--------- */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*-----------------SHADOW HEADER----------------------- */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*-------------------------Email JS------------------------ */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_ntxpcbp','template_uubdtyr','#contact-form','vaSyHZF2Jay6ennpb')
    .then(() =>{
        //show sent message
        contactMessage.textContent = 'Message sent successfully'

        //remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //clear input fields
        contactForm.reset()

    }, () =>{
        //Show error message
        contactMessage.textContent = 'Message not sent (Service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*------------- Show Scroll up-------- */

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //When the scroll is higher than 350 viewport height, add the
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============scroll section active link=========*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)

/*==========Dark Theme================ */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously choose a topic
if (selectedTheme){

document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)


}

//activate /deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    //add or remove the dark /icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-Icon', getCurrentIcon())
})