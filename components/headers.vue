<template>
    <div>
        <div class="nav-header">
            <div class="container">
                <div class="logo">
                    <img style="width: 170px;" @click='link' src="~/assets/images/fisco-bcos-logo.png" class="image">
                </div>
                <div class="nav-menu" style="float: left;">
                    <div class="nav-menu-item nav-item" style="display: inline-block;width: 116px;text-align:center">
                        <span>{{groupName}}</span>
                        <ul class="select1">
                            <li v-for="item in groupList" style="cursor: default;" :key="item.groupId">
                                <span class="name">{{item.groupName}}</span>
                            </li>
                        </ul>
                        <i v-if="groupList.length" class="el-icon-caret-bottom icon-up icon"></i>
                        <i v-if="groupList.length" class="el-icon-caret-top icon-down icon"></i>
                    </div>
                </div>
                <div class="nav-menu">
                    <div class="nav-menu-item nav-item" @click="routerLink('home')">概览</div>
                    <template  v-for="item in menu" >
                        <div class="nav-menu-item nav-item" :key='item.title'>{{item.title}}
                            <i class="el-icon-caret-bottom icon-up"></i>
                            <i class="el-icon-caret-top icon-down"></i>
                            <ul class="nav-menu-item-option">
                                <li class="option" v-for="list in item.subMenu" :key="list.name" @click="routerLink(list.name)">{{list.title}}</li>
                            </ul>
                        </div>
                    </template>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
export default {
    name: "headers",
    data: function () {
        return {
            menu: [{
                title: '活动',
                subMenu: [
                    {
                        title: '活动1',
                        name: 'aaa'
                    }
                ]
            }],
            groupList: [{
                groupName: "不知道",
                groupId: "1"
            }],
            groupName: "不知道",
            chainNone: false,
            groupId: "1"
        };
    },
    mounted: function () {
    },
    methods: {
        routerLink: function (name) {
            this.$router.push({
                name: name
            });
        },
        link: function () {
            this.$.push({
                name: 'home'
            });
        },
    }
};
</script>
<style>
.nav-header {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #fff;
    font-size: 0;
    color: #666666;
    text-align: center;
}
.nav-header .logo {
    display: inline-block;
    float: left;
    cursor: pointer;
    height: 80px;
}
.nav-header .image {
    display: inline;
    padding-top: 20px;
    cursor: pointer;
}
.nav-chainType {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.nav-menu {
    float: right;
    height: 80px;
}
.nav-item {
    display: inline-block;
    font-size: 14px;
    width: 120px;
    cursor: pointer;
}
/*.nav-item:hover{*/
/*border-bottom: 2px solid red;*/
/*}*/
.nav-item .icon-up {
    display: inline !important;
}
.nav-item .icon-down {
    display: none !important;
}
.nav-item:hover .icon-up {
    display: none !important;
}
.nav-item:hover .icon-down {
    display: inline !important;
}
.nav-menu-item {
    position: relative;
}
.nav-menu-item-option {
    display: none;
    position: absolute;
    width: 100%;
    top: 80px;
    left: 0;
    padding: 10px 0;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    line-height: 32px;
    z-index: 9999999;
    box-sizing: border-box;
    margin: 0;
    list-style: none;
}
.nav-menu-item:hover .nav-menu-item-option {
    display: block;
}
.nav-menu-item-option option {
    cursor: pointer;
    height: 32px;
}
.nav-menu-item-option li:hover {
    color: #3498db !important;
}
.nav-item input {
    display: inline-block;
    width: 120px;
    padding-right: 10px;
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
    text-align: center;
    border: none;
    outline: none;
    font-size: 14px;
}
.nav-item .select {
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    width: 100%;
    margin: 0;
    background-color: #fff;
    /*padding: 20px 0;*/
    z-index: 999999;
    padding: 10px 0;
    font-size: 14px;
    list-style: none;
    text-align: center;
}
.nav-item .select1 {
    position: absolute;
    display: none;
    top: 100%;
    left: 50%;
    width: 100%;
    margin: 0;
    background-color: #fff;
    /*padding: 20px 0;*/
    z-index: 999999;
    padding: 10px 0;
    font-size: 14px;
    list-style: none;
    text-align: center;
}
.nav-item .select li {
    height: 32px;
    line-height: 32px;
    background-color: #fff;
    /*padding: 20px 0;*/
    font-size: 14px;
    color: #333;
}
.nav-item .select1 li {
    height: 32px;
    line-height: 32px;
    background-color: #fff;
    /*padding: 20px 0;*/
    font-size: 0;
    color: #333;
}

.nav-item .select li:hover {
    color: #3498db !important;
}

.nav-menu-item:hover .select {
    display: block;
}
.nav-item:hover .select1 {
    display: block;
}
.nav-item .name:hover {
    color: #3498db !important;
}
.nav-item .delete:hover {
    color: #3498db !important;
}
.nav-item .name {
    display: inline-block;
    width: 50%;
    cursor: pointer;
    font-size: 14px;
}
.nav-item .delete {
    display: inline-block;
    width: 50%;
    cursor: pointer;
    font-size: 14px;
}
.nav-item .add {
    font-size: 14px !important;
    cursor: pointer;
}
.nav-item .add:hover {
    color: #3498db !important;
}

.icon {
    position: absolute;
    right: 0;
    top: 42%;
}
</style>
