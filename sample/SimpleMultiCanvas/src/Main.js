window.onload = main();

function main() {

    // Live2Dの初期化
    Live2D.init();
    
    var chara = [];
    var canvas = [];
    var charaNum = 4;
    
    for (var i = 0; i < charaNum; i++) {
        chara[i] = new Simple();
        canvas[i] = initCanvas("glcanvas" + i);
        chara[i].initLoop(canvas[i]);
    }
    
    return;
}


function initCanvas(canvasId) {
    
    // canvasオブジェクトを取得
	var canvas = document.getElementById(canvasId);
    
    // コンテキストを失ったとき
    canvas.addEventListener("webglcontextlost", function(e) {
        Simple.myerror("context lost");
        loadLive2DCompleted = false;
        initLive2DCompleted = false;
        
        var cancelAnimationFrame = 
            window.cancelAnimationFrame || 
            window.mozCancelAnimationFrame;
        cancelAnimationFrame(requestID); //アニメーションを停止
        
        e.preventDefault(); 
    }, false);
    
    // コンテキストが復元されたとき
	canvas.addEventListener("webglcontextrestored" , function(e){
        Simple.myerror("webglcontext restored");
        Simple.initLoop(canvas); 
    }, false);
    
    return canvas;
}
