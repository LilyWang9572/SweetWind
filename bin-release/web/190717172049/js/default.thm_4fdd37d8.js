window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/skins/GameLobby.exml'] = window.skins.GameLobby = (function (_super) {
	__extends(GameLobby, _super);
	function GameLobby() {
		_super.call(this);
		this.skinParts = ["title","promptTitle","leaf1","leaf2","leaf3","leaf4","leaf5"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.title_i(),this.promptTitle_i(),this.leaf1_i(),this.leaf2_i(),this.leaf3_i(),this.leaf4_i(),this.leaf5_i()];
	}
	var _proto = GameLobby.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg";
		t.width = 640;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.fontFamily = "chiller";
		t.horizontalCenter = 0;
		t.size = 44;
		t.text = "Sweet Wind";
		t.textColor = 0x000000;
		t.verticalCenter = -100;
		return t;
	};
	_proto.promptTitle_i = function () {
		var t = new eui.Label();
		this.promptTitle = t;
		t.fontFamily = "chiller";
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.text = "tap anywhere to start";
		t.textColor = 0x000000;
		t.verticalCenter = 50;
		return t;
	};
	_proto.leaf1_i = function () {
		var t = new eui.Image();
		this.leaf1 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.y = 1050;
		return t;
	};
	_proto.leaf2_i = function () {
		var t = new eui.Image();
		this.leaf2 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = 121;
		t.y = 1102;
		return t;
	};
	_proto.leaf3_i = function () {
		var t = new eui.Image();
		this.leaf3 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = -49;
		t.y = 1102;
		return t;
	};
	_proto.leaf4_i = function () {
		var t = new eui.Image();
		this.leaf4 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = -53;
		t.y = 981;
		return t;
	};
	_proto.leaf5_i = function () {
		var t = new eui.Image();
		this.leaf5 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = 232;
		t.y = 1135;
		return t;
	};
	return GameLobby;
})(eui.Skin);generateEUI.paths['resource/skins/GameResult.exml'] = window.skins.GameResult = (function (_super) {
	__extends(GameResult, _super);
	function GameResult() {
		_super.call(this);
		this.skinParts = ["title","yellowCounts","greenCounts","bestScoreLabel","bestScore","leaf1","leaf2","leaf3","leaf4","leaf5"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.title_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.leaf1_i(),this.leaf2_i(),this.leaf3_i(),this.leaf4_i(),this.leaf5_i()];
	}
	var _proto = GameResult.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg";
		t.width = 640;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.fontFamily = "chiller";
		t.horizontalCenter = 0;
		t.size = 38;
		t.text = "The number of leaves you collect";
		t.textColor = 0x000000;
		t.verticalCenter = -100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 35;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 120;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.yellowCounts_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "yellow_leaf";
		t.width = 50;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "X";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 60;
		return t;
	};
	_proto.yellowCounts_i = function () {
		var t = new eui.Label();
		this.yellowCounts = t;
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 35;
		t.horizontalCenter = 0;
		t.verticalCenter = 50;
		t.width = 120;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this.greenCounts_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "X";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 60;
		return t;
	};
	_proto.greenCounts_i = function () {
		var t = new eui.Label();
		this.greenCounts = t;
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 80;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 35;
		t.horizontalCenter = 0;
		t.verticalCenter = 150;
		t.elementsContent = [this.bestScoreLabel_i(),this.bestScore_i()];
		return t;
	};
	_proto.bestScoreLabel_i = function () {
		var t = new eui.Label();
		this.bestScoreLabel = t;
		t.bold = true;
		t.fontFamily = "chiller";
		t.size = 32;
		t.text = "Best Score: X ";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bestScore_i = function () {
		var t = new eui.Label();
		this.bestScore = t;
		t.bold = true;
		t.fontFamily = "chiller";
		t.size = 32;
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 160;
		return t;
	};
	_proto.leaf1_i = function () {
		var t = new eui.Image();
		this.leaf1 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.y = 1050;
		return t;
	};
	_proto.leaf2_i = function () {
		var t = new eui.Image();
		this.leaf2 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = 121;
		t.y = 1102;
		return t;
	};
	_proto.leaf3_i = function () {
		var t = new eui.Image();
		this.leaf3 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = -49;
		t.y = 1102;
		return t;
	};
	_proto.leaf4_i = function () {
		var t = new eui.Image();
		this.leaf4 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = -53;
		t.y = 981;
		return t;
	};
	_proto.leaf5_i = function () {
		var t = new eui.Image();
		this.leaf5 = t;
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		t.x = 232;
		t.y = 1135;
		return t;
	};
	return GameResult;
})(eui.Skin);generateEUI.paths['resource/skins/GameScene.exml'] = window.skins.GameScene = (function (_super) {
	__extends(GameScene, _super);
	function GameScene() {
		_super.call(this);
		this.skinParts = ["yellowCounts","greenCounts"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i()];
	}
	var _proto = GameScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1136;
		t.source = "bg";
		t.width = 640;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 35;
		t.width = 120;
		t.x = 20;
		t.y = 10;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.yellowCounts_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "yellow_leaf";
		t.width = 50;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "X";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 60;
		return t;
	};
	_proto.yellowCounts_i = function () {
		var t = new eui.Label();
		this.yellowCounts = t;
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 80;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 35;
		t.width = 120;
		t.x = 150;
		t.y = 10;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this.greenCounts_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.source = "green_leaf";
		t.width = 50;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "X";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 60;
		return t;
	};
	_proto.greenCounts_i = function () {
		var t = new eui.Label();
		this.greenCounts = t;
		t.fontFamily = "chiller";
		t.height = 35;
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 80;
		return t;
	};
	return GameScene;
})(eui.Skin);