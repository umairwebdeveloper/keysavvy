$(document).ready(function () {
	const texts = ["Cars & Birds", "Hemmings", "Offer UP", ""];
	let index = 0;

	function animateText() {
		$(".heading-animated-text").fadeOut(500, function () {
			index = (index + 1) % texts.length;
			$(this).text(`${texts[index]}`).fadeIn(500);
		});
	}

	setInterval(animateText, 1500);

	// Tab click event
	$(".tab-button").click(function () {
		$(".tab-button").removeClass("active");
		$(this).addClass("active");
		$(".tab-content").addClass("d-none");
		const target = $(this).data("target");
		$(`#${target}`).removeClass("d-none");
	});
});
