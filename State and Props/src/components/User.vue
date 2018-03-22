<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User! Named {{parentName}}</p>
        <button v-on:click = "changeName">Change the Name Custom Event</button>

        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="parentName" @resetCalled= "parentName = $event" :resetFn = "customResetName"></app-user-detail><!--This passes parentName to the child as name, also contains an event handler to listen to the child custom event-->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
          data: function(){
                return{
                      parentName: 'Callat'
                };
          },
          methods:{
                changeName: function(){
                      this.parentName =  'latimeks'
                },
                customResetName(){
                      this.parentName = "Callat"
                }
          },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
