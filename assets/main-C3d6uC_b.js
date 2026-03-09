(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{m(),d(),h(),p()});function m(){const s=document.querySelector(".navbar"),a=document.querySelector(".navbar__hamburger"),o=document.querySelector(".navbar__mobile"),t=document.querySelectorAll(".navbar__mobile .navbar__link");window.addEventListener("scroll",()=>{window.scrollY>50?s.classList.add("scrolled"):s.classList.remove("scrolled")}),a&&o&&(a.addEventListener("click",()=>{a.classList.toggle("open"),o.classList.toggle("open"),document.body.style.overflow=o.classList.contains("open")?"hidden":""}),t.forEach(r=>{r.addEventListener("click",()=>{a.classList.remove("open"),o.classList.remove("open"),document.body.style.overflow=""})}));const e=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".navbar__link").forEach(r=>{const n=r.getAttribute("href");(n===e||e===""&&n==="index.html"||e==="/"&&n==="index.html")&&r.classList.add("active")})}function d(){const s=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");if(s.length===0)return;document.querySelectorAll(".stagger-children").forEach(o=>{[...o.children].forEach((t,e)=>{t.style.setProperty("--i",e)})});const a=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(t.target.classList.add("revealed"),a.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});s.forEach(o=>a.observe(o))}function h(){const s=document.querySelectorAll("[data-count]");if(s.length===0)return;const a=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(u(t.target),a.unobserve(t.target))})},{threshold:.5});s.forEach(o=>a.observe(o))}function u(s){const a=parseInt(s.getAttribute("data-count")),o=s.getAttribute("data-suffix")||"",t=2e3,e=performance.now();function r(n){const c=n-e,i=Math.min(c/t,1),l=1-Math.pow(1-i,4),f=Math.floor(l*a);s.textContent=f+o,i<1?requestAnimationFrame(r):s.textContent=a+o}requestAnimationFrame(r)}function p(){const s=document.querySelector(".hero__particles");if(!s)return;const a=30;for(let o=0;o<a;o++){const t=document.createElement("div");t.className="hero__particle",t.style.left=Math.random()*100+"%",t.style.animationDuration=Math.random()*8+6+"s",t.style.animationDelay=Math.random()*10+"s",t.style.width=Math.random()*3+1+"px",t.style.height=t.style.width,s.appendChild(t)}}function g(s){const a=[{name:"Home",href:"index.html"},{name:"About",href:"about.html"},{name:"Projects",href:"projects.html"},{name:"Board",href:"board.html"},{name:"Contact",href:"contact.html"}],o=a.map(e=>`<a href="${e.href}" class="navbar__link ${e.href===s?"active":""}">${e.name}</a>`).join(""),t=a.map(e=>`<a href="${e.href}" class="navbar__link ${e.href===s?"active":""}">${e.name}</a>`).join("");return`
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="navbar__logo">
        <img src="/FOCUS_KUSA_Web/assets/images/logo-white.png" alt="FOCUS KUSA Logo">
      </a>
      <div class="navbar__links">
        ${o}
        <a href="contact.html" class="navbar__cta">Get Involved</a>
      </div>
      <button class="navbar__hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar__mobile" id="mobileMenu">
      ${t}
      <a href="contact.html" class="btn btn--primary btn--sm">Get Involved</a>
    </div>
  </nav>
  `}function _(){return`
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="/FOCUS_KUSA_Web/assets/images/logo-white.png" alt="FOCUS KUSA" class="footer__logo">
          <p class="footer__desc">
            FOCUS KUSA is a nonprofit, student-led association formed by university students from Kinniya to empower the educational and personal growth of their community through mentorship, academic support, leadership, and service.
          </p>
          <div class="footer__socials">
            <a href="https://www.facebook.com/share/1FzvnTp96W/" target="_blank" class="footer__social" aria-label="Facebook"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="icon" class="icon-img" /></a>
            <a href="https://www.instagram.com/focus_kusa?utm_source=qr&igsh=MXhoNmJhdDhmbTcxaQ==" target="_blank" class="footer__social" aria-label="Instagram"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="icon" class="icon-img" /></a>
            <a href="https://www.youtube.com/@FOCUS_KUSA" target="_blank" class="footer__social" aria-label="YouTube"><img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="icon" class="icon-img" /></a>
            <a href="https://www.linkedin.com/in/focus-kusa" target="_blank" class="footer__social" aria-label="LinkedIn"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="icon" class="icon-img" /></a>
            <a href="https://whatsapp.com/channel/0029Vb7KQKZLY6cxS4UT2h47" target="_blank" class="footer__social" aria-label="WhatsApp"><img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png" alt="icon" class="icon-img" /></a>
          </div>
        </div>
        <div>
          <h4 class="footer__heading">Quick Links</h4>
          <a href="index.html" class="footer__link">Home</a>
          <a href="about.html" class="footer__link">About Us</a>
          <a href="projects.html" class="footer__link">Our Projects</a>
          <a href="board.html" class="footer__link">Executive Board</a>
          <a href="contact.html" class="footer__link">Contact</a>
        </div>
        <div>
          <h4 class="footer__heading">Key Projects</h4>
          <a href="projects.html" class="footer__link">UniVision</a>
          <a href="projects.html" class="footer__link">Explore A/L</a>
          <a href="projects.html" class="footer__link">Pi Challenge</a>
          <a href="projects.html" class="footer__link">Focus Stride</a>
          <a href="projects.html" class="footer__link">GreenRise</a>
        </div>
        <div>
          <h4 class="footer__heading">Contact</h4>
          <p class="footer__link"><img src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" alt="icon" class="icon-img" /> Kinniya, Trincomalee, Sri Lanka</p>
          <a href="mailto:focuskusa2019@gmail.com" class="footer__link"><img src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png" alt="icon" class="icon-img" /> focuskusa2019@gmail.com</a>
          <a href="https://wa.me/+94753992019" target="_blank" class="footer__link"><img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="icon" class="icon-img" /> 0753992019</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">© ${new Date().getFullYear()} FOCUS KUSA. All rights reserved.</p>
        <p class="footer__copyright" style="font-size: 0.75rem;">Follow One Course Until Success</p>
      </div>
    </div>
  </footer>
  `}export{_ as a,g as r};
