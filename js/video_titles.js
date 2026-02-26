// 视频标题映射表
const videoTitles = {
    'BV1bhMJzGEWY': '你好。—好在哪？你展开说说~',
    'BV1x6Tfz1EW6': '你叫什么？—我没有叫啊！冤枉啊包包大人！',
    'BV1uzNjzbEGH': '我叫周明来，他打开心脏认识你（很开心认识你）',
    'BV1cANHzbERr': '可是她一直对我比心诶！她喜欢我！！（名片 号码 联系方式）',
    'BV1AaKGzrELG': '这期辛苦大家和手商量一下了（数字打法）',
    'BV1mTKmzyE3M': '毕业快乐！前程似锦~',
    'BV1so3xz8Ea8': '要和我常联系哟~',
    'BV1dB3DzUEPg': '你没事吧没事吧没事吧没事吧（一切都顺利吗 最近好吗）',
    'BV11VGnz7ENx': '聋人不解，但聋人照做（代我问好）',
    'BV1qoM9zpEuT': '早晚温差大，长成小甜瓜',
    'BV1yCutzFE8C': '玩得很开心！',
    'BV1QCbZzgENT': '谢谢你的关心(展示小挂件版',
    'BV1A38tzyEdS': '该起来走两步了',
    'BV1SAhPzREb9': '关于闪班长召开迷你班会的通知（时间过得真快，友谊天长地久）',
    'BV1UktPz7ExN': '第一阶段答疑',
    'BV12tbazsEka': '«见面问候»阶段学习成果自测',
    'BV1KSYvzkEpY': '怎么用手语拍马语拍马屁（都是你的功劳）',
    'BV1MGeVzHEH6': '你老公真漂亮（可爱 善良）',
    'BV1hGeBztE72': '呃呃我没醉！我还能喝！（加油 一定能成功 失败 ）',
    'BV1UDe1zyEm8': '今天学夸人手语：你真棒！',
    'BV1xohBz2EaR': '违反规定！把阿闪铲出去！',
    'BV1AVa6zUEYC': '开学了，不要太担心了',
    'BV1VmaqzZE19': '如果又盲又聋，如何感知对方情绪？',
    'BV1J7HQzEEBZ': '对不起，请你马上失望！',
    'BV1K7pXzwEEf': '您好，我可以帮点倒忙~',
    'BV1S4HpzUELb': '不是所有残障者都天然地需要被帮助',
    'BV1TXxxzPELw': '学完这期也是使唤上聋人了...',
    'BV14e4czAEdJ': '今天要刷到视频最后一秒',
    'BV1DgWbzrE4o': '请把功德给我',
    'BV1P7shzzEqT': '来学！学了就会发财（的打法）',
    'BV165sfz5ET7': '阿闪公开接头暗号！',
    'BV1wCyWB7E4n': '加长了正文前摇',
    'BV14m1LBvE8q': '重要，含下一次阶段答疑&直播通知',
    'BV1aD1WBvEmQ': '哑思必修课：词汇有限，怎么和聋人沟通（阶段答疑二）',
    'BV1RoC7BJExw': '第二阶段(表达情感和需求)自测~',
    'BV1ATCdBMEpJ': '剪好忘记上传啦啊啊啊啊（明天天气怎么样）',
    'BV1PnyPBhEYK': '天气很冷，多喝冷水',
    'BV1TvUrBnEQJ': '刷完牙后还剩很多时间(温度阴晴风雨云雾)',
    'BV1qMSFBDE7w': '阳光终会撒在大地上（流星雨天地草原沙漠）',
    'BV1GF2xBGEw9': '朋友给我做的！（气温回升高低变化）'
};

// 获取视频标题的函数
function getVideoTitle(bvId) {
    return videoTitles[bvId] || '手语视频';
}

// 检查是否包含某个BV号
function hasVideoTitle(bvId) {
    return videoTitles.hasOwnProperty(bvId);
}

// 获取所有视频标题
function getAllVideoTitles() {
    return videoTitles;
}