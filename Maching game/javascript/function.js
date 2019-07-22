
var arr=["error",'mail',"attach_money",'headset',"collections",'filter_vintage',"flight",'notifications_active',
"error",'mail',"attach_money",'headset',"collections",'filter_vintage',"flight",'notifications_active'];
function shuffle(arra1) {
    let ctr = arra1.length;
    let temp;
    let index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
//console.log(shuffle(arr));
// (function LoadImge(){
//     shuffle(arr);
//     for(var i=1;i<=16;i++){
//       var i1 = (i)*100+1 , i2 = (i)*100+2;
//       document.getElementById(i1.toString()).innerHTML = arr[i-1];
//       document.getElementById(i2.toString()).innerHTML = arr[i-1];
//     }
//  })();

function LoadImge(){
    shuffle(arr);
    for(var i=1;i<=16;i++){
        var i1 = (i)*100+1 , i2 = (i)*100+2;
        document.getElementById(i1.toString()).innerHTML = arr[i-1];
        document.getElementById(i2.toString()).innerHTML = arr[i-1];
    }
}

var moves=0;
var input=[];
var blackList=[];// nếu hình nào đã bấm rồi sẽ cho id của hình đó vào arr này 
var times=0;
function Open(b) {


//Nếu b nằm trong blackList thì không thực hiện tiếp
    if(blackList.includes(b))
    return;

    input.push(b);
    var element = document.getElementById(b);
    element.classList.add("active");
    moves++;

    document.getElementById("moves").innerHTML=moves;
    if(moves%2==0){//Nếu kiểm tra hai hình không giống nhau thì gọi hàm Close

        if(check()==false){
            setTimeout(function(){Close(input[0]),Close(input[1]);},500);      
        }   
        else{
            Ok(input[0]);
            Ok(input[1]);
            setTimeout(function(){nOk(input[0]),nOk(input[1]);},500);
            blackList.push(input[0]);
            blackList.push(input[1]); 
            if(blackList.length==16){
                //code here.. Xuất thông báo win gọi hàm refresh game
                showModal();
                //refresh();
            }
        }
        setTimeout(function(){input.splice(0, 2);},530);
    }  
}

function Close(b) {
var element = document.getElementById(b);
element.classList.remove("active");
}
function Ok(b) {
    var element = document.getElementById(b);
    element.classList.add("ok");
}
function nOk(b) {
    var element = document.getElementById(b);
    element.classList.remove("ok");
}
function check(){  
var i1=(input[0]*100+1).toString();
var i2=(input[1]*100+1).toString();
if( document.getElementById(i1).innerHTML== document.getElementById(i2).innerHTML && input[0]!=input[1])
return true;
return false;
}

function refresh(){
    for(var i=1;i<=16;i++)
        Close(i);
    LoadImge();
    moves=0;
    input=[];
    times=0;
    blackList=[];
    document.getElementById("moves").innerHTML=moves;
}
var myVar = setInterval(time, 1000);
function time(){
    if (moves>0 && blackList.length<16) 
    {
        times++;
        document.getElementById("time").innerHTML= times+"s";
    }
    else
    document.getElementById("time").innerHTML=times+"s";
}
//Show modal
function showModal()
{
    document.getElementById("move").innerHTML=moves;
    document.getElementById("timee").innerHTML=times+"s";
    $(document).ready(function(){
      // Show the Modal on load
      $("#myModal").modal("show");
        
      // Hide the Modal
      $("#myBtn").click(function(){
        $("#myModal").modal("hide");
      });
    });
  }
//Js nút restart
const body = document.body;
const btn = document.querySelectorAll('.button')[0];

btn.addEventListener('mouseenter', () => {
	body.classList.add('show');
});

btn.addEventListener('mouseleave', () => {
	body.classList.remove('show');
});
/////////////////////

//Moves
jQuery(document).ready(function($){
 
    var bArray = [];
    var sArray = [4,6,8,10];
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    setInterval(function(){
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 1000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
 
});