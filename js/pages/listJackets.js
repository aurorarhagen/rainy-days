//IKKE RØR//
export async function listJacketsPage() {
    alert ("Page for many jackets")
}

const URL ='https://api.noroff.dev/api/v1/rainy-days';

const testing_function = async(url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            return data;
        }   else {
            throw new Error("Could not load products. Please try again later.");
        }
    } catch (error) {
        console.log(error);
    }
}
async function renderJackets() {
    const jacketsData = await testing_function(URL);
    const allProducts = document.querySelector("#all-products");
    allProducts.innerHTML = ''

    jacketsData.forEach(element => {
        const card = createCard(element);
        allProducts.append(card);
    });
}

function createCard(element) {
    const divElement = document.createElement('div');
    const h3Element = document.createElement('h3');
    const h4Element = document.createElement('h4');
    const imageElement = document.createElement('img');
    imageElement.src = element.image;
    divElement.classList.add('card');
    divElement.id = element.id;
    divElement.addEventListener('click', ()=> {
        window.location.href = `./jacket.html?id=${element.id}`
    })
    h3Element.textContent = element.title; 
    h4Element.textContent = element.price;
    divElement.append(imageElement,h3Element,h4Element)
    return divElement;
}



renderJackets()

//IKKE RØR//
//allProducts.innerHTML += `<a href="./jacket.html?id=${element.id}">${JSON.stringify(element)}`;