(function(){
	$(init());
	function init() {
		$.ajax({
			url:"http://www.omdbapi.com/?s=code",
			success:renderMovies
		});
	}
	function renderMovies(response){
		// console.log(response);
		var table = $("<table class='table'>");
		for (var a in response.Search){
			var movie = response.Search[a];
			console.log(movie);
			var title=movie.Title;
			var imdbID = movie.imdbID;
			var poster = movie.Poster;
			var tr = $("<tr>");
			var td = $("<td>");
			td.append(imdbID);
			tr.append(td);

			td = $("<td>");
			td.append(title);
			tr.append(td);

			table.append(tr);
		}
		$("p").append(table);
	}
})
();