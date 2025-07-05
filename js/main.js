document.querySelector("#form-vaild").addEventListener("submit",function(event){
    var works = document.querySelector("#works").value;
    var result = document.querySelector("#result");

    if(works==""){
        alert("Enter Value");
        event.preventDefault();
    }else{
        var myLi = document.createElement("li");
        myLi.innerHTML = works;
        result.append(myLi);
        document.querySelector("#works").value ='';
        event.preventDefault();
        
    }

})