document.addEventListener("DOMContentLoaded", () => {
    const finalConclusion = Number(localStorage.getItem("finalProgress"));
    const success = document.getElementById("successTasks");
    const unsuccess = document.getElementById("unsuccessTasks");
    const title = document.getElementById("final-title");
    const conclusion = document.getElementById("conclusion");
    const restartBtn = document.getElementById("restart-btn");

    console.log("Final Progress:", finalConclusion);
    console.log("Type of finalProgress:", typeof finalConclusion);

    // Check if finalConclusion is a valid number
    if (isNaN(finalConclusion)) {
        console.log("Invalid final progress value");
    } else if (finalConclusion === 100) {
        success.removeAttribute("hidden"); 
        title.innerHTML = "Doing good!";
        conclusion.innerText = `Your final progress: ${Math.round(finalConclusion)}%`;
    } else {
        unsuccess.removeAttribute("hidden"); 
        title.innerHTML = "Keep going!";
        conclusion.innerText = `Your final progress: ${Math.round(finalConclusion)}%`;
    }

    // Ensure restart button exists before adding event listener
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            console.log("Botón BACK HOME clickeado"); // Mensaje para debug
            window.electronAPI.loadPage("index.html");
        });
    } else {
        console.error("Error: No se encontró el botón BACK HOME");
    }
});
