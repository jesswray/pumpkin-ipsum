import dictionary from './ipsum';

/*
 * "Using the The Lorem Ipsum Generator by Fredrik Bridell (http://bridell.com/loremipsum/)"
 */

/* Latin words, These are all the words in the first 100 lines of Ovid's Metamorphoses, Liber I. */
const latin = [
  "nova", "mundi", "discordia", "auroram", "zephyro", "peregrinum", "austro", "eodem", "melioris", "obliquis", "pontus", "permisit", "cognati", "surgere", "quae", "liquidum", "quoque", "umor", "circumfuso", "omni", "iners", "distinxit", "tegi", "caeli", "liberioris", "otia", "crescendo", "bene", "aer", "caelum", "porrexerat", "coeperunt", "subdita", "moderantum", "tumescere", "caeleste", "evolvit", "tanta", "terra", "erectos", "illas", "tractu", "tellure", "retinebat", "sanctius", "posset:", "coeptis", "undae", "origo", "possedit", "principio", "duae", "quem", "ignotas", "locavit", "aere", "nullus", "sibi", "pressa", "pluvialibus", "animal", "iudicis", "natus", "orba", "aberant", "timebat", "pendebat", "imagine", "habentia", "corpora", "obstabatque", "feras", "diverso", "perveniunt", "igni", "capacius", "ut", "faecis", "fulgura", "figuras", "proximus", "passim", "acervo", "tollere", "deus", "conversa", "diu", "aurea", "radiis", "tegit", "ille", "flamina", "duris", "pugnabant", "sponte", "tonitrua", "ante", "tellus", "egens", "ultima", "silvas", "vos", "modo", "hanc", "caecoque", "ambitae", "subsidere", "secuit", "pondus", "onerosior", "aera", "certis", "deducite", "orbis", "flamma", "diversa", "totidemque", "nullo", "lapidosos", "ulla", "campoque", "peragebant", "neu", "unda", "quisque", "fulminibus", "sui", "calidis", "stagna", "solum", "campos", "aeris", "cetera", "onus", "mixtam", "fuerat", "toto", "sole", "cum", "mentes", "perpetuum", "horrifer", "scythiam", "caelumque", "fluminaque", "spectent", "tepescunt", "extendi", "secrevit", "utramque", "pro", "margine", "praebebat", "fixo", "levius", "meis", "inmensa", "diffundi", "convexi", "vindice", "caligine", "gentes", "sunt", "montes", "septemque", "chaos:", "aquae", "umentia", "partim", "mea", "erat:", "premuntur", "iuga", "glomeravit", "nondum", "ab", "derecti", "vix", "parte", "mare", "turba", "amphitrite", "securae", "proxima", "summaque", "traxit", "terras", "caeca", "litora", "effervescere", "ligavit:", "aliis", "dissaepserat", "sic", "temperiemque", "orbem", "verba", "contraria", "titan", "habendum", "usu", "fidem", "invasit", "foret", "primaque", "circumdare", "descenderat", "diremit", "dispositam", "elementaque", "aliud", "non", "triones", "valles", "facientes", "eurus", "quod", "iapeto", "lanient", "aetas", "quanto", "animalia", "levitate", "quia", "metusque", "zonae", "moles", "militis", "bracchia", "quarum", "cinxit", "nix", "deorum", "dominari", "quisquis", "abscidit", "nulli", "terrae", "phoebe", "in", "quicquam", "tanto", "motura", "dixere", "frigida", "haec", "nubes", "dissociata", "aestu", "qui", "sorbentur", "unus", "ensis", "piscibus", "super", "homo", "seductaque", "prima", "locoque", "legebantur", "praecipites", "aequalis", "occiduo", "spisso", "illi", "fert", "lucis", "satus", "locum", "semina", "caelo", "nuper", "instabilis", "di", "cuncta", "suis", "lege", "concordi", "mundum", "reparabat", "erant", "volucres", "exemit", "numero", "tum", "boreas", "mortales", "carmen", "orbe", "natura", "limitibus", "sinistra", "inclusum", "coercuit", "opifex", "duas", "undis", "magni", "vis", "fuit", "ubi", "sectamque", "corpore", "ventis", "nisi", "recepta", "pondere", "fecit", "librata", "his", "mutastis", "montibus", "postquam", "cura", "manebat", "nabataeaque", "obsistitur", "nubibus", "videre", "alta", "est", "nitidis", "solidumque", "habitandae", "colebat", "declivia", "circumfluus", "ventos", "sive", "nunc", "indigestaque", "emicuit", "regio", "et", "erat", "ne", "cornua", "mutatas", "nam", "lacusque", "adspirate", "fronde", "liquidas", "fuerant", "fontes", "agitabilis", "induit", "sidera", "rudis", "siccis", "rectumque", "dicere", "gravitate", "matutinis", "congeriem", "iunctarum", "oppida", "humanas", "inminet", "forma", "dextra", "homini", "viseret", "addidit", "illic", "semine", "madescit", "ardentior", "galeae", "utque", "terrarum", "tempora", "quam", "formaeque", "locis", "congestaque", "pulsant", "vultus", "norant", "rerum", "flexi", "alto", "origine", "melior", "regna", "freta", "adsiduis", "sine", "ripis", "supplex", "effigiem", "carentem", "rapidisque", "fratrum", "habentem", "recens", "hunc", "formas", "finxit", "hominum", "arce", "innabilis", "minantia", "undas", "pinus", "uno", "aethera", "membra", "ad", "ita", "mundo", "consistere", "omnia", "astra", "os", "praeter", "terram", "inter", "media", "regat", "dedit", "naturae", "aethere", "ipsa", "ignea", "sua", "grandia", "longo", "nec", "altae", "inposuit", "sed", "tuba", "quinta", "terrenae", "animus", "sublime", "nebulas", "cesserunt", "mentisque", "cepit", "adhuc", "caesa", "recessit", "tenent", "illis", "terris", "plagae", "frigore", "pluviaque", "litem", "divino", "mollia", "ponderibus", "coegit", "speciem", "poena", "densior", "cingebant", "totidem", "persidaque", "tuti", "quin", "iussit", "dei", "sata", "vesper", "habitabilis", "fabricator", "fossae", "deerat", "nullaque", "ora", "lumina", "pronaque", "pace", "animalibus", "secant", "mixta"
].slice(1,75);
// When we have more fun words, we can add more latin words.

const mixed = dictionary.concat(latin);

var loremLang = mixed;

/* Characters to end a sentence with. Repeat for frequencies (i.e. most sentences end in a period) */
var endings = "................................??!";

/* randomly returns true with a certain chance (a percentage) */
function chance(percentage){
	return (Math.floor(Math.random() * 100) < percentage);
}

/* capitalizes a word */
function capitalize(aString){
	return aString.substring(0,1).toUpperCase() + aString.substring(1, aString.length);
}

/* returns a random lorem word */
function getLoremWord(){
	return loremLang[Math.floor(Math.random()*loremLang.length)];
}

function getLoremEnding(){
	var i = Math.floor(Math.random()*endings.length);
	return endings.substring(i, i+1);
}

/* inserts a number of lorem words. Does not append a space at the end. */
function loremIpsum(numWords){
  let acc = '';
	for(var i=0; i<numWords-1; i++){
		acc += (getLoremWord() + " ");
	}
	acc += (getLoremWord());
  return acc;
}

/* inserts a sentence of random words. Appends a space at the end. */
function loremIpsumSentence(numWords){
  let acc = ''
	acc += (capitalize(getLoremWord()) + " ");
	acc += loremIpsum(numWords-1);
	acc += (getLoremEnding());
	acc += (" ");
  return acc;
}

/* inserts a sentence of random words, sometimes with extra punctuation. Appends a space at the end. */
function loremIpsumSentence2(numWords){
  let acc = '';
	acc += (capitalize(getLoremWord()) + " ");
	var part1 = 0;
	if(chance(50)){
		// insert a comma or other punctuation within the sentence
		part1 = Math.floor(Math.random() * numWords-2);
		acc += loremIpsum(part1);
		acc += (", ");
	} else {
		acc += (" ");
	}
	acc += loremIpsum(numWords - part1 - 1);
	acc += (getLoremEnding());
	acc += (" ");
  return acc;
}

/* inserts a paragraph of sentences of random words. */
function loremIpsumParagraph(numWords){
  let acc = ''
	var words = numWords;
	while(words > 0){
		if(words > 10){
			var w = Math.floor(Math.random() * 8) + 2;
			acc += loremIpsumSentence(w);
			words = words - w;
		} else {
			acc += loremIpsumSentence2(words);
			words = 0;
		}
	}
  return acc;
}

export default loremIpsumParagraph;
