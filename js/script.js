const dado = document.getElementById('dado');

const apiRequest = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json();

    const adviceId = document.querySelector(".advice-id");
    const adviceText = document.querySelector(".advice-text");

    adviceId.innerHTML = `Advice #${data.slip.id}`
    adviceText.innerHTML = data.slip.advice
}

dado.addEventListener('click', apiRequest)