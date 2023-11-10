//IKKE RØR//

export async function jacketPage() {
    alert ("Page for one jacket")
}

const url = document.location; 
console.log({url})

const search =url.search;

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

async function renderJacket() {
    const id = parameter.get('id');
    const jacketData = await fetchJacket(id);
    console.log((jacketData))
    const singleJacketContent = document.getElementById("single-jacket-content");
    singleJacketContent.innerHTML = JSON.stringify(jacketData);
}

renderJacket();

//IKKE RØR//