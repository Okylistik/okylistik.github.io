let languages = {
    ua: {
        header: {
            bio: {
                vacancy: "Front-End developer, HTML coder",
                name: "Антон Григор'єв",
                date: "Дата народження: 07.11.1989",
                text: "Я початківець в front-end розробці. Вирішив змінити сферу діяльності й повернутися до того, чим раніше займався – розробка веб-сайтів. Але є сильне бажання вдосконалювати свої професійні й особисті якості, та знайти роботу в IT-сфері. Мій підхід – це старанність і опановування чогось нового. Люблю гуляти із собакою, люблю ліс, природу. Також люблю подорожувати із сім'єю. Не їм м'яса з 18 років з етичних міркувань. Зараз у вільний час я дивлюся уроки та вивчаю програмування.",
            },
            education: {
                title: "Навчання",
                text: "Відкритий міжнародний університет розвитку людини «Україна»",
                desc: "Факультет Фінанси і кредит | Фінансист",
                date: "Вересень 2007 - Липень 2012 | Україна(Київ)"
            },
            contact: {
                title: "Контакти"
            }
        },
        language: {
            "Українска мова": "Вільно спілкуюся, рідна мова",
            "Російська мова": "Вільно спілкуюся",
            "Англійська мова": "Середній рівень. Розумію співрозмовника. Можу розмовляти, використовуючи прості речення"
        },
        title: [
            "Мова:", "Робота", "Особисті навички", "Технічні навички", "Мови", "Мої роботи", "Працював в різних сферах, виконував різні ролі. Розмістив 2 останні роботи, де більше всього здобув навичок"
        ]
    },
    en: {
        header: {
            bio: {
                vacancy: "Front-End developer, HTML coder",
                name: "Anton Hryhoryev",
                date: "Date of birth: November 7, 1989",
                text: "Beginner front-end developer. I decided to change my field of activity and return to what I used to do - website development. There is a desire to find a suitable job and improve. My approach is diligence and the ability to learn new things. I like to walk with the dog, I love the forest, nature. I don’t eat meat. I renounced at the age of 18 for ethical reasons. Now in my free time I watch lessons and improve my programming skills.",
            },
            education: {
                title: "Education",
                text: "The Opened International University of Human Development «UKRAINE»",
                desc: "Faculty of Finance and Credit | Finance",
                date: "September 2007 - Jule 2012 | Ukraine(Kyiv)"
            },
            contact: {
                title: "Contacts"
            }
        },
        language: {
            "Ukrainian": "Free, my native language",
            "Russian": "Free",
            "English": "Pre-Intermediate-Intermediate(A2-B1)"
        },
        title: [
            "Language:", "Jobs", "Soft Skills", "Tech Skills", "Languages", "Works", "Worked in different places. Held various positions. I post only the last 2 jobs where I gained the most skills"
        ]
    }
}

function innerText(klass, text) {
    document.querySelector(klass).innerText = text
}

// ХЕДЕР 
function setLanguage(lang = 'en') {
    let setLang = ''
    lang == 'en' ? setLang = languages.en : setLang = languages.ua

    innerText('.lang', setLang.title[0])
    innerText('.btitle__title', setLang.title[1])
    innerText('.btitle__text', setLang.title[6])
    innerText('.soft-skills-title', setLang.title[2])
    innerText('.tech-skills-title', setLang.title[3])
    innerText('.languages-title', setLang.title[4])

    innerText('.block__vacancy', setLang.header.bio.vacancy)
    innerText('.block__name', setLang.header.bio.name)
    innerText('.bio-dates', setLang.header.bio.date)
    innerText('.block__text', setLang.header.bio.text)

    innerText('.ed-title', setLang.header.education.title)
    innerText('.ed-text', setLang.header.education.text)
    innerText('.ed-desc', setLang.header.education.desc)
    innerText('.ed-dates', setLang.header.education.date)

    innerText('.contact-title', setLang.header.contact.title)
}

// languages
const ukr = document.querySelector('.lang_ua')
const usa = document.querySelector('.lang_en')

ukr.addEventListener('click', () => {
    usa.classList.remove('active')
    ukr.classList.add('active')
    setLanguage('ua')
    getJobs('ua')
    getSkills('ua')
    levelLanguages('ua')
})

usa.addEventListener('click', () => {
    ukr.classList.remove('active')
    usa.classList.add('active')
    setLanguage('en')
    getJobs('en')
    getSkills('en')
    levelLanguages('en')
})

// JOBS
async function getJobs(lang = 'en') {
    const bJob = document.querySelector('.jobs__container')
    let jobDB = await fetch('jobs.json')
        .then((res) => res.json())
        .catch(err => console.error(err));
    bJob.innerHTML = ''
    let key
    for (key in jobDB[lang]) {
        bJob.innerHTML += `
    <div class="block-job">
    <div class="job-logo"><img src="${jobDB[lang][key].logo}" alt=""></div>
    <div class="block__title">${jobDB[lang][key].title}</div>
    <div class="block__place">${jobDB[lang][key].place}</div>
    <div class="block__dates">${jobDB[lang][key].dates}</div>
    <div class="block__text">${jobDB[lang][key].text}</div>
    </div>
    `
    }
}

//SKILLS
// soft-skills
async function getSkills(lang = 'en') {
    const bSkills = document.querySelector('.skills__container')
    let skillDB = await fetch('soft-skills.json')
        .then((res) => res.json())
        .catch(err => console.error(err));
    bSkills.innerHTML = ''

    let key
    for (key in skillDB[lang]) {
        bSkills.innerHTML += `
        <div class="soft-skills" style="background-image:url('${skillDB[lang][key].img}'); background-size: contain; background-position: 50%; background-repeat: no-repeat;">
        <div class="soft-skills__img"><img src="${skillDB[lang][key].img}" alt=""></div>
        <div class="soft-skills__title">${skillDB[lang][key].text}</div>
        <div class="soft-skills__text" >${skillDB[lang][key].desc}</div>
    </div>
    `
    }

    //переворот
    const softSkills = document.querySelectorAll('.soft-skills')

    softSkills.forEach((items) => {
        items.addEventListener('mouseover', (e) => {
            console.log(items);
            setTimeout(() => {
                items.children[0].style.display = "none"
                items.children[1].style.display = "none"
                items.children[2].style.display = "block"
            }, 300)

            console.log(items.children);
        })
        items.addEventListener('mouseout', (e) => {
            setTimeout(() => {
                items.children[0].style.display = "block"
                items.children[1].style.display = "block"
                items.children[2].style.display = "none"
            }, 300)
        })
    })

    // techskills
    const bSoft = document.querySelector('.tech-skills__list')
    const arrTechSkills = skillDB['tech-skills'].split('. ')
    bSoft.innerHTML = ''
    arrTechSkills.forEach(item => {
        bSoft.innerHTML += `<li class="tech-skills__text">${item}</li>`
    })
}

//languages
function levelLanguages(lang = 'en') {
    const bLang = document.querySelector('.language__list')
    let setLang = ''
    lang == 'en' ? setLang = languages.en.language : setLang = languages.ua.language
    setLang = Object.entries(setLang)
    bLang.innerHTML = ""
    for (let key in setLang) {
        bLang.innerHTML += `<li class="language__text"><span>${setLang[key][0]}:</span><br>${setLang[key][1]}</li>`
    }
}

//footer
const footer = document.querySelector('.footer')
footer.innerHTML = `© All Rights Reserved - ${new Date().getFullYear()}`

function start() {
    setLanguage()
    getJobs()
    getSkills()
    levelLanguages()
}
// начало
start()

