
function getDataFromApi(searchTerm, callback) {
	const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
  const query = {
    part: 'snippet',
    key: 'AIzaSyD2209XnIDWuWxskZrXY5AXXKNPkPDxNE4',
    q: searchTerm,
    per_page: 5,
  };
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
};

function renderResult(result) {
  return `
    <div>
    	<h3><span class="blue">Channel Title - </span>${result.snippet.title}</h3>
    	<h3><span class="blue">Description- </span>${result.snippet.description}</h3>
    	<div class="thumbnails"><img src=${result.snippet.thumbnails.high.url}></div>     
    </div>
  `;
};

function displayYouTubeSearchData(data) {
	console.log(data);
  const results = data.items.map((item, index) => renderResult(item));
  console.log(results);
  $('#results').html(results);
};

// watch for submit function
function watchSubmit() {
  $('#searchForm').submit(event => {
    event.preventDefault();
    const searchTerm = $('#jsSearch').val();
    $('#jsSearch').val("");
    getDataFromApi(searchTerm, displayYouTubeSearchData);
  });
};

$(watchSubmit);
