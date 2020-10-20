## Vue 和 React 比较
### 理念
### 数据
### hook

## Hook 和 Class

## 面向对象与函数式编程
### 命令式和声明式
### 面向对象
* 封装
* 继承
* 多态
### 函数式
* 函数是一等公民
* 纯函数
* 引用透明
* 不可变数据
* 柯里化 curry
* 组合 compose

## 输入url后发生了什么
### DNS 解析
* 缓存查找
* 递归查询和迭代查询
### TCP连接
* 标志位
    * SYN 同步序列编号
    该标志仅在三次握手建立TCP连接时有效。
    * ACK 确认编号
    * FIN 结束标志
    当 FIN = 1 时，表明此报文段的发送方的数据已经发送完毕，并要求释放连接。不再发送，但可以接收。
    * URG 紧急标志
    当 URG = 1，表示有紧急数据。
    * PSH (Push)－推标志
    PSH = 1表示有真正的 TCP 数据包内容被传递。
    * RST (Reset)－复位标志
    当 RST = 1，表明 TCP 连接中出现严重差错，必须释放连接，然后再重新建立连接。
* ACK、SYN和 FIN 这些大写的单词表示标志位，其值要么是1，要么是0；ack、seq小写的单词表示序号。
* 三次握手
第一次握手：建立连接时，客户端发送syn包（SYN = 1, seq = x）到服务器，并进入SYN_SENT状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。

第二次握手：服务器收到syn包，必须确认客户的SYN（ACK=1, ack=x+1），同时自己也发送一个SYN包（SYN=1, seq=y），即SYN+ACK包，此时服务器进入SYN_RECV状态；

第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ACK=1,ack=y+1,seq=x+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

为什么要三次握手？
    * 第一次握手A发送SYN传输失败，A,B都不会申请资源，连接失败。如果一段时间内发出多个SYN连接请求，那么A只会接受它最后发送的那个SYN的SYN+ACK回应，忽略其他回应全部回应，B中多申请的资源也会释放
    * 第二次握手B发送SYN+ACK传输失败，A不会申请资源，B申请了资源，但收不到A的ACK，过一段时间释放资源。如果是收到了多个A的SYN请求，B都会回复SYN+ACK，但A只会承认其中它最早发送的那个SYN的回应，并回复最后一次握手的ACK
    * 第三次握手ACK传输失败，B没有收到ACK，释放资源，对于后序的A的传输数据返回RST。实际上B会因为没有收到A的ACK会多次发送SYN+ACK，次数是可以设置的，如果最后还是没有收到A的ACK，则释放资源，对A的数据传输返回RST
* 四次挥手
由于TCP连接是全双工的，因此每个方向都必须单独进行关闭。这个原则是当一方完成它的数据发送任务后就能发送一个FIN来终止这个方向的连接。
收到一个 FIN只意味着这一方向上没有数据流动，一个TCP连接在收到一个FIN后仍能发送数据。
首先进行关闭的一方将执行主动关闭，而另一方执行被动关闭。

（1）客户端A发送一个FIN，用来关闭客户A到服务器B的数据传送(报文段4)。

（2）服务器B收到这个FIN，它发回一个ACK，确认序号为收到的序号加1(报文段5)。和SYN一样，一个FIN将占用一个序号。

（3）服务器B关闭与客户端A的连接，发送一个FIN给客户端A(报文段6)。

（4）客户端A发回ACK报文确认，并将确认序号设置为收到序号加1(报文段7)。
### HTTP连接
* HTTP1.0/HTTP1.1/HTTP2.0/HTTPS
* 强缓存和协商缓存
* 状态码
* 请求和响应
### html解析
* 词法解析+标记，构建dom树
* css 解析
* 计算布局树
* 图层
* 屏幕绘制（GPU）
* 重绘和重排