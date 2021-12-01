const faqLists = document.querySelector('.card-faq__list');

async function fetchFaq(url) {
  try {
    const fetchData = await fetch(url);
    const response = await fetchData.json();

    const faqData = response.data;

    for (const faq in faqData) {
      const markup = `
        <details class="card-faq__item">
          <summary class="card-faq__question">${faqData[faq].question}</summary>
          <p class="card-faq__answer">
            ${faqData[faq].answer}
          </p>
        </details>
      `;
      faqLists.insertAdjacentHTML('beforeend', markup);
    }
  } catch (err) {
    console.log(err);
  }
}

const main = () => {
  fetchFaq('./data/faq.json');
}

main();