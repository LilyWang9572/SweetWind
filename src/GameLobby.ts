class GameLobby extends eui.Component {
    //exml里面的控件
    private grass:eui.Image;
    private promptTitle:eui.Label;
    private leaf1:eui.Image;
    private leaf2:eui.Image;
    private leaf3:eui.Image;
    private leaf4:eui.Image;
    private leaf5:eui.Image;

    //
    private mc1:egret.MovieClip;
    private gameScene:GameScene;
    private static _instance:GameLobby;
    public static GetInstance():GameLobby {
        return GameLobby._instance;
    }
    public constructor() {
        super();
        GameLobby._instance = this;
        this.skinName = "resource/skins/GameLobby.exml";
    }
    public Start() {
        this.once(egret.TouchEvent.TOUCH_TAP, this.GameBeginHandler, this);
        egret.Tween.get(this.promptTitle, {loop:true}).to({alpha:0.5},1000).to({alpha:1},1000);
        egret.Tween.get(this.leaf1, {loop:true}).to({x:640,y:400},2200,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf2, {loop:true}).to({x:640,y:500},3000,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf3, {loop:true}).to({x:640,y:550},2500,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf4, {loop:true}).to({x:640,y:600},1800,egret.Ease.quadIn).wait(1000);
        egret.Tween.get(this.leaf5, {loop:true}).to({x:640,y:450},2000,egret.Ease.quadIn).wait(1000);
        var data = RES.getRes("grass_json");
        var txtr = RES.getRes("grass_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc1.width = this.stage.stageWidth;
        this.mc1.x = -10;
        this.mc1.y = this.stage.stageHeight-this.mc1.height;
        this.addChild(this.mc1);
        this.mc1.gotoAndPlay(1,-1);
    }
    private GameBeginHandler() {
        this.mc1.stop();
        egret.Tween.removeTweens(this.promptTitle);
        egret.Tween.removeTweens(this.leaf1);
        egret.Tween.removeTweens(this.leaf2);
        egret.Tween.removeTweens(this.leaf3);
        egret.Tween.removeTweens(this.leaf4);
        egret.Tween.removeTweens(this.leaf5);
        GameManager.GetInstance().ChangeScene(MyDefine.enSceneType.enScene_Game);

    }
    public End() {}
}