const ledStatus = document.getElementById("ledStatus");
const turnOnButton = document.getElementById("turnOnButton");
const turnOffButton = document.getElementById("turnOffButton");

async function getStatus() {
    try {
        const response = await fetch("/api/gpio/status");

        if (!response.ok) {
            throw new Error("Unable to retrieve GPIO status.");
        }

        const data = await response.json();
        ledStatus.textContent = data.status;
    } catch (error) {
        console.error(error);
        ledStatus.textContent = "ERROR";
    }
}

async function setLedState(endpoint) {
    try {
        const response = await fetch(endpoint, {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error("Unable to update GPIO status.");
        }

        const data = await response.json();
        ledStatus.textContent = data.status;
    } catch (error) {
        console.error(error);
        ledStatus.textContent = "ERROR";
    }
}

turnOnButton.addEventListener("click", () => {
    setLedState("/api/gpio/on");
});

turnOffButton.addEventListener("click", () => {
    setLedState("/api/gpio/off");
});

getStatus();