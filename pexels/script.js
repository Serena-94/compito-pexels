
const rowContainer = document.getElementById(gallery)


async function loadImages() {
    const response = await fetch("https://api.pexels.com/v1/search?query=nature", {
        headers: {
            Authorization: "aaOtZTjUERTCs1XeDggE82hSJSIBaAqytbjG7jBa1D7Zmh0ms8wBVaQO"
        }
    })
    const data = await response.json()
    renderImages(data.photos)
    console.log(data)
}

loadImages()

function createImageCard(photo) {
    const colContainer = document.createElement("div")
    colContainer.classList.add("col", "mb-3")

    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card")
    colContainer.appendChild(cardContainer)

    const cardImage = document.createElement("img")
    cardImage.classList.add("card-img-top", "gallery-img")
    cardImage.src = photo.src.medium
    cardContainer.appendChild(cardImage)

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    cardContainer.appendChild(cardBody)

    const cardText = document.createElement("p")
    cardText.classList.add("card-text")
    cardText.textContent = photo.photographer
    cardBody.appendChild(cardText)

    return colContainer
}

function renderImages(photos) {
const gallery = document.getElementById("gallery")

photos.forEach(photo => {

gallery.appendChild(createImageCard(photo))

})
}