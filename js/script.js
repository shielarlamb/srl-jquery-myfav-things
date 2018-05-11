$(() => {

	$.getJSON("data/things.json", (data) => {
		loadFavThingsData(data.things);
		console.log(data.things);


	});

	
	/// load things in html
	function loadFavThingsData(thingsArray) {

		const $anime = $(`<div class="animeDiv" style="display: none"></div>`);
		const $anumeUl =$("<ul>");
		$anime.append($anumeUl);
		
		const $accessories = $(`<div class="accessories" style="display: none"></div>`);
		const $accessoriesUl = $("<ul>");
		$accessories.append($accessoriesUl);
		
		const $places = $(`<div class="places" style="display: none"></div>`);
		const $placesUl = $("<ul>");
		$places.append($placesUl);
		
		$("#things").append('<h2 id="anime">Animè</h2>').append($anime);
		$("#things").append('<p style="display: none">I started watching animès when I was in grade school. These were the popular shows for kids back then to watch. I love the way they look and the way they dress. I especially like their different hair colors and eyes and of course their superpowers.</p>').append($anime);

		$("#things").append('<h2 id="accessories">Accessories and more</h2>').append($accessories);
		$("#things").append('<p style="display: none">Purses and shoes are on my list of favorite things. I like to have different designs and/or kinds. Who does not love food? I specially love the comfort food we usually have during New Year and Christmas with my family in the Philippines!</p>').append($accessories);

		$("#things").append('<h2 id="travel">Travel</h2>').append($places);
		$("#things").append('<p style="display: none">My husband and I love traveling. We have been in some countries in Southeast Asia. Now, we are hoping to visit Europe in the near future. Below is the top of our list. </p>').append($places);

		thingsArray.forEach((things) => {
			if (things.type === "anime") {
				addItems($anumeUl, things);
			}
			if (things.type === "accessories") {
				addItems($accessoriesUl, things);
			}
			if (things.type === "travel") {
				addItems($placesUl, things);
			}

			toggleElements();

		});
		console.log(thingsArray);
	}

	//add things in ul
	function addItems($target, things) {
		$target.append(`<li><a href="images/${things.img}" target="_blank"><img src="images/${things.img}"></a>${things.name}</li>`);
	}
		
/// toggle function
	function toggleElements() {
		$("#anime").on("click", function () {
			$(this).next().toggle();
			$(".animeDiv").toggle();
		});

		$("#accessories").on("click", function () {
			$(this).next().toggle();
			$(".accessories").toggle();
		});

		$("#travel").on("click", function () {
			$(this).next().toggle();
			$(".places").toggle();
		});

	}






});