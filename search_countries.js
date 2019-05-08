function showResult(str) {
    if (str.length==0) { 
      document.getElementById("livesearch").innerHTML="";
      document.getElementById("livesearch").style.border="0px";
      return;
    }
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {  // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        let responseObj = this.responseText;
        let jsonObject = JSON.parse(responseObj);
        alert(jsonObject[0].name);
      }
      else if (this.readyState==4 && this.status==404){
        alert("Inga länder hittades");
      }
    }
    xmlhttp.open("GET","https://restcountries.eu/rest/v2/name/"+str+"?fullText=true",true);
    xmlhttp.send();
  }