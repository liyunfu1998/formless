
## 简介
formless是基于Next.js、@dnd-kit/core、clerk、Postgres、shadcn/ui的可视化表单搭建平台

## 如何开始

拉取项目
```shell
git clone git@github.com:liyunfu1998/formless.git
cd formless
pnpm i
```

进入以下两个平台分别注册账号，获取到对应的数据库和clerk平台的`api keys`

- 数据库/一条龙：[vercel](https://vercel.com/)
- 登录注册：[clerk](https://dashboard.clerk.com/sign-up)

进入`vercel`使用`github`账号登录，进入`Storage`创建`Postgres`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/065e19bc1a00440c8bd676f62bf6a69b~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1994&h=1358&s=164975&e=png&b=0a0a0a)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14a45ff56d8244c3b490c393015fb08c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1426&h=990&s=101919&e=png&b=080808)

创建成功获取`.env`的配置，在本地新建`.env`填入`.env.example`示例的两个配置，带有`clerk`的配置，即可从`clerk`平台获取

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c3de5b65990a43ddb0549151b4474bbf~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2258&h=1188&s=183663&e=png&b=0b0b0b)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/82e40759ae154ef8a2b27bcd3683c87d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1830&h=744&s=199837&e=png&b=292d35)


进入`clerk`网站，通过`github`或`google`登录

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24c99cf93c2743879086b34f0776af38~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2016&h=1610&s=1304949&e=png&b=504bd5)

会进入这个地址：[clerk](https://dashboard.clerk.com/)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f0adbca531c4f9c925d5526c963a7f9~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2234&h=1316&s=115860&e=png&b=ffffff)

创建application，


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c76f0e6b1fc2445bbe688f639143320d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2230&h=1598&s=184147&e=png&b=f6f6f7)

创建成功后复制对应配置到`.env`即可

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29b3cde31be546b293f167eb0abf6a4c~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2284&h=1728&s=374632&e=png&b=fefefe)

然后同步数据库映射，使用`npx prisma migrate dev`

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d652097d07f4b1e91d58bd3730ccccb~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1956&h=1034&s=161843&e=png&b=282c34)

之后就可以启动项目查看效果了：
```shell
pnpm run dev
```

## 如何开发/贡献

项目使用`context`提供管理全局数据，主要目录：`app`、`actions`、`components`，app下面即包含的页面，`搭建页面`、`form列表页面`、`分享的页面`，components下面包含全局样式主题，和各种自定义的组件，以及shadcn默认安装的组件，其中最重要的即`components/fields`目录下，各种表单字段的组件，每个表单组件主要是`自身属性`，`DesignerComponent`拖拽到编辑画布里面的样式，`FormComponent`预览或者分享给别人能够进行表单提交等的时候的样式，`PropertiesComponent`右侧配置组件属性的组件，对于数据库的操作函数都放在`actions`目录下的

根据以上的提示，搞懂如何改动代码之后，把项目`fork`到你的帐号下，修改后，提交pr即可。

