var btn = document.getElementById("click");
window.onscroll = function (){
  clicked()
};

function clicked(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollUp(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/66be9c9d0cca4f8a7a768ccf/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat