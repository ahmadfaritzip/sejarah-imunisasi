$(document).ready(function(){

	var page = location.pathname.split('/').pop();
	if (page == 'index.html' || page == 'vaksin_palsu.html' || page == 'vaksin_belum_halal.html') {
		$('.nav-link.a').addClass('text-white')
	}else if (page == 'sejarah_imunisasi.html') {
		$('.nav-link.b').addClass('text-white')	
	}else if (page == 'jenis_vaksin.html'){
		$('.nav-link.c').addClass('text-white')	
	}else if (page == 'penyakit.html'){
		$('.nav-link.d').addClass('text-white')	
	}else if (page == 'tips.html'){
		$('.nav-link.e').addClass('text-white')	
	}
	
});


