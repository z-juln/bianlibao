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

console.log(`http://127.0.0.1:5000/username?username=${username}`)
fetch(`http://127.0.0.1:5000/username?username=${username}`)
.then(r=>r.json()).then(r=>{
    console.log(r)
    let avatar
    if(!r.data.avatar){
        avatar="http://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/472309f7905298229a6d4025ddca7bcb0b46d4fe.jpg"
    }
    else{
        avatar=r.data.avatar
    }
    $('.shang_header').innerHTML=`
        <li class="top">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <i class="fa fa-cog" aria-hidden="true"></i>
        </li>
        <div class="avatar_box">
            <div class="avatar_img">
                <img src=${avatar}>
                <input type="file">
            </div>
            <p class="username">${r.data.username}</p>
        </div>
        <div class="header_details">
            <li>
                <p>这是我的积分</p>
                <p>我的积分</p>
            </li>
            <li>
                <p>这是为你推荐</p>
                <p>为你推荐</p>
            </li>
            <li>
                <p>这是浏览记录</p>
                <p>浏览记录</p>
            </li>
        </div>
    `
    
    $(".avatar_box .avatar_img img").style.width=`${$(".avatar_box .avatar_img img").offsetHeight}px`
    $(".avatar_box input[type='file']").style.width=`${$(".avatar_box input[type='file']").offsetHeight}px`
    $(".avatar_box input[type='file']").style.left=`${($(".avatar_box .avatar_img").offsetWidth-$(".avatar_box .avatar_img img").offsetHeight)/2}px`    
    
    $(".shang_header .top i:nth-child(1)").onclick=function(){
        let strIndex=location.href.lastIndexOf("/")
        let str=location.href.slice(0,strIndex)
        location.replace(str+"/index.html?"+"username="+username)
    }

    $(".shang_header .top i:nth-child(2)").onclick=function(){
        let strIndex=location.href.lastIndexOf("/")
        let str=location.href.slice(0,strIndex)
        location.replace(str+"/setup.html?"+"username="+username)
    }

    $(".avatar_img input[type='file']").onchange=function(){
        console.log("???")
        let file=this.files[0]
        if(file.type.split("/")[0]=="image"){
            let fr=new FormData()
            fr.append("file",file)
            fetch(`http://127.0.0.1:5000/avatar_upload?username=${username}`,{
                method:"POST",
                body:fr,
            }).then(e=>e.json()).then(e=>{
                $(".avatar_img img").src=e.data.url
            })
        }
        else{
            alert("文件格式错误")
        }
    }
})
