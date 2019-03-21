
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"content{ height: ",[0,1400],"; background: #EEEEEE; }\n",],undefined,{path:"./pages/my/expression.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/my/expression.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      