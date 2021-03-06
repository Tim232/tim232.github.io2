const root = document.documentElement
  , eyef = document.getElementById("eyef")
  , userLang = navigator.language || navigator.userLanguage;
let cx = document.getElementById("eyef").getAttribute("cx")
  , cy = document.getElementById("eyef").getAttribute("cy");
userLang.includes("ko") || (document.getElementById("title").innerHTML = "Access Denied",
document.getElementById("backhome").innerHTML = "Back to Home",
document.getElementById("desc").innerHTML = "The server may have mistaken You for spam. Contact <a href='mailto:marshall@kakao.com'>marshall@kakao.com</a> if you think something went wrong."),
document.addEventListener("mousemove", e=>{
    let t = e.clientX / innerWidth
      , n = e.clientY / innerHeight;
    cx = 115 + 30 * t,
    cy = 50 + 30 * n,
    eyef.setAttribute("cx", cx),
    eyef.setAttribute("cy", cy)
}
),
document.addEventListener("touchmove", e=>{
    let t = e.touches[0].clientX / innerWidth
      , n = e.touches[0].clientY / innerHeight;
    cx = 115 + 30 * t,
    cy = 50 + 30 * n,
    eyef.setAttribute("cx", cx),
    eyef.setAttribute("cy", cy)
}
);
