;(function( $ ) {
  $.fn.arrownd = function(options) {
  
    var settings = $.extend( {
      'position'    : 'top', // top, bottom, left, right
      'arrowDepth'  : 10,
      'radius'      : 5,
      'lineWidth'   : 1,
      'lineColour'  : '#000',
      'fillColour'  : false
    }, options);

    return this.each(function(i,v) {        

        var $v = $(v);

        $v.css({
            'position':'relative',
            'padding':'1px 15px'
        })

        // set up the canvas
        var canvasHeight = $v.height();
        var canvasWidth = $v.width();
        // add on the arrow space
        if (settings.position == 'top' || settings.position == 'bottom') {
            canvasHeight += settings.arrowDepth; 
        } else {
            canvasWidth += settings.arrowDepth;
        }
        // and attach the canvas to the element
        var $cnv = $('<canvas />',{
            attr:{
                'width':canvasWidth+(settings.lineWidth*2),
                'height':canvasHeight+(settings.lineWidth*2) 
            },
            css:{
                'position':'absolute',
                'top':0,
                'left':0,
                'z-index':-1
            }
        });
        $v.append($cnv);

        // not sure about this, but it prevents overlapping elements
        //$v.height(canvasHeight);
        //$v.width(canvasWidth);

        // get for drawing
        var canvas = $($cnv);
        var ctx = canvas.get(0).getContext("2d");

        switch (settings.position) {
            case "top":
                $v.css({'padding-top':settings.arrowDepth});
                ctx = arrowndTop(ctx,$v.width(),$v.height(),settings.arrowDepth,settings.radius);
                break;

            case "bottom":
                ctx = arrowndBottom(ctx,$v.width(),$v.height(),settings.arrowDepth,settings.radius);
                break;

            case "left":
                $v.css({'padding-left':settings.arrowDepth});
                ctx = arrowndLeft(ctx,$v.width(),$v.height(),settings.arrowDepth,settings.radius);
                break;

            case "right":
                ctx = arrowndRight(ctx,$v.width(),$v.height(),settings.arrowDepth,settings.radius);
                break;
        }

        if(settings.fillColour !== false) {
            ctx.fillStyle = settings.fillColour;
            ctx.fill();    
        }
        
        if(settings.lineColour !== false) {
            ctx.strokeStyle = settings.lineColour;
            ctx.lineWidth = settings.lineWidth;
            ctx.stroke();    
        }

    });

    function arrowndRight(ctx,boxlength,boxheight,arrownddepth,radius)
    {
        var x = y = 0;

        ctx.beginPath();
        // startx, starty, endx, endy, r
        ctx.arcTo(boxlength/2, y , boxlength, y, radius);
        ctx.arcTo(boxlength, y, boxlength + arrownddepth, boxheight / 2, radius);
        ctx.arcTo(boxlength + arrownddepth, boxheight / 2, boxlength, boxheight, radius);
        ctx.arcTo(boxlength, boxheight, x, boxheight, radius);
        ctx.arcTo(x, boxheight, x, y, radius);
        ctx.arcTo(x, y, boxlength/2, y, radius);
        ctx.closePath(); 

        return ctx; 
    }


    function arrowndLeft(ctx,boxlength,boxheight,arrownddepth,radius)
    {
        var x = y = 0;

        ctx.beginPath();
        // startx, starty, endx, endy, r
        ctx.arcTo(arrownddepth + (boxlength/2), y , arrownddepth + boxlength, y, radius);
        ctx.arcTo(arrownddepth + boxlength, y, arrownddepth + boxlength, boxheight, radius);
        ctx.arcTo(arrownddepth + boxlength, boxheight, arrownddepth, boxheight, radius);
        ctx.arcTo(arrownddepth, boxheight, x, boxheight/2, radius);
        ctx.arcTo(x, boxheight/2, arrownddepth, y, radius);
        ctx.arcTo(arrownddepth, y, arrownddepth + (boxlength/2), y, radius);
        ctx.closePath(); 

        return ctx; 
    }

    function arrowndTop(ctx,boxlength,boxheight,arrownddepth,radius)
    {
        var x = y = 0;

        ctx.beginPath();
        // startx, starty, endx, endy, r
        ctx.arcTo(boxlength/2, boxheight + arrownddepth, x, boxheight + arrownddepth, radius);
        ctx.arcTo(x, boxheight + arrownddepth, x, arrownddepth, radius);
        ctx.arcTo(x, arrownddepth, boxlength/2, y, radius);
        ctx.arcTo(boxlength/2, y, boxlength, arrownddepth, radius);
        ctx.arcTo(boxlength, arrownddepth, boxlength, arrownddepth + boxheight, radius);
        ctx.arcTo(boxlength, arrownddepth + boxheight, boxlength/2, boxheight + arrownddepth, radius);
        ctx.closePath(); 

        return ctx; 
    }

    function arrowndBottom(ctx,boxlength,boxheight,arrownddepth,radius)
    {
        var x = y = 0;

        ctx.beginPath();
        // startx, starty, endx, endy, r
        ctx.arcTo(boxlength/2, y , boxlength, y, radius);
        ctx.arcTo(boxlength, y, boxlength, boxheight, radius);
        ctx.arcTo(boxlength, boxheight, boxlength/2, boxheight+arrownddepth, radius);
        ctx.arcTo(boxlength/2, boxheight+arrownddepth, x, boxheight, radius);
        ctx.arcTo(x, boxheight, x, y, radius);
        ctx.arcTo(x, y, boxlength/2, y, radius);
        ctx.closePath(); 

        return ctx; 
    }

  };
})( jQuery );