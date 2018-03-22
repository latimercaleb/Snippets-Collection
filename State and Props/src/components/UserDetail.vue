<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{name}} and backwards is {{ switchName() }}</p>
    </div>
</template>

<script>
// Parent => Child comms on components
export default{
      // Form 1: Array with value name, now it can be passed in by the parent component, recall names can't be in camel or pascal case, can use kebab case.
      // props: ['name'],

      // Form 2: As an object,. we can provide validation
      props:{
            name: [String, Array] // type inference can pass multiple types
      },
      methods: {
            switchName() {
                  return this.name.split("").reverse().join(""); // reverses string
            }
      }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
