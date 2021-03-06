(function(){
  var Game = window.Game = function(params){
    this.bkCanvas = document.createElement('canvas');
    this.bkCtx = this.bkCanvas.getContext('2d');
    
    this.canvas = document.querySelector(params.id);
    this.ctx = this.canvas.getContext('2d');

    this.prizeList = [
      './imgs/p1.png',
      './imgs/p2.png',
      './imgs/p3.png',
      './imgs/p4.png',
      './imgs/p5.png',
      './imgs/p6.png',
    ];
    
    this.defaultValue = [0,1,2];

    this.init();
    this.loadResource(()=>{
      this.render();
    })
    
  }

  Game.prototype.init = function(){
    var winW = window.innerWidth,
        winH = window.innerHeight;
    this.canvas.height = this.bkCanvas.height = winH;
    this.canvas.width = this.bkCanvas.width = winW;
  }


  Game.prototype.loadResource = function(callBack){
    setTimeout(() => {
      callBack && callBack();
    }, 500);
  }

  Game.prototype.render = function(){
    // 实例化机器
    this.mechine = new mechine();
    this.ctx.drawImage(this.bkCanvas,0,0);
  }


  Game.prototype.update = function(){

  }

  Game.prototype.animate = function(){

  }
})()