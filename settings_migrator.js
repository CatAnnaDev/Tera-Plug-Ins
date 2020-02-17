const DefaultSettings = {
    "flyMore": true,
    "unLockFlying": true,
    "redirect": true,
    "redirectInfo": [
        // {zone: 9716, loc: [  49504, 129121, 3722], w: -2,   name: "飞艇下级 - 尾王"},
        // {zone: 9777, loc: [-112673, -34856,  470], w:  2,   name: "古代地下水道 - 尾王"},
        // {zone: 9781, loc: [39419, -113077, 17212], w:  2.8, name: "贝里克下级 - 尾王"},
        {zone: 9032, loc: [28200,  179815, -1670], w: -2, name: "单人试炼 黄金迷宫 - 尾王"},
        {zone: 9031, loc: [72487,  134052,  -503], w:  2, name: "单人试炼 阿卡莎 - 尾王"},
        {zone: 9713, loc: [52232,  117318,  4383], w:  2, name: "奇丽安森林 - 尾王"},
        {zone: 9714, loc: [-10644,  -7847, -9855], w: -2, name: "付费专用空间 (自动重置副本)"}
    ],
    "cameraControl": true,
    "setDistance": 500,
    "consumables": true,
    "consumablesInfo": [
        {ID:   920, itemId: 200920, msg: "精製綠鈦效果 [高級]"},
        {ID:   921, itemId: 200921, msg: "精製綠鈦效果 [稀有]"},
        {ID:   922, itemId: 200922, msg: "精製綠鈦效果 [傳說]"},
        
        {ID:  4000, itemId:      0, msg: "初級-戰鬥秘藥"},
        {ID:  4001, itemId:      0, msg: "初級-戰鬥秘藥"},
        {ID:  4004, itemId:      0, msg: "初級-戰鬥秘藥"},
        
        {ID:  4010, itemId:      0, msg: "中級-戰鬥秘藥"},
        {ID:  4011, itemId:      0, msg: "中級-戰鬥秘藥"},
        {ID:  4014, itemId:      0, msg: "中級-戰鬥秘藥"},
        
        {ID:  4020, itemId: 200999, msg: "高級-戰鬥秘藥"},
        {ID:  4021, itemId:      0, msg: "高級-戰鬥秘藥"},
        {ID:  4024, itemId:      0, msg: "高級-戰鬥秘藥"},
        
        {ID:  4030, itemId:      0, msg: "萬能-戰鬥秘藥"},
        {ID:  4031, itemId:      0, msg: "萬能-戰鬥秘藥"},
        {ID:  4040, itemId:      0, msg: "萬能-戰鬥秘藥"},
        
        {ID:  4610, itemId:    396, msg: "聯盟補給品：完整的水晶防護卷軸"},
        {ID:  4610, itemId:  48003, msg: "完整的水晶防護卷軸"},
        {ID:  4610, itemId:  70000, msg: "完整的水晶防護卷軸(可交)"},
        
        {ID:  4612, itemId:  98526, msg: "聯盟補給品：完整的-水晶防護卷軸 (1小时)"},
        {ID:  4612, itemId:  98569, msg: "完整的-水晶防護卷軸 (1小时)"},
        
        {ID:  4615, itemId:  98570, msg: "聯盟補給品：完整的水晶防護卷軸 (3小時)"},
        {ID:  4615, itemId:  98571, msg: "完整的水晶防護卷軸 (3小時)"},
        
        {ID:  4616, itemId:  98572, msg: "聯盟補給品：完整的水晶防護卷軸 (6小時)"},
        {ID:  4616, itemId:  98573, msg: "完整的水晶防護卷軸 (6小時)"},
        
        {ID:  4830, itemId:    444, msg: "(舊)勇猛的藥水"},
        {ID:  4830, itemId: 202015, msg: "勇猛的藥水"},
        {ID:  4831, itemId:      0, msg: "勇猛藥水(網咖)"},
        {ID:  4833, itemId:      0, msg: "勇猛的藥水"},
        
        {ID: 70231, itemId:  71418, msg: "烤羊肉"},
        {ID: 70231, itemId:  88800, msg: "聯合補給品：烤羊肉"},
        {ID: 70231, itemId: 201223, msg: "[活動] 烤羊肉"},
        {ID: 70231, itemId: 220428, msg: "[活動]烤羊肉"}
    ],
    "abnormalityBlack": true,
    "abnormalityBlacklist": [
        48732, // 刨冰
        48734, // 醉意 I
        48735, // 醉意 II
        48736, // 醉意 III
        48737, // 醉意 IV
        48738, // 醉意 V
        
        70251, // 利卡諾勒啤酒
        70252, // 覆盆子酒
        70253, // 天蓮花酒
        70254, // 萊納式黑啤酒
        70255, // 塔克式蜂蜜南瓜酒
        
        476806, // 時空崩壞!
        
        630201, // 飛行計量條恢復
        630202, // 飛行計量條恢復
        630411, // 風之精髓
        630511, // 火之精髓
        631002, // 電能
        631003, // 電能超負荷
        631201, // 飛行計量條恢復
        631202, // 飛行計量條恢復
        
        776017, // 暗黑力量
        
        806001, // 殭屍爆血效果
        806002, // 解除殭屍爆血效果
        811061, // 老舊的透明變身藥水
        821101, // 憐憫
        
        905656, // 惡魔的微笑
        905657, // 太陽之光
        
        7102001, // 魔力爆發
        
        45000011, // 奮進
        45000012, // 奮進低落
        
        47660800, // 暗黑 I
        47660900, // 閃光
        47661000, // 暗黑 II
        47662300, // 暗黑 I
        
        999001011,// 矇眼: 為了進行破西瓜遊戲遮住眼睛
    ],
    "afk": true,
    "inspect": true,
    "sutsceneSkip": true,
    "socialAnimation": true,
    "artisanIcons": true,
    "spawnMotes": true,
    "spawnMotesInfo": [
        // 恢复精气晶球 I-XV
        8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022,
        // 魔力精气晶球
        8023
    ],
    "spawnNPC": true,
    "spawnNpcInfo": [
        // {Zone: 759, ID: 2003}, // 恶灵岛上级 1号门
        // {Zone: 759, ID: 200},  // 恶灵岛上级 2号门
        
        // {Zone: 444, ID: 2201}, // 巴哈勒神殿 - 火神守護兵
        
        // {Zone: 183, ID: 6005}, // 伊露卡 - 吉普车
        // {Zone: 183, ID: 6006}, // 伊露卡 - 轰炸机C130
        
        // {Zone: 1023, ID: 10239003}, // 召喚元素王
        
        {Zone: 1023, ID: 10235014}, // 精靈召喚：守護精靈 I
        {Zone: 1023, ID: 10235015}, // 精靈召喚：守護精靈 II （1）
        {Zone: 1023, ID: 10235017}, // 精靈召喚：守護精靈 II （2）
        {Zone: 1023, ID: 10235016}, // 精靈召喚：守護精靈 III
        {Zone: 1023, ID: 10235004}, // 精靈召喚：守護精靈 IV
        {Zone: 1023, ID: 10235005}, // 精靈召喚：守護精靈 V
        {Zone: 1023, ID: 10235006}, // 精靈召喚：守護精靈 VI
        {Zone: 1023, ID: 10235007}, // 精靈召喚：守護精靈 VII
        {Zone: 1023, ID: 10235008}, // 精靈召喚：守護精靈 VIII
        {Zone: 1023, ID: 10235009}, // 精靈召喚：守護精靈 IX
        {Zone: 1023, ID: 10235010}, // 精靈召喚：守護精靈 X
        {Zone: 1023, ID: 10235011}, // 精靈召喚：守護精靈 XI
        {Zone: 1023, ID: 10235012}, // 精靈召喚：守護精靈 XII
        {Zone: 1023, ID: 10235013}, // 精靈召喚：守護精靈 XIII
        
        {Zone: 1023, ID: 10236001}, // 精靈召喚：生命精靈 I
        {Zone: 1023, ID: 10236002}, // 精靈召喚：生命精靈 II
        {Zone: 1023, ID: 10236003}, // 精靈召喚：生命精靈 III
        {Zone: 1023, ID: 10236004}, // 精靈召喚：生命精靈 IV
        {Zone: 1023, ID: 10236005}, // 精靈召喚：生命精靈 V
        {Zone: 1023, ID: 10236006}, // 精靈召喚：生命精靈 VI
        {Zone: 1023, ID: 10236007}, // 精靈召喚：生命精靈 VII
        {Zone: 1023, ID: 10236008}, // 精靈召喚：生命精靈 VIII
        {Zone: 1023, ID: 10236009}, // 精靈召喚：生命精靈 IX
        {Zone: 1023, ID: 10236010}, // 精靈召喚：生命精靈 X
        {Zone: 1023, ID: 10236011}, // 精靈召喚：生命精靈 XI
        {Zone: 1023, ID: 10236012}, // 精靈召喚：生命精靈 XII
        {Zone: 1023, ID: 10236013}, // 精靈召喚：生命精靈 XIII （1）
        {Zone: 1023, ID: 10236014}, // 精靈召喚：生命精靈 XIII （2）
        {Zone: 1023, ID: 10236015}, // 精靈召喚：生命精靈 XIV
        
        {Zone: 1023, ID: 10237003}, // 召喚精靈：閃電精靈 I
        {Zone: 1023, ID: 10237004}, // 召喚精靈：閃電精靈 II
        {Zone: 1023, ID: 10237005}, // 召喚精靈：閃電精靈 III
        {Zone: 1023, ID: 10237006}, // 召喚精靈：閃電精靈 IV
        {Zone: 1023, ID: 10237007}, // 召喚精靈：閃電精靈 V
        {Zone: 1023, ID: 10237008}, // 召喚精靈：閃電精靈 VI
        {Zone: 1023, ID: 10237009}, // 召喚精靈：閃電精靈 VII
        {Zone: 1023, ID: 10237010}, // 召喚精靈：閃電精靈 VIII
        {Zone: 1023, ID: 10237011}, // 召喚精靈：閃電精靈 IX
        {Zone: 1023, ID: 10237012}, // 召喚精靈：閃電精靈 X
        {Zone: 1023, ID: 10237013}, // 召喚精靈：閃電精靈 XI
        {Zone: 1023, ID: 10237014}, // 召喚精靈：閃電精靈 XII
        {Zone: 1023, ID: 10237015}, // 召喚精靈：閃電精靈 XV
        
        {Zone: 1023, ID: 10238001}, // 召喚精靈：破壞精靈 I
        {Zone: 1023, ID: 10238002}, // 召喚精靈：破壞精靈 II
        {Zone: 1023, ID: 10238003}, // 召喚精靈：破壞精靈 III
        {Zone: 1023, ID: 10238004}, // 召喚精靈：破壞精靈 IV
        {Zone: 1023, ID: 10238005}, // 召喚精靈：破壞精靈 V
        {Zone: 1023, ID: 10238006}, // 召喚精靈：破壞精靈 VI
        {Zone: 1023, ID: 10238007}, // 召喚精靈：破壞精靈 VII
        {Zone: 1023, ID: 10238008}, // 召喚精靈：破壞精靈 VIII
        
        {Zone: 1023, ID: 30301001}, // 設置哨兵塔 I
        {Zone: 1023, ID: 30301002}, // 設置哨兵塔 II
        {Zone: 1023, ID: 30301003}, // 設置哨兵塔 III
        {Zone: 1023, ID: 30301004}, // 設置哨兵塔 IV
        
        {Zone: 1023, ID: 30302001}, // 機器人出擊 I（1）
        {Zone: 1023, ID: 30303001}, // 機器人出擊 I （2）
        {Zone: 1023, ID: 30302002}, // 機器人出擊 II （1）
        {Zone: 1023, ID: 30303002}, // 機器人出擊 II （2）
        {Zone: 1023, ID: 30302003}, // 機器人出擊 III （1）
        {Zone: 1023, ID: 30303003}, // 機器人出擊 III （2）
        {Zone: 1023, ID: 30302004}, // 機器人出擊 IV （1）
        {Zone: 1023, ID: 30303004}, // 機器人出擊 IV （2）
        {Zone: 1023, ID: 30302005}, // 機器人出擊 V （1）
        {Zone: 1023, ID: 30303005}, // 機器人出擊 V （2）
        {Zone: 1023, ID: 30302006}, // 機器人出擊 VI （1）
        {Zone: 1023, ID: 30303006}, // 機器人出擊 VI （2）
        {Zone: 1023, ID: 30302007}, // 機器人出擊 VII （1）
        {Zone: 1023, ID: 30303007}, // 機器人出擊 VII （2）
        
        {Zone: 1023, ID: 12345},    // 後方移動術 ninja:Decoy Jutsu I
        
        {Zone: 1023, ID: 1100100},  // 影分身 I worrior:Smoke Aggressor II
        {Zone: 1023, ID: 1100101},  // 影分身 II worrior:Smoke Aggressor II"
        {Zone: 1023, ID: 2010100},  // 變換影子 I worrior:Smoke Flanker I
        {Zone: 1023, ID: 2010101}   // 變換影子 II worrior:Smoke Flanker II
    ],
    "collectBalls": true,
    "deadAnimation": true,
    "archerTraps": true,
    "trapSkills": [
        67259584, //fire
        67199584, //slow
        67209284, //stun
        67339084, //r-stun
        67359884, //r-fire
    ],
    "successChance": true,
    "damageNumber": true,
    "damageNumberMe": true,
    "healNumber": true,
    "healNumberMe": true,
    "mpNumber": true,
    "mpNumberMe": true,
    "lockonYouMsg": true,
    "noMoteCancel": true,
    "noBodyBlock": true,
    "vanguard": true,
    "guildQuest": false,
    "findItemID": false,
    "findMonsterID": false
};

module.exports = function MigrateSettings(from_ver, to_ver, settings) {
    if (from_ver === undefined) {
        // Migrate legacy config file
        return Object.assign(Object.assign({}, DefaultSettings), settings);
    } else if (from_ver === null) {
        // No config file exists, use default settings
        return DefaultSettings;
    } else {
        // Migrate from older version (using the new system) to latest one
        if (from_ver + 1 < to_ver) { // Recursively upgrade in one-version steps
            settings = MigrateSettings(from_ver, from_ver + 1, settings);
            return MigrateSettings(from_ver + 1, to_ver, settings);
        }
        // If we reach this point it's guaranteed that from_ver === to_ver - 1, so we can implement
        // a switch for each version step that upgrades to the next version. This enables us to
        // upgrade from any version to the latest version without additional effort!
        switch (to_ver) {
            default:
                let oldsettings = settings
                settings = Object.assign(DefaultSettings, {});
                for (let option in oldsettings) {
                    if (settings[option]) {
                        settings[option] = oldsettings[option]
                    }
                }
                break;
        }
        return settings;
    }
}
