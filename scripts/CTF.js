var pcs = [
	{ "modelis":"lenovo idėja", 
	"kaina":1234,
	 "spalva":{"raudona":1,"žalia":2}} ,
	{ "modelis":"hp monstras", 
	"kaina":800, 
	"spalva":{"juoda":2,"geltona":0}},
	{ "modelis":"toshiba sriuba", 
	"kaina":256, 
	"spalva":{"mėlyna":3,"žalia":1}} ,
	{ "modelis":"dell apskritimas",
	 "kaina":697, 
	  "spalva":{"juoda":1,"balta":2}} ,
	{ "modelis":"acer peizažas",
	 "kaina":620,
	   "spalva":{"juoda":4,"balta":2}},
	{ "modelis":"apple 256", 
	"kaina":2560,
	 "spalva":{"balta":3,"juoda":1}},
	{ "modelis":"asus pokšt",
	 "kaina":1001,
	   "spalva":{"juoda":2,"geltona":3}}
],
	vnt = 2
	biudzetas = 1600



 console.log("Galimi variantai: \n\n ");


 

for (var i=0;i<pcs.length;i++) {

		if( ((pcs[i].spalva.juoda >= vnt) || (pcs[i].spalva.balta >= vnt)) && (pcs[i].kaina * vnt <= biudzetas)){

		
	  
		var spalvos = Object.keys(pcs[i].spalva),
		spalva = "";

		for (var j=0;j<spalvos.length;j++){

			if((spalvos[j] === "juoda") && (pcs[i].spalva.juoda >= vnt) || (spalvos[j] === "balta") && (pcs[i].spalva.balta >= vnt) ) {

					//console.log(i + " " + spalvos[j]);
					if(spalva.legth > 0) {
						spalva += " ir " + spalvos[j];

					} else {
						
					}
				}
			}
		 console.log( "\n" + "Modelis:" + pcs[i].modelis  + "\nKaina:" + pcs[i].kaina * vnt + "\nSpalva" + spalva) 
		}
  
		}
	
	

	

	