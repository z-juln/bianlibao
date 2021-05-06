# Host: localhost  (Version: 5.5.53)
# Date: 2019-08-09 01:13:44
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "data"
#

CREATE TABLE `data` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `dataname` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `sort` varchar(255) DEFAULT NULL COMMENT 'win,nibble,furniture,prot,clean,seasoning',
  `dataimg` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `soldnum` int(11) DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=1801130187 DEFAULT CHARSET=utf8;

#
# Data for table "data"
#

REPLACE INTO `data` VALUES (1801130161,'伏特加','百年老伏特加，你值得拥有','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',80,80),(1801130162,'鸡尾酒','百年老鸡尾酒，来买来买','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',10,0),(1801130163,'鬼酒1','这是什么鬼酒？','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',100,9),(1801130164,'鬼酒2','win2的详情','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',800,70),(1801130165,'鬼酒3','win5的详情','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',30,60),(1801130166,'鬼酒4','win6的详情','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',50,20),(1801130167,'win7','win7','win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130168,'帽子','这是个好帽子','furniture','https://ps.ssl.qhmsg.com/sdr/400__/t0139b6f81077880416.jpg',0,0),(1801130169,'勺子','这是个好勺子','furniture','http://i02.c.aliimg.com/img/ibank/2013/761/042/1042240167_768401762.jpg',0,0),(1801130170,'10',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130171,'11',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130172,'12',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130173,'13',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130174,'14',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130175,'15',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130176,'16',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130177,'23',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130178,'24',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130179,'25',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130180,'26',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130181,'19',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130182,'20',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130183,'21',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130184,'22',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130185,'17',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0),(1801130186,'18',NULL,'win','http://img5.makepolo.net/images/formals/img/product/7/118/465790fe00132eb19da1175cde664b77.jpg',0,0);

#
# Structure for table "sortlist"
#

CREATE TABLE `sortlist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "sortlist"
#

REPLACE INTO `sortlist` VALUES (1,'win'),(2,'nibble'),(3,'furniture'),(4,'port'),(5,'clean'),(6,'seasoning');

#
# Structure for table "user"
#

CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT 'http://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/472309f7905298229a6d4025ddca7bcb0b46d4fe.jpg',
  `isvip` varchar(255) DEFAULT '0',
  `shoppingcar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=1850021150 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

REPLACE INTO `user` VALUES (1850021148,'juln','27','http://127.0.0.1:5000/avatar_download/juln_1565281145604.jpeg','1','伏特加?2;鸡尾酒?1;'),(1850021149,'root','root','http://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/472309f7905298229a6d4025ddca7bcb0b46d4fe.jpg','1','伏特加?2;鸡尾酒?1;'),(1850021150,'test1','11','http://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/472309f7905298229a6d4025ddca7bcb0b46d4fe.jpg','0',NULL);
