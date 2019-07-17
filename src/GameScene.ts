class GameScene extends eui.Component {
    //exml里的控件
    private yellowCounts:eui.Label;
    private greenCounts:eui.Label;
    private myLeaf:egret.Bitmap;

    //需要用到的变量
    private touchState:MyDefine.enTouchState = MyDefine.enTouchState.enTouch_Undo;
    private maxYellowLeafsNumber:number = 6;
    private maxRedLeafsNumber:number = 3;
    private maxGreenLeafsNumber:number = 3;
    public yellowLeafsArr:Array<LeafShape>;
    public redLeafsArr:Array<LeafShape>;
    public greenLeafsArr:Array<LeafShape>;

    private leafArr:Array<LeafShape>;
    private yellowNumbers:number = 0;
    private greenNumbers:number = 0;

    public stageW:number;
    public stageH:number;

    private mc1:egret.MovieClip;
    private mc2:egret.MovieClip;
    //检测的矩形区域
    private myLeafRect:egret.Rectangle;
    private sound_1:egret.Sound;
    private sound_2:egret.Sound;
    private sound_3:egret.Sound;
    private sound_4:egret.Sound;
    private static _instance:GameScene;
    public static GetInstance():GameScene {
        return GameScene._instance;
    }
    public constructor() {
        super();
        this.skinName = "resource/skins/GameScene.exml";
        this.sound_1 = RES.getRes("1_mp3");
        this.sound_2 = RES.getRes("2_mp3");
        this.sound_3 = RES.getRes("3_mp3");
        this.sound_4 = RES.getRes("4_mp3");
    }
    public Start() {
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        this.myLeaf = new egret.Bitmap();
        this.myLeaf.texture = RES.getRes("green_leaf");
        this.myLeaf.width = 50;
        this.myLeaf.height = 35;
        this.myLeaf.x = this.stageW / 2;
        this.myLeaf.y = this.stageH / 2;
        this.addChild(this.myLeaf);
        this.yellowLeafsArr = new Array<LeafShape>();
        this.greenLeafsArr = new Array<LeafShape>();
        this.redLeafsArr = new Array<LeafShape>();
        this.leafArr = new Array<LeafShape>();
        this.myLeafRect = this.myLeaf.getBounds();
        this.yellowCounts.text = this.yellowNumbers+"";
        this.greenCounts.text = this.greenNumbers+"";
        this.addEventListener(egret.Event.ENTER_FRAME, this.Update, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.LeafUp, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.LeafDown, this);
        var data = RES.getRes("grass_json");
        var txtr = RES.getRes("grass_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, txtr);
        this.mc1 = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc2 = new egret.MovieClip(mcFactory.generateMovieClipData("grass"));
        this.mc1.width = this.stageW;
        this.mc1.x = -10;
        this.mc1.y = this.stageH-this.mc1.height;
        this.mc2.width = this.stageW;
        this.mc2.x = -this.stageW;
        this.mc2.y = this.stageH-this.mc2.height;
        this.addChild(this.mc1);
        this.addChild(this.mc2);
        this.mc1.gotoAndPlay(1,-1);
        this.mc2.gotoAndPlay(1,-1);
        this.InitPool();
        this.CreateLeafs();
        this.myLeafRect = this.myLeaf.getBounds();
    }
    private Update() {
        this.BackgroundMove();
        switch(this.touchState) {
            case MyDefine.enTouchState.enTouch_Touching:
                this.myLeaf.y = this.myLeaf.y <= 0 ? 0 : this.myLeaf.y-8;
                this.myLeaf.x = this.myLeaf.x <= 0 ? 0 : this.myLeaf.x;
                break;
            default:
                this.myLeaf.y += 10;
                this.myLeaf.x = this.myLeaf.x <= 0 ? 0 : this.myLeaf.x;
                break;
        }
        for(let i:number = 0; i < this.leafArr.length; i++) {
            this.myLeafRect.x = this.myLeaf.x;
            this.myLeafRect.y = this.myLeaf.y;
            let leafObj: LeafShape = this.leafArr[i];
            let objRect: egret.Rectangle = leafObj.getBounds();
            objRect.x = leafObj.x;
            objRect.y = leafObj.y;
            if(leafObj.isUse)
            if(this.myLeafRect.intersects(objRect)) {
                this.PlaySound();
                switch(leafObj.type) {
                    case MyDefine.enLeafType.enType_yellow:
                        this.yellowNumbers++;
                        this.yellowCounts.text = this.yellowNumbers+"";
                        this.leafArr[i].Recycle();
                        break;
                    case MyDefine.enLeafType.enType_red:
                        var objX:number = this.myLeaf.x+40;
                        this.leafArr[i].Recycle();
                        egret.Tween.get(this.myLeaf).to({alpha:0.5,x:objX},300).to({alpha:1},300).call(()=>{
                            egret.Tween.removeTweens(this.myLeaf);
                        })
                        break;
                    case MyDefine.enLeafType.enType_green:
                       var objX:number = this.myLeaf.x-40;
                        this.greenNumbers++;
                        this.greenCounts.text = this.greenNumbers+"";
                        this.leafArr[i].Recycle();
                        egret.Tween.get(this.myLeaf).to({x:objX,rotation:360},500).call(()=>{
                            egret.Tween.removeTweens(this.myLeaf);
                        })
                        break;
                }
            }
        }
        this.CreateLeafs();
        if(this.myLeaf.x >= this.stageW||this.myLeaf.y >= this.stageH-this.myLeaf.height) {
            this.GameOver();
            return;
        } 
    }
    private PlaySound() {
        let num:number = Math.ceil(Math.random()*4);
        switch(num) {
            case 1:
                this.sound_1.play(0,1);
                break;
            case 2:
                this.sound_2.play(0,1);
                break;
            case 3:
                this.sound_3.play(0,1);
                break;
            case 4:
                this.sound_4.play(0,1);
                break;
        }
    }
    private CreateLeafs() {
        //黄色树叶
        let num1:number = this.yellowLeafsArr.length == 0 ? Math.floor(Math.random()*this.maxYellowLeafsNumber+1) : 
                        Math.floor(Math.random()*(this.maxYellowLeafsNumber-this.yellowLeafsArr.length));
        for(let i:number = 0; i < num1; i++) {
            let leaf:LeafShape = this.GetLeaf();
            if(leaf == undefined) {
                return;
            }
            leaf.Use(MyDefine.enLeafType.enType_yellow);
            this.yellowLeafsArr.push(leaf);
        }
        //红色树叶
        let num2:number = this.redLeafsArr.length == 0 ? Math.floor(Math.random()*this.maxRedLeafsNumber+1) : 
                        Math.floor(Math.random()*(this.maxRedLeafsNumber-this.redLeafsArr.length));
        for(let i:number = 0; i < num2; i++) {
            let leaf:LeafShape = this.GetLeaf();
            if(leaf == undefined) {
                return;
            }
            leaf.Use(MyDefine.enLeafType.enType_red);
            this.redLeafsArr.push(leaf);
        }
        //绿色树叶
        let num3:number = this.greenLeafsArr.length == 0 ? Math.floor(Math.random()*this.maxGreenLeafsNumber+1) : 
                        Math.floor(Math.random()*(this.maxGreenLeafsNumber-this.greenLeafsArr.length));
        for(let i:number = 0; i < num3; i++) {
            let leaf:LeafShape = this.GetLeaf();
            if(leaf == undefined) {
                return;
            }
            leaf.Use(MyDefine.enLeafType.enType_green);
            this.greenLeafsArr.push(leaf);
        }
    }
    private LeafUp() {
        this.touchState = MyDefine.enTouchState.enTouch_Touching;
    }
    private LeafDown() {
        this.touchState = MyDefine.enTouchState.enTouch_End;
    }
    private BackgroundMove() {
        this.mc1.x += 5;
        this.mc2.x += 5;
        if(this.mc1.x >= this.stage.stageWidth) {
            this.mc1.x = this.mc2.x-this.mc2.width;
        }
        if(this.mc2.x >= this.stage.stageWidth) {
            this.mc2.x = this.mc1.x-this.mc1.width;
        }
    }
    private GameOver() {
        egret.localStorage.setItem("yellowNumbers", this.yellowNumbers+"");
        egret.localStorage.setItem("greenNumbers", this.greenNumbers+"");
        var max = egret.localStorage.getItem("bestScore");
        if(max == undefined) {
            max = 0+"";
        }
        max = parseInt(max) > this.yellowNumbers ? max : this.yellowNumbers+"";
        egret.localStorage.setItem("bestScore", max);
        GameManager.GetInstance().ChangeScene(MyDefine.enSceneType.enScene_Result);
    }
    public End(){
        this.mc1.stop();
        this.mc2.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.Update, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.LeafUp, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.LeafDown, this);
    }
    InitPool() {
        for(let i:number = 0; i < 12; i++) {
            let leaf:LeafShape = new LeafShape(this);
            this.leafArr.push(leaf);
        }
    }
    public GetLeaf():LeafShape {
        for (let i = 0, len = this.leafArr.length; i < len; i++) {
            if (this.leafArr[i].isUse == false) {
                return this.leafArr[i];
            }
        }
    }
}