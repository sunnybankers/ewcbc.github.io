
    $(document).ready(function () {


            var mobileNav = document.getElementById('mobile-menu');

            mobileNav.innerHTML = document.getElementById('menuwrapper').innerHTML;

            $("#mobile-menu ul:first").attr("id", "accordion");

			// add divs to the trigger links
            $('#accordion a.trigger').wrap('<div />');
            $('#accordion a.trigger').removeAttr('href');
          
		    //add divs to listitems that aren't trigger links

            $("#mobile-menu > ul > li").each(function () {

                var el = $(this);

                var hasChildren = el.find("ul");

                if (hasChildren.length == 0)  {

                    el.wrapInner("<div></div>");
                }

            });

  
    $("#accordion > li > div").on('click', function () {

        var $div = $(this);
        
        if (false == $div.next().is(':visible')) {
            $('#accordion ul').slideUp(300);
        }
        $div.next().slideToggle(300);
    });
    
    

    $('#toggle').on('click', function () {
        $('#mobile-menu').toggle('slow');
    });


});
	
	
	

