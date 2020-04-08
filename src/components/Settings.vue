<template>
    <div class="settings-wrapper">
        <div class="row form-group">
            <label class="col-md-6" for="connect_type">Тип подключения</label>
            <div class="col-md-6">
                <select class="form-control" name="connect_type" id="connect_type">
                    <option value="wifi">Wi-Fi</option>
                    <option value="bluetooth">Bluetooth</option>
                </select>
            </div>
        </div>
        <div class="row form-group">
            <label class="col-md-6">Выберите устройство</label>
            <div class="col-md-6">
                <ul class="devices-list">
                    <li>
                        <b-icon icon="wifi"></b-icon>
                        <span>TP-Link 8080</span>
                    </li>
                    <li>
                        <b-icon icon="wifi"></b-icon>
                        <span>OleG home</span>
                    </li>
                    <li>
                        <b-icon icon="wifi"></b-icon>
                        <span>RTL-396</span>
                    </li>
                    <li>
                        <b-icon icon="wifi"></b-icon>
                        <span>ASUS</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {}
        },
        computed: {},
        mounted() {}
    }
</script>

<style scoped>
    .devices-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .devices-list > li {
        cursor: pointer;
        font-weight: bold;
        border: 1px solid #f5f5f5;
        padding: 10px;
    }

    .devices-list > li:hover {
        background-color: #f5f5f5;
    }

    .devices-list span {
        margin-left: 6px;
    }
</style>