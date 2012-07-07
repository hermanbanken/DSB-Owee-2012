function getDevicePixelRatio() {
	if(window.devicePixelRatio === undefined) return 1; // No pixel ratio available. Assume 1:1.
	return window.devicePixelRatio;

}

$(function(){
	/** Retina **/
	if(getDevicePixelRatio() == 2)
	$(".hires").each(function(){
		$(this).css({
			width: $(this).width(),
			height: $(this).height()
		});
		this.src = this.src.replace(".png", "_2x.png");
	});
});