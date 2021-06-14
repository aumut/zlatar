
(function () {

  function getStyle(elem, propertyName) {
      return elem!=null ? getComputedStyle(elem)[propertyName] : 0;
  }
  function getElemHeight(elem, padding, margin){
    var paddings_h = 0;
    var margins_h = 0;
    if (elem){
      if (padding) paddings_h = getPaddingsHeight(elem);
      if (margin) margins_h = getMarginsHeight(elem);
      const sum = elem.clientHeight + paddings_h + margins_h;
      // console.log("elem.clientHeight = "+ elem.clientHeight);
      // console.log("elem.paddings_h = " + paddings_h);
      // console.log("elem.margins_h = " + margins_h);
      // console.log("element_height = "+ sum);
      return sum;
    }else return 0;
  }
  function getPaddingsHeight(elem){
    var paddings_h = 0;
    if (elem){
      const padding_t = parseInt(getStyle(elem, 'padding-top'))
      const padding_b = parseInt(getStyle(elem, 'padding-bottom'))
      paddings_h = (isNaN(padding_t)?0:padding_t) + (isNaN(padding_b)?0:padding_b);
    }
    return paddings_h;
  }
  function getMarginsHeight(elem){
    var margins_h = 0;
    if (elem){
      const margin_t = parseInt(getStyle(elem, 'margin-top'));
      const margin_b = parseInt(getStyle(elem, 'margin-bottom'))
      // console.log("margin_t = "+ margin_t);
      // console.log("margin_b = "+ margin_b);
      margins_h = (isNaN(margin_t)? 0 : margin_t) + (isNaN(margin_b)? 0 : margin_b);
    }
    return margins_h;
  }
  function getParagraphsHeight(){
    const paragraphs_ci = document.querySelectorAll(".content-item__in>p");
    const paragraphs_cc = document.querySelectorAll(".content__center>p");

    var paragraphs_h = 0;
    var paragraphs_ci_h = 0;
    var paragraphs_cc_h = 0;
    if (paragraphs_ci && paragraphs_ci.length>0){
      console.log("paragraphs_ci inside");
      for (var i=0; i<paragraphs_ci.length; i++){
        paragraphs_ci_h += getElemHeight(paragraphs_ci[i], false, true)
      }
    }else if (paragraphs_cc && paragraphs_cc.length>0){
      for (var i=0; i<paragraphs_cc.length; i++){
        paragraphs_cc_h += getElemHeight(paragraphs_cc[i], false, true)
      }
    }
    paragraphs_h = paragraphs_ci_h + paragraphs_cc_h;
    return paragraphs_h;
  }

  function setHeight_Content_In(content_in){
    //console.log("--вычислением высоты .content-in--");
    //вычисление высоты .content-in
    // console.log("content in 1");
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    //........................................................................//
    const container = document.querySelector(".container");
    var container_h = getPaddingsHeight(container);
    //console.log("container_h = "+container_h);
    //........................................................................//
    const content = document.querySelector(".content");
    var content_h = getPaddingsHeight(content);
    //........................................................................//
    const page_header = document.querySelector(".header");
    var page_header_h = getElemHeight(page_header, false, true);
    //console.log("page_header_h = "+ page_header_h)
    //........................................................................//
    const page_footer = document.querySelector(".footer");
    // console.log("page footer ---------");
    var page_footer_h = page_footer!=null ? getElemHeight(page_footer, false, true) : 0;
    //console.log("page_footer = "+page_footer.clientHeight);
    //........................................................................//
    let leftSide_h = 0;
    if (windowWidth <= 568) {
      const leftSide = document.querySelector('.left-side');
      leftSide_h = leftSide.clientHeight;
    }
    //........................................................................//
    var sum = container_h +
              content_h +
              leftSide_h + //высота хедера в мобильной версии
              page_header_h +
              page_footer_h;
    // console.log("container_h = " + container_h + "; content_h = " + content_h +
    //             "; leftSide_h = " + leftSide_h + "; page_header_h = " + page_header_h +
    //             "; page_footer_h = "+ page_footer_h);
    // console.log("sum = " + sum);
    // console.log("windowHeight = "+windowHeight);
    var content_in_h = windowHeight - sum;
    content_in.style.height = content_in_h + "px";
    //console.log("content_in_h = "+content_in_h);
    // //console.log("-- -- -- -- --");
    return content_in_h;
  }

  function setHeight_Content__Center(content__center, content_in_h){
    //console.log("--вычислением высоты .content__center--");
    // console.log("----------------- content center 2 ----------------");
    const content__center_margins = getMarginsHeight(content__center);
    //........................................................................//
    const content__header = document.querySelector(".content__header");
    var content__header_h = getElemHeight(content__header, false, true);
    //........................................................................//
    const content__footer = document.querySelector(".content__footer");
    // console.log("~~~content__footer_h~~~")
    var content__footer_h = getElemHeight(content__footer, false, true);
    content__footer_h = content__footer_h>30 ? 30 : content__footer_h;
    //........................................................................//
    const breadcrumbs = document.querySelector(".breadcrumbs");
    var breadcrumbs_h = getElemHeight(breadcrumbs, false, true);
    //........................................................................//
    var sum = content__header_h +
              content__footer_h +
              //breadcrumbs_h +
              content__center_margins;
    // console.log("content__header_h = "+ content__header_h + '\n' +
    //               "; content__footer_h = " + content__footer_h + '\n' +
    //               "; breadcrumbs_h = " + breadcrumbs_h + '\n' +
    //              "; content__center_margins = " + content__center_margins);
    // console.log("sum = " + sum);

    var content__center_h = content_in_h - sum;
    content__center.style.height = content__center_h + "px";
    // console.log("content__center_h = "+content__center_h);
    //content__center.style.backgroundColor = "blue";
    //console.log("-- -- -- -- --");
    return content__center_h;
  }

  function setHeight_Content_Wrap(content__center_h){
    //вычисление высоты .content-wrap
    // console.log(" ----------------- content wrap 3 -----------------");
    var content_wrap = document.querySelector(".content-wrap");
    const content_wrap_margins = getMarginsHeight(content_wrap);
    const paragraphs_h = getParagraphsHeight();

    const pagination = document.querySelector('.pagination');
    let pagination_h = getElemHeight(pagination, false, false);


    const breadcrumbs = document.querySelector(".breadcrumbs");
    var breadcrumbs_h = getElemHeight(breadcrumbs, false, true);

    // console.log("paragraphs_h = " + paragraphs_h + '\n' +
    //             "pagination_h = " + pagination_h + '\n' +
    //             "content_wrap_margins = " + content_wrap_margins + '\n' +
    //             "breadcrumbs_h = "+ breadcrumbs_h);

    const sum =  paragraphs_h + pagination_h + content_wrap_margins + breadcrumbs_h;
    const content_wrap_h = content__center_h  - sum;
    // console.log("content_wrap_h = " + content_wrap_h);
    // content_wrap.style.backgroundColor = "grey";
    content_wrap.style.height = content_wrap_h + "px";
  }

  function setHeight_Content_About(content_about){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    console.log("content about 4");
    var content_in = document.querySelector(".content-in");
    //........................................................................//
    //вычислить высоту содержимого .content-in
    const content_in_mt = parseInt(getStyle(content_in, 'margin-top'));
    const content_in_mb = parseInt(getStyle(content_in, 'margin-bottom'));
    const content_in_paddings = getPaddingsHeight(content_in);
    const content__header = document.querySelector(".content__header");
    const content_header_h = getElemHeight(content__header, true, true);
    const content__footer = document.querySelector(".content__footer");
    const content__footer_h = getElemHeight(content__footer, true, true);
    var paragraphs_h = getParagraphsHeight();
    var content_in_h_fact = content_header_h +
                            content__footer_h +
                            content_in_paddings +
                            paragraphs_h;
    //........................................................................//
    const container = document.querySelector(".container");
    var container_h = 0;
    var container_pt = 0;
    var container_pb = 0;
    if (container){
      container_pt = parseInt(getStyle(container, 'padding-top'));
      container_pb = parseInt(getStyle(container, 'padding-bottom'));
    }
    //........................................................................//
    const page_header = document.querySelector(".header");
    var page_header_h = getElemHeight(page_header, false, true) + container_pt;
    //........................................................................//
    const page_footer = document.querySelector(".footer");
    var page_footer_h = getElemHeight(page_footer, false, true) + container_pb;
    //........................................................................//
    //вычисляем высоту радиусов баннера
    const left_side = document.querySelector(".left-side");
    var left_side_rh = 0;
    if (left_side){
      const border_t = parseInt(getStyle(left_side, 'border-top-right-radius'));
      const border_b = parseInt(getStyle(left_side, 'border-bottom-right-radius'));
      var top_space = page_header_h > border_t ? page_header_h : border_t;
      top_space = top_space > content_in_mt ? top_space : content_in_mt;
      var bot_space = page_footer_h > border_b ? page_footer_h : border_b;
      left_side_rh = top_space + bot_space;
    }
    //........................................................................//
    var content_in_h = windowHeight - left_side_rh;
    if (windowHeight>768 && windowWidth>768){
      if (content_in_h < content_in_h_fact){
        content_in.style.height = content_in_h + "px";
        //content_in.style.minHeight = "initial";
      }else {
        content_in.style.height = content_in_h_fact + "px";
        //content_in.style.minHeight = "initial";
      }
    }else{
      content_in.style.height = ""
    }
  }

  function calculateBlocksHeight(){
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    if (windowHeight>568 && windowWidth>568){
      //alert("script started")

      var content_in = document.querySelector(".content-in");
      const content_in_h = content_in!=null? setHeight_Content_In(content_in) : 0;

      var content__center = document.querySelector(".content__center");
      const content__center_h = content__center!=null ? setHeight_Content__Center(content__center, content_in_h) : 0;

      var content_wrap = document.querySelector(".content-wrap");
      if (content_wrap) setHeight_Content_Wrap(content__center_h);

      const content_about = document.querySelector(".content-about");
      if (content_about) setHeight_Content_About(content_about);
    }
  }

  calculateBlocksHeight();

  window.addEventListener("resize", calculateBlocksHeight);

})();
