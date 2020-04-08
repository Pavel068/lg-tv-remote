<template>
    <div class="control">
        <div class="control-block">
            <button class="btn btn-danger">
                <b-icon icon="power"></b-icon>
            </button>
            <button class="btn btn-primary">
                <b-icon icon="box-arrow-in-right"></b-icon>
            </button>
        </div>
        <div class="control-block digital">
            <button class="btn btn-secondary">1</button>
            <button class="btn btn-secondary">2</button>
            <button class="btn btn-secondary">3</button>
            <button class="btn btn-secondary">4</button>
            <button class="btn btn-secondary">5</button>
            <button class="btn btn-secondary">6</button>
            <button class="btn btn-secondary">7</button>
            <button class="btn btn-secondary">8</button>
            <button class="btn btn-secondary">9</button>
            <button class="btn btn-secondary">0</button>
            <button class="btn btn-secondary">
                <b-icon icon="play"></b-icon>
            </button>
            <button class="btn btn-secondary">
                <b-icon icon="pause"></b-icon>
            </button>
        </div>
        <div class="control-block volume">
            <div>
                <button class="btn btn-secondary">
                    <b-icon icon="plus"></b-icon>
                </button>
                <div class="text-center">
                    <b-icon icon="volume-up"></b-icon>
                </div>
                <button class="btn btn-secondary">
                    <b-icon icon="dash"></b-icon>
                </button>
            </div>

            <div>
                <button class="btn btn-secondary">
                    <b-icon icon="plus"></b-icon>
                </button>
                <div class="text-center">
                    <b-icon icon="bounding-box"></b-icon>
                </div>
                <button class="btn btn-secondary">
                    <b-icon icon="dash"></b-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Control",
        data() {
            return {}
        },
        computed: {},
        mounted() {

        }
    }
</script>

<style scoped>
    .control {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .control-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 5px;
    }

    .digital {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .digital > .btn {
        margin-top: 5px;
        width: 75px;
        height: 75px;
    }

    .volume .btn {
        width: 50px;
        height: 50px;
    }

    .volume {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>