---
title: MySQL5.7的解压安装
tags: ["MySQL","安装"]
categories: ["数据库"]
---

## 解压版MySQL5.7安装

##### 1.下载https://downloads.mysql.com/archives/community/


##### 2.解压至安装完目录


##### 3.配置环境



此电脑右击空白处，点击属性找到高级系统变量，在系统变量中找到path(没有可以自己新建path，系统变量可在全部用户中有效，管理员变量仅在管理员用户有效。)，在path变量中新建输入mysql的bin文件目录。







##### 4.配置下载

在mysql目录下创建my.ini的系统配置文件，文件内容为

```
[client]
port=3306
[mysqld]
#安装目录
basedir=D:\mysql5.7\mysql-5.7.37-winx64\
#数据目录
datadir=D:\mysql5.7\mysql-5.7.37-winx64\data\
port=3306
character_set_server=utf8
#跳过安全检查，注销后需要输入正确的用户名和密码才能登陆
skip-grant-tables
```






用管理员方式打开命令提示符






切换至mysql目录下进行安装


``` 
mysqld -install
```

```
mysqld --initialize-insecure
```




##### 5.启动设置调试

输入启动命令
``` 
net start mysql
```



输入停止命令
```
net stop mysql
```



输入登录命令
```
mysql -u root -p
```
如果成功此时的密码为空，在配置文件中设置了跳过安全验证输入密码时直接回车即可登录



登录成功后我们进行密码设置
输入使用数据库的指令和更新密码的指令

```sql
#第一步
use mysql;
#第二步
ALTER user root@'localhost' identified by 'cjzbgsyxjy1';
#最后进行刷新
flush privileges;
#退出
quit;
```

成功如下




然后在my.ini文件中注释掉跳过安全验证的代码
```sql
[client]
port=3306
[mysqld]
#安装目录
basedir=D:\mysql5.7\mysql-5.7.37-winx64\
#数据目录
datadir=D:\mysql5.7\mysql-5.7.37-winx64\data\
port=3306
character_set_server=utf8
#跳过安全检查，注销后需要输入正确的用户名和密码才能登陆
#skip-grant-tables
```

保存后重新进行启动登录即可。
