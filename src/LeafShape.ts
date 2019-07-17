class LeafShape extends egret.Bitmap {
    private _speedX:number = 0;
    private _speedY:number = 0;
    private _type:MyDefine.enLeafType;
    private _parent:GameScene;
    private _isUse:boolean = false;
    public constructor(instance:any) {
        super();
        this._parent = instance;
        this.width = 50;
        this.height = 35;
    }
    private Fly() {
        if(this.isUse) {
            this.x += this._speedX;
            this.y += this._speedY;
            if(this.x >= this._parent.stageW || this.y >= this._parent.stageH) {
                // if(this._parent) {
                //     // this._parent.removeChild(this);
                //     this.Recycle();
                // }
                this.Recycle();
            }
        }
    }
    //使用
    public Use(type:MyDefine.enLeafType) {
        this._isUse = true;
        this._type = type;
        switch(type) {
            case MyDefine.enLeafType.enType_yellow:
                this.texture = RES.getRes("yellow_leaf");
                break;
            case MyDefine.enLeafType.enType_green:
                this.texture = RES.getRes("green_leaf");
                break;
            case MyDefine.enLeafType.enType_red:
                this.texture = RES.getRes("red_leaf");
                break;
        }
        this._speedX = Math.random()*12+6;
        this._speedY = Math.random()*4+1;
        this.x = -(this._parent.stageW+10);
        this.y = Math.random()*this._parent.stageH/3+50;
        this._parent.addChild(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.Fly, this);
    }
    //回收
    Recycle() {
        this._isUse = false;
        switch(this._type) {
            case MyDefine.enLeafType.enType_yellow:
                this._parent.yellowLeafsArr.length==0 ? this._parent.yellowLeafsArr.length = 0 : this._parent.yellowLeafsArr.length--;
                break;
            case MyDefine.enLeafType.enType_red:
                this._parent.redLeafsArr.length == 0 ? this._parent.redLeafsArr.length = 0 : this._parent.redLeafsArr.length--;
                break;
            case MyDefine.enLeafType.enType_green:
                this._parent.greenLeafsArr.length == 0 ? this._parent.greenLeafsArr.length = 0 : this._parent.greenLeafsArr.length--;
                break;
        }
        this.removeEventListener(egret.Event.ENTER_FRAME, this.Fly, this);
        this._parent.removeChild(this);
    }
    get type() {
        return this._type;
    }
    get isUse() {
        return this._isUse;
    }

}