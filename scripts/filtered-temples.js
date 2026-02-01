const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
templeName: "Washington D.C.",
location: "Kensington, Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
templeName: "Lima Perú",
location: "Lima, Perú",
dedicated: "1986, January, 10",
area: 9600,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl:
"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
templeName: "McAllen, Texas",
location: "McAllen, Texas",
dedicated: "2023, October, 8",
area: 27897,
imageUrl:
"https://www.churchofjesuschrist.org/imgs/51edc593152e11ee90afeeeeac1ef99dfe5ba797/full/800%2C/0/default"
},
{
templeName: "Mendoza, Argentina",
location: "Mendoza, Argentina",
dedicated: "2024, September, 22",
area: 21999,
imageUrl:
"https://www.churchofjesuschrist.org/imgs/af7pu96yy3qbqvv6nq1bz9p662c5coek29rsmtkp/full/800%2C/0/default?lang=por"
},
{
templeName: "Portland, Oregon",
location: "Portland, Oregon",
dedicated: "1989, August, 19",
area: 80500,
imageUrl:
"https://www.churchofjesuschrist.org/imgs/91ee64d1750b013886f11c27f2c87c5535f5cbad/full/800%2C/0/default?lang=por"
},
{
templeName: "San Jose, Costa Rica",
location: "San Jose, Costa Rica",
dedicated: "2000, June, 4",
area: 10700,
imageUrl:
"https://www.churchofjesuschrist.org/imgs/bd91294858daabca93f65c705d65adc00568c3c3/full/800%2C/0/default"
},
{
templeName: "Sacramento, California",
location: "Sacramento, California",
dedicated: "2006, July, 29",
area: 19500,
imageUrl:
"https://www.churchofjesuschrist.org/imgs/f44fa0d21e44659d9a141e0dccb552a057cdae58/full/800%2C/0/default?lang=por"
}];

createTempleCard(temples);

const oldTemplesButton = document.querySelector("#oldTemples");
const newTemplesButton = document.querySelector("#newTemples");
const largeTemplesButton = document.querySelector("#largeTemples");
const smallTemplesButton = document.querySelector("#smallTemples");
const homeButton = document.querySelector("#home");


//home button
homeButton.addEventListener("click", () =>{
    createTempleCard(temples);
});

//old button
oldTemplesButton.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year < 2000;
    });
    createTempleCard(oldTemples);
});

//new button
newTemplesButton.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(newTemples);
});

//large button
largeTemplesButton.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => temple.area > 90000); 
    createTempleCard(largeTemples);
});

//small button
smallTemplesButton.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => temple.area < 10000); 
    createTempleCard(smallTemples);
});

function createTempleCard(templeList) {
    const container = document.querySelector(".container");
    container.innerHTML = ""; 

    templeList.forEach(temple => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";

        card.append(name, location, dedication, area, img);
        container.appendChild(card);
    });
}

