# 最终幻想14一键连击生成器
FFXIV one button combo based on Triggernometry and PostNamazu
### 地址: [[点击这里](https://ffxiv-one-button-combo.vercel.app/)] [[或者这里](https://yuee98.github.io/FFXIVOneButtonCombo/)]
****


## 功能
将连击或有绑定关系的多个技能放置在同一个键位



## 特点介绍
- **低耦合度，所有按键独立设置，仅修改当前按键，可自行选择需要使用的按键**
- 基于鲶鱼精邮差，技能正常进入队列，且不会打断游戏内宏的运行
- 所有按键均使用/hotbar set放置，无需占用额外按键栏
- 一定程度的异常处理
- 按键绑定逻辑基于满级正常循环



## 使用方法
0. 安装ACT，
[Triggernometry](https://github.com/paissaheavyindustries/Triggernometry)
和
[PostNamazu](https://github.com/Natsukage/PostNamazu/) ([鲶鱼精邮差](https://nga.178.com/read.php?tid=19724323))
插件

1. [[点击这里](https://ffxiv-one-button-combo.vercel.app/)] [[或者这里](https://yuee98.github.io/FFXIVOneButtonCombo/)]

2. 选择职业和连击

    ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/选择.png)

3. 选择设置该连击的键位和操作方式，点击生成

    ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/设置.png)

4. 复制到剪切板，导入Triggernometry

    ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/导入.png)



## 关于复位
为防止意外情况，建议备份初始热键栏，出现问题时及时复位

游戏内热键栏复制与职业绑定，不怕麻烦的话可以对每个职业写一个复位宏，或者使用该触发器

使用方法：
1. 选择 “其他”-“重置”
2. 选择操作方式

    ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/重置.png)
3. 游戏内编写宏，格式为
    > /e reset 备份的热键栏->当前热键栏
    
    如 
    > /e reset 8->1
    >
    > /e reset 7->2

    按下该宏时，触发器会自动将当前职业热键栏8复制到热键栏1，热键栏7复制到热键栏2


## 职业说明
### 骑士
- 基础连击与AOE连击
- 一键王权-赎罪连，支持拆赎罪循环
- 安魂期间安魂自动替换为悔罪

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/骑士.gif)

### 战士
- 基础连击与AOE连击
- 解放期间解放自动替换为锯爆

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/战士.gif)

### 黑骑
- 基础连击与AOE连击
- 血乱期间解放自动替换为拜年剑法

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/黑骑.gif)

### 绝枪
- 基础连击、子弹连与AOE连击
- 无情期间无情自动替换为音速破

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/枪刃.gif)

### 龙骑
- 直刺连、樱花连与AOE连击
- 断龙血时可以123循环不会卡键
- 高跳后替换为幻象冲

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/龙骑.gif)

### 忍者
- 基础连击与AOE连击
- 三段后替换为断绝
- 水遁期间替换天地人为命水、影牙为背刺

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/忍者.gif)

### 武僧
- 背身位、侧身位与AOE连击
- 震脚、演武时替换为爆发技能(连击、双龙、双掌、破碎拳)

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/武僧.gif)

### 武士
- 雪、月、花三连与AOE连击
- 明镜时替换为雪、月、花
- 触发心眼后替换心眼为慈眼、震天为星眼

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/武士.gif)

### 诗人
- 触发辉煌时自动替换

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/诗人.gif)

### 机工
- 普通连击
- 钻头-空气锚二连
- 超荷时替换超荷为热冲击

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/机工.gif)

### 舞者
- 连击不替换
- 触发时自动替换 (SR->S1, S3->S2, AR->A1, A3->A2, F3->F1, F3->F2)
- 一键跳舞

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/舞者.gif)

### 黑魔
- 使用冰3、玄冰后替换为冰状态技能
- 使用火3、核爆后替换为火状态技能
- 触发火苗时替换火1为火3
- 支持星灵循环，使用星灵后替换星灵为火3

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/黑魔.gif)

### 召唤
- 一键附体，互锁的技能全部一个键位：附体-核爆-巴哈-喷-不死鸟-喷
- 鸟1鸟2自动替换
- 以太期间替换吸收为溃烂，抽取替换为痛苦核爆
- 即刻复活
- ！不死鸟期间以鸟1收尾时，按键会变为崩裂直至灵泉状态消失

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/召唤0.gif)  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/召唤1.gif)

### 赤魔
- 魔三连
- 根据顺发状态自动选择石-风、火-雷、风雷AOE-散碎
- 即刻复活

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/赤魔.gif)

### 白魔
- 即刻复活

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/白魔.gif)

### 学者
- 即刻复活
- 以太期间替换以太为吸收

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/学者.gif)

### 占星
- 即刻复活
- 抽卡后10s内替换为重抽

  ![image](https://cdn.jsdelivr.net/gh/Yuee98/FFXIVOneButtonCombo@0.1/image/占星.gif)


