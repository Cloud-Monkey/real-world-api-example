const API_KEY = "tDCiAxHxhKTDR32cubxZ4NX10-I";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);

    }
}

function displayStatus(data) {

    let heading = "API Key status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    const modalTitle = document.getElementById("resultsModalTitle").innerText = heading;
    const resultContent = document.getElementById("results-content").innerHTML = results;

    resultsModal.show()
}

// API key expires on 20-08-2025