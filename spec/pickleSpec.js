describe("pickle", function(){
  var p
  beforeEach(function(){
    p = pickle([1,2,3])
  })
  it("is a function", function(){
    expect(typeof pickle).toBe("function") 
  })
  it("can pickle an array", function(){
    expect(p).toBeTruthy()
  })
  it("can depickle an array", function(){
    expect(p.depickle()).toEqual([1,2,3])
  })
  it("can save to url", function(){
    p.toUrl() 
    expect(window.location.hash).toBeTruthy()
  })
  it("can depickle from url", function(){
    var d = p.fromUrl() 
    expect(d).toEqual(p.depickle())
    var dataTypes = [
      null, 
      undefined,
      "",
      1,
      function(){},
      function named(a,b){ return a * b },
      ["array","of", {
        complex: "things",
        jam: function(){
	  console.log("yeah")
	}
      }]
    ]
    for( var i = 0; i < dataTypes.length; i++ ){
      p = pickle(dataTypes[i])
      p.toUrl()
      if(typeof p.fromUrl() == "function"){
	expect(p.fromUrl()()).toEqual(dataTypes[i]())
      }else{
	expect(p.fromUrl()).toEqual(dataTypes[i])
      }
    }
  })

})
