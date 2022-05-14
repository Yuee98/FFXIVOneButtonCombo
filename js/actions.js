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
  '解放-崩裂': { actions: { action_1: '原初的解放', action_2: '蛮荒崩裂', action_3: '原初的解放' } },
  'AOE连': 
   { actions: { action_1: '超压斧', action_2: '秘银暴风' },
     key_levels: [ 40 ] } },
'暗黑骑士': 
{ '基础连': 
   { actions: { action_1: '重斩', action_2: '吸收斩', action_3: '噬魂斩' },
     key_levels: [ 2, 26 ] },
  '血乱-拜年': { actions: { action_1: '血乱', action_2: '血溅', action_3: '血乱' } },
  'AOE连': 
   { actions: { action_1: '释放', action_2: '刚魂' },
     key_levels: [ 72 ] } },
'绝枪战士': 
{ '基础连': 
   { actions: { action_1: '利刃斩', action_2: '残暴弹', action_3: '迅连斩' },
     key_levels: [ 4, 26 ] },
  '子弹连': 
   { actions: 
      { action_1: '烈牙', 
        action_2: '续剑', 
        action_3: '撕喉预备', 
        action_4: '裂膛预备', 
        action_5: '穿目预备' } },
  '爆发击-超高速': { actions: { action_1: '爆发击', action_2: '超高速', action_3: '超高速预备' } },
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
        action_5: '龙牙龙爪',
        action_6: '龙眼雷电',
        action_7: '龙牙龙爪预备',
        action_8: '苍穹刺',
        action_9: '樱花缭乱' },
     key_levels: [ 4, 26 ] },
  '樱花连': 
   { actions: 
      { action_1: '精准刺',
        action_2: '开膛枪',
        action_3: '樱花怒放',
        action_4: '直刺',
        action_5: '龙尾大回旋',
        action_6: '龙眼雷电',
        action_7: '龙尾大回旋预备',
        action_8: '樱花缭乱',
        action_9: '苍穹刺' },
     key_levels: [ 18, 50 ] },
  '高跳-幻象冲': { actions: { action_1: '高跳', action_2: '幻象冲', action_3: '幻象冲预备' } },
  '龙骑AOE': 
   { actions: { action_1: '死天枪', action_2: '音速刺', action_3: '山境酷刑', action_4: '龙眼苍穹' },
     key_levels: [ 62, 72 ] } },
'忍者': 
{ '普通连': 
   { actions: 
      { action_1: '双刃旋',
        action_2: '绝风',
        action_3: '旋风刃',
        action_4: '强甲破点突',
        action_5: '月影雷兽牙',
        action_6: '月影雷兽预备' },
     key_levels: [ 4, 26 ] },
  '风遁连': 
   { actions: 
      { action_1: '双刃旋',
        action_2: '绝风',
        action_3: '强甲破点突',
        action_4: '旋风刃',
        action_5: '月影雷兽爪',
        action_6: '月影雷兽预备' },
     key_levels: [ 4, 54 ] },
  '天地人-命水': { actions: { action_1: '天地人', action_2: '命水', action_3: '水遁之术' } },
  'AOE连': 
   { actions: { action_1: '血雨飞花', action_2: '八卦无刃杀' },
     key_levels: [ 52 ] },
  '天之印': { actions: { action_1: '天之印', action_2: '忍术', action_3: '结印' } },
  '地之印': { actions: { action_1: '地之印', action_2: '忍术', action_3: '结印' } },
  '人之印': { actions: { action_1: '人之印', action_2: '忍术', action_3: '结印' } } },
'武僧': 
{ '武僧-基础(※)': 
   { actions: 
      { action_1: '连击效果提高',
      action_2: '破碎拳',
      action_3: '功力' } },
   '※军体拳-连击': 
   { actions: 
      { action_1: '连击',
        action_2: '正拳',
        action_3: '破碎拳',
        action_4: '双龙脚',
        action_5: '双掌打',
        action_6: '崩拳',
        action_7: '魔猿形',
        action_8: '盗龙形',
        action_9: '猛豹形',
        action_10: '震脚',
        action_11: '无相身形',
        action_12: 7000 } },
   '※军体拳-演武': 
   { actions: 
      { action_1: '震脚',
         action_2: '正拳',
         action_3: '双掌打',
         action_4: '演武',
         action_5: '无相身形',
         action_6: 7000,
         action_7: 'timeTwinSnakes' } },
   '※军体拳-星导脚': 
   { actions: 
      { action_1: '震脚',
         action_2: '崩拳',
         action_3: '破碎拳',
         action_4: '六合星导脚',
         action_5: '无相身形',
         action_6: 7000,
         action_7: 'timeDemolish' } },
   '震脚-必杀技': 
   { actions: 
      { action_1: '震脚',
         action_2: '必杀技'} },
  '(旧)背身位': 
   { actions: 
      { action_1: '连击',
        action_2: '正拳',
        action_3: '破碎拳',
        action_4: '魔猿形',
        action_5: '盗龙形',
        action_6: '猛豹形',
        action_7: '震脚',
        action_8: '无相身形',
        action_9: '连击' } },
  '(旧)侧身位': 
   { actions: 
      { action_1: '双龙脚',
        action_2: '双掌打',
        action_3: '崩拳',
        action_4: '魔猿形',
        action_5: '盗龙形',
        action_6: '猛豹形',
        action_7: '震脚',
        action_8: '无相身形',
        action_9: '双龙脚' } },
  '武僧AOE': 
   { actions: 
      { action_1: '破坏神冲',
        action_2: '四面脚',
        action_3: '地烈劲',
        action_4: '魔猿形',
        action_5: '盗龙形',
        action_6: '猛豹形',
        action_7: '震脚',
        action_8: '无相身形',
        action_9: '地烈劲' } } },
'武士': 
{ '花连': 
   { actions: 
      { action_1: '刃风',
        action_2: '士风',
        action_3: '花车',
        action_4: '月光',
        action_5: '雪风',
        action_6: '明镜止水',
        action_7: '叶隐' },
     key_levels: [ 18, 40, 68 ] },
  '月连': 
   { actions: 
      { action_1: '刃风',
        action_2: '阵风',
        action_3: '月光',
        action_4: '花车',
        action_5: '雪风',
        action_6: '明镜止水',
        action_7: '叶隐' },
     key_levels: [ 4, 30, 68 ] },
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
        action_4: '明镜止水',
        action_5: '风光' },
     key_levels: [ 45 ] },
  'AOE月连': 
   { actions: 
      { action_1: '风雅',
        action_2: '满月',
        action_3: '樱花',
        action_4: '明镜止水',
        action_5: '风光' },
     key_levels: [ 35 ] },
  '默想-照破': { actions: { action_1: '默想', action_2: '照破' } } },
'钐镰客':
{ '镰刀-基础(※)': 
   { actions: 
      { action_1: '绞决', 
        action_2: '缢杀', 
        action_3: '绞决效果提高', 
        action_4: '缢杀效果提高' }},
   '基础连': { actions: { action_1: '切割', action_2: '增盈切割', action_3: '地狱切割' },
   key_levels: [ 5, 30 ] },
   'AOE连': { actions: { action_1: '旋转钐割', action_2: '噩梦钐割' },
   key_levels: [ 45 ] },
   '※绞决-缢杀-隐匿挥割': 
   { actions: 
      { action_1: '绞决', 
        action_2: '缢杀', 
        action_3: '绞决效果提高', 
        action_4: '缢杀效果提高', 
        action_5: '虚无收割效果提高', 
        action_6: '交错收割效果提高', 
        action_7: '隐匿挥割', 
        action_8: '妖异之镰',
        action_9: '夜游魂' }},
   '※绞决-缢杀-暴食': 
   { actions: 
      { action_1: '绞决', 
         action_2: '缢杀', 
         action_3: '绞决效果提高', 
         action_4: '缢杀效果提高', 
         action_5: '虚无收割效果提高', 
         action_6: '交错收割效果提高', 
         action_7: '暴食', 
         action_8: '妖异之镰',
         action_9: '夜游魂' }},
   '束缚挥割-断首': { actions: { action_1: '束缚挥割', action_2: '断首', action_3: '妖异之镰', action_4: '夜游魂' }},
},

'诗人': 
{ '强力-辉煌': { actions: { action_1: '强力射击', action_2: '直线射击', action_3: '直线射击预备' } },
//   '歌曲循环': 
//    { actions: 
//       { action_1: '放浪神的小步舞曲',
//         action_2: '贤者的叙事谣',
//         action_3: '军神的赞美歌',
//         action_4: '完美音调' } } 
      },
'机工士': 
{ '机工子弹连': 
   { actions: 
      { action_1: '分裂弹',
        action_2: '独头弹',
        action_3: '狙击弹',
        action_4: '热分裂弹',
        action_5: '热独头弹',
        action_6: '热狙击弹' },
     key_levels: [ 2, 26 ] },
  '钻-锚': 
   { actions: { action_1: '钻头', action_2: '空气锚' },
     key_levels: [ 58 ] },
  '超荷-热冲击': { actions: { action_1: '超荷', action_2: '热冲击' } },
  '散射-自动弩': { actions: { action_1: '散射', action_2: '自动弩' } },
  '炮塔-自爆': { actions: { action_1: '后式自走人偶', action_2: '超档后式人偶' } } },
'舞者': 
{ '标准舞步': 
   { actions: 
      { action_1: '标准舞步',
        action_2: '瀑泻',
        action_3: '喷泉',
        action_4: '逆瀑泻',
        action_5: '坠喷泉' } },
  '技巧舞步': 
   { actions: 
      { action_1: '技巧舞步',
        action_2: '瀑泻',
        action_3: '喷泉',
        action_4: '逆瀑泻',
        action_5: '坠喷泉' } },
  '逆-瀑泻': { actions: { action_1: '瀑泻', action_2: '逆瀑泻', action_3: '对称投掷' } },
  '坠-喷泉': { actions: { action_1: '喷泉', action_2: '坠喷泉', action_3: '非对称投掷' } },
  '升-风车': { actions: { action_1: '风车', action_2: '升风车', action_3: '对称投掷' } },
  '落-血雨': { actions: { action_1: '落刃雨', action_2: '落血雨', action_3: '非对称投掷' } },
  '扇舞序-急': { actions: { action_1: '扇舞·序', action_2: '扇舞·急', action_3: '扇舞·急预备' } },
  '扇舞破-急': { actions: { action_1: '扇舞·破', action_2: '扇舞·急', action_3: '扇舞·急预备' } },
  '百花-终': { actions: { action_1: '百花争艳', action_2: '扇舞·终', action_3: '扇舞·终' } },
  '探戈-流星舞': { actions: { action_1: '进攻之探戈', action_2: '流星舞', action_3: '流星舞预备' } } },
'黑魔法师': 
{ '(冰)火3-(火)冰3': { actions: { action_1: '爆炎', action_2: '冰封', action_3: '冰封' } },
  '(冰)冰2-(火)火2': { actions: { action_1: '冰冻', action_2: '烈炎', action_3: '烈炎' } },
  '(冰)冰4-(火)火4-绝望': { actions: { action_1: '冰澈', action_2: '炽炎', action_3: '魔罩', action_4: '绝望', action_5: '4000'  } },
  '(冰)灵极魂-(火)绝望': { actions: { action_1: '灵极魂', action_2: '绝望', action_3: '绝望' } },
  '(冰)玄冰-(火)核爆': { actions: { action_1: '玄冰', action_2: '核爆', action_3: '核爆' } },
  '(冰)冰1-(火)火1-火苗': { actions: { action_1: '冰结', action_2: '火炎', action_3: '冰结', action_4: '爆炎', action_5: '火苗' } } 
},
'召唤师': 
{ '毁灭-宝石耀': { actions: { action_1: '毁灭', action_2: '宝石耀' } },
  '迸裂-宝石辉-星极超流': 
   { actions: 
      { action_1: '迸裂',
        action_2: '宝石辉',
        action_3: '星极超流',
        action_4: '山崩预备',
        action_5: '螺旋气流预备',
        action_6: '深红旋风预备',
        action_7: '深红强袭' } },
   '三神-龙神-迸发': 
   { actions: 
      { action_1: '龙神召唤',
         action_2: '龙神迸发',
         action_3: '黄宝石召唤',
         action_4: '红宝石召唤',
         action_5: '绿宝石召唤' } },
   '毁绝-星极超流': { actions: { action_1: '毁绝', action_2: '星极超流' } },
   '龙神-迸发': { actions: { action_1: '龙神召唤', action_2: '龙神迸发' } },
   '吸收-溃烂': { actions: { action_1: '能量吸收', action_2: '溃烂爆发', action_3: '以太超流' } },
   '抽取-核爆': { actions: { action_1: '能量抽取', action_2: '痛苦核爆', action_3: '以太超流' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复生', action_3: '即刻咏唱' } } },
'赤魔法师': 
{ '赤魔-基础(※)': 
   { actions: 
      { action_1: '连续咏唱',
        action_2: '即刻咏唱',
        action_3: '促进', } },
   '魔三连': 
   { actions: 
      { action_1: '回刺',
        action_2: '交击斩',
        action_3: '连攻',
        action_4: '魔回刺',
        action_5: '魔交击斩',
        action_6: '魔连攻' } },
  '※石-风': 
   { actions: 
      { action_1: '赤飞石',
        action_2: '赤疾风',
        action_3: '摇荡',
        action_4: '赤核爆',
        action_5: '赤神圣',
        action_6: '连续咏唱',
        action_7: '即刻咏唱',
        action_8: '促进',
        action_9: '焦热',
        action_10: '决断',
        action_11: '赤疾风' },
     key_levels: [ 70, 80, 90 ] },
  '※火-雷': 
   { actions: 
      { action_1: '赤火炎',
        action_2: '赤闪雷',
        action_3: '摇荡',
        action_4: '赤核爆',
        action_5: '赤神圣',
        action_6: '连续咏唱',
        action_7: '即刻咏唱',
        action_8: '促进',
        action_9: '焦热',
        action_10: '决断',
        action_11: '赤闪雷' },
     key_levels: [ 68, 80, 90 ] },
  '※AOE风-散碎': 
  { actions: 
     { action_1: '赤烈风',
       action_2: '散碎',
       action_3: '散碎',
       action_4: '赤核爆',
       action_5: '赤神圣',
       action_6: '连续咏唱',
       action_7: '即刻咏唱',
       action_8: '促进',
       action_9: '焦热',
       action_10: '决断',
       action_11: '赤烈风' },
    key_levels: [ 70, 80, 90 ] },
   //  { actions: { action_1: '赤烈风', action_2: '散碎', action_3: '(连续|即刻)咏唱' } },
  '※AOE雷-散碎': 
  { actions: 
     { action_1: '赤震雷',
       action_2: '散碎',
       action_3: '散碎',
       action_4: '赤核爆',
       action_5: '赤神圣',
       action_6: '连续咏唱',
       action_7: '即刻咏唱',
       action_8: '促进',
       action_9: '焦热',
       action_10: '决断',
       action_11: '赤震雷' },
    key_levels: [ 68, 80, 90 ] },
   //  { actions: { action_1: '赤震雷', action_2: '散碎', action_3: '(连续|即刻)咏唱' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '赤复活', action_3: '即刻咏唱' } } },
'白魔法师': { '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复活', action_3: '即刻咏唱' } } },
'学者': 
{ '以太-吸收': { actions: { action_1: '以太超流', action_2: '能量吸收', action_3: '以太超流' } },
  '祥光-慰藉': { actions: { action_1: '异想的祥光', action_2: '慰藉' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复生', action_3: '即刻咏唱' } } },
'占星师': 
{ 
//   '抽卡-重抽': { actions: { action_1: '抽卡', action_2: '重抽' } },
//   '出卡-小奥秘卡': { actions: { action_1: '出卡', action_2: '小奥秘卡' } },
//   '自动发卡(测试)': 
//    { actions: 
//       { action_1: '出卡',
//         action_2: '小奥秘卡',
//         action_3: '太阳神之衡',
//         action_4: '放浪神之箭',
//         action_5: '战争神之枪',
//         action_6: '世界树之干',
//         action_7: '河流神之瓶',
//         action_8: '建筑神之塔',
//         action_9: '王冠之领主',
//         action_10: '王冠之贵妇' } },
  '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '生辰', action_3: '即刻咏唱' } } },
'贤者': { '即刻复活': { actions: { action_1: '即刻咏唱', action_2: '复苏', action_3: '即刻咏唱' } } },
'其他': { '重置': { actions: null } } }

const base = { 
   '赤魔-基础(※)': 'redmage_var.xml',
   '镰刀-基础(※)': 'reaper_var.xml',
   '武僧-基础(※)': 'monk_var.xml',
}
 
const special = { 
'※石-风': 'redmage_base.xml',
'※火-雷': 'redmage_base.xml',
'※AOE风-散碎': 'redmage_base.xml',
'※AOE雷-散碎': 'redmage_base.xml',
'魔三连': 'redmage_3x.xml',
'王权赎罪连': 'paladin.xml',
'子弹连': 'gunbreaker.xml',
'直刺连': 'dragoon.xml',
'樱花连': 'dragoon.xml',
'龙骑AOE': 'dragoon_aoe.xml',
'花连': 'samurai_ka.xml',
'月连': 'samurai_getsu.xml',
'雪连': 'samurai_setsu.xml',
'AOE花连': 'samurai_aoe.xml',
'AOE月连': 'samurai_aoe.xml',
'默想-照破': 'samurai_meditate.xml',
'(旧)背身位': 'monk.xml',
'(旧)侧身位': 'monk.xml',
'武僧AOE': 'monk.xml',
'※军体拳-连击': 'monk_aio.xml',
'※军体拳-星导脚': 'monk_aux.xml',
'※军体拳-演武': 'monk_aux.xml',
'震脚-必杀技': 'monk_blitz.xml',
'※绞决-缢杀-隐匿挥割': 'reaper_buff.xml',
'※绞决-缢杀-暴食': 'reaper_buff.xml',
'束缚挥割-断首': 'reaper_buff_aoe.xml',
'(冰)火3-(火)冰3': 'blackmage_base.xml',
'(冰)冰2-(火)火2': 'blackmage_base.xml',
'(冰)玄冰-(火)核爆': 'blackmage_base.xml',
'(冰)灵极魂-(火)绝望': 'blackmage_base.xml',
'(冰)冰1-(火)火1-火苗': 'blackmage_buff.xml',
'(冰)冰4-(火)火4-绝望': 'blackmage_mp.xml',
'毁灭-宝石耀': 'summoner_gcd.xml',
'迸裂-宝石辉-星极超流': 'summoner_aoe.xml',
'龙神-迸发': 'summoner_baha.xml',
'毁绝-星极超流': 'summoner_baha.xml',
'三神-龙神-迸发':  'summoner_tri.xml',
'标准舞步': 'dancer_std.xml',
'技巧舞步': 'dancer_tech.xml',
'机工子弹连': 'machinist.xml',
'超荷-热冲击': 'machinist_heat.xml',
'散射-自动弩': 'machinist_heat.xml',
'炮塔-自爆': 'machinist_battery.xml',
'抽卡-重抽': 'astrologian.xml',
'出卡-小奥秘卡': 'astrologian2.xml',
'自动发卡(测试)': 'ast_auto_play.xml',
'歌曲循环': 'bard.xml',
'普通连': 'ninja_3x1.xml',
'风遁连': 'ninja_3x1.xml',
'天之印': 'ninja_mudra.xml',
'地之印': 'ninja_mudra.xml',
'人之印': 'ninja_mudra.xml',
'祥光-慰藉': 'scholar.xml' }



const changeWithBuff = ['安魂-悔罪', '高跳-幻象冲',
 '强力-辉煌', '即刻复活', '扇舞序-急', '扇舞破-急' , 
 '吸收-溃烂', '鸟1-鸟2',  '以太-吸收', '天地人-命水',
 '无情-音速破', '解放-崩裂', '血乱-拜爆',
 '抽取-核爆',  '逆-瀑泻', '坠-喷泉', '升-风车', '落-血雨', '百花-终', 
 '探戈-流星舞', '爆发击-超高速'] 

