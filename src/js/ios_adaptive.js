
function addAdaptTo_blockDepart(){
  var compblocks = document.querySelectorAll(".compblock");

  if(compblocks){
    compblocks.forEach(item => {
      item.style.display="-webkit-box";
    });
  }
}

var currentUserAgent = navigator.userAgent.toLowerCase();
var isIphone = currentUserAgent.indexOf('iphone') > -1 || currentUserAgent.indexOf('ipad') > -1;
var isSafari = (currentUserAgent.indexOf('safari') > -1 && currentUserAgent.indexOf('win') === -1) && (currentUserAgent.indexOf('mobile') === -1 || isIphone);

if (isSafari){
  console.log("safari adaptive is started");
  addAdaptTo_blockDepart();
}
