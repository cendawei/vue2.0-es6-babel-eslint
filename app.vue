<template>
    <div>
        <test></test>
    </div>
</template>

<script>
    import test from 'plugins/test'
    export default {
        data() {
            return {
                testdata: 'testData'
            }
        },
        components: {
            test
        }
    }
</script>