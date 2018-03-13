<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <App-Header></App-Header><!--Component 1-->
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group"> <!--Component 2-->
                    <li class="list-group-item"
                          v-for="index in 5">
                        Server #{{ index }} <!--Component 3-->
                    </li>,
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6"> <!--Component 4-->
                <App-mms></App-mms>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12"> <!--Component 5-->
             <AppFooter></AppFooter>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>
