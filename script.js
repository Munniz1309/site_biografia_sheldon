// Seleciona todas as imagens com o atributo "data-description"
const images = document.querySelectorAll("img[data-description]");

// Adiciona os eventos de mouseover e mouseout
images.forEach(image => {
    image.addEventListener("mouseover", (event) => {
        const description = image.getAttribute("data-description");

        // Cria o elemento tooltip
        const tooltip = document.createElement("div");
        tooltip.textContent = description;
        tooltip.style.cssText = `
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.9rem;
            top: ${event.pageY + 10}px;
            left: ${event.pageX + 10}px;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        `;
        tooltip.classList.add("tooltip");
        document.body.appendChild(tooltip);

        // Atualiza a posição do tooltip com o movimento do mouse
        image.addEventListener("mousemove", (event) => {
            tooltip.style.top = `${event.pageY + 10}px`;
            tooltip.style.left = `${event.pageX + 10}px`;
        });
    });

    // Remove o tooltip ao sair do elemento
    image.addEventListener("mouseout", () => {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.remove();
        }
    });
});
