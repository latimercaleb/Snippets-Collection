<template>
      <div>


      <ul class="list-group">
          <Server class="list-group-item"
                v-for="index in 5">
        </Server>,
      </ul>
            </div>
</template>

<script>
import Server from './Server.Vue';
export default{
      components:{
            'Server': Server
      }
}
</script>

<style>

</style>
