function showResult(str) {
  event.preventDefault(); // Förhindrar att requesten cancelleras
  if (window.XMLHttpRequest) {
    // IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // IE6, IE5
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