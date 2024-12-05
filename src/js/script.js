document.getElementById('imagem-produto-alimentador-automatico-caes-gatos-pets-programavel-smart-tuya-wifi').addEventListener('click', function() {
    window.location.href = 'produto-alimentador-automatico-caes-gatos-pets-programavel-smart-tuya-wifi.html';  // Altere para o caminho do arquivo HTML desejado
});

function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}