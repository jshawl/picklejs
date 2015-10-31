function pickle( anything ){
  return {
    toString: function(){
      if(typeof anything == "function"){
        return anything.toString()
      }
      try {
	var d = JSON.stringify(anything, function(key, value){
	  if(typeof value == "function"){
	    return value.toString()
	  } else {
	    return value
	  }
	})	      
      } catch (e) {
	console.error("Unable to pickle!",e,anything)
      }
      return d
    },
    base64Encode: function(){
      return btoa(this.toString())		  
    },
    toUrl: function(){
      window.location.hash = this.base64Encode()	   
    },
    fromUrl: function(){
      var string = window.location.hash.substr(1) 	     
      try {
	var d = JSON.parse(atob(string))
      } catch (e) {
	var d = new Function("return " + atob(string))();
      }
      return d
    },
    depickle: function(){
      return anything	      
    }
  }
}