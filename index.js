// KOD ZA OTVARANJE LISTE U MOFU ZA TELEFON
const listButton = document.getElementById("listButton");
const listMobile = document.getElementById("listMobile");
const closeButton = document.getElementById("closeButton");
const body = document.body;

let list_open = false;

listButton.addEventListener("click", () => {
    list_open = !list_open;

    if (list_open) {
        listMobile.style.left = "0";
        listButton.style.display = "none";
        closeButton.style.display = "flex";
    } else {
        closeMenu();
    }
});

document.querySelectorAll("#listMobile a").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

closeButton.addEventListener("click", closeMenu);

function closeMenu() {
    listMobile.style.left = "-100%";
    list_open = false;
    listButton.style.display = "flex";
    closeButton.style.display = "none";
}

// KOD ZA PROMENU TEME
const banner = document.getElementById("banner");
const blackBanner = document.getElementById("blackBanner");
const themeToggleBtn = document.getElementById('theme-toggle');
const toggleCircle = themeToggleBtn.querySelector('.toggle-circle');
const savedTheme = localStorage.getItem('theme');

function updateTheme(isLightTheme) {
    if (isLightTheme) {
        body.classList.add('light-theme');
        toggleCircle.classList.remove('moon-icon');
        toggleCircle.classList.add('sun-icon');
        banner.style.display = "none";
        blackBanner.style.display = "flex";
    } else {
        body.classList.remove('light-theme');
        toggleCircle.classList.remove('sun-icon');
        toggleCircle.classList.add('moon-icon');
        banner.style.display = "flex";
        blackBanner.style.display = "none";
    }
}

if (savedTheme === 'light-theme') {
    updateTheme(true);
} else {
    updateTheme(false);
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light-theme' : 'root');
    updateTheme(isLight);
});

// KOD ZA PRIKAZIVANJE HEADERA
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const listButton = document.getElementById("listButton");

    window.addEventListener('scroll', function () {
        if (window.innerWidth > 720) {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
                header.style.display = "flex";
                listButton.style.display = "flex";
            } else {
                header.classList.remove('header-scrolled');
                header.style.display = "none";
                listButton.style.display = "none";
            }
        } else {
            header.style.display = "flex"
        }
    });
});

// JS ZA SAT
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

// JAVASCRIPT ZA SLANJE EMAILA
(function(){
    emailjs.init("W25WDP_Enya0jZAgr");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let text = document.getElementById('text').value;
    let email = document.getElementById('email').value;

    let templateParams = {
        from_name: firstName,
        message: text,
        from_email: email,
        to_name: 'Stanko'
    };

    emailjs.send('service_n7ekf1n', 'template_pt06je4', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Poruka je uspešno poslata.');
            document.getElementById('firstName').value = "";
            document.getElementById('text').value = "";
            document.getElementById('email').value = "";
        }, function(error) {
            console.log('FAILED...', error);
            alert('Došlo je do greške prilikom slanja poruke.');
        });
});