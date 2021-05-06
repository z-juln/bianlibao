let $=e=>document.querySelector(e) 

let getusername=function(){
    let username
    let str=location.search.split("?")[1]
    if(str.includes("&")){
        username=str.split("&")[0].split("=")[1]
    }
    else{
        username=str.split("=")[1]
    }
    return username
}
let username=getusername()

let getgoodsname=function(){
    let goodsname
    let str=location.search.split("?")[1]
    goodsname=str.split("&")[1].split("=")[1]
    return goodsname
}
let goodsname=getgoodsname()



function reduce(){
    let num=$('.num').innerHTML
    if(num>1){
        num--
        $('.num').innerHTML=num
    }
    else{
        num=1
    }
}
function add(){
    let num=$('.num').innerHTML    
    num++
    $('.num').innerHTML=num
}
function ADD(){
    let num=$('.num').innerHTML
    $('.num').innerHTML=0
    // goodsname username
    fetch(`http://127.0.0.1:5000/add_shoppingcar?username=${username}&goods=${goodsname}&num=${num}`)
    .then(e=>e.json())
    .then(e=>{
        console.log(e)
        alert("已加入购物车")
    })
    
}

function back_fun(){
    let strIndex=location.href.lastIndexOf("/")
    let str=location.href.slice(0,strIndex)
    location.replace(str+"/index.html?"+"username="+username)
}
    

        
fetch(`http://127.0.0.1:5000/goods?goods=${goodsname}`)
.then(r=>r.json()).then(r=>{
    console.log(r)
    let goodspage=document.querySelector('.goodspage')
    goodspage.innerHTML+=`
        <div class="header">
            <ul>
                <li onclick=back_fun()>
                    <i class="fa fa-angle-left"></i>
                </li>
                <li>
                    <i class="fa fa-commenting-o"></i>
                </li>
            </ul>
                <li>
                    <!-- 商品图片 -->
                    <img src="${r.data.dataimg}" width="100%" class="goodpic" alt="">
                </li>
        </div>
        <div class="mid">
                <ul>
                    <li class="goodintr">${r.data.dataname}
                    <br/>
                    ${"详情:"+r.data.details}</li>
                    <li class="goodpri">${"￥"+r.data.price}</li>
                    <li class="goodnum">${"销售量:"+r.data.soldnum}</li>
                </ul>
            </div>
            <div class="bottom">
                <ul>
                    <li>
                        <i class="fa fa-shopping-cart"></i>
                    </li>
                    <li>
                    </li>
                    <li onclick=ADD()>
                        <a>加入购物车</a>
                        <!-- <a href="./shoppingcar.html">加入购物车</a> --!>
                    </li>
                </ul>
    `
})