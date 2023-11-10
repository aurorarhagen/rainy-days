const host = "https://api.noroff.dev";
const endpoint ="/api/v1/rainy-days";
const apiUrl = host + endpoint;

export async function getlistJackets() {
    const response = await fetch(apiUrl);
    const listJackets = await response.json();
    return listJackets;
}

export function renderJacket(jacketData) {
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