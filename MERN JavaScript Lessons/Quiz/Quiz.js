let fun1 = (val1,val2)=>{
    let m1 = val1>5?"more than 5":"less than 5"
    val2(m1)
  }
  
  fun1(6,(data)=>{
    if(data){
      console.log(data)
    }else{
      console.log("some error occurred")
    }
  })