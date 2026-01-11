const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const imageWrapper = document.getElementById("imageWrapper");

form.addEventListener("submit", search)

function search(e){
    e.preventDefault();
    const value = searchInput.value.trim();

    getData(value)
    
    searchInput.value=""
    imageWrapper.innerHTML=""
};

async function getData(value){
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
            method:"GET",
            headers:{
                Authorization: "Client-ID sCa3CuMmltnF9gQuRIwBnadFMNIK_scR_VkatNg5ZUQ"
            }
        })
        const data = await response.json()
        const dataArr = Array.from(data.results)
        dataArr.forEach(element => {
            imageWrapper.innerHTML+=
    `
    <img class="w-full h-[200px] object-cover hover:scale-[1.01] duration-[500ms]" src="${element.urls.small}">
    `
        }); 
    }

clearButton.addEventListener("click", clearUi)

function clearUi(){
    searchInput.value=""
    imageWrapper.innerHTML=""
}
