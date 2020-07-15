

#                                   前端小白奥利给（一）

![](https://ftp.bmp.ovh/imgs/2020/07/32f8422092fe098b.gif)



👩你好，我是Maggie，终于等到你了！【前端小白奥利给】系列文章将教会，**有一定基础的你**，做一个纯**JavaScript**游戏，我把这个游戏也命名为【前端小白奥利给】。学会基本原理和实现方法后，希望你能够发挥自己天马行空的想象力，设计并实现专属于你的**第一个**JavaScript游戏！Let's Go！

👩首先，你需要具备以下基础知识，若存在知识盲区，请点击链接进行学习。

## 1.基础知识储备

HTML语法和基本结构

[W3CschoolHTML教程](https://www.w3cschool.cn/html/)

CSS语法和基本结构

[W3CschoolCSS教程](https://www.w3cschool.cn/css/)

JavaScript语法和基本结构

[W3CschoolJavaScript教程](https://www.w3cschool.cn/javascript/)

会用VScode写代码

[玩转VScode专栏及“黑宝书”](https://zhuanlan.zhihu.com/p/152177098)

遇到新的语法和结构会使用MDN等手册进行查询+学习

[MDN web docs](https://developer.mozilla.org/zh-CN/)



👩然后，了解以下知识点。对于大部分初级学习者，可能是第一次接触这些知识。我把这些新的知识（主要为web API方面知识点）总结成了一个个小工具。如果你不能完全理解它们的语义和用法，你可以把它们想象为带有特定功能的小工具，当我们需要实现某种需求时，把它们从工具箱拿出来即可。

## 2.新知识点

### 2.1事件监听器（带箭头）

> **JS代码**
>
> ```javascript
> document.addEventListener("DOMContentLoaded",()=>{});
> ```
>
> **功能**
>
> 监听相关操作（点击键盘上某键）或变化（函数内某些值的变化），以出发相应事件并执行
>
> **详细文档**
>
> [MDN: document.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

### 2.2 交互（键盘）监听器

> **JS代码**
>
> ```javascript
> function example(e){
>     
>     
> switch(e.keyCode){
> case 37:/*👈*/
> if();
> break;
> case 39:/*👉*/
> if();
> break;
> }
>     
> }
> document.addEventListener("keydown", example);
> 
> ```
>
> **功能**
>
> switch块，确定触发键盘上相应键后发生响应
>
> document.addEventListener("keydown",functionname), 监听，且调用触发函数的调节为，键盘上相应键被按下
>
> **详细文档**
>
> [MDN: addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

### 2.3间隔调用器

> **JS代码**
>
> ```javascript
> function example(){}
> callexample=setInterval(example,sometime);
> clearInterval(callexample);
> ```
>
> **功能**
>
> setInterval()，每隔一段时间，调用某函数
>
> clearInterval(), 终止setInterval👆
>
> **详细文档**
>
> [MDN: setInterval()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
>
> [MDN: clearInterval()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearInterval)

### 2.4定时器（带箭头）

> **JS代码**
>
> ```javascript
> setTimeout(()=>,sometime);
> 
> or
> 
> function example(){}
> callexample=setTimeout(example,sometime);
> clearsetTimeout(callexample);
> ```
>
> **功能**
>
> 每隔一段时间，调用某函数，定时触发
>
> **详细文档**
>
> [MDN: setTimeout()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)

### 2.5网格生成器

**HTML部分**

> **HTML代码**
>
> ```html
> <div class="grid">
> ……
> <div></div>
> ……
> </div>
> ```
>
> **功能**
>
> 在一个大div（格子）中间嵌入225个小div（格子）
>
> **详细文档**
>
> [W3C: div用法](https://www.w3school.com.cn/tags/tag_div.asp)

**CSS部分**

> **CSS代码**
>
> ```css
> .grid{
> display:flex;
> flex-wrap:wrap;
> width:450px;
> height:450px;
> margin:auto;
> background:#ffe6eb;
> }
> 
> and
> 
> .grid dive{
>     width:30px;
>     height:30px;
> }
> ```
>
> **功能**
>
> display:flex, 将父级元素(div)变成一个伸缩盒容器
>
> flex-wrap:wrap, 指定伸缩盒内元素多行显示
>
> **详细文档**
>
> [MDN: flex](https://developer.mozilla.org/zh-CN/docs/Glossary/Flex_Container)
>
> [MDN: flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)

**JS部分**

> **JS代码**
>
> ```javascriptjava
> const squares = document.querySelectorAll(".grid div");
> ```
>
> **功能**
>
> document.querySelectorAll(""),选择相应的CSS元素
>
> **详细文档**
>
> [MDN: document.querySelectorAll("")](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)

### 2.6换装器

**CSS部分**

> **CSS代码**
>
> ```css
> .clotheNameOne{
> background-color:red;
> }
> .clotheNameTwo{
> background-color:blue;
> }
> ```

**JS部分**

> JS代码
>
> ```javascript
> squares[25].classList.add("clotheNameOne");
> squares[25].classList.remove("clotheNameOne");
> squares[224].classList.add("clotheNameTwo");
> ```
>
> **功能**
>
> element.classList.add(""), 给元素添加相应css属性
>
> element.classList.remove(""), 移除元素的相应css属性
>
> **详细文档**
>
>  [MDN: element.classsList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)

👩以下是实现整个游戏的核心原理。你可以看到，掌握并合理地运用上面的小工具，就可以做出来一个完整的游戏。

## 3.核心原理

> - 利用**网格生成器**，生成一个15x15的网格(width=450px,height=450px)
>
> - 将这个整体记作数组**squares**,每一个小网格(width=30px,height=30px)都有自己的序号
>
> - 利用**换装器**，为小网格“穿上”或者“脱下”新衣(相应的class属性)，以使网格发生动态变化
> - 利用**间隔调用器**或**定时器**使得网格每隔一段时间发生动态变化
> - 利用**交互(键盘)监听器**，实现相应按下某键（👈👉），出现动态变化的功能
> - 利用**事件监听器(带箭头)**，使得HTML+CSS+JS部分实现特殊联动

👩工欲善其事，必先利其器。别急着实现一个完整的游戏，先完成下面的简单示例。简单示例的HTML+CSS+JavaScript完整代码我已经给出。这个简单示例里运用到了本游戏的核心原理+“小工具”，呈现的效果如下

![](https://ftp.bmp.ovh/imgs/2020/07/4ad71a6f79c9c8aa.gif)

## 4.代码简单示例-HTML部分

> **代码**
>
> ```html
> <!DOCTYPE html>
> <html lang="en" dir="ltr">
>   <head>
>     <meta charset="UTF-8" />
>     <title>Front-end Beginners Fighting!</title>
> 
>     <link rel="stylesheet" href="style.css" />
> 
>     <script src="app.js" charset="UTF-8"></script>
>   </head>
> 
>   <body>
>     <div class="grid">
>      … <div></div> ……
>     </div>
>   </body>
> </html>
> ```
>
> **功能**
>
> 创建了一个大div块，其内包含了225个小div块

## 5.代码简单示例-CSS部分

> **代码**
>
> ```css
> .grid {
>   display: flex;
>   flex-wrap: wrap;
>   width: 450px;
>   height: 450px;
>   margin: auto;
>   background: #ffe6eb;
> }
> .grid div {
>   width: 30px;
>   height: 30px;
> }
> .beginner {
>   background-color: cornflowerblue;
> }
> .disturbFactor {
>   background-color: darkorange;
> }
> 
> ```
>
> **功能**
>
> 将大div块变成一个伸缩盒子，确定其内小div块排布方式为多行排布
>
> 确定大div块和小div的大小，生成一个15x15的网格

## 6.代码简单示例-JS部分

> **代码**
>
> ```javascript
> document.addEventListener("DOMContentLoaded", () => {
>   const squares = document.querySelectorAll(".grid div");
>   let beginnerIndex = 217;
>   let width = 15;
>   let leftboundary = 210;
>   let rightboundary = 224;
>   squares[beginnerIndex].classList.add("beginner");
> 
>   function disturbFactorMove() {
>     let disturbFactorOneIndex = 7;
>     squares[disturbFactorOneIndex].classList.add("disturbFactor");
>     function disturbFactorOneMove() {
>       squares[disturbFactorOneIndex].classList.remove("disturbFactor");
>       disturbFactorOneIndex += width;
>       squares[disturbFactorOneIndex].classList.add("disturbFactor");
>     }
>     disturbFactorOneMoveInterval = setInterval(disturbFactorOneMove, 300);
>   }
>   disturbFactorMoveInterval = setInterval(disturbFactorMove, 4500);
>   function beginnerMove(e) {
>     squares[beginnerIndex].classList.remove("beginner");
>     switch (e.keyCode) {
>       case 37:
>         if (beginnerIndex !== leftboundary) beginnerIndex -= 1;
>         break;
>       case 39:
>         if (beginnerIndex !== rightboundary) beginnerIndex += 1;
>         break;
>     }
>     squares[beginnerIndex].classList.add("beginner");
>   }
>   document.addEventListener("keydown", beginnerMove);
> });
> 
> ```
>
> **功能**
>
> **squares**，建立squares数组，以给网格中各个小格编号
>
> **function disturbFactorMove(){}+disturbFactorMoveInterval**,使得干扰因素每隔一段时间开始从7号格子处下落
>
> **function disturbFactorOneMove(){}+disturbFactorOneMoveInterval**,控制干扰因素以一定速度下落
>
> **function beginnerMove(e){}+document.addEventListener**,按下键盘👈👉控制前端小白移动
>
> 

👩我们下篇文章见哦~



