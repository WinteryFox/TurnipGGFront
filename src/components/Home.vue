<template>
    <div>
        <div class="md-layout md-gutter md-alignment-center">
            <Island :island="island" v-for="island in islands" :key="island.id"/>
        </div>

        <div>
            <md-speed-dial class="md-bottom-right">
                <md-speed-dial-target @click="showForm = true">
                    <md-icon>add</md-icon>
                </md-speed-dial-target>
            </md-speed-dial>
        </div>

        <div>
            <md-dialog :md-active.sync="showForm">
                <md-dialog-title>
                    Host island
                </md-dialog-title>

                <md-dialog-content>
                    <md-field>
                        <label>Dodo code</label>
                        <md-input name="dodo" v-model="createForm.code"/>
                    </md-field>

                    <md-field>
                        <label>Hemisphere</label>
                        <md-select v-model="createForm.hemisphere">
                            <md-option value="0">North</md-option>
                            <md-option value="1">South</md-option>
                        </md-select>
                    </md-field>

                    <md-field>
                        <label>Island name</label>
                        <md-input name="island" v-model="createForm.islandName"/>
                    </md-field>

                    <md-field>
                        <label>Username</label>
                        <md-input name="username" v-model="createForm.userName"/>
                    </md-field>

                    <md-field>
                        <label>Turnip price</label>
                        <md-input type="number" name="price" v-model="createForm.price"/>
                    </md-field>

                    <md-field>
                        <label>Description</label>
                        <md-textarea name="description" v-model="createForm.description"/>
                    </md-field>
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button @click="showForm=false">
                        Cancel
                    </md-button>
                    <md-button @click="create">
                        Host
                    </md-button>
                </md-dialog-actions>
            </md-dialog>
        </div>

        <div>
            <md-snackbar :md-duration="Infinity" :md-active="showSnackbar">
                <span>Lost connection, attempting to reconnect...</span>
            </md-snackbar>
        </div>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";
    import Island from "@/components/Island";

    export default {
        name: 'Home',
        components: {Island},
        data: () => ({
            islands: [],
            showSnackbar: true,
            showForm: false,
            createForm: {
                code: "",
                hemisphere: 0,
                islandName: "",
                userName: "",
                price: 0,
                description: ""
            }
        }),

        methods: {
            connect() {
                this.socket = new SockJS("http://localhost:8080/socket");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.connect(
                    {},
                    () => {
                        this.stompClient.subscribe(
                            "/islands/create",
                            data => {
                                this.islands.push(JSON.parse(data.body));
                            }
                        );

                        this.stompClient.subscribe(
                            "/islands/delete",
                            data => {
                                this.islands.delete(JSON.parse(data.body));
                            }
                        );

                        this.showSnackbar = false;
                    },
                    () => {
                        this.showSnackbar = true;
                        setTimeout(this.connect, 5000);
                    }
                )
            },

            create() {
                this.stompClient.send(
                    "/create",
                    JSON.stringify(this.createForm),
                    {}
                );
                this.showForm = false;
            }
        },

        mounted() {
            this.connect();
        }
    }
</script>

<style lang="scss">
    .md-dialog-container {
        transform: none !important;
    }
</style>