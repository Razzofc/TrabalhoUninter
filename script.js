// Função para abrir o formulário de reserva
document.getElementById('reserveBtn').addEventListener('click', function() {
    alert('A reserva será feita em breve!');
});

// Função para enviar o formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    alert('Mensagem enviada! Entraremos em contato em breve.');
});
