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

fetch(`http://127.0.0.1:5000/username?username=${username}`).then(r=>r.json()).then(r=>{
    console.log(r)
    $(".myself").innerHTML+=`
        <ul>
            <li>
                <img src="${r.data.avatar}" alt="">
            </li>
            <li>
                ${r.data.username}
            </li>
            <li><i class="fa fa-angle-right" aria-hidden="true"></i></li>
        </ul>
    `
})

$(".fa-angle-left").onclick=function(){
    let strIndex=location.href.lastIndexOf("/")
    let str=location.href.slice(0,strIndex)
    location.replace(str+"/Personal Center.html?"+"username="+username)
}
$("#tuichu").onclick=function(){
    let strIndex=location.href.lastIndexOf("/")
    let str=location.href.slice(0,strIndex)
    location.replace(str+"/login.html?")
}
