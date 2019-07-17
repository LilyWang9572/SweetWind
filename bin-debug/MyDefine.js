var MyDefine;
(function (MyDefine) {
    var enSceneType;
    (function (enSceneType) {
        enSceneType[enSceneType["enScene_Lobby"] = 0] = "enScene_Lobby";
        enSceneType[enSceneType["enScene_Game"] = 1] = "enScene_Game";
        enSceneType[enSceneType["enScene_Result"] = 2] = "enScene_Result";
    })(enSceneType = MyDefine.enSceneType || (MyDefine.enSceneType = {}));
    ;
    var enTouchState;
    (function (enTouchState) {
        enTouchState[enTouchState["enTouch_Undo"] = 0] = "enTouch_Undo";
        enTouchState[enTouchState["enTouch_Touching"] = 1] = "enTouch_Touching";
        enTouchState[enTouchState["enTouch_End"] = 2] = "enTouch_End";
    })(enTouchState = MyDefine.enTouchState || (MyDefine.enTouchState = {}));
    ;
    var enLeafType;
    (function (enLeafType) {
        enLeafType[enLeafType["enType_yellow"] = 0] = "enType_yellow";
        enLeafType[enLeafType["enType_red"] = 1] = "enType_red";
        enLeafType[enLeafType["enType_green"] = 2] = "enType_green";
    })(enLeafType = MyDefine.enLeafType || (MyDefine.enLeafType = {}));
    ;
})(MyDefine || (MyDefine = {}));
//# sourceMappingURL=MyDefine.js.map