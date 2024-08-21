document.getElementById('adviceButton').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const advice = data.slip.advice;
            document.getElementById('adviceText').textContent = advice;
        })
        .catch(error => {
            console.error('Erro ao buscar conselho:', error);
            document.getElementById('adviceText').textContent = 'Houve um erro ao obter o conselho.';
        });
});
