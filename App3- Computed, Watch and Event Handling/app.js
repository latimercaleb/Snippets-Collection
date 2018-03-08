var app = new Vue({
      el: '#app',
      data: {
            value: 0
      },
      computed: {
            result: function() {
                  if (this.value >= 37)
                        return "done";
                  else {
                        return "Not there yet";
                  }
            }
      },
      watch: {
            result: function(val) {
                  var shell = this;
                  setTimeout(function() {
                        shell.value = 0;
                  }, 5000);
            }
      }
});