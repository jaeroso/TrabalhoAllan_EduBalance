// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {

    // 1. Gráfico de Pizza: Distribuição do Tempo Diário
    const ctxTime = document.getElementById('timeChart').getContext('2d');
    new Chart(ctxTime, {
        type: 'doughnut',
        data: {
            labels: ['Redes Sociais', 'Streaming', 'Estudo Tradicional', 'Uso de IA para Estudo', 'Outras Atividades'],
            datasets: [{
                data: [2.5, 2.0, 1.5, 1.0, 3.0], // Dados simulados em horas
                backgroundColor: [
                    '#ff6384', // Redes Sociais
                    '#36a2eb', // Streaming
                    '#ff9f40', // Estudo Tradicional
                    '#4bc0c0', // IA
                    '#c9cbcf'  // Outros
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // 2. Gráfico de Barras: Horas de Estudo Semanais vs Tempo de Redes Sociais
    const ctxImpact = document.getElementById('impactChart').getContext('2d');
    new Chart(ctxImpact, {
        type: 'bar',
        data: {
            labels: ['Grupo A (Telas < 2h)', 'Grupo B (Telas 2h-4h)', 'Grupo C (Telas > 4h)'],
            datasets: [
                {
                    label: 'Média de Horas de Estudo/Dia',
                    data: [4.0, 2.5, 1.2],
                    backgroundColor: '#4f46e5',
                },
                {
                    label: 'Média de Nota Geral (Escala 0-10)',
                    data: [8.5, 7.2, 5.8],
                    backgroundColor: '#10b981',
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});