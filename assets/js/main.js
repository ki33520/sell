// alert($(window).width())
$('.icon-toggle').on('click',function(){
	$('.product-content').toggleClass('active');
});

$('.tab-block').each(function(){
	var self = this;
	var nav_item = $(this).find('.tab-nav .tab-nav-item');
	var content_item = $(this).find('.tab-content .tab-content-item');
	function setActive(index){
		nav_item.removeClass('active');
		nav_item.eq(index).addClass('active');
		content_item.removeClass('active');
		content_item.eq(index).addClass('active');
	}
	$(this).find('.tab-nav .tab-nav-item').each(function(index,item){
		$(item).on('click',function(){
			setActive(index);
		})
	})
})