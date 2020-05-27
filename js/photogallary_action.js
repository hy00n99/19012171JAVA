function showing(element){
  document.getElementById("name").innerHTML=element.alt;
  x=document.getElementById("photo");
  var imgs = document.getElementsByTagName('img');
  if (element.alt=="쯔위"){
    x.src=src="imgs/twice1.jpg";
  }
  if (element.alt=="사나"){
    x.src=src="imgs/twice2.jpg";
  }
  if (element.alt=="정연"){
    x.src=src="imgs/twice3.jpg";
  }
  if (element.alt=="다현"){
    x.src=src="imgs/twice4.jpg";
  }
  if (element.alt=="채영"){
    x.src=src="imgs/twice5.jpg";
  }
  if (element.alt=="나연"){
    x.src=src="imgs/twice6.jpg";
  }
  if (element.alt=="모모"){
    x.src=src="imgs/twice7.jpg";
  }
  if (element.alt=="미나"){
    x.src=src="imgs/twice8.jpg";
  }
  if (element.alt=="지효"){
    x.src=src="imgs/twice9.jpg";
  }
  //x.src="imgs/twice1.jpg";
  //x.src="imgs/twice2.jpg";
  //document.getElementById("photo").innerHTML=element.src;
  //document.getElementById("photo").src="imgs/twice9.jpg";
  //var x=document.getElementsByTagName('img')[0];
  //document.getElementById("photo").innerHTML=x[0].src;
//  var y=document.getElementsByTagName('img');
//  for (var i=0;i<y.length;i++){
    //x.src=y[i].src;
  //}
  //  x=y[i];
  //}
}
function original(){
  document.getElementById("name").innerHTML="여기에 사진이 크게 들어갑니다.";
  document.getElementById("photo").src="imgs/users.png";
}
