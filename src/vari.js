//BOTON de ACCIÓN - VARINEA--

document.getElementById('action').addEventListener ('click', () => {
	const moviesAction = ['tt8106534','tt0437086','tt7456310','tt4154664','tt7961060','tt6146586','tt9817236','tt6320628','tt6450804','tt4154796']; 
	html.innerHTML='';
	html.className= 'custom-container rowNew';
	moviesAction.forEach(element => {
		fetch(`http://www.omdbapi.com/?i=${element}&apikey=fbdf5d5c`)
		.then(response => response.json())
		.then(data  => { 
			
		html.innerHTML +=  `<div class="card-group col-2 custom-card">
		<div class="card">
		<img class="card-img-top custom-img" src="${data.Poster}" alt="Card image cap">
		<div class="card-body">
		<h5 class="custom-title">${data.Title}</h5>
		<p class="card-text">${data.Type}</p>
		<p class="card-text"><small class="text-muted">${data.Year}</small></p>
		</div>
		</div>`;
	})
})  
     document.getElementById('todo').style.display='none';
});