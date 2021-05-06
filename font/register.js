
let $=e=>document.querySelector(e)

function register(){
    let name=$(".userId").value
    let num=$(".passcode").value

    fetch(`http://127.0.0.1:5000/register?username=${name}&password=${num}`)
    .then(e=>e.json())
    .then(e=>{
        if(e.code==200){
            localStorage.setItem("login",1)
            localStorage.setItem("login_name",name)
            let strIndex=location.href.lastIndexOf("/")
            let str=location.href.slice(0,strIndex)
            location.replace(str+"/index.html?username="+name)
        }else{
            alert("该账户名已存在")
        }
    })
}

$(".loginbtn").onclick=function(){
    if($(".userId").value&&$(".passcode").value&&$(".passcode").value==$(".passcode_again").value){
        register()
    }
    else{
        alert("非法输入,请重新输入")
    }
}
