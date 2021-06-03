window.onload = function(){
    getList();
    click()
}
var handles =[
    "",
    "window.location.href='index.html'",
    "window.location.href='index.html';sessionStorage.setItem('from','sf')",
    "",
    "",
    "window.location.href='index.html';sessionStorage.setItem('from','kf')",
    "window.location.reload()",
    "window.location.href='me.html'",
    `
    if(document.querySelector("body").style.background != "#333"){
      document.querySelector('body').style.background='#333'
}else{
 document.querySelector('body').style.background="url(../imgs/bg03b.png) no-repeat center center"
    
   `
]
var getList = function(){
    let str =``;
    for(let i = 0;i<9;i++){
        str += `
        <li onclick="${handles[i]}">
        <img src="../imgs/cur-${i+1}.png" alt="" class="slider-img">
    </li>
        `
    }
    document.querySelector(".slider-box").children[0].innerHTML =  str;
    let str_2 =``;
    for(let i = 0;i<13;i++){
        str_2 += `
        <div class="choose-item">
        <img src="../imgs/icon_jsssc${i+1}.png" alt="" class="choose-img">
    </div>
        `
    }
    document.querySelector(".show-choose").innerHTML =  str_2;
    document.querySelector(".show-choose").children[0].classList="add_border"
}
var click = function(){
    document.querySelector(".choose").addEventListener("click",function(){
        document.querySelector(".show").style.display = "block"
    })
    document.querySelector(".pop").addEventListener("click",function(){
        document.querySelector(".show").style.display = "none"
    })
    document.querySelector(".choose-item").addEventListener("click",function(){
        document.querySelector(".show").style.display = "none"
    })
    document.querySelector(".show-choose").addEventListener("click",function(){
        document.querySelector(".show").style.display = "none"
    })
}
