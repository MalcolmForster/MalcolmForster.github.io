//Sidebar to always be in middle regardless of its length nd where page is scrolled to

$(window).on('load', function() {

    $('.topsection').each(function() {
        var topsection = $(this);
        //var trueStart = other.offset().top;
       // var docLoc = $(document).scrollTop();
        var topEleParent = $(this).parent();

        $(window).on({
            scroll:function() {
                var topSScroll = $(this).scrollTop();

                //console.log(topSScroll);

                var topSOpa = Math.min(1-(topSScroll-300)/160,1);

                var trans = Math.max(0,Math.min(1-(topSScroll-300)/400,1));

                    //console.log(1-((startPos - start)*0.05))

                topsection.css({
                    opacity: topSOpa,
                    transform: 'scale('+trans+')'
                });                
            }
        });
    });


    $('.other').each(function() {
        var other = $(this);
        //var trueStart = other.offset().top;
        // var docLoc = $(document).scrollTop();
        var otherEleParent = $(this).parent();
        var otherParOffset = otherEleParent.offset().top;
        // var startPos = other.offset().top;
        

        
        //maybe set a variable for each var? ONe that increase ad decreases in respect with the totop
        //The difference in before and after is how much is minus off whatever.
            

        $(window).on({
            scroll:function() {

                var otherPos = other.offset().top;
                var otherScroll = $(this).scrollTop();
                //var otherchange = otherPos - otherScroll - otherParOffset;

                otherchange = otherPos - otherScroll;



                //console.log(otherScroll);

                var otherOpa = Math.min((otherchange)/100,1);
                //console.log(otherOpa);
                other.css({
                    opacity: otherOpa
                });
                
            }
        });

    });

    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();

        var anchors = $('body').find('h2');
        var classActive = $('a.active').length;
        
        //console.log($(anchors[i-1]).attr('active'));

        for(var i=0; i < anchors.length; i++) {
            if (scrollTop > $(anchors[i]).offset().top - 1000 && scrollTop < $(anchors[i]).offset().top +$(anchors[i]).height()-20){
                // console.log($(anchors[i-1]).hasClass('.active'));
                if(classActive == 0) {
                    $('nav a[href="#' + $(anchors[i]).attr('id')+'"]').addClass('active');           
                }
            } else {
                $('nav a[href="#' + $(anchors[i]).attr('id')+'"]').removeClass('active');
            }
        }
    });
});