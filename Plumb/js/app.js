
    /* menu nav toggle */
    $("#nav_toggle").on("click", function() {
        $(this).toggleClass("active");
        $("#nav").toggleClass("active")

    });

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('collapse');

        $(blockId).slideToggle();
    });





