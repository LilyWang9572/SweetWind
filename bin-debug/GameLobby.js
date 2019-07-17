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
var GameLobby = (function (_super) {
    __extends(GameLobby, _super);
    function GameLobby() {
        var _this = _super.call(this) || this;
        GameLobby._instance = _this;
        _this.skinName = "resource/skins/GameLobby.exml";
        return _this;
    }
    GameLobby.GetInstance = function () {
        return GameLobby._instance;
    };
    GameLobby.prototype.Start = function () {
        this.once(egret.TouchEvent.TOUCH_TAP, this.GameBeginHandler, this);
        egret.Tween.get(this.promptTitle, { loop: true }).to({ alpha: 0.5 }, 1000).to({ alpha: 1 }, 1000);
        egret.Tween.get(this.leaf1, { loop: true }).to({ x: 640, y: 400 }, 2200, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf2, { loop: true }).to({ x: 640, y: 500 }, 3000, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf3, { loop: true }).to({ x: 640, y: 550 }, 2500, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf4, { loop: true }).to({ x: 640, y: 600 }, 1800, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf5, { loop: true }).to({ x: 640, y: 450 }, 2000, egret.Ease.quadIn).wait(1000);
        var data = RES.getRes("grass_json");
        var txtr = RES.getRes("grass_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc1.width = this.stage.stageWidth;
        this.mc1.x = -10;
        this.mc1.y = this.stage.stageHeight - this.mc1.height;
        this.addChild(this.mc1);
        this.mc1.gotoAndPlay(1, -1);
    };
    GameLobby.prototype.GameBeginHandler = function () {
        this.mc1.stop();
        egret.Tween.removeTweens(this.promptTitle);
        egret.Tween.removeTweens(this.leaf1);
        egret.Tween.removeTweens(this.leaf2);
        egret.Tween.removeTweens(this.leaf3);
        egret.Tween.removeTweens(this.leaf4);
        egret.Tween.removeTweens(this.leaf5);
        GameManager.GetInstance().ChangeScene(MyDefine.enSceneType.enScene_Game);
    };
    GameLobby.prototype.End = function () { };
    return GameLobby;
}(eui.Component));
__reflect(GameLobby.prototype, "GameLobby");
//# sourceMappingURL=GameLobby.js.map