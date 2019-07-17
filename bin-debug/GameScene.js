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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        //需要用到的变量
        _this.touchState = MyDefine.enTouchState.enTouch_Undo;
        _this.maxYellowLeafsNumber = 6;
        _this.maxRedLeafsNumber = 3;
        _this.maxGreenLeafsNumber = 3;
        _this.yellowNumbers = 0;
        _this.greenNumbers = 0;
        _this.skinName = "resource/skins/GameScene.exml";
        _this.sound_1 = RES.getRes("1_mp3");
        _this.sound_2 = RES.getRes("2_mp3");
        _this.sound_3 = RES.getRes("3_mp3");
        _this.sound_4 = RES.getRes("4_mp3");
        return _this;
    }
    GameScene.GetInstance = function () {
        return GameScene._instance;
    };
    GameScene.prototype.Start = function () {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.myLeaf = new egret.Bitmap();
        this.myLeaf.texture = RES.getRes("green_leaf");
        this.myLeaf.width = 50;
        this.myLeaf.height = 35;
        this.myLeaf.x = this.stageW / 2;
        this.myLeaf.y = this.stageH / 2;
        this.addChild(this.myLeaf);
        this.yellowLeafsArr = new Array();
        this.greenLeafsArr = new Array();
        this.redLeafsArr = new Array();
        this.leafArr = new Array();
        this.myLeafRect = this.myLeaf.getBounds();
        this.yellowCounts.text = this.yellowNumbers + "";
        this.greenCounts.text = this.greenNumbers + "";
        this.addEventListener(egret.Event.ENTER_FRAME, this.Update, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.LeafUp, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.LeafDown, this);
        var data = RES.getRes("grass_json");
        var txtr = RES.getRes("grass_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc2 = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc1.width = this.stageW;
        this.mc1.x = -10;
        this.mc1.y = this.stageH - this.mc1.height;
        this.mc2.width = this.stageW;
        this.mc2.x = -this.stageW;
        this.mc2.y = this.stageH - this.mc2.height;
        this.addChild(this.mc1);
        this.addChild(this.mc2);
        this.mc1.gotoAndPlay(1, -1);
        this.mc2.gotoAndPlay(1, -1);
        this.InitPool();
        this.CreateLeafs();
        this.myLeafRect = this.myLeaf.getBounds();
    };
    GameScene.prototype.Update = function () {
        var _this = this;
        this.BackgroundMove();
        switch (this.touchState) {
            case MyDefine.enTouchState.enTouch_Touching:
                this.myLeaf.y = this.myLeaf.y <= 0 ? 0 : this.myLeaf.y - 8;
                this.myLeaf.x = this.myLeaf.x <= 0 ? 0 : this.myLeaf.x;
                break;
            default:
                this.myLeaf.y += 10;
                this.myLeaf.x = this.myLeaf.x <= 0 ? 0 : this.myLeaf.x;
                break;
        }
        for (var i = 0; i < this.leafArr.length; i++) {
            this.myLeafRect.x = this.myLeaf.x;
            this.myLeafRect.y = this.myLeaf.y;
            var leafObj = this.leafArr[i];
            var objRect = leafObj.getBounds();
            objRect.x = leafObj.x;
            objRect.y = leafObj.y;
            if (leafObj.isUse)
                if (this.myLeafRect.intersects(objRect)) {
                    this.PlaySound();
                    switch (leafObj.type) {
                        case MyDefine.enLeafType.enType_yellow:
                            this.yellowNumbers++;
                            this.yellowCounts.text = this.yellowNumbers + "";
                            this.leafArr[i].Recycle();
                            break;
                        case MyDefine.enLeafType.enType_red:
                            var objX = this.myLeaf.x + 40;
                            this.leafArr[i].Recycle();
                            egret.Tween.get(this.myLeaf).to({ alpha: 0.5, x: objX }, 300).to({ alpha: 1 }, 300).call(function () {
                                egret.Tween.removeTweens(_this.myLeaf);
                            });
                            break;
                        case MyDefine.enLeafType.enType_green:
                            var objX = this.myLeaf.x - 40;
                            this.greenNumbers++;
                            this.greenCounts.text = this.greenNumbers + "";
                            this.leafArr[i].Recycle();
                            egret.Tween.get(this.myLeaf).to({ x: objX, rotation: 360 }, 500).call(function () {
                                egret.Tween.removeTweens(_this.myLeaf);
                            });
                            break;
                    }
                }
        }
        this.CreateLeafs();
        if (this.myLeaf.x >= this.stageW || this.myLeaf.y >= this.stageH - this.myLeaf.height) {
            this.GameOver();
            return;
        }
    };
    GameScene.prototype.PlaySound = function () {
        var num = Math.ceil(Math.random() * 4);
        switch (num) {
            case 1:
                this.sound_1.play(0, 1);
                break;
            case 2:
                this.sound_2.play(0, 1);
                break;
            case 3:
                this.sound_3.play(0, 1);
                break;
            case 4:
                this.sound_4.play(0, 1);
                break;
        }
    };
    GameScene.prototype.CreateLeafs = function () {
        //黄色树叶
        var num1 = this.yellowLeafsArr.length == 0 ? Math.floor(Math.random() * this.maxYellowLeafsNumber + 1) :
            Math.floor(Math.random() * (this.maxYellowLeafsNumber - this.yellowLeafsArr.length));
        for (var i = 0; i < num1; i++) {
            var leaf = this.GetLeaf();
            if (leaf == undefined) {
                return;
            }
            leaf.Use(MyDefine.enLeafType.enType_yellow);
            this.yellowLeafsArr.push(leaf);
        }
        //红色树叶
        var num2 = this.redLeafsArr.length == 0 ? Math.floor(Math.random() * this.maxRedLeafsNumber + 1) :
            Math.floor(Math.random() * (this.maxRedLeafsNumber - this.redLeafsArr.length));
        for (var i = 0; i < num2; i++) {
            var leaf = this.GetLeaf();
            if (leaf == undefined) {
                return;
            }
            leaf.Use(MyDefine.enLeafType.enType_red);
            this.redLeafsArr.push(leaf);
        }
        //绿色树叶
        var num3 = this.greenLeafsArr.length == 0 ? Math.floor(Math.random() * this.maxGreenLeafsNumber + 1) :
            Math.floor(Math.random() * (this.maxGreenLeafsNumber - this.greenLeafsArr.length));
        for (var i = 0; i < num3; i++) {
            var leaf = this.GetLeaf();
            if (leaf == undefined) {
                return;
            }
            leaf.Use(MyDefine.enLeafType.enType_green);
            this.greenLeafsArr.push(leaf);
        }
    };
    GameScene.prototype.LeafUp = function () {
        this.touchState = MyDefine.enTouchState.enTouch_Touching;
    };
    GameScene.prototype.LeafDown = function () {
        this.touchState = MyDefine.enTouchState.enTouch_End;
    };
    GameScene.prototype.BackgroundMove = function () {
        this.mc1.x += 5;
        this.mc2.x += 5;
        if (this.mc1.x >= this.stage.stageWidth) {
            this.mc1.x = this.mc2.x - this.mc2.width;
        }
        if (this.mc2.x >= this.stage.stageWidth) {
            this.mc2.x = this.mc1.x - this.mc1.width;
        }
    };
    GameScene.prototype.GameOver = function () {
        egret.localStorage.setItem("yellowNumbers", this.yellowNumbers + "");
        egret.localStorage.setItem("greenNumbers", this.greenNumbers + "");
        var max = egret.localStorage.getItem("bestScore");
        if (max == undefined) {
            max = 0 + "";
        }
        max = parseInt(max) > this.yellowNumbers ? max : this.yellowNumbers + "";
        egret.localStorage.setItem("bestScore", max);
        GameManager.GetInstance().ChangeScene(MyDefine.enSceneType.enScene_Result);
    };
    GameScene.prototype.End = function () {
        this.mc1.stop();
        this.mc2.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.Update, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.LeafUp, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.LeafDown, this);
    };
    GameScene.prototype.InitPool = function () {
        for (var i = 0; i < 12; i++) {
            var leaf = new LeafShape(this);
            this.leafArr.push(leaf);
        }
    };
    GameScene.prototype.GetLeaf = function () {
        for (var i = 0, len = this.leafArr.length; i < len; i++) {
            if (this.leafArr[i].isUse == false) {
                return this.leafArr[i];
            }
        }
    };
    return GameScene;
}(eui.Component));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map