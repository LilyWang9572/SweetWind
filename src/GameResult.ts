class GameResult extends eui.Component {
    private leaf1:eui.Image;
    private leaf2:eui.Image;
    private leaf3:eui.Image;
    private leaf4:eui.Image;
    private leaf5:eui.Image;
    private bestScore:eui.Label;
    private yellowCounts:eui.Label;
    private greenCounts:eui.Label;
    private bestScoreLabel:eui.Label;
    private mc:egret.MovieClip;
    private static _instance:GameResult;
    public static GetInstance() {
        return GameResult._instance;
    }
    public constructor() {
        super();
        GameResult._instance = this;
        this.skinName = "resource/skins/GameResult.exml";
    }
    public Start() {
        this.once(egret.TouchEvent.TOUCH_TAP, this.GameBeginHandler, this);
        egret.Tween.get(this.leaf1, {loop:true}).to({x:640,y:400},2200,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf2, {loop:true}).to({x:640,y:500},3000,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf3, {loop:true}).to({x:640,y:550},2500,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf4, {loop:true}).to({x:640,y:600},1800,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf5, {loop:true}).to({x:640,y:450},2000,egret.Ease.quadIn).wait(1000);
        this.yellowCounts.text = egret.localStorage.getItem("yellowNumbers");
        this.greenCounts.text = egret.localStorage.getItem("greenNumbers");
        this.bestScore.text = egret.localStorage.getItem("bestScore");
        this.AutoResizeText(this.bestScoreLabel);
        var data = RES.getRes("grass_json");
        var txtr = RES.getRes("grass_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc.width = this.stage.stageWidth;
        this.mc.x = -10;
        this.mc.y = this.stage.stageHeight-this.mc.height;
        this.addChild(this.mc);
        this.mc.gotoAndPlay(1,-1);
    }
    private GameBeginHandler() {
        GameManager.GetInstance().ChangeScene(MyDefine.enSceneType.enScene_Lobby);
    }
    public End() {
        this.mc.stop();
        egret.Tween.removeTweens(this.leaf1);
        egret.Tween.removeTweens(this.leaf2);
        egret.Tween.removeTweens(this.leaf3);
        egret.Tween.removeTweens(this.leaf4);
        egret.Tween.removeTweens(this.leaf5);
    }
    private AutoResizeText(target:eui.Label) {
        while(target.size > 10) {
            if(target.width > target.parent.width) {
                target.size -= 2;
            } else {
                break;
            }
        }
    }
}