/*
 * October Leaves plugin
 *
 * JavaScript API:
 * $('body').octoberLeaves({...}) // First load with options
 * $('body').octoberLeaves('stop') // Stop
 * $('body').octoberLeaves('start') // Start again
 *
 * Dependences:
 * - rotate3Di plugin (rotate3Di.min.js)
 */
+function(e){"use strict";var t=[],n=[],r=[],i=[],s=[],o=[],u=[],a=[],f=[],l=0,c=[];
var h=function(t,n){var r=this;this.options=n;this.$el=e(t);this.timer=null;this.winWidth=e(window).width()
;this.winHeight=e(window).height();this.start()};h.DEFAULTS={leafStyles:3,speedC:2,rotation:1,rotationTrue:1,
numberOfLeaves:15,size:40,cycleSpeed:30};h.prototype.start=function(){if(this.timer!==null)return;for(var i=0;
i<this.options.numberOfLeaves;i++){var l=Math.floor(Math.random()*this.options.leafStyles)+1;f[i]=Math.round(Math.random()*
this.options.size+20);a[i]=Math.round(Math.random()*this.options.size+20);if(f[i]>a[i]*1.5||a[i]>f[i]*1.5)f[i]=a[i];t[i]=-
Math.random()*500-40;n[i]=Math.round(Math.random()*this.winWidth-f[i]*3);c[i]=.3;r[i]=Math.random()*this.options.speedC+2;u[i]
=Math.round(Math.random())*this.options.rotation+r[i];s[i]=0;o[i]=Math.random()*.06+.05;var h=e("<div />").attr("id","octoberLeaf"+i)
.addClass("october-leaf leaf-style"+l).css({top:t[i],left:n[i],height:a[i],width:f[i],opacity:c[i],backgroundSize:f[i]+"px 
"+a[i]*this.options.leafStyles+"px",backgroundPosition:"0 "+a[i]*(l-1)+"px"});e("body").append(h)}this.timer=setInterval(e.proxy(this.
leafCycle,this),this.options.cycleSpeed)};h.prototype.stop=function(){if(this.timer)
{clearInterval(this.timer);this.timer=null;e(".october-leaf").fadeOut(500,function(){e(this).remove()})}};h.prototype.leafCycle=function(){for(var i=0;i<this.options.numberOfLeaves;i++){var l=r[i]*Math.sin(90*Math.PI/180),h=r[i]*Math.cos(s[i]);u[i]+=this.options.rotation+r[i];t[i]+=l;n[i]+=h;if(t[i]<0){c[i]=1;e("#octoberLeaf"+i).css({opacity:c[i]})}if(t[i]>this.winHeight-a[i]*4){c[i]-=.05;e("#octoberLeaf"+i).css({opacity:c[i]})}
if(t[i]>this.winHeight-(f[i]+a[i]/2))
{t[i]=-50;
n[i]=Math.round(Math.random()*this.winWidth-f[i]*4);
r[i]=Math.random()*this.options.speedC+2}
if(this.options.rotationTrue==1)
{e("#octoberLeaf"+i).css({top:t[i],left:n[i]});e("#octoberLeaf"+i).rotate3Di(u[i],0)}
else if(this.options.rotationTrue==0){e("#octoberLeaf"+i).css({top:t[i],left:n[i]})}s[i]+=o[i]}};var 
p=e.fn.octoberLeaves;e.fn.octoberLeaves=function(t){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=e(this);var i=r.data("oc.leaves");var s=e.extend({},h.DEFAULTS,r.data(),typeof t=="object"&&t);if(!i)r.data("oc.leaves",i=new h(this,s));else if(typeof t=="string")i[t].apply(i,n)})};e.fn.octoberLeaves.Constructor=h;e.fn.octoberLeaves.noConflict=function(){e.fn.octoberLeaves=p;return this}}(window.jQuery)
	(function ($) {
    // rotate3Di v0.9.2
    // https://github.com/zachstronaut/rotate3Di
    // 2012.10.04 - 2009.03.11 Zachary Johnson http://www.zachstronaut.com
    // "3D" isometric rotation and animation using CSS3 transformations
    // currently supported in Safari/Chrome/Webkit, Firefox 3.5+, IE 9+,
    // and Opera 11+. Tested with jQuery 1.3.x through 1.7.2.
    
    
    var calcRotate3Di = {
        direction: function (now) {return (now < 0 ? -1 : 1);},
        degrees: function (now) {return (Math.floor(Math.abs(now))) % 360;},
        scale: function (degrees) {return (1 - (degrees % 180) / 90)
                                            * (degrees >= 180 ? -1 : 1);}
    }
    
    // Custom animator
    $.fx.step.rotate3Di = function (fx) {
        direction = calcRotate3Di.direction(fx.now);
        degrees = calcRotate3Di.degrees(fx.now);
        scale = calcRotate3Di.scale(degrees);

        if (fx.options && typeof fx.options['sideChange'] != 'undefined') {
            if (fx.options['sideChange']) {
                var prevScale = $(fx.elem).data('rotate3Di.prevScale');
                
                // negative scale means back side
                // positive scale means front side
                // if one is pos and one is neg then we have changed sides
                // (but one could actually be zero).
                if (scale * prevScale <= 0) {
                    // if one was zero, deduce from the other which way we are
                    // flipping: to the front (pos) or to the back (neg)?
                    fx.options['sideChange'].call(
                        fx.elem,
                        (scale > 0 || prevScale < 0)
                    );
                    // this was commented out to prevent calling it more than
                    // once, but then that broke legitimate need to call it
                    // more than once for rotations of 270+ degrees!
                    //fx.options['sideChange'] = null;
                    
                    // this is my answer to commenting the above thing out...
                    // if we just flipped sides, flip-flop the old previous
                    // scale so that we can fire the sideChange event correctly
                    // if we flip sides again.
                    $(fx.elem).data(
                        'rotate3Di.prevScale',
                        $(fx.elem).data('rotate3Di.prevScale') * -1
                    );
                }
            }

            // Making scale positive before setting it prevents flip-side
            // content from showing up mirrored/reversed.
            scale = Math.abs(scale);
        }

        // Since knowing the current degrees is important for detecting side
        // change, and since Firefox 3.0.x seems to not be able to reliably get
        // a value for css('transform') the first time after the page is loaded
        // with my flipbox demo... I am storing degrees someplace where I know
        // I can get them.
        $(fx.elem).data('rotate3Di.degrees', direction * degrees);
        $(fx.elem).css(
            'transform',
            'skewY(' + direction * degrees + 'deg)'
                + ' scale(' + scale + ', 1)'
        );
    }
    
    // fx.cur() must be monkey patched because otherwise it would always
    // return 0 for current rotate3Di value
    var proxied = $.fx.prototype.cur;
    $.fx.prototype.cur = function () {
        if(this.prop == 'rotate3Di') {
            return $(this.elem).data('rotate3Di.degrees') || 0;
        }
        
        return proxied.apply(this, arguments);
    }
    
    $.fn.rotate3Di = function (degrees, duration, options) {
        if (typeof duration == 'undefined') {
            duration = 0;
        }
        
        if (typeof options == 'object') {
            $.extend(options, {duration: duration});
        } else {
            options = {duration: duration};
        }
        
        if (degrees == 'toggle') {
            // Yes, jQuery has the toggle() event but that's only good for
            // clicks, and likewise hover() is only good for mouse in/out.
            // What if you want to toggle based on a timer or something else?
            if ($(this).data('rotate3Di.flipped')) {
                degrees = 'unflip';
                
            } else {
                degrees = 'flip';
            }
        }
        
        if (degrees == 'flip') {
            $(this).data('rotate3Di.flipped', true);

            var direction = -1;
            if (
                typeof options == 'object'
                && options['direction']
                && options['direction'] == 'clockwise'
            ) {
                direction = 1;
            }
            
            degrees = direction * 180;
            
        } else if (degrees == 'unflip') {
            $(this).data('rotate3Di.flipped', false);
            
            degrees = 0;
        }
        
        var d = $(this).data('rotate3Di.degrees') || 0;
        $(this).data(
            'rotate3Di.prevScale',
            calcRotate3Di.scale(calcRotate3Di.degrees(d))
        );
        $(this).animate({rotate3Di: degrees}, options);
    }
})(jQuery);