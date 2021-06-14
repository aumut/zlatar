// (function () {
  //collapse other descr block, for example: if you click to collapse activity descr block then
  //management descr block will be opened
  function otherBlockOpen(block, other_subblock_name){
    const main_parent = block.closest(".compblock");
    const other_subblock = main_parent.querySelector(".compblock-sub."+other_subblock_name);
    const other_subblock_descr = other_subblock.querySelector(".compblock-sub__descr");

    const attrs = other_subblock.getAttribute("class").replace("collapsed", "opened");
    other_subblock.setAttribute("class", attrs)

  }
  //collapse other descr block, for example: if you click to show activity descr block then
  //management descr block will be collapsed
  function otherBlockCollapse(block, other_subblock_name){
    const main_parent = block.closest(".compblock")
    const other_subblock = main_parent.querySelector(".compblock-sub."+other_subblock_name);
    const other_subblock_descr = other_subblock.querySelector(".compblock-sub__descr")

    const attrs = other_subblock.getAttribute("class").replace("opened", "collapsed");
    other_subblock.setAttribute("class", attrs)
  }
  //collapse descr block
  function collapseBlock(block ){
    const colapsedBlock = block.querySelector(".compblock-sub__descr");
    var attrs = block.getAttribute("class").replace("opened", "collapsed");
    if(block.getAttribute("class").includes("activity")){
      otherBlockOpen(block, "management");
    }else if (block.getAttribute("class").includes("management")) {
      otherBlockOpen(block, "activity");
    }
    block.setAttribute("class", attrs)
  };

  //show descr block
  function showBlock(block){
    const colapsedBlock = block.querySelector(".compblock-sub__descr");
    var attrs = block.getAttribute("class").replace("collapsed", "opened");

    if(block.getAttribute("class").includes("activity")){
      otherBlockCollapse(block, "management");
    }else if (block.getAttribute("class").includes("management")) {
      otherBlockCollapse(block, "activity");
    }
    //alert("attrs = "+ attrs);
    block.setAttribute("class", attrs)
  };

  //collapse all compblocks
  function collapseAllCompblocks(){
    const comblocks = document.querySelectorAll(".compblock");
    //collapse all childs of comblock
    for (var i=0; i< comblocks.length ; i++){
      var comblock_activity = comblocks[i].querySelector(".compblock-sub.activity");
      comblock_activity.setAttribute("class", "compblock-sub activity collapsed");
      var comblock_manag = comblocks[i].querySelector(".compblock-sub.management");
      comblock_manag.setAttribute("class", "compblock-sub management collapsed");
    }
  }
  //adaptive calculation
  function adaptiveView(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const comblocks = document.querySelectorAll(".compblock");
    //when screen width less or equal to 1024px
    if (windowWidth <=1024){
      //collapse 2d and 3d child of comblock
      for (var i=1; i< comblocks.length ; i++){
        var comblock_activity = comblocks[i].querySelector(".compblock-sub.activity");
        comblock_activity.setAttribute("class", "compblock-sub activity collapsed");
        var comblock_manag = comblocks[i].querySelector(".compblock-sub.management");
        comblock_manag.setAttribute("class", "compblock-sub management collapsed");
      }
    }if (windowHeight<=700){
      collapseAllCompblocks();
    }
  }
  //========================================================================================
  // click on Title
  function clickTitleEvent(block, item, adaptive){
    if(block.getAttribute("class").includes("opened")){
      if (!adaptive){
        collapseBlock(block)
      } else {
        collapseAllCompblocks()
      }
    }else if (block.getAttribute("class").includes("collapsed")){
      if(adaptive)collapseAllCompblocks();
      showBlock(block);
    }
  }
  const title = document.querySelectorAll(".title");
  const content_depart = document.querySelector(".content-depart");
  const windowWidth = window.innerWidth;
  if(content_depart && title){
    title.forEach(item => {
      item.addEventListener('click', event => {
        //if screen width is 1024px then only one comblock can be
        //opened and other will be collapsed totally
        const  block = item.closest(".compblock-sub");
        if (windowWidth <=1024){
          clickTitleEvent(block, item, true);
        }else{
          clickTitleEvent(block, item, false);
        }
      });
    });
  }
  //adaptive calculation
  adaptiveView();
  //========================================================================================

//
// })
