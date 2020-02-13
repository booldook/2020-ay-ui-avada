$(".navi-wrap").children("li")
.mouseenter(function(){
	$(this).find(".navi-sub").show();
})
.mouseleave(function(){
	$(this).find(".navi-sub").hide();
})