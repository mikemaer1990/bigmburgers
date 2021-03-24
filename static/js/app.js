const hamburger = document.querySelector(".hamburger");
const navBarLinks = document.querySelector(".navBarLinks");
const links = document.querySelectorAll(".navBarLinks li");

hamburger.addEventListener("click", () => {
    navBarLinks.classList.toggle("open");
});

// const eventList = [{
//         title: "Durham Region Classic Mustang Club",
//         info: "Annual Club Event. There will be door prizes, DJ music and great fun as per usual. Come out for a burger and show some club spirit!",
//         date: "Sunday June 23rd, 2019 4:00pm",
//         img: "./static/imgs/mustang.png",
//         url: "https://drcmc.com"
//     },
//     {
//         title: "Corvettes of Durham",
//         info: "Corvette Night Social Event",
//         date: "Wednesday July 17th, 2019 5:30pm",
//         img: "./static/imgs/corvette.png",
//         url: "http://www.corvettesofdurham.ca/"
//     }
// ];

// for (let i = 0; i < eventList.length; i++) {
//     const parent = document.querySelector('.events-list');
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML = `<div class="event-wrap"><img class="event-img" src="${eventList[i].img}"><p class="event-title">${eventList[i].title}</p><p class="event-info">${eventList[i].info}</p><p class="event-date">${eventList[i].date}</p><br><a href="${eventList[i].url}>Website</a></div>`
//     newDiv.setAttribute('class', 'event-item');
//     parent.appendChild(newDiv)
// }


// jquery
$('.close-x').click(function () {
    $(this).parent().fadeOut();
    $(this).parent().parent().fadeOut();
});