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

+function ($) { "use strict";

    // Params
    var Ypos = [],
        Xpos = [],
        Speed = [],
        startYPos = [],
        CStrafe = [],
        Strafe = [],
        rotationAll = [],
        height = [],
        width = [],
        counter = 0,
        opacityLeaf = []

    // OCTOBER LEAVES CLASS DEFINITION
    // ============================

    var OctoberLeaves = function(element, options) {
        var self       = this
        this.options   = options
        this.$el       = $(element)

        this.timer = null
        this.winWidth = $(window).width()
        this.winHeight = $(window).height()

        // Init
        this.start()
    }

    OctoberLeaves.DEFAULTS = {
        leafStyles: 3,      // Number of leaf styles in the sprite (leaves.png)
        speedC: 2,          // Speed of leaves
        rotation: 1,        // Define rotation of leaves
        rotationTrue: 1,    // Whether leaves rotate (1) or not (0)
        numberOfLeaves: 15, // Number of leaves
        size: 40,           // General size of leaves, final size is calculated randomly (with this number as general parameter)
        cycleSpeed: 30      // Animation speed (Inverse frames per second) (10-100)
    }

    OctoberLeaves.prototype.start = function() {
        if (this.timer !== null)
            return

        for (var i = 0 ;i < this.options.numberOfLeaves;i++){

            // Pick a leaf style
            var randomLeaf = Math.floor(Math.random() * this.options.leafStyles) + 1;

            // Random width and height according to chosen parameter
            width[i] = Math.round(Math.random() * this.options.size + 20);
            height[i] = Math.round(Math.random() * this.options.size + 20);
            if (width[i] > height[i] *1.5 || height[i] > width[i] * 1.5)
                width[i] = height[i];

            // Starting y position of leaves
            Ypos[i] = -Math.random() * 500 - 40;

            // Randomization of x position of leaves
            Xpos[i] = Math.round(Math.random() * (this.winWidth) - width[i] * 3);
            opacityLeaf[i] = 0.3;

            // Speed of leaves
            Speed[i] = Math.random() * this.options.speedC + 2;

            // Rotation of leaves
            rotationAll[i] = Math.round(Math.random()) * this.options.rotation + Speed[i];
            CStrafe[i]=0;

            // Strength of right/left strafe
            Strafe[i] = Math.random() * 0.06 + 0.05;

            var img = $('<div />').attr('id', 'octoberLeaf'+i)
                .addClass('october-leaf leaf-style'+randomLeaf)
                .css({
                    top: Ypos[i],
                    left: Xpos[i],
                    height: height[i],
                    width: width[i],
                    opacity: opacityLeaf[i],
                    backgroundSize: width[i] + 'px ' + (height[i] * this.options.leafStyles) + 'px',
                    backgroundPosition: '0 ' + height[i] * (randomLeaf - 1) + 'px'
                })

            $('body').append(img)
        }

        this.timer = setInterval($.proxy(this.leafCycle, this), this.options.cycleSpeed)
    }

    OctoberLeaves.prototype.stop = function() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null

            // Destroy all the leaves
            $('.october-leaf').fadeOut(500, function(){
                $(this).remove()
            })
        }
    }

    OctoberLeaves.prototype.leafCycle = function() {
        for (var i = 0; i < this.options.numberOfLeaves; i++) {

            // Strafe
            var strafeY = Speed[i] * Math.sin(90 * Math.PI / 180),
                strafeX = Speed[i] * Math.cos(CStrafe[i]);

            rotationAll[i] += this.options.rotation + Speed[i];
            Ypos[i] += strafeY;
            Xpos[i] += strafeX;

            // Opacity
            if (Ypos[i] < 0){
                opacityLeaf[i] = 1;
                $('#octoberLeaf'+i).css({opacity:opacityLeaf[i]});
            }

            // Leaves slowly disappearing at the end of browser window
            if (Ypos[i] > this.winHeight - height[i] * 4){
                opacityLeaf[i] -= 0.05;
                $('#octoberLeaf' + i).css({opacity:opacityLeaf[i]});
            }

            // When leaves reach certain browser height they are transported back to the begining
          if (Ypos[i] > this.winHeight - (width[i] + height[i]/2)){
                Ypos[i] =- 50;
                Xpos[i] = Math.round(Math.random() * this.winWidth-width[i] * 4);
                Speed[i] = Math.random() * this.options.speedC + 2;
            }

            // Rotation is applied or not
            if (this.options.rotationTrue == 1){
                $('#octoberLeaf'+i).css({top: Ypos[i], left: Xpos[i]});
                $('#octoberLeaf'+i).rotate3Di(rotationAll[i], 0);
            }
            else if (this.options.rotationTrue == 0){
                $('#octoberLeaf'+i).css({top: Ypos[i], left: Xpos[i]});
            }

            CStrafe[i] += Strafe[i];
        }
    }

    // OCTOBER LEAVES PLUGIN DEFINITION
    // ============================

    var old = $.fn.octoberLeaves

    $.fn.octoberLeaves = function (option) {
        var args = Array.prototype.slice.call(arguments, 1)
        return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('oc.leaves')
            var options = $.extend({}, OctoberLeaves.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data) $this.data('oc.leaves', (data = new OctoberLeaves(this, options)))
            else if (typeof option == 'string') data[option].apply(data, args)
        })
    }

    $.fn.octoberLeaves.Constructor = OctoberLeaves

    // OCTOBER LEAVES NO CONFLICT
    // =================

    $.fn.octoberLeaves.noConflict = function () {
        $.fn.octoberLeaves = old
        return this
    }

    // OCTOBER LEAVES DATA-API
    // ===============

}(window.jQuery);
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