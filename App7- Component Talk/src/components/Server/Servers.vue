<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item"
                 v-for="server in serverCollection">
                Server <b>{{server.id }}</b> in State - <i>{{server.status}}</i>
                <button @click="$emit('cloud', 21)">Change State</button>
            </li>
        </ul>
    </div>
</template>

<script>
// Loop through the seperate componenets and pass server numbers to each server object
//EX:
export default {
      data: () => {
            return {
                  serverCollection:[
                        {id: 'alpha', status: 'Good'},
                        {id: 'beta', status: 'Broken'},
                        {id: 'charlie', status: 'Good'},
                  ]
            }
      },
      methods:{
            moveServers:() => {
                  // Make element disappear from list or something
            }
      }
}

</script>

<style>
ul :nth-child(odd) {
      background-color: aliceblue;
}
b{
      text-transform: uppercase;
}
</style>
