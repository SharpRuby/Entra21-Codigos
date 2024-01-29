document.getElementById('pesquisarBtn').addEventListener('click', function () {
    fetch('Exercício.json')
        .then(response => response.json())
        .then(data => {
            const tabelaClientes = document.getElementById('tabelaClientes');
            const tbody = tabelaClientes.querySelector('tbody');

            tbody.innerHTML = '';

            data.forEach(cliente => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar dados: ' + error));
});