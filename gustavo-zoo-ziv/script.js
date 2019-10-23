var animals = [{
        name: "Pingi",
        type: "penguin",
        image: 'images/pingi.jpg',
        age: 3,
        weight: 11,
        food: ['fish']
    },
    {
        name: "Shmil",
        type: "cat",
        image: 'images/cat.jpg',
        age: 6,
        weight: 4.1,
        food: ['fish']
    },
    {
        name: "Garfield",
        type: "cat",
        image: 'images/garfield.jpg',
        age: 43,
        weight: 13,
        food: ['lazania', 'fish']
    },
    {
        name: "Lionardo",
        type: "lion",
        image: 'images/leonpadre2.jpg',
        age: 12,
        weight: 173,
        food: ['zebra']
    },
    {
        name: "Dambo",
        type: "elephant",
        image: 'images/dambo.jpg',
        weight: 5310,
        age: 16,
        food: ['fruits', 'small plants', 'grass']
    },
    {
        name: "Simba",
        type: "lion",
        image: 'images/simba.jpg',
        age: 5,
        weight: 121,
        food: ['zebra']
    },

    {
        name: "Giraffe",
        type: "giraffe",
        image: 'images/jirafs.jpg',
        age: 5,
        weight: 842,
        food: ['trees']
    }
];

var main_div = document.getElementById("mainDiv");
var gallery = document.getElementById("gallery");



function createCard(animal) {
    var card = document.createElement("div");
    card.className = "card"

    gallery.appendChild(card);
    var cardImg = document.createElement("img");

    cardImg.className = "card-img-top";
    cardImg.src = animal.image;
    card.appendChild(cardImg);

    var cardContent = document.createElement("div");

    function buildCardContent(element, className, content) {
        var child = document.createElement(element);
        child.className = "card-" + className;
        child.innerHTML = content;
        cardContent.appendChild(child);
    }

    cardContent.className = "card-body";

    buildCardContent("h3", "title", animal.name);
    buildCardContent("h5", "subtitle", animal.type);
    var animalInfo = "<strong>Age:</strong> " + animal.age + "   |   <strong>Food:</strong>  " + animal.food + "   |   <strong>weight:</strong>  " + animal.weight;
    buildCardContent("p", "text", animalInfo);

    card.appendChild(cardContent);


}



function createGallery(animalArray) {
    cleanGallery();
    for (let i = 0; i < animalArray.length; i++) {
        createCard(animalArray[i]);

    }
}

function cleanGallery() {
    gallery.innerHTML = '';
}

createGallery(animals);


function searchFunc() {
    event.preventDefault();
    var form = event.target;
    var data = form.getAttribute("data-search");
    var input = form[0].value;
    console.log(data, input);

    var filteredAnimals = [];

    function filterByText(prop) {
        for (let i = 0; i < animals.length; i++) {
            console.log(animals[i][prop]);
            if (animals[i][prop].includes(input.toLowerCase())) {
                filteredAnimals.push(animals[i]);
            }
        }
    }

    function filterByNumber(prop) {
        for (let i = 0; i < animals.length; i++) {
            if (animals[i][prop] == input) {
                filteredAnimals.push(animals[i]);
            }
        }
    }

    switch (data) {
        case "name":
            filterByText(data);
            break;

        case "type":
            filterByText(data);
            break;

        case "age":
            filterByNumber(data);
            break;

        case "food":
            filterByText(data);
            break;

        case "weight":
            filterByNumber(data);
            break;
    }

    createGallery(filteredAnimals);


}

function reset() {
    createGallery(animals);
}