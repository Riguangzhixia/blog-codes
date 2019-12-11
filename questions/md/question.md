# 问题总结分享
## 分流页优化相关
+ lazyload使用

    主要参数就是**offset**控制当前盒子滚动到距离视口多远时开始加载
    ```
    import * as React from 'react';
    import LazyLoad from 'react-lazyload';
    
    export default class LazyloadWrapper extends React.Component {
      render() {
        const { disable, children, ...restProps } = this.props;
        if (disable) {
        //disable控制lazyload是否开启，配合prerender判断是否开启懒加载
          return children;
        } else {
          return <LazyLoad offset={window.innerHeight / 2} {...restProps}>{children}</LazyLoad>;
        }
      }
    }
    //lazyload绝对定位时导致占位符div的放置有问题从而offset计算产生问题没法达到预期的懒加载效果
    ```
+ 图片require转webp

    如果支持webp的话会将图片转webp格式，**IE下webp图片会有显示问题**
    ```
        import React from 'react';
        import toWebpImage from '@src/utils/to-webp-image';
        
        export default class GallerySlide extends React.PureComponent {
            render(){
                const actImages = [toWebpImage(require('./images/lingxuege.jpg'))];
                return ...;
            }
        }
    ```
## 日常开发相关
+ placeholder文字样式问题
    ```
    input::placeholder{
        //自定义样式
    }
    ```
   ![IOS中placeholder可能显示不垂直居中](https://images2015.cnblogs.com/blog/910706/201608/910706-20160816193002359-1378714101.png)
    
    **IOS中placeholder可能显示不垂直居中，设置以下属性**
    ```
    input{
        line-height：normal;
    }
    ```
+ ie9不支持console.log()而且**会阻塞js得执行**，需要打开控制台才能继续运行
+ jquery中的fadeOut和带动画得hide(100)时选择性得隐藏掉显示的元素，不显示得dom不会去操作


[工作内容](https://webxsj.worktile.com/report/weekly/my/5de3e6f39e9b4a1607ba4440/create?from=submit)