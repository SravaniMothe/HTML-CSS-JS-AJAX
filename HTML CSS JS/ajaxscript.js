function submitloginRequest(){
    const xhr = new XMLHttpRequest();
    xhr.open("get","login.JSON",true)
    
    xhr.onprogress=function(){
        console.log("on progress")
    } // to get the progress 
    xhr.onreadystatechange=function(){
        console.log(this.readyState);
    }
    //what to do when response is ready
    xhr.onload=function(){
      //  document.write(this.responseText);
      console.log(this.responseText);
    }
    xhr.send();
    console.log("success")

}

function writeJsonIntoFile(data){
    const fs = require('fs')
    fs.writeFile('login.JSON',data,(err)=>{
        if(err)throw err;
    })
    submitloginRequest()
}