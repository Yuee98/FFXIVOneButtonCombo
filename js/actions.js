const actions = { '骑士': 
{ '王权连': 
   { action_1: '先锋剑',
     action_2: '暴乱剑',
     action_3: '王权剑',
     action_4: '沥血剑' },
  '沥血连': 
   { action_1: '先锋剑',
     action_2: '暴乱剑',
     action_3: '沥血剑',
     action_4: '王权剑' },
  'AOE连': { action_1: '全蚀斩', action_2: '日珥斩' },
  '安魂-悔罪': { action_1: '安魂祈祷', action_2: '悔罪', action_3: '安魂祈祷' },
  '赎罪-王权': { action_1: '王权剑', action_2: '赎罪剑', action_3: '忠义之剑' } },
'战士': 
{ '绿斩连': 
   { action_1: '重劈',
     action_2: '凶残裂',
     action_3: '暴风斩',
     action_4: '暴风碎' },
  '红斩连': 
   { action_1: '重劈',
     action_2: '凶残裂',
     action_3: '暴风碎',
     action_4: '暴风斩' },
  'AOE连': { action_1: '超压斧', action_2: '秘银暴风' } },
'暗黑骑士': 
{ '基础连': { action_1: '重斩', action_2: '吸收斩', action_3: '噬魂斩' },
  'AOE连': { action_1: '释放', action_2: '刚魂' } },
'绝枪战士': 
{ '基础连': { action_1: '利刃斩', action_2: '残暴弹', action_3: '迅连斩' },
  '子弹连': { action_1: '烈牙', action_2: '猛兽爪', action_3: '凶禽爪' },
  'AOE连': { action_1: '恶魔切', action_2: '恶魔杀' },
  'AOE-子弹': { action_1: '恶魔切', action_2: '恶魔杀', action_3: '命运之环' } },
'龙骑士': 
{ '直刺连': 
   { action_1: '精准刺',
     action_2: '贯通刺',
     action_3: '直刺',
     action_4: '樱花怒放' },
  '樱花连': 
   { action_1: '精准刺',
     action_2: '开膛枪',
     action_3: '樱花怒放',
     action_4: '直刺' },
  '龙45': { action_1: '龙牙龙爪', action_2: '龙尾大回旋' },
  '高跳-幻象冲': { action_1: '高跳', action_2: '幻象冲', action_3: '幻象冲预备' },
  'AOE连': { action_1: '死天枪', action_2: '音速刺', action_3: '山境酷刑' } },
'忍者': 
{ '普通连': 
   { action_1: '双刃旋',
     action_2: '绝风',
     action_3: '旋风刃',
     action_4: '强甲破点突' },
  '风遁连': 
   { action_1: '双刃旋',
     action_2: '绝风',
     action_3: '强甲破点突',
     action_4: '旋风刃' },
  'AOE连': { action_1: '血雨飞花', action_2: '八卦无刃杀' } },
'武僧': 
{ '背身位': { action_1: '连击', action_2: '正拳', action_3: '破碎拳' },
  '侧身位': { action_1: '双龙脚', action_2: '双掌打', action_3: '崩拳' },
  '武僧AOE': { action_1: '破坏神冲', action_2: '四面脚', action_3: '地烈劲' },
  '震脚-双掌打': { action_1: '震脚', action_2: '双掌打', action_3: '震脚' } },
'武士': 
{ '花连': 
   { action_1: '刃风',
     action_2: '士风',
     action_3: '花车',
     action_4: '月光',
     action_5: '雪风',
     action_6: '明镜止水' },
  '月连': 
   { action_1: '刃风',
     action_2: '阵风',
     action_3: '月光',
     action_4: '花车',
     action_5: '雪风',
     action_6: '明镜止水' },
  '雪连': 
   { action_1: '刃风',
     action_2: '雪风',
     action_3: '月光',
     action_4: '花车',
     action_5: '明镜止水' },
  'AOE花连': 
   { action_1: '风雅',
     action_2: '樱花',
     action_3: '满月',
     action_4: '明镜止水' },
  'AOE月连': 
   { action_1: '风雅',
     action_2: '满月',
     action_3: '樱花',
     action_4: '明镜止水' } },
'诗人': { '强力-辉煌': { action_1: '强力射击', action_2: '直线射击', action_3: '直线射击预备' } },
'机工士': 
{ '普通连': { action_1: '热分裂弹', action_2: '热独头弹', action_3: '热狙击弹' },
  '钻-锚': { action_1: '钻头', action_2: '空气锚' },
  '超荷-热冲击': { action_1: '超荷', action_2: '热冲击' } },
'赤魔法师': 
{ '魔三连': { action_1: '魔回刺', action_2: '魔交击斩', action_3: '魔连攻' },
  '石-风': { action_1: '赤飞石', action_2: '赤疾风' },
  '火-雷': { action_1: '赤火炎', action_2: '赤闪雷' },
  '风-散碎': { action_1: '赤烈风', action_2: '散碎', action_3: '连续咏唱' },
  '雷-散碎': { action_1: '赤震雷', action_2: '散碎', action_3: '连续咏唱' } },
'其他': { '重置': { pos_back: 8, pos_current: 1 } } }

 
const special = { '石-风': 'redmage.xml',
'火-雷': 'redmage.xml',
'魔三连': 'redmage2.xml',
'超荷-热冲击': 'machinist.xml',
'赎罪-王权': 'paladin.xml',
'直刺连': 'dragoon.xml',
'樱花连': 'dragoon.xml',
'龙45': 'dragoon2.xml',
'花连': 'samurai3.xml',
'月连': 'samurai3.xml',
'雪连': 'samurai.xml',
'AOE花连': 'samurai2.xml',
'AOE月连': 'samurai2.xml',
'背身位': 'monk.xml',
'侧身位': 'monk.xml',
'武僧AOE': 'monk2.xml' }



const changeWithBuff = ['风-散碎', '雷-散碎', '安魂-悔罪', '高跳-幻象冲', '强力-辉煌', '震脚-双掌打'] 