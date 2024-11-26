// Seleciona todas as imagens com o atributo "data-description"
document.querySelectorAll("img[data-description]").forEach(image => {
    let tooltip;

    // Adiciona os eventos de mouseover e mouseout
    image.addEventListener("mouseover", (event) => {
        tooltip = document.createElement("div");
        tooltip.textContent = image.dataset.description;
        tooltip.style.cssText = `
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.9rem;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        `;
        document.body.appendChild(tooltip);
    });

    image.addEventListener("mousemove", (event) => {
        if (tooltip) {
            tooltip.style.top = `${event.pageY + 10}px`;
            tooltip.style.left = `${event.pageX + 10}px`;
        }
    });

    image.addEventListener("mouseout", () => {
        tooltip?.remove();
    });
});