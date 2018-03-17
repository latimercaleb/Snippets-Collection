<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <App-Header></App-Header><!--Component 1: Globals-->
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                 <Server-List></Server-List> <!--Components 2& 3: Locals-->
            </div>
            <div class="col-xs-12 col-sm-6"> <!--Component 4: Locals-->
                <App-Prompt></App-Prompt>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12"> <!--Component 5:  Global 2-->
             <App-Footer></App-Footer>
            </div>
        </div>
    </div>
</template>

<script>
// Local components
import AppPrompt from './AppLiveMms.vue'
import ServerList from './ServerList.vue'
export default {
      components: {
            'App-Prompt' : AppPrompt,
            'Server-List' : ServerList
      }
}
</script>

<style>

</style>
