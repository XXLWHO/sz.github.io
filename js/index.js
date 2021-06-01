window.onload = function(){
    getList();
    click();
}
let list =[
    "SG飞艇",
    "幸运飞艇",
    "极速赛车",
    "极速飞艇",
    "极速时时彩",
    "澳洲幸运5",
    "澳洲幸运10",
    "英国赛车",
    "英国时时彩",
    "英国极速赛车",
    "英国极速时时彩",
    "香港六合彩",
    "香港六合彩",
    "澳门六合彩",
]
var getList = function(){
    let str =``;
    for(let i = 0;i<13;i++){
        str += `
        <div class="info-item">
        <img src="../imgs/icon_jsssc${i+1}.png" alt="" onclick="window.location.href='cur_game.html'">
        <h2 class="info-text">
            ${list[i]}
        </h2>
    </div>
        `
    }
    document.querySelector(".info-box").innerHTML =  str;
}

var click =function(){
    let from = sessionStorage.getItem("from");
    console.log(from);
    if(from){
        switch (from) {
            case "sf":
                document.querySelector(".main-2").style.display ="block";
                break;
            case  "kf":
                document.querySelector(".main-3").style.display ="block";
                break;
        }
        sessionStorage.removeItem("from");
    }
    let s_btn = document.querySelector(".sf-click");
    s_btn.addEventListener("click",function(){
        document.querySelector(".main-2").style.display ="block";
    })
   document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".main-2").style.display ="none";
    })
    document.querySelector(".close2").addEventListener("click",function(){
        document.querySelector(".main-3").style.display ="none";
        })
    document.querySelector(".pop").addEventListener("click",function(){
        document.querySelector(".main-2").style.display ="none";
      })
      document.querySelector(".pop2").addEventListener("click",function(){
        document.querySelector(".main-3").style.display ="none";
      })
      let k_btn = document.querySelector(".kf-click");
      k_btn.addEventListener("click",function(){
        document.querySelector(".main-3").style.display ="block";
    })
}