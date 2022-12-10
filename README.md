# CT超级社区

## 简介

CT超级社区是一款基于环信 IM 打造的类 Discord 实时社区应用场景方案，支持社区（Server）、频道（Channel） 和子区（Thread） 三层结构。一个 App 下可以有多个社区，同时支持陌生人/好友单聊。用户可创建和管理自己的社区，在社区中设置和管理频道将一个话题下的子话题进行分区，在频道中根据感兴趣的某条消息发起子区讨论，实现万人实时群聊，满足超大规模用户的顺畅沟通需求。

CT超级社区基于基础的实时聊天场景以外，还接入了一个自研的插件系统功能。在插件系统中，用户可以注册成为开发者，在插件平台上提交插件信息以及入口等信息，待系统管理员审核过后即可上线。然后各大社区创建者/管理员都可以在插件平台中搜索插件，为自己的社区安装插件，通过丰富的插件功能可以提升社区体验。但由于时间问题，目前插件系统提供对外的开发功能上并不是很多。在设计上也不算很完美。

然后我们也设计了几款插件，通过实际功能来验证我们的想法是可行的。目前实现的插件有：投票、社区签到、打卡分享、机器人。下面再作详述。


## 项目结构

```
.
├── README.md
├── config
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
├── scripts
├── src
│   ├── App.js
│   ├── App.less
│   ├── App.test.js
│   ├── assets //静态资源
│   ├── components //基础组件
│   ├── index.css
│   ├── index.js
│   ├── layout //页面入口
│   │   ├── Channel //频道相关页面
│   │   │   ├── InviteUser //邀请用户加入频道
│   │   │   ├── SideBar // 频道列表及当前server展示页面
│   │   │   └──  index.js //频道页面入口
│   │   ├── Contacts
│   │   │   ├── SideBar 联系人列表页面
│   │   │   └──  index.js //联系人页面入口
│   │   ├── Main
│   │   │   ├── ScrollBar //社区列表页面
│   │   │   ├── ServerForm //创建、编辑社区
│   │   │   └── index.js //主页面入口
│   │   ├── Server
│   │   │   ├── SideBar //广场菜单页面
│   │   │   └──  index.js //广场页面入口
│   │   └── UserInfo
│   │       ├── SideBar //用户信息页面
│   │       └──  index.js //用户信息页面入口
│   ├── routes //路由
│   ├── setupTests.js
│   ├── store //数据管理
│   │   └── models
│   │       ├── app.js //app 数据管理
│   │       ├── channel.js //频道数据管理
│   │       ├── contact.js //联系人数据管理
│   │       ├── server.js //社区数据管理
│   │       └── thread.js //子区数据管理
│   ├── utils sdk及公用方法
│   └── views //页面组件
│       ├── Channel
│       │   ├── components 频道聊天页面组件
│       │   └── index.js //频道聊天页面
│       ├── Chat
│       │   ├── components //联系人聊天页面组件
│       │   └── index.js //联系人聊天页面
│       ├── ContactsOperation
│       │   └── index.js //联系人页面
│       ├── Login
│       │   └── login.js //登录页面
│       ├── ServerSquare
│       │   └── index.js //广场页面
│       ├── Thread
│       │   ├── components //子区页组件
│       │   └── index.js //子区页面
│       └── UserInfo
│           └── index.js //更新用户信息

```


## 运行项目

1. 克隆项目
```bash
git clone https://github.com/Circle-Web/Circle-Demo-Web.git
```

2. 安装依赖
```bash
pnpm install
```

3. 设置appKey
- 在`/src/utils/WebIM.js`文件中设置你的`appKey`。

4. 运行项目
```bash
npm start
```

## 插件系统项目地址
[插件系统web端和server端](https://github.com/Circle-Web/app-server-list)

## 插件项目地址
[各个插件项目](https://github.com/Circle-Web/app-server-list)

## 项目介绍
CT超级社区已支持部分插件功能，
### 社区打卡分享

### 投票功能

### 社区签到

### 机器人

## 代码许可
CT超级社区项目遵守 MIT 许可证。