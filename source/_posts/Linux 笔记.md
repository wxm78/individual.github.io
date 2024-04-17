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




