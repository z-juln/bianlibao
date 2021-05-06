let $=e=>document.querySelector(e)
$(".loginbtn").onclick=function(){
    if($(".userId").value && $(".passcode").value){
        console.log("ok")
        let username=$(".userId").value
        let num=$(".passcode").value
        fetch(`http://127.0.0.1:5000/login?username=${username}&password=${num}`)
        .then(e=>e.json())
        .then(e=>{
            if(e.code==200){
                localStorage.setItem("login",1)
                localStorage.setItem("login_name",username)
                let strIndex=location.href.lastIndexOf("/")
                let str=location.href.slice(0,strIndex)
                location.replace(str+"/index.html?username="+username)
            }else{
                alert("账号密码不匹配")
            }
        })
    }
    else{
        alert("请完整输入账号密码")
    }
}

       