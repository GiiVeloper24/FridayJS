(function(){
    var version = "1.0.0",
    FridayJS = function(selector){

        if(window===this){
            return new FridayJS(selector);
        }

        if(selector){
            this.element = document.querySelector(selector);
        }

        return this;

    }

    FridayJS.prototype = {
      version:version,
      hide : function(){
        this.element.style.display = 'none';
        return this;
      },
      show : function(){
        this.element.style.display = 'inherit';
        return this;
      },
      submit : function(cb){
        this.element.addEventListener('submit',cb)
      },
      val : function(){
        return this.element.value;
      },
      text : function(txt){
        this.element.innerHTML = txt;
        return this;
      },
      magic : function(str,cb){
        var temp = str.split("");
        for(var i in temp){
          (function(f,count){
            setTimeout(function(){
              f.element.innerHTML += temp[count];
            },i*300 + f.getRandomMilis());

            setTimeout(function(){
              if(count + 1==temp.length){
                if(cb) cb();
              }
            },(temp.length + 1) * 300);
          })(this,i)
        }
      },
      getRandomMilis : function(){
        var milis = Math.floor((Math.random() * 200) + 300);
        return milis;
      }
    }

    FridayJS.bodyColor = function(color){
      document.querySelector("body").style.background = color;
    }

    window.FridayJS = window._ = FridayJS;
})()