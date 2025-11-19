$(document).ready(function () {

   
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        const nombre = $("#nombre").val().trim();
        const email = $("#email").val().trim();
        const mensaje = $("#mensaje").val().trim();
        const mensajeResultado = $("#mensajeResultado");

        if (nombre === "" || email === "" || mensaje === "") {
            mensajeResultado
                .html("❌ Por favor, completa todos los campos antes de enviar.")
                .css("color", "#f87171");
        } else {
            mensajeResultado
                .html(`✅ ¡Gracias por tu mensaje, ${nombre}! Te contactaré pronto.`)
                .css("color", "#4ade80");

            $("#contactForm")[0].reset(); 
        }
    });



    $(".main-nav a, .btn-primary").on("click", function (event) {
        const target = $(this).attr("href");

       
        if (target.startsWith("#")) {
            event.preventDefault();

            // Animación de scroll suave
            $("html, body").animate({
                scrollTop: $(target).offset().top - 60 
            }, 700); // duración 0.7 segundos
        }
    });

});