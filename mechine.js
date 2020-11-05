(function(){
  var mechien = window.mechine = function(){
    this.render();
  }

  mechine.prototype.update = function(){

  }

  mechien.prototype.draw = function(){
    var  ctx = Game.bkCtx;
    // 机器
    ctx.save();
    ctx.translate(Game.canvas.width/2,Game.canvas.height/2);
    drawTopBG();
    DrawBottomBg();
    
    // 底部
    function DrawBottomBg(){
      //  梯形的长短边
      var minW = Game.bkCanvas.width/2 - 40,
          maxW = Game.bkCanvas.width/2 - 30
          minH = Game.bkCanvas.width/4,
          maxH = Game.bkCanvas.width/3;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-minW,0);
      ctx.lineTo(minW,0);
      ctx.lineTo(maxW,minH - 40);
      ctx.arcTo(maxW,maxH,maxW - 15,maxH,15);
      ctx.arcTo(-maxW,maxH,-maxW,maxH - 15, 15);
      ctx.lineTo(-maxW,minH - 40);
      ctx.lineTo(-minW,0);
      ctx.closePath();
      ctx.fillStyle = '#c71a09';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#bd1805';
      ctx.fill();
  
      ctx.beginPath();
      ctx.moveTo(-minW,0);
      ctx.lineTo(minW,0);
      ctx.arcTo(maxW + 4,minH - 20,maxW - 24,minH - 20,20);
      ctx.arcTo(-maxW -2 ,minH - 20,-maxW,minH - 40, 20);
      ctx.lineTo(-minW,0);
      ctx.closePath();
      var bg1 = ctx.createLinearGradient(0,0,0,minH);
      bg1.addColorStop(0,'#ff9086');
      bg1.addColorStop(.3,'#fc5245');
      bg1.addColorStop(1,'#f02115');
      ctx.fillStyle = bg1;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur - 4;
      ctx.shadowColor = '#fa8987';
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(-minW + 60,maxH);
      ctx.quadraticCurveTo(-minW + 60, maxH -10,-minW + 75,maxH -10);
      ctx.lineTo(minW - 75, maxH -10,);
      ctx.quadraticCurveTo(minW - 60,maxH-10,minW - 60,maxH);
      ctx.lineTo(-minW - 60,maxH);
      ctx.closePath();
      ctx.fillStyle = '#991401';
      ctx.fill();

      // 画按钮
      ctx.beginPath();
      ctx.moveTo(-minW + 90,-4);
      ctx.arcTo(minW -80,-4,minW-74,0,10);
      ctx.lineTo(minW - 62,30);
      ctx.arcTo(minW-60,52,minW-68,52,8);
      ctx.arcTo(-minW+60,52,-minW+62,44,8);
      ctx.lineTo(-minW + 62,30);
      ctx.arcTo(-minW+80,-4,-minW+90,-4,10);
      ctx.closePath();
      let btBg = ctx.createLinearGradient(-minW + 90,0,minW - 90,0);
      btBg.addColorStop(0,'#fe8502');
      btBg.addColorStop(.5,'#fea70a');
      btBg.addColorStop(1,'#fe8502');
      ctx.fillStyle = btBg;
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#a92306';
      ctx.shadowOffsetY = 4;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-minW + 90,-4);
      ctx.arcTo(minW -80,-4,minW-74,0,10);
      ctx.arcTo(minW - 60,34,minW - 65,34,5);
      ctx.arcTo(-minW + 60,34,-minW + 62,28,5);
      ctx.arcTo(-minW + 80,-4,-minW + 90,-4,10);
      ctx.closePath();
      let btBg2 = ctx.createLinearGradient(0,-4,0,34);
      btBg2.addColorStop(0,'#ffed7d');
      btBg2.addColorStop(1,'#ffe21a');
      ctx.shadowBlur = 1;
      ctx.shadowColor = '#fdf47b';
      ctx.shadowOffsetY = 1;
      ctx.fillStyle = btBg2;
      ctx.fill();

      ctx.save();
      ctx.font = '24px STheiti, SimHei';
      ctx.fillStyle = '#fc3132';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('点击抽奖',0,15);
      ctx.restore();
    }
    // 顶部
    function drawTopBG(){
      var th = Game.bkCanvas.width/2 - 20;
          tw = Game.bkCanvas.width/2 - 38;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-tw,20);
      ctx.arcTo(-tw, -th - 50,-tw+40,-th - 50,40);
      ctx.arcTo(tw, -th - 50,tw,-th + 90,40);
      ctx.lineTo(tw,20);
      ctx.lineTo(-tw,20);
      ctx.closePath();
      var bg2 = ctx.createLinearGradient(-tw,0,tw,0);
      bg2.addColorStop(0,'#f3453f');
      bg2.addColorStop(.1,'#f9615c');
      bg2.addColorStop(.2,'#ef342b');
      bg2.addColorStop(.8,'#ef342b');
      bg2.addColorStop(.9,'#f9615c');
      bg2.addColorStop(1,'#f3453f');
      ctx.fillStyle = bg2;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-tw,20);
      ctx.arcTo(-tw, -th - 30,-tw+30,-th - 30,30);
      ctx.arcTo(tw, -th -30,tw,-th,30);
      ctx.lineTo(tw,20);
      ctx.lineTo(-tw,20);
      ctx.closePath();
      ctx.fillStyle = '#ff7e77';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-tw + 8,0);
      ctx.arcTo(-tw+8, -th -24,-tw+33,-th - 22,25);
      ctx.arcTo(tw-8, -th - 24,tw-8,-th + 3,25);
      ctx.lineTo(tw-8,0);
      ctx.lineTo(-tw + 8,0);
      ctx.closePath();
      var bg3 = ctx.createLinearGradient(-tw,-Game.bkCanvas.width/2,-tw,0);
      bg3.addColorStop(0,'#fb3d3d');
      bg3.addColorStop(.5,'#ff4546');
      bg3.addColorStop(1,'#ff6b69');
      ctx.fillStyle = bg3;
      ctx.shadowColor = '#c51c17';
      ctx.shadowBlur = 2;
      ctx.shadowOffsetY = -1;
      ctx.fill();

      // 画标题
      drawTitle('拼手气赢大奖',th);
      // 画内容
      drawContent(tw,th);

      ctx.restore();
    }

    function drawTitle(text,th){
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-60,-th - 40);
      ctx.arcTo(80,-th - 40, 80,-th-20,20);
      ctx.arcTo(80,-th, 60,-th,20);
      ctx.arcTo(-80,-th, -80,-th-20,20);
      ctx.arcTo(-80,-th - 40, -60,-th-40,20);
      ctx.closePath();
      var storkeColor1 = ctx.createLinearGradient(0,-th - 40,0,-th);
      storkeColor1.addColorStop(0,'#fecbca');
      storkeColor1.addColorStop(1,'#fe7165');
      ctx.fillStyle = storkeColor1;
      ctx.save();
      ctx.shadowColor = '#d62d28';
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 4;
      ctx.restore();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-56,-th - 36);
      ctx.arcTo(76,-th - 36, 76,-th +20,20);
      ctx.arcTo(76,-th -4, 56,-th -4,20);
      ctx.arcTo(-76,-th -4, -76,-th - 36,20);
      ctx.arcTo(-76,-th - 36, -56,-th - 36,20);
      ctx.closePath();
      var storkeColor2 = ctx.createLinearGradient(0,-th - 36,0,-th -4);
      storkeColor2.addColorStop(0,'#f75f56');
      storkeColor2.addColorStop(1,'#f23835');
      ctx.fillStyle = storkeColor2;
      ctx.fill();

      ctx.font = '16px STheiti, SimHei';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text,0,-th-20);
      ctx.restore();
    }

    function drawContent(tw,th){
      var br= 20,sr = 10;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(-tw+44,-th+14);
      ctx.arcTo(tw-24,-th+14,tw-24,-th+14 + br,br);
      ctx.arcTo(tw-24,-20,tw-24 -br,-20,br);
      ctx.arcTo(-tw+24,-20,-tw+24,-20 -br,br);
      ctx.arcTo(-tw+24,-th+14,-tw+24+br,-th+14,br);
      ctx.closePath();
      ctx.save();
      ctx.fillStyle = '#feca05';
      ctx.shadowColor = '#e44d44';
      ctx.shadowOffsetY = 6;
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.moveTo(-tw+54,-th+30);
      ctx.arcTo(tw-38,-th+30,tw-38,-th+30 +sr,sr);
      ctx.arcTo(tw-38,-34,tw-38 -sr,-34,sr);
      ctx.arcTo(-tw+38,-34,-tw+38,-34-sr,sr);
      ctx.arcTo(-tw+38,-th+30,-tw+30+sr,-th+30,sr);
      ctx.closePath();
      ctx.fillStyle = '#eb6f0d';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-tw+54,-th+34);
      ctx.arcTo(tw-38,-th+34,tw-38,-th+34+sr,sr);
      ctx.arcTo(tw-38,-34,tw-38-sr,-34,sr);
      ctx.arcTo(-tw+38,-34,-tw+38,-34-sr,sr);
      ctx.arcTo(-tw+38,-th+34,-tw+38+sr,-th+34,sr);
      ctx.closePath();
      ctx.fillStyle = '#c70c05';
      ctx.fill();
      ctx.clip();
      ctx.restore();

      drawPoint(-tw+24,-th+20,tw-24,-20);

      prizeContent(-tw+38,-th+34,tw-38,-34);
    }

    
    // 画奖品内容
    function prizeContent(sw,sh,ew,eh){
      ctx.save();
      const num = 3,
            pd = 8;
      let _w = ew - sw,
          rw = (_w - pd * (num + 1)) /num,
          rh = eh - sh;
      var prizeBg = ctx.createLinearGradient(sw,sh,sw,eh);
      prizeBg.addColorStop(0,'#bcbcbc');
      prizeBg.addColorStop(.3,'#f4f4f6');
      prizeBg.addColorStop(.5,'#ffffff');
      prizeBg.addColorStop(.7,'#f4f4f6');
      prizeBg.addColorStop(1,'#bcbcbc');
      ctx.fillStyle = prizeBg;
      for(let i = 1; i<=num;i++){  
        ctx.beginPath();
        ctx.fillRect(sw + i*pd + (i-1)*rw,sh,rw,rh);
        ctx.closePath();
      }
      ctx.restore();
    }

    function drawPoint(sx,sy,ex,ey){
      ctx.save();
      let num = 20,
          r = 4;
      var l = ((ey - sy) + (ex - sx))*2;
      // console.log(l)
      // console.log((ex - sx))
      // console.log((ex - sx)+(ey-sy))
      // 计算间距
      var mg = l/num,
          pd = 2,
          x = 0,
          y = 0,
          dx = 0,
          dy = 0;
      for(let i = 0;i<num;i++){
        dx = 2*r + i*mg + pd;
        if(dx<ex - sx){
          x = sx + dx;
          y = sy + pd;
        }else if(dx>ex - sx && dx < l/2){
          dy += mg
          x = ex - 2*r + pd/2;
          y = sy + dy;
        }else if(dx > l/2 && dx < l - (ey-sy)){
          x = sx;
          y = ey - pd;
        }else{
          x = sx + 2*r - pd/2;
          y = sy + pd + mg;
        }
        ctx.beginPath();
        ctx.arc(x,y,r,0,Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();
  }

  mechine.prototype.render = function(){
    this.draw();
  }

})()