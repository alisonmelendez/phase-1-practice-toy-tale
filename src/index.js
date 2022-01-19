let addToy = false;

document.addEventListener("DOMContentLoaded", () => {


    const addBtn = document.querySelector("#new-toy-btn");
    const toyFormContainer = document.querySelector(".container");

    //click listener on the 'Add New Toy' button
    addBtn.addEventListener("click", () => {
        // hide & seek with the form
        addToy = !addToy;
        if (addToy) {
            toyFormContainer.style.display = "block";
        } else {
            toyFormContainer.style.display = "none";
        }
    });


    fetch('http://localhost:3000/toys')
        .then(response => response.json())
        .then(toyData => createCard(toyData))

    function createCard(toyData) {
        //toyData is an object, iterating though 
        //console.log(toyData[0].name)
        toyData.forEach(toy => {
            //toyName = toy.name
            //toyImage = toy.image
            //toyLikes = toy.likes

            let card = document.createElement('div')
            card.className = 'card'
            let toyName = document.createElement('h2')
            let image = document.createElement('img')
            let likesCount = document.createElement('p')
            let likeButton = document.createElement('button')

            toyName.textContent = toy.name
            image.src = toy.image
            image.className = 'toy-avatar'
            likesCount.textContent = toy.likes
            likeButton.textContent = 'Like ❤️'
                //console.log(likeButton)

            let toyCollectionDiv = document.querySelector('#toy-collection')
            toyCollectionDiv.appendChild(card)
            card.appendChild(toyName)
            card.appendChild(image)
            card.appendChild(likesCount)
            card.appendChild(likeButton)
        });
    }

});