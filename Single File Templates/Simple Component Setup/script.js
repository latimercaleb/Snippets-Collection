// global component, small piece of repeatable JS that can go anywhere once called
Vue.component('servo', {
      data: () => { // this must be a function in the components
            return {
                  status: "Critical"
            }
      },
      // note: templates can only have one root element, so everything must be inside of the <p>.
      template: `<p>Server State: {{status}} <button v-on:click="switchStatus">Change</button></p>`,
      methods: {
            switchStatus: function() {
                  this.status = "Fine";
            }
      }
});
// Local component assigned to variable, must be given a tag name in vue instance
var cmp = {
      data: () => { // this must be a function in the components
            return {
                  status: "Local Testing"
            }
      },
      template: `<p>Server State: {{status}} <button v-on:click="switchStatus">Change</button></p>`,
      methods: {
            switchStatus: function() {
                  this.status = "Local is fine";
            }
      }
};

new Vue({
      el: "#app"
})

new Vue({
      el: "#app2",
      components: { // Assigning of a local component
            'lservo': cmp
      }
})