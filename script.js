const links = document.querySelectorAll('a[data-info], button[data-info]'); // Selecionando todos os links e botões com o atributo data-info
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-popup'); // Selecionando botões de fechar

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const info = link.dataset.info;
        const popup = document.getElementById(`popup-${info}`);
        popup.style.display = 'block';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.parentElement; // Encontrando o popup pai do botão
        popup.style.display = 'none';
    });
});

// Adicionando evento de click fora do popup para fechar
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.popup') && !target.closest('a[data-info], button[data-info]')) { // Verificando se o click foi fora do popup e não no link ou botão
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
    }
});