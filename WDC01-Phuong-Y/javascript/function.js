
function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};
//Đặt ảnh cho front
function setImage(){
    var i=0;
    for(i;i<=15;i++){
        
        //  document.getElementById(i.toString()).style.backgroundImage = "url('../resource/avatar.jpg')";
       // document.getElementById(i.toString()).style.backgroundImage = "url('avatar.jpg')";
       //document.getElementById(i.toString()).style.backgroundImage ='url('+'avatar.jpg'+')';
      //  document.body.style.backgroundImage = "url('avatar.jpg')";
        document.getElementById(i.toString()).style.backgroundColor="red";
      
    }
}

function LoadImg(){
    var img=['a1.jpg',"a2.jpg",'b1.jpg',"b2.jpg",'c1.jpg',"c2.jpg",'d1.jpg',"d2.jpg",'e1.jpg',"e2.jpg",'f1.jpg',"f2.jpg",'g1.jpg',"g2.jpg",'h1.jpg',"h2.jpg"];

    shuffle(img);

    for(var i=0;i<=15;i++){
        document.getElementById(i.toString()).style.backgroundImage= 'url('+img[i].toString+')';
    }


}

function Check(){

}