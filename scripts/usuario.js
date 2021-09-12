let form = document.getElementById('formulario');
let findEmail = document.getElementById('btnCorreo');
let editUser = document.getElementById('btnEditar');
let deleteUser = document.getElementById('btnEliminar');
let url = 'http://localhost:4000/usuarios';

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;

        await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

findEmail.addEventListener('click', async() => {
    document.getElementById('id').style.display = 'block';
    document.getElementById('label-edit').style.display = 'block';
    let email = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    let element = data.find(user => user.correo === email);
    const {nombre, apellido, correo, id} = element;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;
})

editUser.addEventListener('click', async() => {
    let findId = document.getElementById('id').value;
    let editName = document.getElementById('name').value;
    let editLastName = document.getElementById('lastName').value;
    let editEmail = document.getElementById('email').value;

    await fetch(`http://localhost:4000/usuarios/${findId}`, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: editName,
            apellido: editLastName,
            correo: editEmail
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

deleteUser.addEventListener('click', async() => {
    let findId = document.getElementById('id').value;
    await fetch(`http://localhost:4000/usuarios/${findId}`, {
        method: 'DELETE'
    })
})

