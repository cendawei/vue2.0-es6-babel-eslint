<template>
    <div>
        <p @click="sayHello">{{helloStr}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                helloStr: 'hello world! vue2.0+webpack-dev-server自动打包和服务'
            }
        },
        methods: {
            sayHello() {
                let saying = 'hello';
                let nothing = 'hello2';
                alert(saying);
            }
        }
    }
</script>