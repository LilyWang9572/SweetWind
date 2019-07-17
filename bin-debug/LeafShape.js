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
var LeafShape = (function (_super) {
    __extends(LeafShape, _super);
    function LeafShape(instance) {
        var _this = _super.call(this) || this;
        _this._speedX = 0;
        _this._speedY = 0;
        _this._isUse = false;
        _this._parent = instance;
        _this.width = 50;
        _this.height = 35;
        return _this;
    }
    LeafShape.prototype.Fly = function () {
        if (this.isUse) {
            this.x += this._speedX;
            this.y += this._speedY;
            if (this.x >= this._parent.stageW || this.y >= this._parent.stageH) {
                // if(this._parent) {
                //     // this._parent.removeChild(this);
                //     this.Recycle();
                // }
                this.Recycle();
            }
        }
    };
    //使用
    LeafShape.prototype.Use = function (type) {
        this._isUse = true;
        this._type = type;
        switch (type) {
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
        this._speedX = Math.random() * 12 + 6;
        this._speedY = Math.random() * 4 + 1;
        this.x = -(this._parent.stageW + 10);
        this.y = Math.random() * this._parent.stageH / 3 + 50;
        this._parent.addChild(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.Fly, this);
    };
    //回收
    LeafShape.prototype.Recycle = function () {
        this._isUse = false;
        switch (this._type) {
            case MyDefine.enLeafType.enType_yellow:
                this._parent.yellowLeafsArr.length == 0 ? this._parent.yellowLeafsArr.length = 0 : this._parent.yellowLeafsArr.length--;
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
    };
    Object.defineProperty(LeafShape.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LeafShape.prototype, "isUse", {
        get: function () {
            return this._isUse;
        },
        enumerable: true,
        configurable: true
    });
    return LeafShape;
}(egret.Bitmap));
__reflect(LeafShape.prototype, "LeafShape");
//# sourceMappingURL=LeafShape.js.map