<template>
    <div class="headers">
        <van-tabs v-model="clickCount">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
        <van-row type="flex" align="center">
            <van-col span="6">
                <van-button size="small" type="primary" @click="clickTemplate">默认按钮</van-button>
            </van-col>
            <van-col span="8" offset="1">clickCount：{{ clickCount }}</van-col>
        </van-row>
    </div>
</template>

<script>
export default {
    name: 'headers',
    data() {
        return {
            clickCount: 0
        }
    },
    methods: {
        // 点击事件模版
        clickTemplate() {
            this.clickCount++
        },
        // ajax 请求模版
        requestTemplate() {
            let params

            this.$axios.post('/url', params).then(res => {
                console.log('res :', res)
            })
        }
    }
}
</script>

<style lang="less" scoped>
.headers {
    padding: 10px;
}
</style>
