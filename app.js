(function(){
var GA_ID="G-2GYPKD69XD"; /* Reemplazar por el ID real de Google Analytics 4 */
var KEY="mcj_cookies",d=document;
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function loadGA(){
  if(!GA_ID||GA_ID.indexOf("XXXX")>-1||window.gtag)return;
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
  gtag("js",new Date());gtag("config",GA_ID,{anonymize_ip:true});
  var s=d.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;d.head.appendChild(s);
}
var b=d.querySelector(".menu-btn"),n=d.getElementById("menu");
if(b&&n){b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}})}
var y=d.getElementById("y");if(y)y.textContent=new Date().getFullYear();
/* Cookies */
var bar=d.getElementById("cookie");
function setC(v){ls(KEY,v);if(bar)bar.hidden=true;if(v==="yes")loadGA()}
if(ls(KEY)==="yes")loadGA();else if(!ls(KEY)&&bar)bar.hidden=false;
d.addEventListener("click",function(e){
  var t=e.target.closest("[data-cookie]");
  if(t){setC(t.getAttribute("data-cookie"));return}
  if(e.target.closest("[data-cookie-open]")&&bar){bar.hidden=false;bar.querySelector("button").focus()}
  var w=e.target.closest("[data-wa]");
  if(w&&window.gtag)gtag("event","generate_lead",{method:"whatsapp",item:w.getAttribute("data-wa")});
  var th=e.target.closest(".thumbs button");
  if(th){var c=th.closest(".card"),im=c.querySelector("img.main");im.src=th.getAttribute("data-src");im.alt=th.getAttribute("data-alt");
    c.querySelectorAll(".thumbs button").forEach(function(x){x.setAttribute("aria-pressed",x===th)})}
  var f=e.target.closest(".chip");
  if(f){var k=f.getAttribute("data-f");d.querySelectorAll(".chip").forEach(function(x){x.setAttribute("aria-pressed",x===f)});
    d.querySelectorAll(".card").forEach(function(c){c.parentNode.hidden=!(k==="todos"||c.getAttribute("data-c").split(" ").indexOf(k)>-1)})}
});
})();
