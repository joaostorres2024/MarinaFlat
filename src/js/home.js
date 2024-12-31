document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("mobileMenu");
    var menuIcon = document.querySelector(".menu-icon");
    
    // Garante que o menu está fechado por padrão
    menu.classList.add("hide");

    // Adiciona evento de clique ao ícone do menu
    menuIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        toggleMenu();
    });

    function toggleMenu() {
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            menu.classList.add("hide");
            document.removeEventListener("click", closeMenuOnClickOutside);
        } else {
            menu.classList.remove("hide");
            menu.classList.add("show");
            setTimeout(function() {
                document.addEventListener("click", closeMenuOnClickOutside);
            }, 100); // Adiciona um pequeno atraso para evitar fechar imediatamente
        }
    }

    function closeMenuOnClickOutside(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("show");
            menu.classList.add("hide");
            document.removeEventListener("click", closeMenuOnClickOutside);
        }
    }
});
