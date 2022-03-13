import memeMaker from "@erickwendel/meme-maker";

const options = {
  image: './img/sorry.jpg',
  outfile: './img/spiderman-meme.png',
  topText: "DESCULPA TIO BEM",
  bottomText: "NÃO CONSEGUIR RODAR O LIVE RELOAD",
}

memeMaker(options)
  .then(_ => console.log('Image saved: ' + options.outfile))
  .catch(err => console.log(err));