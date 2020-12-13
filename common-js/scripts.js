(function ($) {
	"use strict";
	countdownTime();
	$('[data-nav-menu]').on('click', function (event) {
		var $this = $(this), visibleHeadArea = $this.data('nav-menu');
		$(visibleHeadArea).toggleClass('visible');
	});
	var winWidth = $(window).width();
	dropdownMenu(winWidth);
	$(window).on('resize', function () { dropdownMenu(winWidth); });
})(jQuery);
function countdownTime() {
	if (isExists('#clock')) {
		$('#clock').countdown('2021/08/28', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-sec"><span class="title">%D</span> days </div>'
				+ '<div class="time-sec"><span class="title">%H</span> hours </div>'
				+ '<div class="time-sec"><span class="title">%M</span> minutes </div>'
				+ '<div class="time-sec"><span class="title">%S</span> seconds </div>'));
		});
	}
}
function dropdownMenu(winWidth) {
	if (winWidth > 767) {
		$('.main-menu li.drop-down').on('mouseover', function () {
			var $this = $(this), menuAnchor = $this.children('a');
			menuAnchor.addClass('mouseover');
		}).on('mouseleave', function () {
			var $this = $(this), menuAnchor = $this.children('a');
			menuAnchor.removeClass('mouseover');
		});
	} else {
		$('.main-menu li.drop-down > a').on('click', function () {
			if ($(this).attr('href') == '#') return false;
			if ($(this).hasClass('mouseover')) { $(this).removeClass('mouseover'); }
			else { $(this).addClass('mouseover'); }
			return false;
		});
	}
}

function isExists(elem) {
	if ($(elem).length > 0) { return true; }
	return false;
}