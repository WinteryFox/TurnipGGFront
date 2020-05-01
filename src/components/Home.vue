<template>
    <div>
        <h1>Here's a list of islands available</h1>

        <div v-for="island in islands" :key="island.name">
            <h3>{{island.name}}</h3>
        </div>

        <button @click="create">Create listing</button>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";

    export default {
        name: 'Home',

        data: () => ({
            islands: []
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
                    },
                    () => {
                    }
                )
            },

            create() {
                this.stompClient.send(
                    "/create",
                    JSON.stringify({
                        name: "Foxes"
                    }),
                    {}
                );
            }
        },

        mounted() {
            this.connect();
        }
    }
</script>