let btnCats= document.getElementById('btnGato');
let btnDogs= document.getElementById('btnPerro');
let showPets = document.querySelector('.grid-mascotas');

//Alternativa para traer la data usando Then y Catch
/*
const getPet = (url) => {
    showPets.innerHTML = '';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(pet => {
            const {imagen, nombre, raza} = pet;
            showPets.innerHTML += `
                <div class="col mascotas">
                    <a href="#" class="enlace-detalle-mascota">
                        <div class="card bg-dark text-white gradiente">                
                            <img src="${imagen}" class="card-img" alt="...">
                            <div class="card-img-overlay">
                                <h5 class="card-title body2Bold">${nombre}</h5>
                                <p class="card-text body2Regular">${raza}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `
        });
    })
    .catch(console.warn)
}
*/

//Función flecha asincrónica para obtener la información de los gatos
const getPet = async(url) => {
    showPets.innerHTML = '';
    const res = await fetch(url); //El await espera a que se resuelva la promesa de la petición enviada a la url de la API
    const data = await res.json(); //La función json() convierte los datos en una estructura json legible
    console.log(data);
    //Recorrer el arreglo de objetos data con forEach para mostrarlo en la estructura html
    data.forEach(pet => {
        const {imagen, nombre, raza} = pet;
        showPets.innerHTML += `
            <div class="col mascotas">
                <a href="#" class="enlace-detalle-mascota">
                    <div class="card bg-dark text-white gradiente">                
                        <img src="${imagen}" class="card-img" alt="...">
                        <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${nombre}</h5>
                            <p class="card-text body2Regular">${raza}</p>
                        </div>
                    </div>
                </a>
            </div>
        `
    });
}

btnCats.addEventListener('click', () => {
    getPet('http://localhost:4001/gatos');
})

btnDogs.addEventListener('click', () => {
    getPet('http://localhost:4002/perros');
})