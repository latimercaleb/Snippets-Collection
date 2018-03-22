<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{name}} and backwards is {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button> <!--How to pass this to the parent component? Custom event-->
        <button v-on:click = "resetFn()">Change the Name Custom Callback</button>
    </div>
</template>

<script>
// Parent => Child comms on components
export default{
      // Form 1: Array with value name, now it can be passed in by the parent component, recall names can't be in camel or pascal case, can use kebab case.
      // props: ['name'],

      // Form 2: As an object,. we can provide validation
      props:{
            name:{
                   type: [String, Array], // type inference can pass multiple types
                   default: "Gacha"
            },
      resetFn: Function
      },
      methods: {
            switchName() {
                  return this.name.split("").reverse().join(""); // reverses string
            },
            resetName: function(){ // Note objs and arrays are references so they are handled differently, reference vs primitive
                  this.name = "Callat"
                  this.$emit('resetCalled', this.name); // Calls custom event
            }
      }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
