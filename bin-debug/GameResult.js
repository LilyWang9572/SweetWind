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
var GameResult = (function (_super) {
    __extends(GameResult, _super);
    function GameResult() {
        var _this = _super.call(this) || this;
        GameResult._instance = _this;
        _this.skinName = "resource/skins/GameResult.exml";
        return _this;
    }
    GameResult.GetInstance = function () {
        return GameResult._instance;
    };
    GameResult.prototype.Start = function () {
        this.once(egret.TouchEvent.TOUCH_TAP, this.GameBeginHandler, this);
        egret.Tween.get(this.leaf1, { loop: true }).to({ x: 640, y: 400 }, 2200, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf2, { loop: true }).to({ x: 640, y: 500 }, 3000, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf3, { loop: true }).to({ x: 640, y: 550 }, 2500, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf4, { loop: true }).to({ x: 640, y: 600 }, 1800, egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf5, { loop: true }).to({ x: 640, y: 450 }, 2000, egret.Ease.quadIn).wait(1000);
        this.yellowCounts.text = egret.localStorage.getItem("yellowNumbers");
        this.greenCounts.text = egret.localStorage.getItem("greenNumbers");
        this.bestScore.text = egret.localStorage.getItem("bestScore");
        var data = RES.getRes("grass_json");
        var txtr = RES.getRes("grass_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc.width = this.stage.stageWidth;
        this.mc.x = -10;
        this.mc.y = this.stage.stageHeight - this.mc.height;
        this.addChild(this.mc);
        this.mc.gotoAndPlay(1, -1);
    };
    GameResult.prototype.GameBeginHandler = function () {
        GameManager.GetInstance().ChangeScene(MyDefine.enSceneType.enScene_Lobby);
    };
    GameResult.prototype.End = function () {
        this.mc.stop();
        egret.Tween.removeTweens(this.leaf1);
        egret.Tween.removeTweens(this.leaf2);
        egret.Tween.removeTweens(this.leaf3);
        egret.Tween.removeTweens(this.leaf4);
        egret.Tween.removeTweens(this.leaf5);
    };
    return GameResult;
}(eui.Component));
__reflect(GameResult.prototype, "GameResult");
//# sourceMappingURL=GameResult.js.map