//loading and playing sound basic
//nota serve un server locale per poter lavorare con i file audio esterni
//musica tratta da free music archive
//original code The coding Rainbow


var song;
//controllo singolo volume
//var slider;

//slider per rate (velocità) e pan (destra sinistra)
var sliderRate;
var sliderPan;


function setup() {
  createCanvas(500, 300);
  song = loadSound('assets/Kevin_MacLeod.mp3', loaded);
  //singolo controllo per il volume
  //slider = createSlider(0, 1, 0.5, 0.01);
  //song.play();

  sliderRate = createSlider(0, 1.5, 1, 0.01); //range da 0 a 1.5 la vel standard è 1
  sliderPan = createSlider(-1, 1, 0, 0.01); //range da -1 a 1 lo standard è 0
}

function loaded() { //funzione callback al posto del classico preload
  song.play();
}

function draw() {
  frameRate(8);

  //nota l'animazione parte prima dell'audio perchè ho usato callback
  background(random(100, 150), random(255), 0);

  //song.setVolume(slider.value());

  song.rate(sliderRate.value());
  song.pan(sliderPan.value());
}
