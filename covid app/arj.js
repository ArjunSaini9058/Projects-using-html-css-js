// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

console.log("hello");
async function getCovidapi(){
    const jsondata = await fetch("https://api.covid19api.com/summary");
    const jsdata = await jsondata.json();
    document.getElementById("anc");
    anc.innerHTML=jsdata.Countries[77].NewConfirmed;
    document.getElementById("anc1");
    anc1.innerHTML=jsdata.Global.NewConfirmed;

    document.getElementById("atc");
    atc.innerHTML=jsdata.Countries[77].TotalConfirmed;
    document.getElementById("atc1");
    atc1.innerHTML=jsdata.Global.TotalConfirmed;

    document.getElementById("atd");
    atd.innerHTML=jsdata.Countries[77].TotalDeaths;
    document.getElementById("atd1");
    atd1.innerHTML=jsdata.Global.TotalDeaths;

    document.getElementById("atr");
    atr.innerHTML=jsdata.Countries[77].TotalRecovered;
    document.getElementById("atr1");
    atr1.innerHTML=jsdata.Global.TotalRecovered;

}
getCovidapi();   
document.querySelector("#btn")
.addEventListener('click',()=>{
  window.location.reload(true);
});
// console.log("hello");
// async function getCovidapi(){
//     const jsondata = await fetch("https://api.covid19api.com/summary");
//     const jsdata = await jsondata.json();
//     console.log(jsdata.Countries[77]);
// }
// getCovidapi(); 