function goToPage(elementId, destinyPage) {
    document.getElementById(elementId).addEventListener('click', function() {
        window.location.href = destinyPage;  // Altere para o caminho do arquivo HTML desejado
    });
}
goToPage('logo', 'index.html')
goToPage('imagem-produto-alimentador-automatico-caes-gatos-pets-programavel-smart-tuya-wifi', 'racoes-produto-alimentador-automatico-caes-gatos-pets-programavel-smart-tuya-wifi.html');

function changeImage(event, src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
    event.target.classList.add('active');
}