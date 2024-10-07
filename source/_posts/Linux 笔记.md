---
title: Linux笔记
tags: ["Linux","笔记","VMware"]
categories: ["虚拟机"]
---

<h3>网络连接的三种方式</h3>
<h4>桥接模式</h4>
<p>虚拟系统可以和外部系统通讯，但是容易造成IP冲突。可以互相通讯</p>

<h4>NAT模式</h4>
<p>网络地址转换模式，虚拟系统可以和外部通讯，不造成IP冲突。但是外部的系统不可以和内部的虚拟系统通讯</p>

<h4>主机模式</h4>
<p>独立的系统</p>

<h3>安装vmtools</h3>
<ol>
    <li>进入centos</li>
    <li>点击VMware菜单->install VMware tools</li>
    <li>centos会出现一个vm的安装包，xx.tar.gz,如果未出现可以关闭虚拟机，在再一次启动的时候去点重新安装，必须要在完全启动到界面之前去点。</li>
    <li>拷贝到opt文件</li>
    <li>使用解压命令 tar,得到一个安装文件,使用cd /opt 进入opt目录 用tar -zxvf xx.tar.gz进行解压</li>
    <li>进入解压的目录，/opt目录下的vmware</li>
    <li>安装命令 。/VMwar-install.pl</li>
    <li>全部默认设置，继续安装</li>
    <li>注意事项:安装vmtools需要gcc 使用查看命令gcc -v</li>
</ol>

<h3>linux目录结构</h3>
<p>所有硬件都会被映射成一个文件。加粗为常用</p>
<ul>
    <li><b>/bin目录 存放常用的命令</b></li>
    <li>/sbin目录 存放管理原常用的命令</li>
    <li><b>/home目录 存放用户的主目录</b></li>
    <li><b>/root目录 系统管理员</b></li>
    <li>/lib目录 系统开机所需要的最基本的动态连接共享库，类似于win系统的dll文件</li>
    <li>/lost + found目录（隐藏） 这个目录一般是空的，在系统非法关机之后会存放一些文件</li>
    <li><b>/etc目录 系统管理所需要的配置文件和子目录，比如mysql数据库my.conf</b></li>
    <li><b>/usr目录 很多应用程序会默认放在usr目录里，类似于win系统里的program</b></li>
    <li><b>/boot目录 启动Linux时使用的一些核心文件，包括镜像文件和连接文件</b></li>
    <li>/proc目录 虚拟的目录，系统内存的映射。不能动</li>
    <li>/srv目录 存放一些服务启动之后需要提起的数据</li>
    <li>/sys目录 2.6内核中新出现的一个文件系统 sysfs</li>
    <li>/tmp目录 临时文件</li>
    <li>/dev目录 设备管理器，把所有的硬件用文件形式存储</li>
    <li><b>/media目录 Linux自动识别的设备映射成文件管理，常常会挂载到这个目录</b></li>
    <li><b>/mnt目录 用来挂载</b></li>
    <li><b>/boot目录 启动Linux时使用的一些核心文件，包括镜像文件和连接文件</b></li>
    <li>/opt目录 主机额外安装软件所存放的目录</li>
    <li><b>/usr/local目录 这是另一个给主机额外安装软件所安装的目录。一般是通过编译源码方式安装的程序</b></li>
    <li><b>/var目录 存放不断扩充的东西，习惯将经常修改的放在这个目录下。包括日志文件</b></li>
    <li>/selinux目录 安全子系统</li>
</ul>

<h3>vi和vim</h3>
<h4>正常模式</h4>
<p>以vim打开一个档案就直接进入一般模式了（默认模式）<br>
在这个模式中你可以使用上下左右键来移动光标<br>
你可以使用删除字符或者删除整行来处理档案内容，
也可以使用复制粘贴来处理你的文件数据。</p>

<h4>插入模式</h4>
<p>按下i,I,o,O,a,A,r,R等任何一个字母之后会进入编辑模式，一般来说按i即可</p>

<h4>命令行模式</h4>
<p>输入:或者/进入命令行模式，在这个模式当中，可以提供你相关指令，完成读取、存盘、替换、离开vim、显示行号等动作<br>
:wq(保存退出) :q(退出) :q!(强制退出，不保存)<br>
切换命令行模式先esc进行切换，再输入：进行操作</p>

<h4>vi和vim快捷键</h4>
<ul>
<li>yy 拷贝当前行，按p进行粘贴</li>
<li>dd 删除当前行</li>
<li>命令行下/关键字，回车查找 输入n查找下一个</li>
<li>设置文件的行号，取消文件的行号.[命令行下：set nu 和 set nonu]</li>
<li>u在一般模式下可以进行撤销</li>
<li>在一般模式下，先输入数字在输入shift + g 可以进行快速定位到行</li>
<li>小键盘不可用</li>
</ul>

<h3>关机重启命令</h3>
<ul>
<li>shutdown -h now 立即进行关机</li>
<li>shudown -h 1 一分钟后关机</li>
<li>shutdown -r now 现在重启计算机</li>
<li>halt 关机</li>
<li>reboot 重启</li>
<li>sync 把内存的数据同步到磁盘</li>
</ul>
<h4>注意细节</h4>
<ol>
<li>不管是重启系统还是关闭系统，首先要运行sync命令，把内存的数据写到磁盘中</li>
<li>目前的shutdown/reboot/halt等命令均已经在关机前进行了sync。</li>
</ol>

<h3>用户登录和注销</h3>
<h4>介绍</h4>
<ol>
<li>登录时尽量少用root账号登录，因为它是系统管理员，最大的权限<br>避免操作失误，可以使用普通用户登录，登录后再用“su - root” 命令进行切换成系统管理员</li>
<li>在提示符下输入logout即可注销用户</li>
</ol>
<h4>使用细节</h4>
<ul>
<li>logout注销指令在图形运行级别无效，在运行级别3下有效</li>
</ul>

<h3>用户管理</h3>

<h4>用户创建与删除</h4>
<ul>
<li>"useradd 用户名"创建一个用户，默认在/home下<br> "useradd -d 指定目录 新用户名" 给新用户指定家目录位置</li>
<li>"bwd" 显示当前用户所在的目录</li>
<li>"userdel 用户名“ 删除用户，但是保留家目录<br> "userdel -r 用户名" 完全删除</li>
</ul>

<h4>查询用户信息指令</h4>
<ul>
<li>"id 用户名" 查询用户信息</li>
<li>"su - 用户名" 切换用户 由高到低不需要密码，反之需要<br> 当需要返回原来用户时，使用exit/logout指令</li>
<li>"whoami/who an I" 查看第一次登录到未切换之前的用户名</li>
</ul>

<h4>用户组</h4>
<ul>
<li>"groupadd 组名" 新增组</li>
<li>"groupdel 组名" 删除组</li>
<li>"useradd -g 用户组 用户名" 增加一个用户，直接指定到索要指定的组。如果不指定会默认创建一个和用户相同的组</li>
</ul>

<h4>用户和组相关文件</h4>
<ul>
<li>/etc/password文件 用户（user）的配置文件，记录用户的各种信息<br> 每行的含义：用户名:口令:注释性描述:主目录:登录shell<br> shell 相当于翻译解释的工具，由cd传输指令将指令通过shell解释翻译给linux内核。</li>
<li>/etc/shadow文件 口令的配置文件<br> 每行的含义：登录名:加密口令:最后一次的修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志</li>
<li>/etc/group文件 组的配置文件，记录Linux包含的组的信息<br> 每行的含义：组名:口令:组标识号:组内用户列表</li>
</ul>

<h4>运行级别</h4>
<ul>
<li>0：关机</li>
<li>1：单用户 可找回丢失密码</li>
<li>2：多用户状态没有网络服务</li>
<li>3：多用户状态有网络服务</li>
<li>4：系统未使用保留给用户</li>
<li>5：图形界面</li>
<li>6：系统重启</li>
</ul>
<p>"init 0123456" 通过init来切换指定级别</p>
<p>"systemctl get-default" 查看当前的默认指定级别</p>
<p>"systemctl set-default multi-user.target" 改变当前的默认指定级别</p>
<p>multi-user.target等同于运行级别3 graphical.target等同于运行级别5</p>

<h4>帮助指令</h4>
<ul>
<li>man 获得帮助信息<br> 语法：man [命令或配置文件]<br> 如man ls 命令使用时可以组合使用比如ls-al,ls-al /root</li>
<li>help 命令 help cd 获的shell内置命令的帮助信息</li>
</ul>

<h4>目录文件类</h4>
<ul>
<li>"pwd指令" 显示当前工作目录的绝对路径</li>
<li>"ls指令" 显示当前所有文件<br>常用选项<br> -a显示当前目录所有的文件和目录<br> -l以列表的方式显示信息</li>
<li>"cd指令" 切换目录<br>cd~ 回到自己的家目录<br>cd.. 回到当前目录的上一级目录</li>
<li>"mkdir指令" 语法：mkdir [选项] 要创建的目录<br> 选项：-p（创建多级目录）</li>
<li>"rmdir指令" 语法：rmdir [选项] 要删除的空目录<br> rmdir删除的是空目录，如果目录下有内容时是无法删除的。</li>
<li>"touch指令" 语法：touch 文件名称<br> 创建一个空文件</li>
<li>"cp指令" 语法：cp [选项] 要拷贝的文件 拷贝的目的地<br> 选项：-r（递归复制整个文件夹）反斜杠cp可以强制覆盖拷贝</li>
<li>"rm指令" 语法：rm [选项] 要删除的文件或目录<br> 选项：-r(递归删除整个文件夹) -f（强制删除不提示）</li>
<li>"mv指令" 语法：mv oldNameFile(旧名字) newNamefile(新名字) 重命名<br>mv /temp/movefile(旧目录) /targetFolder(新目录) 移动文件</li>
<li>"cat指令" 语法：cat [选项] 要查看的文件<br> 常用选项：-n<(显示行号) 此指令浏览文件不能修改文件。 </li>
<li>管道指令|more 可以独立使用可以组合cat指令 空格键:翻一页 enter:翻一行<br> q:立刻离开 ctrl+F:向下滚动一屏 ctrl+B:返回上一屏<br> =:输出当前行号 :f :输出文件名和当前行号</li>
<li></li>
</ul>

<ul>
<li></li>
</ul>

<ul>
<li></li>
</ul>
<ul>
<li></li>
</ul>
<ul>
<li></li>
</ul>
<ul>
<li></li>
</ul>
<ul>
<li></li>
</ul>
<ul>
<li></li>
</ul>
<ul>
<li></li>
</ul>
