<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta de CEP</title>
</head>

<body>
    <h1>Consulta Endereço ViaCEP</h1>
    <label>Digite seu CEP</label>
    <input type="number" id="cep" />
    <button onclick="consultaEndereco()">Consultar</button>
    <div id="resultado">
        <p>Seu Resultado Aqui</p>
    </div>
    <script>
        function consultaEndereco() {
            let cep = document.querySelector('#cep').value;

            if (cep.length !== 8) {
                alert('CEP Inválido!');
                return;
            }

            let url = `https://viacep.com.br/ws/${cep}/json/`;

            fetch(url)
                .then(function (response) {
                    response.json()
                        .then(function (data) {
                            console.log(data);
                            mostrarEndereco(data);
                        });
                });
        }

        function mostrarEndereco(dados) {
            let resultado = document.querySelector('#resultado');

            resultado.innerHTML = `<p>Complemento: ${dados.complemento}</p>
                                   <p>Bairro: ${dados.bairro}</p>
                                   <p>Cidade: ${dados.localidade}</p>`;
        }
    </script>
</body>

</html>
