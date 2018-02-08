new Vue({

      el: '#app',

      data: {

            On: false,

            circleClass: 'circle',

            fontClass: 'strange-text',

            div3: 'small',

            div4: 'small',

            div4S: false,

            sight: 1,

            bar: 0

      },

      methods: {

            startEffect: function() {

                  var vI = this;

                  setInterval(function() {

                        vI.On = !vI.On;

                  }, 2000);

            },

            startProgress: function() {

                  var v = this;

                  setInterval(function() {

                        var barVal = parseInt(v.bar, 10);

                        if (barVal >= 300) {

                              v.bar = 0 + 'px';

                        } else {
                              barVal += 20;
                              v.bar = barVal + 'px';

                        }

                  }, 2000);

            },

      }

});