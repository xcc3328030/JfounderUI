<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
</template>
<script>
export default {
    props:[
      "id"
    ],
    name: 'keyboard',
    data() {
        return {

        }
    }
}
</script>
<style scoped lang="less">

</style>





































































































/*键盘盒子*/

.key-box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 16px;
    color: #363636;
    .item {
        display: flex;
        text-align: center;
        line-height: 50px;
        height: 50px;
    }
    .key {
        cursor: pointer;
        width: 100%;
        height: 100%;
        flex: 1;
    }
}





































































































/*输入密码框*/

.pas-box {
    width: 80%;
    height: 45px;
    display: flex;
    margin: 0 auto;
    line-height: 45px;
    text-align: center;
    >div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        >input {
            width: 100%;
            font-size: 18px;
            text-align: center;
            height: 100%;
            display: block;
        }
    }
}

// 进入动画
.slide-enter-active {
    transition: all 10s ease; //   transform: translateY(0px)
}

.slide-enter {
    transform: translateY(500px)
}
</style>
