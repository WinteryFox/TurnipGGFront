<template>
    <div id="app">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    export default {
        name: 'App',
        components: {Header}
    }
</script>

<style>
    body {
        background-image: url("/background.png");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        background-repeat: repeat-y;
        position: absolute;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
