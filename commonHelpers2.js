import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form"),a=t.querySelector('[name="email"]'),r=t.querySelector('[name="message"]');t.addEventListener("input",m);function m(e){localStorage.setItem("feedback-form-state",JSON.stringify(l()))}function l(){let e=a.value.trim(),o=r.value.trim();return{Email:e,Message:o}}if(localStorage.getItem("feedback-form-state"))try{let e=localStorage.getItem("feedback-form-state");e=JSON.parse(e),a.value=e.Email,r.value=e.Message}catch{localStorage.removeItem("feedback-form-state")}t.addEventListener("submit",s);function s(e){if(e.preventDefault(),a.value===""||r.value==="")return alert("All Form fields must be filled!"),!1;localStorage.removeItem("feedback-form-state"),console.log(l()),e.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
