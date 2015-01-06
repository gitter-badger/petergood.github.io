$(document).ready(function() {
    if ($(window).width() < 1152) {
        sweetAlert("Za ciasno!", "Okno Twojej przeglądarki jest zbyt małe, niektóre elementy strony mogą nie wyświetlać się poprawnie.", "error");
    }
});