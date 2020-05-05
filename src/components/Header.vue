<template>
    <md-toolbar>
        <router-link to="/">
            <span class="md-title">
                Turnips<span class="gg">GG</span>
            </span>
        </router-link>

        <div class="buttons">
            <md-button class="md-icon-button" href="https://discord.gg/FvkDMMF" target="_blank">
                <md-icon md-src="/discord.svg"/>
            </md-button>
            <md-button class="md-icon-button" href="https://github.com/WinteryFox/TurnipGG" target="_blank">
                <md-icon md-src="/github.svg"/>
            </md-button>
            <md-button class="md-icon-button" href="https://www.patreon.com/Jibiki" target="_blank">
                <md-icon md-src="/patreon.svg"/>
            </md-button>
        </div>
    </md-toolbar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    @import "~vue-material/dist/theme/engine";

    .md-toolbar {
        background-color: rgba(md-get-palette-color(pink, 100), 0.9) !important;

        .router-link-active {
            text-decoration: none;
        }

        .md-title {
            font-size: 30px;
            color: md-get-palette-color(indigo, 800);

            .gg {
                margin-left: 0;
                color: md-get-palette-color(red, 400);
            }
        }

        .buttons {
            right: 10px;
            position: absolute;

            .md-button {
                border-radius: 25px;
                background-color: md-get-palette-color(cyan, 100);
            }
        }
    }
</style>