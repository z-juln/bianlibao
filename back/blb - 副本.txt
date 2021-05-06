from flask import Flask,request,send_file
from flask_cors import CORS
import pymysql,json,time,os

app=Flask(__name__)
db=pymysql.connect("127.0.0.1","root","root","blb")
cursor=db.cursor(cursor=pymysql.cursors.DictCursor)
@app.route("/login",methods=["get"])
def login_fun():
    username=request.args.get("username","")
    password=request.args.get("password","")
    row=cursor.execute("SELECT * FROM user WHERE username like '%s' AND password like '%s'" %(username,password))
    db.commit()
    data=cursor.fetchall()
    if row>0:
        return json.dumps({
            "code":200,
        })
    else:
        return json.dumps({
            "code":500,
        })

@app.route("/username",methods=["get"])
def username_fun():
    username=request.args.get("username","")
    row=cursor.execute("SELECT * FROM user WHERE username like '%s'" % (username))
    if row>0:
        db.commit()
        data=cursor.fetchone()
        return json.dumps({
            "code":200,
            "data":{
                "id":data['Id'],
                "username":data['username'],
                "avatar":data['avatar'],
                "isvip":data['isvip'],
                "shoppingcar":data['shoppingcar']
            },
            "message":"这是该用户的信息"
        })
    else:
        return json.dumps({
            "code":500,
            "message":"查无此人"
        })

# @app.route("/goods",methods=["get"])
# def goods_fun():
#     goods_name=request.args.get("goods","")
#     row=cursor.execute("SELECT * FROM data WHERE dataname like '%s'" % (goods_name))
#     if row>0:
#         db.commit()
#         data=cursor.fetchone()
#         return json.dumps({
#             "code":200,
#             "data":data,
#             "message":"这是该商品的信息"
#         })
#     else:
#         return json.dumps({
#             "code":500,
#             "message":"查无此商品"
#         })

@app.route("/goods",methods=["get","post"])
def goods_fun():
    if request.method=="GET":
        goods_name=request.args.get("goods","")
        row=cursor.execute("SELECT * FROM data WHERE dataname like '%s'" % (goods_name))
        if row>0:
            db.commit()
            data=cursor.fetchone()
            return json.dumps({
                "code":200,
                "data":data,
                "message":"这是该商品的信息"
            })
        else:
            return json.dumps({
                "code":500,
                "message":"查无此商品"
            })
    else:
        return

@app.route("/add_shoppingcar")
def add_shoppingcar_fun():
    def fun(arr1,arr2):
        arr=arr2.split(";")
        i=-1
        for e in arr:
            if arr1==e.split("?")[0]:
                i=i+1
                return i
        return i

    goods_name=request.args.get("goods","")
    num=int(request.args.get("num",""))
    username=request.args.get("username","")
    mystr=goods_name+"?"+str(num)+";"
    cursor.execute("select * from user where username like '%s'"%username)
    orginstr=cursor.fetchone()["shoppingcar"]
    allstr=""
    if ";" in orginstr:
        index=fun(goods_name,orginstr)
        if index>=0:
            orginnum=int(orginstr.split(";")[index].split("?")[1])
            allnum=num+orginnum
    #orginstr修改得allstr
            index2=-1
            for e in orginstr.split(";"):
                index2=index2+1
                if index2==index:
                    allstr=allstr+goods_name+"?"+str(allnum)
                else:
                    allstr=allstr+e
            cursor.execute("UPDATE `user` SET `shoppingcar`='%s' where username like '%s'"%(allstr,username))
        else:
            allstr=orginstr+mystr
            cursor.execute("UPDATE `user` SET `shoppingcar`='%s' where username like '%s'"%(allstr,username))
    else:
        allstr=mystr
        cursor.execute("UPDATE `user` SET `shoppingcar`='%s' where username like '%s'"%(mystr,username))
    db.commit()
    return json.dumps({
        "code":200,
        "data":allstr,
        "message":"已加入购物车"
    })

@app.route("/register",methods=["get"])
def register_fun():
    username=request.args.get("username","")
    password=request.args.get("password","")
    row=cursor.execute("select *from user where username like '%s'" %username)
    if row>0:
        return json.dumps({
            "code":500,
            "data":{

            },
            "message":"该账户已存在，注册失败"
        })
    else:    
        cursor.execute("insert into user (username,password) values('%s','%s')"%(username,password))
        db.commit()
        return json.dumps({
            "code":200,
            "data":{
                "username":password,
            },
            "message":"注册成功"
        })

#可能有问题
@app.route("/data/sort/<sort>",methods=["get"])
def sort_fun(sort):
    page=request.args.get("page",1)
    # cursor.execute("select * from sortlist")
    # sortlist=cursor.fetchall()
    row=cursor.execute("select * from data where sort like '%s' order by soldnum desc limit %s,10" %(sort,(int(page)-1)*10))
    data=cursor.fetchall()
    # for sortname in sortlist:
    #     if sort!=sortname.name:
    #         return json.dumps({
    #             "code":500,
    #             "data":{
    #                 "row":row,
    #             },
    #             "message":"该商品类型错误"
    #         })
    if row==10:    
        return json.dumps({
            "code":200,
            "data":data,
            "row":row,
            "message":""
        })
    elif row<10:
        return json.dumps({
            "code":200,
            "data":data,
            "row":row,
            "message":"最后一页"
        })

#可能有问题
@app.route("/recommend",methods=["get"])
def recommend_fun():
    row=cursor.execute("select *from data order by soldnum desc limit 0,12")
    data=cursor.fetchall()
    if row==12:
        return json.dumps({
            "code":200,
            "data":data,
            "message":"12个推荐信息已找到"
        })
    else:    
        return json.dumps({
            "code":500,
            "data":{

            },
            "message":"找不到该信息"
        })

#可能有问题
@app.route("/search",methods=["get"])
def search_fun():
    mystr=request.args.get("str","")
    page=request.args.get("page",1)
    row=cursor.execute("select *from data order by soldnum desc")
    data_all=cursor.fetchall()
    data=[]
    for e in data_all:
        if (mystr in e["dataname"]):
            data.append(e)
    if len(data)>0:
        return json.dumps({
            "code":200,
            "data":data,
            "message":"12个信息已找到"
        })
    else:    
        return json.dumps({
            "code":500,
            "data":{

            },
            "message":"找不到该信息"
        })

@app.route("/avatar_upload",methods=["post"])
def avatar_upload_fun():
    username=request.args.get("username","")
    host=request.host
    file=request.files["file"]
    ext=file.mimetype.split("/")[1]
    timestr=str(round(time.time() * 1000))
    url="http://"+host+"/avatar_download/"+username+"_"+timestr+"."+ext
    cursor.execute("update user set avatar='%s' where username='%s'"%(url,username))
    db.commit()
    file.save(os.path.dirname(os.path.dirname(__file__))+"\\font\\avatar_img\\"+username+"_"+timestr+"."+ext)
    return json.dumps({
        "code":200,
        "data":{
            "url":url,
        },
        "message":"头像上传完成"
    })

@app.route("/avatar_download/<img_name>",methods=["get"])
def avatar_download_fun(img_name):
    return send_file(os.path.dirname(os.path.dirname(__file__))+"\\font\\avatar_img\\"+img_name,"image/"+img_name.split(".")[1])
    

if __name__=="__main__":
    CORS(app, supports_credentials=True)
    app.run()