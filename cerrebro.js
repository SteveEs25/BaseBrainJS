
window.onload = function() {
  const Entrada = document.querySelector("input")
  const Spoiler = document.querySelector("#spoiler")
  const Neurona = new brain.NeuralNetwork();

  Neurona.train([
    {input:{r:0, g:0, b:0}, output: {claro:1}},
    {input:{r:1, g:1, b:1}, output: {oscuro:1}},
    {input:{r:1, g:0.5, b:0.25}, output: {oscuro:1}},
    {input:{r:0.5, g:0.25, b:0}, output: {claro:1}},
    {input:{r:0.5, g:0, b:0.25}, output: {claro:1}},
    {input:{r:0.5, g:1, b:1}, output: {oscuro:1}},
    {input:{r:0, g:0, b:0.63}, output: {claro:1}}
  ]);

  Entrada.addEventListener("change", (e) => {
    Spoiler.style.background = e.target.value;
    var ColorRGB = getRgb(e.target.value);
    console.log("Cambiando color " + e.target.value);
    console.log("Rojo " + ColorRGB.r);
    console.log("Azul " + ColorRGB.b);
    console.log("Verde " + ColorRGB.g);
  })

  function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
      g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
      b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
  }
}
