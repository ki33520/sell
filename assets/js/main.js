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
});

$('.btn-popup').each(function(){
	$(this).on('click',function(){
		var popup = $(this).data('popup');
		$(popup).show();
	})
});
$('.popup').each(function(){
	var self = this;
	function hidePopUp(){
		$(self).hide();
	}
	$(this).find('.popup-masker').on('click',hidePopUp);
	$(this).find('.popup-close').on('click',hidePopUp);
	$(this).find('.btn-close').on('click',hidePopUp);
});

$('.form-withdraw .btn-submit').click(function(){
	var sum = $.trim($('#sum').val());
	if(sum===''){
		var popup = $(this).data('popup');
		$(popup).show();
		return false;
	}
})