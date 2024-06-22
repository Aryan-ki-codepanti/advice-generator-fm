const num = document.querySelector(".advice-box  span");
const quote = document.querySelector(".advice-box  p:nth-child(2)");

const fetchSetQuote = async () => {
    const req = await fetch("https://api.adviceslip.com/advice");
    const {
        slip: { id, advice }
    } = await req.json();

    num.textContent = id;
    quote.textContent = `"${advice}"`;
};

fetchSetQuote();
