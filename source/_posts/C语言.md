---
title: C语言笔记
tags: ["C","笔记"]
categories: ["程序语言"]
---

<h1 align = "center">C语言</h1>

<h3>C语言结构</h3>

```c
// c语言代码中一定要有main函数
// main函数是程序入口
// mian函数有且仅有一个

#include <stdio.h>
// std - 标准
// i - input
// o - output

int main(){
// int(整形) main(主函数)
	printf("hello,world");
    // printf是一个库函数
    // 用来打印数据
	return 0;
    // 代表整数,返回整数
}

#include <stdio.h>

int main(){
    printf();
    return 0;
}
```
<h3>C语言相关函数</h3>

```c
scanf("%d %d", &num1, &num2);//输入
printf("%d", num1);//输出
extern int num;//声明来自外部的符号
%d//打印整形
%s//打印字符串
%c//打印字符
%f//打印float类型的数据
%1f//打印double类型的数据
%zu//打印sizeof的返回值
int len = strlen()//求字符串长度的一个函数strlen 需要头文件string.h
#include <string.h>//strlen所需的头文件
```

<h3>VS code快捷键</h3>
<pre>c语言注释：
     注释 CTRL + K + C  
     取消注释 CTRL + K + U
</pre>

<h3>C的数据类型</h3>
<pre>
char 字符数据类型 1个字节 
short 短整型 2个字节
int 整形 4个字节     
long 长整型 4个字节 <strong>C语言规定 sizeof(long) >= sizeof(int)</strong>
long long 更长的整形 8个字节
float 单精度浮点数 4个字节
double 双精度浮点数 8个字节
</pre>

<h3>计算机里面的单位</h3>
<pre>
bit - 比特位
byte - 字节 == 8bit
kb mb gb tb pb(由小到大,1024进一个单位)
十进制：0123456789
二进制：01
</pre>
<h3>定义变量</h3>

```c
//全局变量，局部变量
int main()
int a = 100;//全局变量
{
	int a = 10;//局部变量
	printf("a=%d\n", a);//当全局变量和局部名称相同时，优先局部变量
}//不建议给全局变量和局部变量设置相同的名字
```

```c
//常量
30;
3.14;
'w';
'www';//字面常量，字符串字面值

const int a = 10;//const修饰的常变量

#define MAX 100
#define str "dadsadad"//define 定义的标识符常量

enum Color{
	RED,
	BLUE,
	GREEN
}//枚举常量，一般用大写

```
```c
//字符
char zn = 'w';//字符
"dadadad";//字符串
char arr[] = "abcdef";//字符串储存方法 a b c d e f \0
char arr01[] = {'a','b','c','d','e','f'};//a b c d e f之后不会结束打印
//转义字符”\0“是字符串结束标志
```
<h3>转义字符</h3>

```c
\? //在书写连续多个问号时使用，防止他们被解析成三字母词
   //三字母词 ??) --> ] ??( --> [
   
\' //用于表示字符常量'
\" //用于表示一个字符串内部的双引号
\\ //用于表示一个反斜杠，防止他被解释为一个转义序列符
\a //警告字符，蜂鸣
\b //退格符
\f //进纸符
\n //换行
\r //回车
\t //水平制表符
\v //垂直制表符
\ddd //ddd表示1-3个八进制的数字 如\130x
\xdd //dd表示2个十六进制数字 如\x30 0
```

<h3>选择语句</h3>

```c
if-else
switch
```

<h3>选择语句</h3>

```c
while()
for()
do while()
```

<h3>数组</h3>

```c
int arr[10] = {0,1,2,3,4,5,6,7,8,9};
```

<h3>操作符</h3>

```c
% //取模操作符的两段必须是整数
+ - * / //运算
    
>> << //移位操作符 与二进制有关
& ^ | //位操作符 按位与 按位或 按位异或
    
= //赋值 int num = 0;初始化 num = 1;赋值
+= -= *= /= &= ^= |= >>= <<= // a = a + 1;等价于a += 1;

//单目操作符
! //逻辑反操作
- //负值
+ //正值
& //取地址
sizeof //操作数的类型长度（字节为单位）
~ //对一个数的二进制按位取反
-- //前置、后置--
++ //前置、后置++
* //简介访问操作符（解引用操作符）
(数据类型)3.14 //类型强转

//关系操作符
>
>=
<
<=
!=
==

//逻辑操作符
&& //逻辑与 - 并且 都为真才为真
|| //逻辑或 - 或者 二者之一为真即为真

//条件操作符(三目操作符，三个操作数)
exp1 ? exp2 : exp3
 真      ✓     ✕
 假      ✕     ✓

//逗号表达式
exp1, exp2, exp3, exp4 //从左向右依次计算

//下标引用、函数调用和结构成员
[] //下标引用操作符
() //函数调用操作符
.
->
```

<h3>常见关键字</H3>

```c
auto //所有局部变量都是自动类型
break //循环跳出 for while do while
case //switch
char short int long float double //类型
const //修饰变量，表示常属性
continue //用于循环
default //用于switch case里
do //
else //分支语句
enum //枚举 
struct //结构体 
union //联合体（共用体）
extern //声明外部符号 需要根据编译器去设置多个代码同时编译
for //循环
goto //跳转语句
if //分支语句
register //寄存器 
return //函数返回值
signed //有符号的
unsigned //无符号的
sizeof //计算大小
static //静态的，修饰函数变量 修饰局部 修饰全局 修饰函数
switch //switch case语句
typedef //类型重命名 类型定义
void //无 （函数的返回类型，函数的参数）不需要返回
volatile //
while //循环
```

<h3>static</h3>

```c
//全局变量是具有外部链接属性的,但
static int num = 10;
//static 修饰全局变量的时候
//这个全局变量的外部连接属性就变成了内部连接属性
//其他源文件（.c）就不能再使用到这个全局变量了
//static 修饰局部变量的时候，局部变量出了作用域，不销毁的
//本质上static修饰局部变量的时候改变了变量的存储位置
//影响了变量的存储位置，影响了其生命周期，和程序的生命周期一样

//函数同理
```

<h3>register - 寄存器</h3>

```c
//电脑存储设备 寄存器 > 高速缓存 > 内存 > 硬盘
//从左向右 左边空间小造价高
//可以给编译器建议将一些一些变量放进寄存器，但还是有编译器判断
···
```