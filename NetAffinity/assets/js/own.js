var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('img[data-alt-src]').each(function() { 
            new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });
    


	$(".opcionesMove a").click(function() {
		
		event.preventDefault();
		
		var e = $(this).data("goto");
		var t = $("#" + e);
		if (t.length) {
			var n = t.offset().top;
			
		var body = $("html, body");
		body.animate({scrollTop: n}, '500', 'swing');
		}
	});
		
