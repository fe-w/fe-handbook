function t(t){const e=t.trim().split("\n");if(!e.some((t=>t.includes("|"))))return`<p>${t}</p>`;let n="<table>";return e.forEach(((t,e)=>{const o=t.split("|").map((t=>t.trim())).filter((t=>""!==t));1!==e&&(n+="<tr>",o.forEach((t=>{n+=0===e?`<th>${t}</th>`:`<td>${t}</td>`})),n+="</tr>")})),n+="</table>",n}async function e(){const e=await async function(){const t="/fe-handbook/ToC.md";try{const e=await fetch(t);if(!e.ok)throw new Error(`${t} 파일을 찾을 수 없습니다.`);return await e.text()}catch(e){return"파일을 찾을 수 없습니다."}}(),n=e.split("\n\n# ").map(((e,n)=>{const o=e.trim().split("\n"),c=o[0].replace("# ","").trim(),r=o.slice(1).join("\n");return{id:0===n?"fundamentals":c.toLowerCase().replace(/\s+/g,"-"),title:c,content:t(r)}}));document.querySelectorAll("main section div[id]").forEach((t=>{const e=t.id,o=n.find((({id:t})=>t===e));t.innerHTML=o?o.content:""}))}function n(t){var e,n;document.querySelectorAll("[data-tab]").forEach((t=>{t.classList.remove("active")})),document.querySelectorAll("main section").forEach((t=>{t.classList.remove("active")}));const o=document.querySelector(`[data-tab="${t}"]`),c=null==(e=document.querySelector(`main section div[id="${t}"]`))?void 0:e.closest("section");o&&o.classList.add("active"),c&&c.classList.add("active");const r=new URL(window.location);r.pathname=`/${t}`,window.history.pushState({},"",r),(null==(n=history.state)?void 0:n.section)!==t&&window.history.pushState({section:t},"",`/${t}/`)}!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}(),document.querySelectorAll("[data-tab]").forEach((t=>{t.addEventListener("click",(()=>{const e=t.dataset.tab;localStorage.setItem("activeTab",e),n(e)}))}));document.addEventListener("DOMContentLoaded",(async()=>{const t=window.location.pathname.split("/").filter(Boolean);n(t.length>1?t[1]:localStorage.getItem("activeTab")||"fundamentals"),"dark"===localStorage.getItem("theme")&&document.documentElement.classList.add("dark"),document.querySelectorAll(".theme-btn button").forEach((t=>{t.addEventListener("click",(()=>{const e=t.dataset.theme;"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",e)}))})),function(){const t=document.getElementById("title");t.textContent=t.textContent+" "+(new Date).getFullYear()}(),await e()}));
