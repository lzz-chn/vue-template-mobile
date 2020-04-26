<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-weight: 400;

    /*滚动条整体样式*/
    // &::-webkit-scrollbar {
    //     width: 6px;
    //     height: 7px;
    // }
    /*滚动条滑块*/
    // &::-webkit-scrollbar-thumb {
    //     border-radius: 10px;
    //     // background: #a0cfff;
    //     background: #8c8c8c;
    // }
    /*滚动条轨道*/
    // &::-webkit-scrollbar-track {
    //     background: #fff;
    // }
}
html,
body {
    height: 100%;
}
a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
}
#app {
}
</style>
