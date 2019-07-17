class GameManager extends egret.Sprite {
    private mSceneType:MyDefine.enSceneType=MyDefine.enSceneType.enScene_Lobby;
    private static _instance: GameManager;
    private gameLobby:GameLobby;
    private gameScene:GameScene;
    private gameResult:GameResult;
    public static GetInstance():GameManager {
        return GameManager._instance;
    }
    public constructor() {
        super();
        GameManager._instance = this;
    }
    public start() {
        this.gameLobby = new GameLobby();
        this.addChild(this.gameLobby);
        this.gameLobby.Start();
    }
    //设置当前场景，（场景改变后，必须人为设置当前场景，才能保证每次得到当前场景正确）
    public SetSceneType(sceneType:MyDefine.enSceneType){
        this.mSceneType=sceneType;
    }
    //改变场景。
    public ChangeScene(sceneType:MyDefine.enSceneType){
       //必须实现 其它逻辑随时可能调用这个函数来改变场景
       this.SetSceneType(sceneType);       
       switch(sceneType) {
           case 0:
                //enScene_Lobby
                if(this.gameResult && this.gameResult.parent) {
                    this.gameResult.End();
                    this.removeChild(this.gameResult);
                    this.gameLobby = new GameLobby();
                    this.addChild(this.gameLobby);
                    this.gameLobby.Start();
                }
                break;
           case 1:
                //enScene_Game
                if(this.gameLobby && this.gameLobby.parent) {
                    this.gameLobby.End();
                    this.removeChild(this.gameLobby);
                    this.gameScene = new GameScene();
                    this.addChild(this.gameScene);
                    this.gameScene.Start();
                }
                break;
           case 2:
                //enScene_Result
                if(this.gameScene && this.gameScene.parent) {
                    this.gameScene.End();
                    this.removeChild(this.gameScene);
                    this.gameResult = new GameResult();
                    this.addChild(this.gameResult);
                    this.gameResult.Start();
                }
                break;
       }
    }
}