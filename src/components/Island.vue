<template>
    <md-card class="md-layout-item md-size-30 md-primary">
        <md-card-header class="name">
            <md-card-header-text>
                <div class="md-title">
                    {{island.islandName}}
                </div>
                <div class="md-subheading">
                    {{island.userName}}
                </div>
                <div class="md-subhead">
                    <md-icon class="md-icon-button md-dense">
                        <img src="bells.png" alt="Bells"/>
                    </md-icon>
                    <div>{{island.price}} Bells</div>
                </div>
            </md-card-header-text>
        </md-card-header>
        <md-card-content>
            {{island.description}}
        </md-card-content>
    </md-card>
</template>

<script>
    export default {
        name: "Island",

        props: {
            island: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~vue-material/dist/theme/engine";

    .md-card {
        margin: 0.5em;

        .md-subhead {
            font-size: 18px;
            opacity: 1;
            display: inline-flex;
            align-items: center;

            .md-icon {
                max-width: 26px;
                max-height: 26px;

                img {
                    max-width: 26px;
                    max-height: 26px;
                }
            }
        }
    }
</style>