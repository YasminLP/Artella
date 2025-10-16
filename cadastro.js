function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('cadNome').value;
    const email = document.getElementById('cadEmail').value;
    const usuario = document.getElementById('cadUsuario').value;
    const senha = document.getElementById('cadSenha').value;

    const novoRegistro = {
        nome,
        email,
        usuario,
        senha
    };

    db.ref('usuarios').push(novoRegistro)
        .then(() => {
        alert("Registrado com sucesso!");
        document.getElementById('cadNome').value = '';
        document.getElementById('cadEmail').value = '';
        document.getElementById('cadUsuario').value = '';
        document.getElementById('cadSenha').value = '';

    });
}