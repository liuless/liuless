webpackJsonp([10],{57:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){return e.querySelector('[class^="Hatch-form--"]:not(.'+l.config.classes.uHidden+")")}function r(){var e=(new p.TimelineMax).staggerTo(A.querySelectorAll("path"),.5,{y:-24,autoAlpha:0,ease:window.Power2.easeInOut},.05,"goodbye").staggerTo(k.querySelectorAll("path"),.5,{y:-24,autoAlpha:0,ease:window.Power2.easeInOut},.05,"goodbye");T.add(e)}function i(){window.matchMedia("(min-width: "+l.config.breakpoints.large+")").matches?q.addScene(V):q.removeScene(V)}function s(){var e=window.location.hash;if(e){var t=document.querySelector(e);t&&t.classList.contains("Modal")&&S.open(e)}}function c(){var e=document.querySelector('[data-js="hatchPartnerSlider"]');new v.default(e,{cellSelector:".Hatch-partnerSlide",prevNextButtons:!1,pageDots:!1,contain:!0,draggable:!1,autoPlay:5e3})}function u(){r(),i(),c(),s()}var l=a(0),d=a(8),m=a(7),f=a(10),h=o(f),p=a(1),w=a(3),g=o(w);a(11);var y=a(9),v=o(y),S=new h.default({autoInit:!1}),b=document.querySelectorAll("#StartupApplication, #PartnerApplication, #BootstrapApplication"),_=document.querySelectorAll('[class^="Hatch-form--pg"]');(0,l.forEach)(b,function(e,t){t.addEventListener("do.modal.open",function(){(0,l.forEach)(_,function(e,t){function a(e){return e.validity.valid}function o(){return[].slice.call(r).every(a)}var n=t,r=n.querySelectorAll("input, textarea"),i=n.querySelector('[type="button"]'),s=["click","input"];(0,l.forEach)(r,function(){var e=!0,t=!1,a=void 0;try{for(var r,c=s[Symbol.iterator]();!(e=(r=c.next()).done);e=!0){var u=r.value;n.addEventListener(u,function(){var e=o();i&&e===!0&&i.removeAttribute("disabled")})}}catch(e){t=!0,a=e}finally{try{!e&&c.return&&c.return()}finally{if(t)throw a}}}),i&&i.addEventListener("click",function(e){e.preventDefault(),n.classList.add(l.config.classes.uHidden),n.nextSibling.nextSibling.classList.remove(l.config.classes.uHidden)})})})});var q=new g.default.Controller,H=document.querySelector(".Section--hatchPrimary"),L=document.querySelector(".Hatch-logo"),A=document.querySelector(".Hatch-bgLeft"),k=document.querySelector(".Hatch-bgRight"),I=document.querySelector('[data-js="particleLeft"]'),P=document.querySelector('[data-js="particleRight"]');p.TweenMax.set([L,A,k],{visibility:"visible"});var E=new p.TimelineMax({delay:1,onComplete:function(){x.addTo(q)}});E.to(L.querySelector('[data-def="break off"]'),.5,{y:-24,ease:window.Power2.easeInOut},"intro").from(A,.5,{autoAlpha:0,ease:window.Power2.easeInOut},"intro").from(k,.5,{autoAlpha:0,ease:window.Power2.easeInOut},"intro").staggerFrom(A.querySelectorAll('path:not([data-def="break off"])'),.5,{y:16,ease:window.Power2.easeInOut},.05,"intro").staggerFrom(k.querySelectorAll('path:not([data-def="break off"])'),.5,{y:16,ease:window.Power2.easeInOut},.05,"intro").from(A.querySelector('path[data-def="break off"]'),.5,{delay:.1,autoAlpha:0,y:48,ease:window.Power2.easeInOut},"-=0.5").from(k.querySelector('path[data-def="break off"]'),.5,{autoAlpha:0,y:48,ease:window.Power2.easeInOut},"-=0.6");var T=new p.TimelineMax,M=new p.TimelineMax;M.staggerTo(document.querySelectorAll(".Hatch-particleLeft path"),.5,{y:-24,x:96,autoAlpha:0,ease:window.Power2.easeInOut},.05);var F=new p.TimelineMax;F.staggerTo(document.querySelectorAll(".Hatch-particleRight path"),.5,{y:-24,x:-96,autoAlpha:0,ease:window.Power2.easeInOut},.05);var x=new g.default.Scene({duration:H.offsetHeight/1.5}).setTween(T),O=new g.default.Scene({triggerElement:I,duration:I.offsetHeight,offset:-100}).setTween(M);O.addTo(q);var j=new g.default.Scene({triggerElement:P,duration:P.offsetHeight,offset:-100}).setTween(F);j.addTo(q);var V=[x,j,O];l.optimizedResize.add(function(){i()});var C=document.querySelector('[name="HatchSignUp"]'),N=void 0;window.MktoForms2.loadForm(m.marketo.baseUrl,m.marketo.munchkinId,m.marketo.hatchSignUp,function(e){N=e}),C.addEventListener("submit",function(e){e.preventDefault();var t=n(C),a={FirstName:"first_name",LastName:"last_name",Email:"email",Company:"company",Website:"website",hatch_AcceleratorIncubatorVCName:"incubator_name",hatch_participatedAcceleratorIncubatorVCFunding:"participated_in_accelerator_incubator_or_funding",hatch_howMuchFunding:"funding_amount",hatch_howLongHaveYouBeenInOperation:"length_in_operation",hatch_tellUsAboutYourStartup:"about_startup"},o=(0,d.formMap)(C,a);N.setValues(o),N.onValidate(function(e){e?N.submittable(!0):(t.classList.add(l.config.classes.uHidden),C.querySelector('[data-js="formError"]').classList.remove(l.config.classes.uHidden))}),N.onSuccess(function(){return t.classList.add(l.config.classes.uHidden),C.querySelector('[data-js="formSuccess"]').classList.remove(l.config.classes.uHidden),!1}),N.submit()});var B=document.querySelector('[name="HatchBootstrap"]'),U=void 0;window.MktoForms2.loadForm(m.marketo.baseUrl,m.marketo.munchkinId,m.marketo.hatchBootstrap,function(e){U=e}),B.addEventListener("submit",function(e){e.preventDefault();var t=n(B),a={FirstName:"first_name",LastName:"last_name",Email:"email",Company:"company",Website:"website",hatch_participatedAcceleratorIncubatorVCFunding:"participated_in_accelerator_incubator_or_funding",hatch_howLongHaveYouBeenInOperation:"length_in_operation",hatch_tellUsAboutYourStartup:"about_startup"},o=(0,d.formMap)(B,a);U.setValues(o),U.onValidate(function(e){e?U.submittable(!0):(t.classList.add(l.config.classes.uHidden),B.querySelector('[data-js="formError"]').classList.remove(l.config.classes.uHidden))}),U.onSuccess(function(){return t.classList.add(l.config.classes.uHidden),B.querySelector('[data-js="formSuccess"]').classList.remove(l.config.classes.uHidden),!1}),U.submit()});var D=document.querySelector('[name="HatchPartner"]'),Y=void 0;window.MktoForms2.loadForm(m.marketo.baseUrl,m.marketo.munchkinId,m.marketo.hatchPartner,function(e){Y=e}),D.addEventListener("submit",function(e){e.preventDefault();var t=n(D),a={FirstName:"first_name",LastName:"last_name",Title:"title",Email:"email",Company:"company",Website:"website",hatch_programsPerYear:"programs_per_year",hatch_startupsPerProgramBatch:"startups_per_batch"},o=(0,d.formMap)(D,a);Y.setValues(o),Y.onValidate(function(e){e?Y.submittable(!0):(t.classList.add(l.config.classes.uHidden),D.querySelector('[data-js="formError"]').classList.remove(l.config.classes.uHidden))}),Y.onSuccess(function(){return t.classList.add(l.config.classes.uHidden),D.querySelector('[data-js="formSuccess"]').classList.remove(l.config.classes.uHidden),!1}),Y.submit()}),u()}},[57]);
//# sourceMappingURL=hatch.js-684a91c7.map