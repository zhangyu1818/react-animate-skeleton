# react-animate-skeleton

使用`react`和`styled-components`实现的动画骨架屏组件

## 安装

`npm i -S react-animate-components`

## 组件介绍

| 组件                     | 简介             | Props ( * 为必需参数)                                        |
| :----------------------- | :--------------- | :----------------------------------------------------------- |
| `<Skeleton />`           | 骨架屏最外层组件 | height 高度 <br />* width 宽度<br />padding 间距             |
| `<Skeleton.Section />`   | 多行占位标签     | * lineSize 每行高度<br />* gap 行间间隔 <br />* lines 行数<br /><br />horizontal 是否横向排列<br />height 块高度(horizontal时必须) |
| `<Skeleton.Padding />`   | 四周间距         | padding 间距                                                 |
| `<Skeleton.Gap />`       | 单行留白         | * height 高度                                                |
| `<Skeleton.Item>`        | 单行占位标签     | * height 高度                                                |
| `<Skeleton.Image>`       | 图片占位标签     | * height 高度<br /> width 宽度<br />padding 间距             |
| `<Skeleton.Avatar>`      | 头像占位标签     | * height 高度<br />width 宽度<br />padding 间距              |
| `<Skeleton.Horizontal/>` | 子组件横着排     |                                                              |

`widht`,`height`,`padding`参数为`number`或`string`，如`10`,`10px`，`padding`可以写为`10`,`10px`,`0 20px 20px 0`

[效果预览]([https://blog.zhangyu1818.com/%E5%81%9A%E4%B8%80%E4%B8%AA%E5%8A%A8%E6%80%81%E7%9A%84%E9%AA%A8%E6%9E%B6%E5%B1%8F/](https://blog.zhangyu1818.com/做一个动态的骨架屏/))

