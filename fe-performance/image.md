## 图片优化
> 不同业务场景下选择不一样的图片类型
### jpg
> jpg 是有损压缩，相对体积较小。适用于大的背景图、轮播图或 Banner 图。但是处理矢量图形或字体等线条感强的图形时，会有明显模糊感，且不支持透明度。
### png
> png 分为PNG-8 与 PNG-24，特点：无损压缩、质量高、体积大、支持透明。应用场景一般是logo

> 一个二进制位表示两种颜色（0|1 对应黑|白），如果一种图片格式对应的二进制位数有 n 个，那么它就可以呈现 2^n 种颜色。

> 8 位的 PNG 最多支持 256 种颜色，而 24 位的可以呈现约 1600 万种颜色。
### svg
> SVG（可缩放矢量图形）是一种基于 XML 语法的图像格式。它和其它图片种类有着本质的不同：SVG 对图像的处理不是基于像素点，而是是基于对图像的形状描述。特点：文本文件、体积小、不失真、兼容性好
### Base64
> Base64 并非一种图片格式，而是一种浏览器能识别的编码方式。
所以是以文本形式存在，可以直接放在代码里，从而减少http请求，但是不适用于大图，因为本身base64就已经编译成原体积的4/3了
### 雪碧图
> 雪碧图 也叫图像精灵，是小图标的解决方案，减少http请求
### WebP
> 是 Google 专为 Web 开发的一种旨在加快图片加载速度的图片格式，它支持有损压缩和无损压缩。他有其他图片的各种优点，甚至支持动图。但是现阶段浏览器兼容性太低。