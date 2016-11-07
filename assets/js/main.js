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
$('#withdraw-btn').on('click',function(){
	var sum = $.trim($('#sum').val());
	if(sum==='' || Number(sum) < 50){
		var popup = $(this).data('popup');
		$(popup).show();
		return false;
	}
})
$('#apply-btn').on('click',function(){
	var self = this;
	var popup = $(this).data('popup');
	$(popup).show();
	setTimeout(function(){
		window.location.href = $(self).attr('href');
	},2000)
	return false;
});
$('.btn-buy').on('click',function(){
	$('.product-buy').show();
	$(this).hide();
	$('.btn-confirm').show();
});
$('.product-buy .close').on('click',function(){
	$('.product-buy').hide();
	$('.btn-buy').show();
	$('.btn-confirm').hide();
});
$('.add-sub').each(function(){
	var sub = $(this).find('.btn-sub'),
		add = $(this).find('.btn-add'),
		number = $(this).find('.number'),
		num = Number(number.text()),
		max = $(this).data('max');
	function count(){
		num = num + this;
		sub.removeClass('disabeld');
		add.removeClass('disabeld');
		if(num<=0){
			num = 0;
			sub.addClass('disabeld');
		}
		if(num>=max){
			num = max;
			add.addClass('disabeld');
		}
		number.text(num);
	}
	sub.on('click',count.bind(-1));
	add.on('click',count.bind(1));
})
