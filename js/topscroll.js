$(function () {
  $(document).ready(function () {
  /***************************

  locomotive scroll

  ***************************/
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#trm-scroll-container'),
    smooth: true,
    lerp: .1,
    reloadOnContextChange: true
  });

  $("#go_top").hide();
  scroll.on('scroll', (instance) => {
  
      const progress = 360 * instance.scroll.y / instance.limit.y;
      if (progress > 50){
          $("#go_top").slideDown(500);
      }else{
          $("#go_top").slideUp(500);
      }
      document.documentElement.setAttribute('data-direction', instance.direction)
      //返回顶部按钮点击
  });
  $("#go_top").click(function(){
      scroll.scrollTo(0)
  });
  });

});