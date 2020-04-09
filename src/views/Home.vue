<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Control'}" :active-class="'active'">
                                    <b-icon icon="controller"></b-icon> <span class="mobile_hide">Управление</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'TV'}" :active-class="'active'">
                                    <b-icon icon="film"></b-icon> <span class="mobile_hide">Просмотр</span>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Settings'}" :active-class="'active'">
                                    <b-icon icon="gear-fill"></b-icon> <span class="mobile_hide">Настройки</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="wrapper">
                            <router-view></router-view>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="flex-fill text-center">&copy; 2020</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">

            </div>
        </div>
    </div>
</template>

<script>
    import io from "socket.io-client";
    const socket = io.connect(process.env.VUE_APP_NODE_HOST);

    export default {
        name: 'Home',
        data() {
            return {}
        },
        mounted() {
            if (this.$route.name === 'Home')
                this.$router.push({name: 'Control'});
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 500px) {
        .mobile_hide {
            display: none;
        }
    }
    .container {
        margin-top: 15px;
    }
    .wrapper {
        min-height: 450px;
    }
</style>
