<template>
    <div class="col-xs-12 col-sm-6 details-container">
        <h3>Selected Server Details Below</h3>
        <ul class="list-group">
            <li class="list-group-item"
                 v-for="server in serverCollection">
                Server <b>{{server.id }}</b> in State - <i>{{server.status}}</i>
                <button :click="moveServers">Change State</button>
            </li>
        </ul>
    </div>

</template>

<script>
// Load new server Objects,
// Add button to change status of each object
</script>

<style>
.details-container{
      background-color: bisque;
      border: 2px dashed black;
}
</style>
