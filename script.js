document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector("#toggle");
    const sunIcon = document.querySelector(".toggle .bxs-sun");
    const moonIcon = document.querySelector(".toggle .bx-moon");

    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        sunIcon.className = sunIcon.className === "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
        moonIcon.className = moonIcon.className === "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
    });
});

//Filtro de cards en javascritp con Jquery
$(document).ready(function(){
    $('.filter-item').click(function(){
      
        const value = $(this).attr('data-filter');
        if(value == 'All'){
            $('.post-box').show('200');
        }else{
            $('.post-box').not('.'+value).hide('300');
            $('.post-box').filter('.'+value).show('200');
        }
    })
    //Agregando clase active al primer elemento
    $('.filter-item').click(function(){
        $(this).addClass("active-filter").siblings().removeClass('active-filter');
    })

})

//Compartir en WhatsApp
function shareViaWhatsApp() {
    // Obtener la información del post
    var title = encodeURIComponent(document.title);
    var url = encodeURIComponent(window.location.href);
    var text = encodeURIComponent('¡Echa un vistazo a este artículo!');

    // Crear el enlace de compartir para WhatsApp
    var whatsappLink = 'https://api.whatsapp.com/send?text=' + text + '%0A' + title + '%0A' + url;

    // Abrir una nueva ventana con el enlace de WhatsApp
    window.open(whatsappLink, '_blank');
}



