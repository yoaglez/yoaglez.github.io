let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #813f7d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ffb9a3;">Lic. en Diseño Gráfico y Diseño Web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
