# 常用的css

## 文本移除省略号

* 单行文本
  * 统一css：

    ```-js
    overflow: hidden;//溢出隐藏
    white-space: nowrap;//空间溢出换行
    text-overflow: ellipsis;//文本移除省略号替代
    ```

* 多行文本
* webkit内核浏览器处理

    ```-js
        display: -webkit-box;
        -webkit-line-clamp: 3;
    ```

* 其他内核浏览器处理方案：
    用js通过字体大小和line-height以及盒子得height限制来实现溢出添加省略号，伪类添加省略号图片或者替换掉最后几个文字为省略号之类得

## 翻转卡片动画实现

* 3D视角设置背面不可见并旋转即可实现

    ```-js
    perspective: 5000px;
    overflow: hidden;
    &:hover {
    .section2-index-tab.hover {
    transform: rotateY(180deg);
    }
    transform-style: preserve-3d;
    transition: all 0.5s ease-out;
    backface-visibility: hidden;
    height: 606px;
    position: absolute;
    .section2-index-front {
    z-index: 3;
    transform: rotateY(0deg);
    }
    .section2-index-back {
    z-index: 2;
    transform: rotateY(180deg);
    }
    ```

## 渐变色

* 白光闪过效果即可用如下渐变白色光条设置translate旋转一下并通过动画实现移动即可

    ```-js
        background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .3) 50%, rgba(255, 255, 255, 0) 100%);
    ```

## 动画

* transition
* animation
* willchange
* animation step参数逐帧动画

## chrome字体限制

* font-size<12 chrome都当12px处理并显示，所以调试移动端时会有溢出问题

## grid样例

* [grid二维布局，相比bootstrap更自由不用引入和操控html，但兼容性](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## text-shadow复制文字

```-js
text-shadow: .5em 0, 1em 0, 1.5em 0;
```

## 层叠上下文概念

## 重绘和回流，性能优化

* transform和position的区别

## fixed和transfrom

* fixed是相对于 viewport 定位，但是也有特殊情况: 当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先
