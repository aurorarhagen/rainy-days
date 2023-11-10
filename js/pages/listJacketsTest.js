/**const host = "https://api.noroff.dev";
const endpoint ="/api/v1/rainy-days";
const apiUrl = host + endpoint;

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
export async function getlistJackets() {
    const response = await fetch(apiUrl);
    const listJackets = await response.json();
    return listJackets;
}

/*export function renderJacket(jacketData) {
    const jacketElement = document.createElement("div");
    jacketElement.innerText = jacketData.title;

    const img = document.createElement("img");
    img.src= jacketData.image;
    img.alt = jacketData.title;

    jacketElement.append(img);
    
}

export function renderlistJackets(listAllJackets) {
    listAllJackets.forEach(renderJacket)
}


export async function listJacketsPage() {
    const listJackets = await getlistJackets();    
    renderlistJackets(listJackets);
    
    alert ("Page for many jackets")
}

export async function renderlistJackets(listAllJackets) {
    const jacketData =document.querySelector('.all-products');
    container.innerHtml += createCard(element)
}

jacketData.forEach(element=> {
    const card =createCard(element);
    container.append(card);
})

function createCard(element) {
const divElement = document.createElement('div');
const h2Element = document.createElement('h3');
const h3Element = document.createElement('h4');
divElement.classList.add('card');
divElement.id = element.id;
divElement.addEventListener('click', ()=> {
    window.location.href = './jacket.html?id=${element.id}'
})
h3Element.textContent = element.title; 
h4Element.textContent = element.price;
divElement.append(h3Element,h4Element)
return divElement;
}

testing_function(apiUrl)

 <div>
                <img src="../images/RainyDays_Jacket7.jpg" class="jacket-pic"/>
            </div>
            <div>
                <h1>Ribbed fleece jacket</h1>
                <h1>79$</h1>
                <p>Description</p>
                <p>The ribbed fleece jacket is made of 80% recycled polyester and
                    20% wool to keep ypu warm. This jacket is suitable as a second 
                    layer underneath a wind and water resistant jacket during colder
                    seasons, and works as a perfect last layer in warmer climates.
                    The jacket has a short collar, fabric protected front zipper and 
                    two zip-up pockets. </p>
                <p>Choose colour:</p>
                <select name="colour">
                    <option value="green">Moss green</option>
                    <option value="burgundy">Burgundy</option>
                    <option value="charcoal">Charcoal</option>
                    <option value="blue">Ocean Blue</option>
                </select>
                <p>Choose size:</p>
                <select name="size">
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
                <br>
                <div class="add-to-cart">
                <a href="checkout.html"><button class="add-to-cart-button">Add to cart</button></a>
            </div>
        </div>
        
**/