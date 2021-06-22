const actions = { '骑士': 
{ '王权连': 
   { actions: 
      { action_1: '先锋剑',
        action_2: '暴乱剑',
        action_3: '王权剑',
        action_4: '沥血剑' },
     key_levels: [ 4, 26 ] },
  '沥血连': 
   { actions: 
      { action_1: '先锋剑',
        action_2: '暴乱剑',
        action_3: '沥血剑',
        action_4: '王权剑' },
     key_levels: [ 4, 54 ] },
  '王权赎罪连': 
   { actions: 
      { action_1: '先锋剑',
        action_2: '暴乱剑',
        action_3: '王权剑',
        action_4: '赎罪剑',
        action_5: '忠义之剑',
        action_6: '沥血剑' },
     key_levels: [ 4, 26, 76 ] },
  'AOE连': 
   { actions: { action_1: '全蚀斩', action_2: '日珥斩' },
     key_levels: [ 40 ] },
  '安魂-悔罪': { actions: { action_1: '安魂祈祷', action_2: '悔罪', action_3: '安魂祈祷' } } },
'战士': 
{ '绿斩连': 
   { actions: 
      { action_1: '重劈',
        action_2: '凶残裂',
        action_3: '暴风斩',
        action_4: '暴风碎' },
     key_levels: [ 4, 26 ] },
  '红斩连': 
   { actions: 
      { action_1: '重劈',
        action_2: '凶残裂',
        action_3: '暴风碎',
        action_4: '暴风斩' },
     key_levels: [ 4, 50 ] },
  '解放-锯爆': { actions: { action_1: '原初的解放', action_2: '裂石飞环', action_3: '原初的解放' } },
  'AOE连': 
   { actions: { action_1: '超压斧', action_2: '秘银暴风' },
     key_levels: [ 40 ] } },
'暗黑骑士': 
{ '基础连': 
   { actions: { action_1: '重斩', action_2: '吸收斩', action_3: '噬魂斩' },
     key_levels: [ 2, 26 ] },
  '血乱-拜年': { actions: { action_1: '血乱', action_2: '血溅', action_3: '血乱' } },
  '精雕-海胆': { actions: { action_1: '精雕怒斩', action_2: '吸血深渊', action_3: '20000' } },
  'AOE连': 
   { actions: { action_1: '释放', action_2: '刚魂' },
     key_levels: [ 72 ] } },
'绝枪战士': 
{ '基础连': 
   { actions: { action_1: '利刃斩', action_2: '残暴弹', action_3: '迅连斩' },
     key_levels: [ 4, 26 ] },
  '子弹连': 
   { actions: { action_1: '烈牙', action_2: '猛兽爪', action_3: '凶禽爪' },
     key_levels: [ 60, 60 ] },
  '无情-音速破': { actions: { action_1: '无情', action_2: '音速破', action_3: '无情' } },
  'AOE连': 
   { actions: { action_1: '恶魔切', action_2: '恶魔杀' },
     key_levels: [ 40 ] },
  'AOE+子弹': 
   { actions: { action_1: '恶魔切', action_2: '恶魔杀', action_3: '命运之环' },
     key_levels: [ 40, 72 ] } },
'龙骑士': 
{ '直刺连': 
   { actions: 
      { action_1: '精准刺',
        action_2: '贯通刺',
        action_3: '直刺',
        action_4: '樱花怒放',
        action_5: '龙牙龙爪' },
     key_levels: [ 4, 26 ] },
  '樱花连': 
   { actions: 
      { action_1: '精准刺',
        action_2: '开膛枪',
        action_3: '樱花怒放',
        action_4: '直刺',
        action_5: '龙尾大回旋' },
     key_levels: [ 18, 50 ] },
  '高跳-幻象冲': { actions: { action_1: '高跳', action_2: '幻象冲', action_3: '幻象冲预备' } },
  'AOE连': 
   { actions: { action_1: '死天枪', action_2: '音速刺', action_3: '山境酷刑' },
     key_levels: [ 62, 72 ] } },
'忍者': 
{ '普通连': 
   { actions: 
      { action_1: '双刃旋',
        action_2: '绝风',
        action_3: '旋风刃',
        action_4: '强甲破点突' },
     key_levels: [ 4, 26 ] },
  '风遁连': 
   { actions: 
      { action_1: '双刃旋',
        action_2: '绝风',
        action_3: '强甲破点突',
        action_4: '旋风刃' },
     key_levels: [ 4, 54 ] },
  '三段-断绝': { actions: { action_1: '梦幻三段', action_2: '断绝', action_3: '断绝预备' } },
  '天地人-命水': { actions: { action_1: '天地人', action_2: '命水', action_3: '水遁之术' } },
  '影牙-背刺': { actions: { action_1: '影牙', action_2: '攻其不备', action_3: '水遁之术' } },
  'AOE连': 
   { actions: { action_1: '血雨飞花', action_2: '八卦无刃杀' },
     key_levels: [ 52 ] } },
'武僧': 
{ '一键军体拳': 
   { actions: 
      { action_1: '连击',
        action_2: '正拳',
        action_3: '破碎拳',
        action_4: '双龙脚',
        action_5: '双掌打',
        action_6: '崩拳' } },
  '背身位': { actions: { action_1: '连击', action_2: '正拳', action_3: '破碎拳' } },
  '侧身位': { actions: { action_1: '双龙脚', action_2: '双掌打', action_3: '崩拳' } },
  '武僧AOE': { actions: { action_1: '破坏神冲', action_2: '四面脚', action_3: '地烈劲' } } },
'武士': 
{ '花连': 
   { actions: 
      { action_1: '刃风',
        action_2: '士风',
        action_3: '花车',
        action_4: '月光',
        action_5: '雪风',
        action_6: '明镜止水' },
     key_levels: [ 18, 40 ] },
  '月连': 
   { actions: 
      { action_1: '刃风',
        action_2: '阵风',
        action_3: '月光',
        action_4: '花车',
        action_5: '雪风',
        action_6: '明镜止水' },
     key_levels: [ 4, 30 ] },
  '雪连': 
   { actions: 
      { action_1: '刃风',
        action_2: '雪风',
        action_3: '月光',
        action_4: '花车',
        action_5: '明镜止水' },
     key_levels: [ 50 ] },
  'AOE花连': 
   { actions: 
      { action_1: '风雅',
        action_2: '樱花',
        action_3: '满月',
        action_4: '明镜止水' },
     key_levels: [ 45 ] },
  'AOE月连': 
   { actions: 
      { action_1: '风雅',
        action_2: '满月',
        action_3: '樱花',
        action_4: '明镜止水' },
     key_levels: [ 35 ] },
  '心眼-慈眼': { actions: { action_1: '心眼', action_2: '慈眼', action_3: '开眼' } },
  '震天-星眼': { actions: { action_1: '必杀剑·震天', action_2: '必杀剑·星眼', action_3: '开眼' } } },
'诗人': { '强力-辉煌': { actions: { action_1: '强力射击', action_2: '直线射击', action_3: '直线射击预备' } } },
'机工士': 
{ '机工子弹连': 
   { actions: { action_1: '分裂弹', action_2: '独头弹', action_3: '狙击弹' },
     key_levels: [ 2, 26 ] },
  '钻-锚': 
   { actions: { action_1: '钻头', action_2: '空气锚' },
     key_levels: [ 58 ] },
  '超荷-热冲击': { actions: { action_1: '超荷', action_2: '热冲击', action_3: '8000' } } },
'舞者': 
{ '标准舞步': { actions: { action_1: '标准舞步' } },
  '技巧舞步': { actions: { action_1: '技巧舞步' } },
  '逆-瀑泻': { actions: { action_1: '瀑泻', action_2: '逆瀑泻', action_3: '逆瀑泻预备' } },
  '坠-喷泉': { actions: { action_1: '喷泉', action_2: '坠喷泉', action_3: '坠喷泉预备' } },
  '升-风车': { actions: { action_1: '风车', action_2: '升风车', action_3: '升风车预备' } },
  '落-血雨': { actions: { action_1: '落刃雨', action_2: '落血雨', action_3: '落血雨预备' } },
  '扇舞序-急': { actions: { action_1: '扇舞·序', action_2: '扇舞·急', action_3: '扇舞·急预备' } },
  '扇舞破-急': { actions: { action_1: '扇舞·破', action_2: '扇舞·急', action_3: '扇舞·急预备' } } },
'黑魔法师': 
{ '火3-冰3': { actions: { action_1: '爆炎', action_2: '冰封' } },
  '冰4-火4': { actions: { action_1: '冰澈', action_2: '炽炎' } },
  '异言-绝望': { actions: { action_1: '异言', action_2: '绝望' } },
  '暴雷-火1': { actions: { action_1: '暴雷', action_2: '火炎' } },
  '火1-火苗': { actions: { action_1: '火炎', action_2: '爆炎', action_3: '火苗' } },
  '星灵-火3': { actions: { action_1: '星灵移位', action_2: '爆炎', action_3: '8000' } } },
'召唤师': 
{ '吸收-溃烂': { actions: { action_1: '能量吸收', action_2: '溃烂爆发', action_3: '以太超流' } },
  '抽取-核爆': { actions: { action_1: '能量抽取', action_2: '痛苦核爆', action_3: '以太超流' } },
  '鸟1-鸟2': { actions: { action_1: '毁荡', action_2: '迸裂', action_3: '灵泉' } },
  '一键附体': 
   { actions: 
      { action_1: '龙神附体',
        action_2: '死星核爆',
        action_3: '龙神召唤',
        action_4: '不死鸟附体',
        action_5: '龙神迸发' },
     key_levels: [ 58, 72 ] },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复生', action_3: '即刻咏唱' } } },
'赤魔法师': 
{ '魔三连': { actions: { action_1: '回刺', action_2: '交击斩', action_3: '连攻' } },
  '石-风': 
   { actions: { action_1: '赤飞石', action_2: '赤疾风' },
     key_levels: [ 70 ] },
  '火-雷': 
   { actions: { action_1: '赤火炎', action_2: '赤闪雷' },
     key_levels: [ 70 ] },
  '风-散碎': { actions: { action_1: '赤烈风', action_2: '散碎', action_3: '(连续|即刻)咏唱' } },
  '雷-散碎': { actions: { action_1: '赤震雷', action_2: '散碎', action_3: '(连续|即刻)咏唱' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '赤复活', action_3: '即刻咏唱' } } },
'白魔法师': { '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复活', action_3: '即刻咏唱' } } },
'学者': 
{ '以太-吸收': { actions: { action_1: '以太超流', action_2: '能量吸收', action_3: '以太超流' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复生', action_3: '即刻咏唱' } } },
'占星师': 
{ '抽卡-重抽': { actions: { action_1: '抽卡', action_2: '重抽' } },
  '出卡-小奥秘卡': { actions: { action_1: '出卡', action_2: '小奥秘卡' } },
  '自动发卡(测试)': { actions: { action_1: '无需设置位置，需自行写宏，详见说明' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '生辰', action_3: '即刻咏唱' } } },
'其他': { '重置': { actions: null } } }

 
const special = { '石-风': 'redmage.xml',
'火-雷': 'redmage.xml',
'魔三连': 'redmage2.xml',
'王权赎罪连': 'paladin.xml',
'直刺连': 'dragoon.xml',
'樱花连': 'dragoon.xml',
'花连': 'samurai3.xml',
'月连': 'samurai3.xml',
'雪连': 'samurai.xml',
'AOE花连': 'samurai2.xml',
'AOE月连': 'samurai2.xml',
'背身位': 'monk.xml',
'侧身位': 'monk.xml',
'武僧AOE': 'monk.xml',
'一键军体拳': 'monk2.xml',
'火3-冰3': 'blackmage.xml',
'冰4-火4': 'blackmage.xml',
'异言-绝望': 'blackmage.xml',
'暴雷-火1': 'blackmage.xml',
'一键附体': 'summoner.xml',
'标准舞步': 'dancer.xml',
'技巧舞步': 'dancer2.xml',
'机工子弹连': 'mechanist.xml',
'抽卡-重抽': 'astrologian.xml',
'出卡-小奥秘卡': 'astrologian2.xml',
'自动发卡(测试)': 'ast_auto_play.xml' }



const changeWithBuff = ['风-散碎', '雷-散碎', '安魂-悔罪', '高跳-幻象冲',
 '强力-辉煌', '即刻复活', '扇舞序-急', '扇舞破-急' ,'火1-火苗', 
 '吸收-溃烂', '鸟1-鸟2', '附体-核爆', '以太-吸收', '三段-断绝', '天地人-命水',
 '影牙-背刺', '震天-星眼', '心眼-慈眼', '无情-音速破', '解放-锯爆', '血乱-拜爆',
 '抽取-核爆',  '逆-瀑泻', '坠-喷泉', '升-风车', '落-血雨'] 

const changeWithCD = ['超荷-热冲击', '星灵-火3', '抽卡-重抽', '精雕-海胆']