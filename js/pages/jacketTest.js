
const url = document.location; 
console.log({url})

const search = url.search;

const parameter = new URLSearchParams(search); 

async function fetchJacket(id) {
    if (!id) throw new Error('Unable to load product. Please try again later.')
    const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`; 
    try {
        const response = await fetch(url);
         if (response.ok) {
            const data = await response.json();

            return data;
         }  else {
            throw new Error('Unable to connect to network'); 
         }
    }   catch (error) {
        console.log(error)
    }
}

fetchJacket();

async function renderJacket() {
    const id = parameter.get('id');
    const jacketData = await fetchJacket(id);
    console.log((jacketData))
    const singleJacketContent = document.querySelector("#single-jacket-content");
    singleJacketContent.innerHTML = ''
   
}
   const oneItem = createOneJacketContent(element);
    singleJacketContent.append(oneItem);

    jacketData.forEach(element => {
        const oneItem = createOneJacketContent(element);
        singleJacketContent.append(oneItem);
    }); 

function createOneJacketContent(element) {
     const divElement = document.createElement('div');
    const imageElement = document.createElement('img');
    const h1TitleElement = document.createElement('h1');
    const h1PriceElement = document.createElement('h1');
    const pDescElement = document.createElement('p');
    const colorElement = document.createElement('h3');
    const sizeElement = document.createElement('select');
    const buttonElement = document.createElement('button');
    imageElement.src = element.image;
    divElement.classList.add('item');
    divElement.id = element.id;
    h1TitleElement.textContent = element.title; 
    h1PriceElement.textContent = element.price;
    pDescElement.textContent = element.description;
    colorElement.textContent = "Color:" + element.baseColor;
    sizeElement.textContent = "Choose size" + element.sizes;
    buttonElement.textContent = "Add to cart";
    divElement.append(imageElement,h1TitleElement,h1PriceElement,pDescElement,colourElement,sizeElement,buttonElement);
    return divElement;
}
renderJacket();

