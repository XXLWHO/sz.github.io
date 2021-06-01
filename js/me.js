window.onload = function(){
    getList();
}
let list =[
    "上分下分",
    "充值记录",
    "下分记录",
    "我的钱包",
    "登录账户",
    "个人资料",
    "财务客服",
    "收款账户",
    "键盘设置",
    "TBS调试",
    "帮助中心",
    "退出系统",
]
var getList = function(){
    let str =``;
    for(let i = 0;i<12;i++){
        str += `
        <div class="show-item">
        <img src="../imgs/z-${i+1}.png" alt="">
        <h2 class="show-text">
            ${list[i]}
        </h2>
    </div>
        `
    }
    document.querySelector(".show-box").innerHTML =  str;

}