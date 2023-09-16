const baseURL = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');



async function fetchData(){
    try {
        const response = await fetch(`${baseURL}/api/avo`);
        const data = await response.json();
        const All = [];
        const formatPrice = (price, currency, ens) => {
            return new window.Intl.NumberFormat(ens, {
                style: 'currency',
                currency: currency,
            }).format(price);
        };
        data.data.forEach(x => {
            //crear container
            const div = document.createElement('div');
            div.className = 'id-padre';  
            div.style.width = '30rem';
            //creamos otro cont
            const div2 = document.createElement('div')
            div2.className = 'id-hijo';
            //creamos otro div mas
            const div3 = document.createElement('div')
            div3.className = 'id-hijo2';
            div3.style.backgroundColor = '#FFFDE0';
            //crear imagen  
            const img = document.createElement('img');
            img.src = `${baseURL}${x.image}`;
            //crear tittle
            const tittle = document.createElement('h1');
            tittle.textContent = x.name;
            tittle.style.fontSize = '2rem';
            //crear price
            const price = document.createElement('div');
            price.textContent = formatPrice(x.price, 'PEN', 'es-PE');
            price.style.fontSize = '1.5rem';
            //creamos boton
            const btn = document.createElement('button');
            btn.id = 'btn'
            btn.textContent = 'Buy';
            btn.style.border = '1px black solid';
            btn.style.width = '10rem';
            btn.style.height = '2rem';
            btn.style.borderRadius = '9px';
            btn.style.marginTop = '20px';
            //agregamos todo
            div2.append(img);
            div3.append(tittle,price,btn)
            div.append(div2, div3);
            All.push(div);
        })
        appNode.append(...All);
    } catch (error) {
        throw error;
    }
}
fetchData(`${baseURL}/api/avo`);