<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{childAge}}</p>
        <button @click="changeAge">Edit age</button>
    </div>
</template>

<script>
import {eventBus} from '../main'
export default{
      props: ['childAge'],
      methods:{
            changeAge(){
                  this.childAge = 25; // No age object
                  // Method 1 of child to childAge, use custom event to listen and have parent pass it down as a props
                  // Method 2: Call back solution, use user method and pass a function prop and execute it in the useredit component
                  // Method 3: Helps deal with nesting called event bus, central object to pass data - similar to angular services
                  //this.$emit('ageWasChangedInChild', this.childAge);
                  eventBus.$emit('ageWasChangedInChild', this.childAge);
            }
      }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
