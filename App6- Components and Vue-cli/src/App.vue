<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header> <!--Component 1-->
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group"> <!--Component 2-->
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }} <!--Component 3-->
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6"> <!--Component 4-->
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12"> <!--Component 5-->
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>

</style>
