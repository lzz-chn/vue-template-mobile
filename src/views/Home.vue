<template>
    <div class="home">
        <h3>home</h3>
        <Header />
        <van-overlay :show="$store.state.loading">
            <van-loading color="#1989fa" />
        </van-overlay>
    </div>
</template>

<script>
import Header from '@/components/headers'
export default {
    name: 'home',
    data() {
        return {}
    },
    components: { Header }
}
</script>

<style lang="less" scoped>
.home {
    height: 100%;
    .van-overlay {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
}
</style>
