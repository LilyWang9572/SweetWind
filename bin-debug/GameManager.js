var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameManager = (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super.call(this) || this;
        _this.mSceneType = MyDefine.enSceneType.enScene_Lobby;
        GameManager._instance = _this;
        return _this;
    }
    GameManager.GetInstance = function () {
        return GameManager._instance;
    };
    GameManager.prototype.start = function () {
        this.gameLobby = new GameLobby();
        this.addChild(this.gameLobby);
        this.gameLobby.Start();
    };
    //设置当前场景，（场景改变后，必须人为设置当前场景，才能保证每次得到当前场景正确）
    GameManager.prototype.SetSceneType = function (sceneType) {
        this.mSceneType = sceneType;
    };
    //改变场景。
    GameManager.prototype.ChangeScene = function (sceneType) {
        //必须实现 其它逻辑随时可能调用这个函数来改变场景
        this.SetSceneType(sceneType);
        switch (sceneType) {
            case 0:
                //enScene_Lobby
                if (this.gameResult && this.gameResult.parent) {
                    this.gameResult.End();
                    this.removeChild(this.gameResult);
                    this.gameLobby = new GameLobby();
                    this.addChild(this.gameLobby);
                    this.gameLobby.Start();
                }
                break;
            case 1:
                //enScene_Game
                if (this.gameLobby && this.gameLobby.parent) {
                    this.gameLobby.End();
                    this.removeChild(this.gameLobby);
                    this.gameScene = new GameScene();
                    this.addChild(this.gameScene);
                    this.gameScene.Start();
                }
                break;
            case 2:
                //enScene_Result
                if (this.gameScene && this.gameScene.parent) {
                    this.gameScene.End();
                    this.removeChild(this.gameScene);
                    this.gameResult = new GameResult();
                    this.addChild(this.gameResult);
                    this.gameResult.Start();
                }
                break;
        }
    };
    return GameManager;
}(egret.Sprite));
__reflect(GameManager.prototype, "GameManager");
//# sourceMappingURL=GameManager.js.map