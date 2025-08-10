import{S as d,a as c,i as u}from"./assets/vendor-CRV-VdLN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const i=document.querySelector(".gallery"),g=new d(".gallery-item a",{captionsData:"alt",captionDelay:250});function f(e){const s=w(e);i.insertAdjacentHTML("afterbegin",s),g.refresh()}function y(){i.innerHTML=""}function h(){i.insertAdjacentHTML("afterbegin",'<span class="loader"></span>')}function L(){const e="";i.innerHTML=e}function b(e){const{webformatURL:s,largeImageURL:a,tags:o,likes:t,views:r,comments:n,downloads:p}=e;return`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${o}"
    />
  </a><div class="stats">
  <p class="img-rates">Likes<span>${t}</span></p>
  <p class="img-rates">Views<span>${r}</span></p>
  <p class="img-rates">Comments<span>${n}</span></p>
  <p class="img-rates">Downloads<span>${p}</span></p></div>
</li>
`}function w(e){return console.log("imgs = ",e),e.map(b).join(`
`)}function v(e){c.defaults.baseURL="https://pixabay.com";const s={key:"51707366-c8695cacd8b805538752cece0",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21,page:1};return c.get("/api/",{params:s}).then(a=>{const o=a.data.hits;return console.log(o),o&&Array.isArray(o)&&o.length>0?o:u.show({title:"❌",message:"Sorry, there are no images matching <br> your search query. Please try again!",color:"red",position:"topRight",messageColor:"white",titleColor:"white"})}).catch(a=>{u.show({title:"Error",message:a.message})}).finally(()=>{L()})}const l=document.querySelector(".form"),m=l.querySelector("button");l.addEventListener("input",e=>{e.currentTarget.elements["search-text"].value.trim()?m.disabled=!1:m.disabled=!0});l.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements["search-text"].value.trim();e.currentTarget.nodeName!="BUTTON"&&(y(),h(),v(s).then(a=>f(a)).catch(a=>console.error(a)))});
//# sourceMappingURL=index.js.map
