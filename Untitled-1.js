<!DOCTYPE html>
<html lang="en-US" class="no-js">
<head>
<script data-cfasync="false">function dtmuag(){var e=navigator.userAgent;if(e.match(/x11.*ox\/54|id\s4.*us.*ome\/62|oobo|ight|tmet|eadl|ngdo|PTST/i))return!1;if(e.match(/x11.*me\/86\.0/i)){var r=screen.width;if("number"==typeof r&&1367==r)return!1}return!0}var dtmuag_t=50;  var dtmuag_events = ["mouseover", "keydown", "touchmove", "touchstart"];</script><meta charset="UTF-8" /><link rel="preload" href="https://the7.io/wp-content/cache/fvm/min/1674121845-css5504932bade70f121fb1138e0619788d2d4b839d09a4d63e45e0efa32f764.css" as="style" media="all" />
<script data-cfasync="false">if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]iebrowser/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?iebrowser=1"}else{document.location.href=href.replace("#","?iebrowser=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&iebrowser=1"}else{document.location.href=href.replace("#","&iebrowser=1#")}}}}</script>
<script data-cfasync="false">class FVMLoader{constructor(e){this.triggerEvents=e,this.eventOptions={passive:!0},this.userEventListener=this.triggerListener.bind(this),this.delayedScripts={normal:[],async:[],defer:[]},this.allJQueries=[]}_addUserInteractionListener(e){this.triggerEvents.forEach(t=>window.addEventListener(t,e.userEventListener,e.eventOptions))}_removeUserInteractionListener(e){this.triggerEvents.forEach(t=>window.removeEventListener(t,e.userEventListener,e.eventOptions))}triggerListener(){this._removeUserInteractionListener(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this._loadEverythingNow.bind(this)):this._loadEverythingNow()}async _loadEverythingNow(){this._runAllDelayedCSS(),this._delayEventListeners(),this._delayJQueryReady(this),this._handleDocumentWrite(),this._registerAllDelayedScripts(),await this._loadScriptsFromList(this.delayedScripts.normal),await this._loadScriptsFromList(this.delayedScripts.defer),await this._loadScriptsFromList(this.delayedScripts.async),await this._triggerDOMContentLoaded(),await this._triggerWindowLoad(),window.dispatchEvent(new Event("wpr-allScriptsLoaded"))}_registerAllDelayedScripts(){document.querySelectorAll("script[type=fvmdelay]").forEach(e=>{e.hasAttribute("src")?e.hasAttribute("async")&&!1!==e.async?this.delayedScripts.async.push(e):e.hasAttribute("defer")&&!1!==e.defer||"module"===e.getAttribute("data-type")?this.delayedScripts.defer.push(e):this.delayedScripts.normal.push(e):this.delayedScripts.normal.push(e)})}_runAllDelayedCSS(){document.querySelectorAll("link[rel=fvmdelay]").forEach(e=>{e.setAttribute("rel","stylesheet")})}async _transformScript(e){return await this._requestAnimFrame(),new Promise(t=>{const n=document.createElement("script");let r;[...e.attributes].forEach(e=>{let t=e.nodeName;"type"!==t&&("data-type"===t&&(t="type",r=e.nodeValue),n.setAttribute(t,e.nodeValue))}),e.hasAttribute("src")?(n.addEventListener("load",t),n.addEventListener("error",t)):(n.text=e.text,t()),e.parentNode.replaceChild(n,e)})}async _loadScriptsFromList(e){const t=e.shift();return t?(await this._transformScript(t),this._loadScriptsFromList(e)):Promise.resolve()}_delayEventListeners(){let e={};function t(t,n){!function(t){function n(n){return e[t].eventsToRewrite.indexOf(n)>=0?"wpr-"+n:n}e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(n)}function n(e,t){let n=e[t];Object.defineProperty(e,t,{get:()=>n||function(){},set(r){e["wpr"+t]=n=r}})}t(document,"DOMContentLoaded"),t(window,"DOMContentLoaded"),t(window,"load"),t(window,"pageshow"),t(document,"readystatechange"),n(document,"onreadystatechange"),n(window,"onload"),n(window,"onpageshow")}_delayJQueryReady(e){let t=window.jQuery;Object.defineProperty(window,"jQuery",{get:()=>t,set(n){if(n&&n.fn&&!e.allJQueries.includes(n)){n.fn.ready=n.fn.init.prototype.ready=function(t){e.domReadyFired?t.bind(document)(n):document.addEventListener("DOMContentLoaded2",()=>t.bind(document)(n))};const t=n.fn.on;n.fn.on=n.fn.init.prototype.on=function(){if(this[0]===window){function e(e){return e.split(" ").map(e=>"load"===e||0===e.indexOf("load.")?"wpr-jquery-load":e).join(" ")}"string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=e(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach(t=>{delete Object.assign(arguments[0],{[e(t)]:arguments[0][t]})[t]})}return t.apply(this,arguments),this},e.allJQueries.push(n)}t=n}})}async _triggerDOMContentLoaded(){this.domReadyFired=!0,await this._requestAnimFrame(),document.dispatchEvent(new Event("DOMContentLoaded2")),await this._requestAnimFrame(),window.dispatchEvent(new Event("DOMContentLoaded2")),await this._requestAnimFrame(),document.dispatchEvent(new Event("wpr-readystatechange")),await this._requestAnimFrame(),document.wpronreadystatechange&&document.wpronreadystatechange()}async _triggerWindowLoad(){await this._requestAnimFrame(),window.dispatchEvent(new Event("wpr-load")),await this._requestAnimFrame(),window.wpronload&&window.wpronload(),await this._requestAnimFrame(),this.allJQueries.forEach(e=>e(window).trigger("wpr-jquery-load")),window.dispatchEvent(new Event("wpr-pageshow")),await this._requestAnimFrame(),window.wpronpageshow&&window.wpronpageshow()}_handleDocumentWrite(){const e=new Map;document.write=document.writeln=function(t){const n=document.currentScript,r=document.createRange(),i=n.parentElement;let a=e.get(n);void 0===a&&(a=n.nextSibling,e.set(n,a));const s=document.createDocumentFragment();r.setStart(s,0),s.appendChild(r.createContextualFragment(t)),i.insertBefore(s,a)}}async _requestAnimFrame(){return new Promise(e=>requestAnimationFrame(e))}static run(){const e=new FVMLoader(["keydown","mousemove","touchmove","touchstart","touchend","wheel"]);e._addUserInteractionListener(e)}}FVMLoader.run();</script><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"><title>The7 &#8211; The Most Customizable Theme on the Market!</title><meta name='robots' content='max-image-preview:large' /><link rel="alternate" type="application/rss+xml" title="The7 &raquo; Feed" href="https://the7.io/feed/" /><link rel="alternate" type="application/rss+xml" title="The7 &raquo; Comments Feed" href="https://the7.io/comments/feed/" /><link rel="canonical" href="https://the7.io/" /><meta property="og:site_name" content="The7" /><meta property="og:title" content="landing main" /><meta property="og:description" content="The most customizable theme on the market for &#038; Choosing a WordPress Theme for Your Next Project? The7 is the most customizable WordPress theme available on the market up to date. It gives you creative freedom that no other theme can match. No matter if you are a beginner or a pro, website owner, creative&hellip;" /><meta property="og:url" content="https://the7.io/" /><meta property="og:type" content="website" /><link rel="preload" fetchpriority="low" id="fvmfonts-css" href="https://the7.io/wp-content/cache/fvm/min/1674121845-css9c72e4f8c8b21c4261d36fc60c51f3d24c88089ff54cab61d1f2fae7434e7.css" as="style" media="all" onload="this.rel='stylesheet';this.onload=null">
<link rel="stylesheet" href="https://the7.io/wp-content/cache/fvm/min/1674121845-css5504932bade70f121fb1138e0619788d2d4b839d09a4d63e45e0efa32f764.css" media="all" /><script data-cfasync='false'>if(dtmuag()){window.addEventListener("load",function(){var c=setTimeout(b,dtmuag_t);dtmuag_events.forEach(function(a){window.addEventListener(a,e,{passive:!0})});function e(){b();clearTimeout(c);dtmuag_events.forEach(function(a){window.removeEventListener(a,e,{passive:!0})})}function b(){(function(a){dtmuag_events.forEach(function(a){window.removeEventListener(a,e,{passive:!0})});var b=a.createElement('script'),c=a.scripts[0];b.src='https://the7.io/wp-content/cache/fvm/min/1674121845-js3d9842a0aa4cfe630267cd4d39dccd95c310a50721a8cb57b6e4c6b37e1268.js';b.async=false;a.body.appendChild(b);}(document)); }});}</script>
<script data-cfasync='false'>if(dtmuag()){window.addEventListener("load",function(){var c=setTimeout(b,dtmuag_t);dtmuag_events.forEach(function(a){window.addEventListener(a,e,{passive:!0})});function e(){b();clearTimeout(c);dtmuag_events.forEach(function(a){window.removeEventListener(a,e,{passive:!0})})}function b(){(function(a){dtmuag_events.forEach(function(a){window.removeEventListener(a,e,{passive:!0})});var b=a.createElement('script'),c=a.scripts[0];b.src='https://the7.io/wp-content/cache/fvm/min/1674121845-js99fc07f7cb3f0cdfe0fbfc318357a6631045200bfcb08c841e4fcfb3dd73a8.js';b.async=false;a.body.appendChild(b);}(document)); }});}</script>
<link rel="profile" href="https://gmpg.org/xfn/11" />
<script id="the7-cloudflare-mobile-menu-fix">
        document.addEventListener("DOMContentLoaded", function(event) {
            var mobileMenuImages = document.body.querySelectorAll("#mobile-menu img");
            var brandingImages = document.body.querySelectorAll(".branding img");
            var slideshowImages = document.body.querySelectorAll("#main-slideshow img");

            Array.prototype.forEach.call(mobileMenuImages, function (el) {
                el.setAttribute("data-cfstyle", el.getAttribute("style"));
            });
            Array.prototype.forEach.call(brandingImages, function (el) {
                el.setAttribute("style", "");
            });
            Array.prototype.forEach.call(slideshowImages, function (el) {
                if (!el.getAttribute("src") && el.getAttribute("data-cfsrc")) {
                    el.setAttribute("src", el.getAttribute("data-cfsrc"));
                }
            });
        });
		</script>
<script src='https://the7.io/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js'></script>
<script src='https://the7.io/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js'></script>
<script id='dt-above-fold-js-extra'>
/* <![CDATA[ */
var dtLocal = {"themeUrl":"https:\/\/the7.io\/wp-content\/themes\/dt-the7","passText":"To view this protected post, enter the password below:","moreButtonText":{"loading":"Loading...","loadMore":"Load more"},"postID":"2850","ajaxurl":"https:\/\/the7.io\/wp-admin\/admin-ajax.php","REST":{"baseUrl":"https:\/\/the7.io\/wp-json\/the7\/v1","endpoints":{"sendMail":"\/send-mail"}},"contactMessages":{"required":"One or more fields have an error. Please check and try again.","terms":"Please accept the privacy policy.","fillTheCaptchaError":"Please, fill the captcha."},"captchaSiteKey":"","ajaxNonce":"f3841a50c5","pageData":{"type":"page","template":"page","layout":null},"themeSettings":{"smoothScroll":"off","lazyLoading":false,"desktopHeader":{"height":""},"ToggleCaptionEnabled":"disabled","ToggleCaption":"Navigation","floatingHeader":{"showAfter":94,"showMenu":false,"height":64,"logo":{"showLogo":true,"html":"","url":"https:\/\/the7.io\/"}},"topLine":{"floatingTopLine":{"logo":{"showLogo":false,"html":""}}},"mobileHeader":{"firstSwitchPoint":1150,"secondSwitchPoint":600,"firstSwitchPointHeight":60,"secondSwitchPointHeight":50,"mobileToggleCaptionEnabled":"right","mobileToggleCaption":"Menu"},"stickyMobileHeaderFirstSwitch":{"logo":{"html":""}},"stickyMobileHeaderSecondSwitch":{"logo":{"html":""}},"sidebar":{"switchPoint":992},"boxedWidth":"1280px"},"elementor":{"settings":{"container_width":1300}}};
var dtShare = {"shareButtonText":{"facebook":"Share on Facebook","twitter":"Tweet","pinterest":"Pin it","linkedin":"Share on Linkedin","whatsapp":"Share on Whatsapp"},"overlayOpacity":"90"};
/* ]]> */
</script>
<link rel="icon" href="https://the7.io/wp-content/uploads/2020/08/logo-main-qs-thick.svg" sizes="192x192" />
<script>
window.psicheck = function() {
  var check = false;
  
  (function(a){if(navigator.userAgent.match(/nux.*oto\sG|x11.*fox\/54|x11.*ome\/39|x11.*ome\/62|oid\s6.*1.*xus\s5.*MRA58N.*ome|JWR66Y.*ome\/62|woobot|speed|ighth|tmetr|eadle/i)) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if (!window.psicheck()){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90553574-1', 'auto');
  ga('send', 'pageview');
}
</script></head>
<body id="the7-body" class="home page-template page-template-elementor_header_footer page page-id-2850 wp-custom-logo wp-embed-responsive the7-core-ver-2.7.2 dt-responsive-on right-mobile-menu-close-icon ouside-menu-close-icon mobile-close-right-caption  fade-thin-mobile-menu-close-icon fade-medium-menu-close-icon srcset-enabled btn-flat custom-btn-color custom-btn-hover-color first-switch-logo-left first-switch-menu-right second-switch-logo-left second-switch-menu-right right-mobile-menu layzr-loading-on popup-message-style the7-ver-11.4.1-b01170945 elementor-default elementor-template-full-width elementor-clear-template elementor-kit-5009 elementor-page elementor-page-2850">
<div id="page">
<a class="skip-link screen-reader-text" href="#content">Skip to content</a>
<div data-elementor-type="header" data-elementor-id="5746" class="elementor elementor-5746 elementor-location-header">
<section class="elementor-section elementor-top-section elementor-element elementor-element-1524d4f elementor-section-full_width elementor-section-height-min-height the7-e-sticky-overlap-yes the7-e-sticky-row-yes the7-e-sticky-effect-yes elementor-section-height-default elementor-section-items-middle" data-id="1524d4f" data-element_type="section" data-settings="{&quot;the7_sticky_row_overlap&quot;:&quot;yes&quot;,&quot;the7_sticky_row&quot;:&quot;yes&quot;,&quot;the7_sticky_effects&quot;:&quot;yes&quot;,&quot;the7_sticky_effects_offset&quot;:50,&quot;the7_sticky_row_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;the7_sticky_row_offset&quot;:0,&quot;the7_sticky_effects_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-eeed1bd" data-id="eeed1bd" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-bb18647 elementor-widget__width-auto anchor-link the7-img-sticky-size-effect-yes elementor-widget elementor-widget-image" data-id="bb18647" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<a href="#!/up" title="Homepage link">
<img width="400" height="400" src="https://the7.io/wp-content/uploads/2020/08/logo-main-qs-thick.svg" class="attachment-large size-large wp-image-10676" alt="" loading="lazy" /> </a>
</div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-20cadb9" data-id="20cadb9" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-cddc75a toggle-align-right toggle-align-tablet-right sub-menu-position-justify dt-sub-menu_align-center parent-item-clickable-yes horizontal-menu--dropdown-tablet mob-menu-dropdown sub-icon_position-right sub-icon_align-with_text elementor-widget elementor-widget-the7_horizontal-menu" data-id="cddc75a" data-element_type="widget" data-settings="{&quot;parent_is_clickable&quot;:&quot;yes&quot;,&quot;dropdown&quot;:&quot;tablet&quot;,&quot;dropdown_type&quot;:&quot;dropdown&quot;}" data-widget_type="the7_horizontal-menu.default">
<div class="elementor-widget-container">
<div class="horizontal-menu-wrap"><div class="horizontal-menu-toggle hidden-on-load" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false"><span class="right menu-toggle-icons" aria-hidden="true" role="presentation"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></svg></span></div><nav class="dt-nav-menu-horizontal--main dt-nav-menu-horizontal__container justify-content-end widget-divider-"><ul class="dt-nav-menu-horizontal d-flex flex-row justify-content-end"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2083 first depth-0"><a href='#!/demos' target='_blank' data-level='1'><span class="item-content"><span class="menu-item-text"><span class="menu-text">Demo Sites</span></span><span class="submenu-indicator"><i aria-hidden="true" class="desktop-menu-icon fas fa-chevron-down"></i><span class="submenu-mob-indicator"><i aria-hidden="true" class="mobile-menu-icon fas fa-caret-down"></i><i aria-hidden="true" class="mobile-act-icon fas fa-caret-up"></i></span></span></span></a></li> <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3606 depth-0"><a href='#!/the7elementor' data-level='1'><span class="item-content"><span class="menu-item-text"><span class="menu-text">The7 &#038; Elementor</span></span><span class="submenu-indicator"><i aria-hidden="true" class="desktop-menu-icon fas fa-chevron-down"></i><span class="submenu-mob-indicator"><i aria-hidden="true" class="mobile-menu-icon fas fa-caret-down"></i><i aria-hidden="true" class="mobile-act-icon fas fa-caret-up"></i></span></span></span></a></li> <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3607 depth-0"><a href='#!/woo' data-level='1'><span class="item-content"><span class="menu-item-text"><span class="menu-text">WooCommerce</span></span><span class="submenu-indicator"><i aria-hidden="true" class="desktop-menu-icon fas fa-chevron-down"></i><span class="submenu-mob-indicator"><i aria-hidden="true" class="mobile-menu-icon fas fa-caret-down"></i><i aria-hidden="true" class="mobile-act-icon fas fa-caret-up"></i></span></span></span></a></li> <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3609 depth-0"><a href='#!/bakery' data-level='1'><span class="item-content"><span class="menu-item-text"><span class="menu-text">WPBakery</span></span><span class="submenu-indicator"><i aria-hidden="true" class="desktop-menu-icon fas fa-chevron-down"></i><span class="submenu-mob-indicator"><i aria-hidden="true" class="mobile-menu-icon fas fa-caret-down"></i><i aria-hidden="true" class="mobile-act-icon fas fa-caret-up"></i></span></span></span></a></li> <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3610 last depth-0"><a href='#!/more' data-level='1'><span class="item-content"><span class="menu-item-text"><span class="menu-text">And More!</span></span><span class="submenu-indicator"><i aria-hidden="true" class="desktop-menu-icon fas fa-chevron-down"></i><span class="submenu-mob-indicator"><i aria-hidden="true" class="mobile-menu-icon fas fa-caret-down"></i><i aria-hidden="true" class="mobile-act-icon fas fa-caret-up"></i></span></span></span></a></li> </ul></nav></div> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-157f378 elementor-hidden-mobile elementor-hidden-tablet" data-id="157f378" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-b475688 elementor-widget elementor-widget-the7_button_widget" data-id="b475688" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="https://themeforest.net/user/themebeez500/portfolio" target="_blank" class="box-button elementor-button elementor-size-md">Buy now $50<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.366 3.438L18.577 9H22v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h3.422l3.212-5.562 1.732 1L7.732 9h8.535l-2.633-4.562 1.732-1zM13 13h-2v4h2v-4zm-4 0H7v4h2v-4zm8 0h-2v4h2v-4z"></path></svg></a></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
<div id="main" class="sidebar-none sidebar-divider-off">
<div class="main-gradient"></div>
<div class="wf-wrap">
<div class="wf-container-main">
<div id="content" class="content" role="main">
<div data-elementor-type="wp-page" data-elementor-id="2850" class="elementor elementor-2850">
<section class="elementor-section elementor-top-section elementor-element elementor-element-5eab983b elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="5eab983b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
<div class="elementor-background-overlay"></div>
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1860f3d9" data-id="1860f3d9" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-background-overlay"></div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-2601e15 elementor-section-full_width elementor-section-content-middle elementor-section-height-default elementor-section-height-default" data-id="2601e15" data-element_type="section">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-979a769" data-id="979a769" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-3026ed6 elementor-widget__width-inherit elementor-align-center elementor-widget elementor-widget-the7_icon_widget" data-id="3026ed6" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;}" data-widget_type="the7_icon_widget.default">
<div class="elementor-widget-container">
<div class="the7-icon-wrapper the7-elementor-widget"><div class="elementor-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="hero" x="0px" y="0px" viewbox="0 0 900 900" style="enable-background:new 0 0 900 900;" xml:space="preserve"><style type="text/css" media="all">.st0{fill:url(#mround_00000002347530668058572020000011425494105307521457_);}	.st1{fill:#FFFFFF;}</style><g> <g id="mlogo"> <lineargradient id="mround_00000088846262342045515490000005529593576421353879_" gradientunits="userSpaceOnUse" x1="98.3866" y1="-5847.1421" x2="808.0947" y2="-5437.3926" gradienttransform="matrix(1 0 0 1 0 6095.3501)"> <stop offset="6.680000e-02" style="stop-color:#13E3EE"></stop> <stop offset="0.9107" style="stop-color:#03A9F4"></stop> </lineargradient> <path id="mround" style="fill:url(#mround_00000088846262342045515490000005529593576421353879_);" d="M633,82.7L633,82.7   c-2.5-1.3-5.3-2.1-8.3-2.1c-9.4,0-17,7.7-17,17.2c0,5.8,2.9,11,7.3,14.1l-0.1,0.1c0.4,0.2,0.8,0.4,1.2,0.6   c0.8,0.5,1.6,0.9,2.4,1.2c124,61.6,209.3,190.4,209.3,339.2c0,208.8-167.8,378-374.7,378S78.4,661.8,78.4,453   c0-148.9,85.3-277.7,209.4-339.3c6.3-2.5,10.7-8.7,10.7-15.9c0-9.5-7.6-17.2-17-17.2c-2.4,0-4.8,0.5-6.9,1.5V82   C138.4,148.9,44.4,289.9,44.4,453c0,227.7,183,412.4,408.8,412.4S862,680.8,862,453C861.8,290.4,768.5,149.8,633,82.7z"></path> <g> <path class="st1" d="M379.4,54.7c2.4,0,4.4-0.8,6-2.3c1.6-1.5,2.4-3.5,2.4-5.8c0-2.4-0.8-4.4-2.4-6c-1.6-1.6-3.6-2.4-6-2.4h-10.6    v-9.6c0-2.6-0.8-4.8-2.5-6.5c-1.6-1.7-3.8-2.6-6.4-2.6c-2.6,0-4.8,0.9-6.5,2.6c-1.7,1.7-2.6,3.9-2.6,6.5v9.6h-6.9    c-2.4,0-4.4,0.8-6,2.3c-1.6,1.5-2.4,3.5-2.4,5.8c0,2.4,0.8,4.4,2.4,6c1.6,1.6,3.6,2.4,6,2.4h6.9v41.4c0,4.9,0.7,8.7,2.2,11.5    c1.5,2.8,3.4,4.9,5.6,6.2c2.2,1.3,4.6,2.2,7.2,2.5c2.5,0.4,4.9,0.5,7,0.5c3.5,0,6.8-0.9,9.8-2.7c3-1.8,4.6-4.1,4.6-6.9    c0-2.3-0.6-4.1-1.7-5.4c-1.1-1.3-2.4-1.9-3.8-1.9c-1.3,0-2.4,0.2-3.4,0.7c-1,0.4-2.1,0.7-3.3,0.7c-1.1,0-2.1-0.2-3.1-0.6    c-1-0.4-1.7-1-2.2-1.9c-0.5-0.9-0.8-2-0.8-3.4V54.7H379.4z"></path> <path class="st1" d="M464.8,39.9c-3.7-3.1-9.2-4.6-16.4-4.6c-3.3,0-6.3,0.5-9.1,1.6c-2.8,1-5.3,2.4-7.6,4.1    c-2.3,1.7-4.2,3.5-5.8,5.5c-0.5,0.7-1,1.3-1.5,1.9V15.2c0-2.6-0.8-4.8-2.5-6.5C420,6.9,417.9,6,415.3,6c-2.6,0-4.7,0.9-6.4,2.6    c-1.7,1.7-2.5,3.9-2.5,6.5v92.6c0,2.6,0.8,4.8,2.5,6.5c1.7,1.7,3.8,2.6,6.4,2.6c2.6,0,4.7-0.9,6.4-2.6c1.7-1.7,2.5-3.9,2.5-6.5    V69.4c0-3.3,0.7-6.3,2-8.9c1.3-2.6,3.4-4.8,6.1-6.4c2.7-1.6,5.9-2.4,9.7-2.4c3.9,0,6.9,0.8,9,2.4c2.1,1.6,3.5,3.7,4.3,6.4    c0.8,2.6,1.2,5.6,1.2,8.9v38.4c0,2.6,0.8,4.8,2.5,6.5c1.7,1.7,3.8,2.6,6.4,2.6s4.7-0.9,6.4-2.6c1.7-1.7,2.5-3.9,2.5-6.5V69.4    c0-6.3-0.7-12-2.1-17.2C471.1,47.1,468.5,43,464.8,39.9z"></path> <path class="st1" d="M561.9,59.7c-2-4.8-4.8-9-8.3-12.7c-3.5-3.6-7.5-6.5-12.1-8.6c-4.5-2.1-9.4-3.1-14.5-3.1    c-6.6,0-12.8,1.7-18.7,5.1c-5.9,3.4-10.7,8.3-14.3,14.6c-3.6,6.3-5.5,14-5.5,23c0,7.7,1.7,14.6,5,20.7    c3.3,6.1,8.1,10.9,14.4,14.5c6.2,3.5,13.6,5.3,22.1,5.3c5,0,9.8-0.8,14.5-2.5c4.7-1.6,8.3-3.6,10.9-5.8c2.8-2.2,4.2-4.6,4.2-7.3    c0-2-0.7-3.7-2.2-5.2c-1.4-1.5-3.3-2.2-5.5-2.2c-1.6,0-3.3,0.4-5.1,1.3c-1.1,0.6-2.3,1.3-3.7,2.2c-1.3,0.9-3.1,1.6-5.3,2.2    c-2.2,0.6-5.1,0.9-8.8,0.9c-4,0-7.8-1-11.3-2.9c-3.5-1.9-6.4-4.8-8.7-8.5c-1.3-2.2-2.2-4.7-2.8-7.4h49.5c2.4,0,4.5-0.7,6.3-2.2    c1.8-1.5,2.7-3.4,2.8-5.8C565,69.6,564,64.5,561.9,59.7z M512,57c1.9-1.9,4.1-3.2,6.7-4c2.6-0.8,5.4-1.2,8.4-1.2    c3.1,0,6,0.7,8.8,2c2.7,1.3,5,3.2,6.9,5.5c1.8,2.3,2.9,4.9,3.1,7.8v1h-39.3c0.2-1.2,0.5-2.4,0.9-3.4    C508.6,61.4,510.1,58.9,512,57z"></path> </g> </g> <path class="st1" d="M603.4,269.5c-3.4-3.3-8.2-5-14.5-5H341.1c-5.4,0-10,1.7-13.8,5c-3.8,3.4-5.7,7.7-5.7,13.2  c0,5,1.9,9.3,5.7,12.9c3.8,3.6,8.4,5.3,13.8,5.3h216.2L382.2,678.5c-1.3,3.4-2,6.5-2,9.4c0,5,2.2,9.2,6.7,12.5  c4.5,3.3,9.4,5,14.8,5c4,0,7.9-1.2,11.5-3.5c3.6-2.3,6.3-5.3,8.1-9.1l185.2-401.5c1.3-2.9,2-6.1,2-9.4  C608.5,277.1,606.8,272.9,603.4,269.5z"></path></g></svg></div></div> </div>
</div>
<div class="elementor-element elementor-element-9813658 elementor-widget elementor-widget-spacer" data-id="9813658" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-9367a56 elementor-widget elementor-widget-heading" data-id="9367a56" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:200}" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h2 class="elementor-heading-title elementor-size-default">The <span style="font-weight:800;;">most customizable</span> theme on the market</h2> </div>
</div>
<div class="elementor-element elementor-element-6739a13 elementor-widget elementor-widget-spacer" data-id="6739a13" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a586318 elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="a586318" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:400}" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">for</h3> </div>
</div>
<div class="elementor-element elementor-element-c7df073 elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="c7df073" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:400}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="392" height="63" src="https://the7.io/wp-content/uploads/2022/10/logo-elementor-light.svg" class="attachment-large size-large wp-image-9224" alt="" loading="lazy" /> </div>
</div>
<div class="elementor-element elementor-element-4a13e5c elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="4a13e5c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:400}" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">&</h3> </div>
</div>
<div class="elementor-element elementor-element-e53e86e elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="e53e86e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;none&quot;,&quot;_animation_delay&quot;:400}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="113" height="26" src="https://the7.io/wp-content/uploads/2022/11/logo-woocommerce-light.svg" class="attachment-large size-large wp-image-10712" alt="" loading="lazy" /> </div>
</div>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-b6de8e5 elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b6de8e5" data-element_type="section">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8cea02f" data-id="8cea02f" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-36ae75d6 e-transform elementor-absolute elementor-invisible elementor-widget elementor-widget-image" data-id="36ae75d6" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:19,&quot;sizes&quot;:[]},&quot;_position&quot;:&quot;absolute&quot;,&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" src="https://the7.io/wp-content/uploads/elementor/thumbs/mincrlight1440-pzvsol5qnr3xke9t64ao8s08ec25ylj3pofzl4ji94.jpg" title="mincrlight1440" alt="mincrlight1440" /> </div>
</div>
<div class="elementor-element elementor-element-72b07a6 e-transform elementor-absolute elementor-invisible elementor-widget elementor-widget-image" data-id="72b07a6" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:21.5,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:6,&quot;sizes&quot;:[]},&quot;_position&quot;:&quot;absolute&quot;,&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" src="https://the7.io/wp-content/uploads/elementor/thumbs/coach1440-pzvq4v2pqrjmm9i9ryyaff9xjq5ptwe23on8o2jjfs.jpg" title="coach1440" alt="coach1440" /> </div>
</div>
<div class="elementor-element elementor-element-20457c38 e-transform elementor-absolute elementor-invisible elementor-widget elementor-widget-image" data-id="20457c38" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:-19.5,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:2,&quot;sizes&quot;:[]},&quot;_position&quot;:&quot;absolute&quot;,&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" loading="lazy" width="1440" height="900" class="lazy-load" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1440 900'%2F%3E" data-src="https://the7.io/wp-content/uploads/elementor/thumbs/e-sh-demo-001-q0lmq7umvkxqecc3yqks3szi1dd6cda5od27kcztbc.jpg" title="e-sh-demo-001" alt="e-sh-demo-001" /> </div>
</div>
<div class="elementor-element elementor-element-117e6f2c e-transform elementor-absolute elementor-invisible elementor-widget elementor-widget-image" data-id="117e6f2c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:44.5,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:28,&quot;sizes&quot;:[]},&quot;_position&quot;:&quot;absolute&quot;,&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" src="https://the7.io/wp-content/uploads/elementor/thumbs/elagency1440-pzvsok7wgx2n8sb6blw1oa8rsy6sqwfddjsi3ukwfc.jpg" title="elagency1440" alt="elagency1440" /> </div>
</div>
<div class="elementor-element elementor-element-59a01e4 e-transform elementor-absolute elementor-invisible elementor-widget elementor-widget-image" data-id="59a01e4" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:-44.5,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:28,&quot;sizes&quot;:[]},&quot;_position&quot;:&quot;absolute&quot;,&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" src="https://the7.io/wp-content/uploads/elementor/thumbs/elcomp1440-pzvsoja2a31cx6cjh3hf3shb7kbfj7bn1f50mkmalk.jpg" title="elcomp1440" alt="elcomp1440" /> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-05b8b07 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="05b8b07" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}">
<div class="elementor-background-overlay"></div>
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ed3f9d2" data-id="ed3f9d2" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-6d701d3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6d701d3" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-205ed42" data-id="205ed42" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-588dc94 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="588dc94" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Choosing a <span class="paint-accent-color">WordPress Theme</span> for</h3> </div>
</div>
<div class="elementor-element elementor-element-b56974f elementor-widget elementor-widget-spacer" data-id="b56974f" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-c1f9c2b elementor-widget elementor-widget-heading" data-id="c1f9c2b" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h2 class="elementor-heading-title elementor-size-default">Your Next Project?</h2> </div>
</div>
<div class="elementor-element elementor-element-7f85b58 elementor-widget elementor-widget-spacer" data-id="7f85b58" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-5a10188 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="5a10188" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>The7 is the <span class="paint-accent-color"><strong>most customizable</strong></span> WordPress theme available on the market up to date. It gives you creative freedom that no other theme can match. No matter if you are a beginner or a pro, website owner, creative professional, or a digital agency – The7 offers tremendous power and unparalleled value to everyone.</p> </div>
</div>
<div class="elementor-element elementor-element-47e46be elementor-widget elementor-widget-spacer" data-id="47e46be" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-53cfcc0 content-align-tablet-center content-align-center icon-position-top icon-vertical-align-center elementor-widget__width-initial icon-box-vertical-align-top elementor-widget elementor-widget-the7_icon_box_grid_widget" data-id="53cfcc0" data-element_type="widget" data-widget_type="the7_icon_box_grid_widget.default">
<div class="elementor-widget-container">
<div class="the7-box-grid-wrapper the7-elementor-widget loading-effect-none the7_icon_box_grid_widget-53cfcc0"> <div class="dt-css-grid">
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"></path><path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"></path></svg> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> #1 selling Elementor theme </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 0 1 3.182-3.182zM12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 7.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 0 1-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 0 1 5.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> 270 000+ satisfied customers </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"></path></svg> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Rock-solid 5-star rating </a> </h4>
</div>
</div>
</div> </div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-e026157 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e026157" data-element_type="section" id="demos" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ded745c" data-id="ded745c" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-3f2e720 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3f2e720" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-2384e18" data-id="2384e18" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-109cac1 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-counter" data-id="109cac1" data-element_type="widget" data-widget_type="counter.default">
<div class="elementor-widget-container">
<div class="elementor-counter">
<div class="elementor-counter-number-wrapper">
<span class="elementor-counter-number-prefix"></span>
<span class="elementor-counter-number" data-duration="1000" data-to-value="60" data-from-value="50" data-delimiter=",">50</span>
<span class="elementor-counter-number-suffix">+</span>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-d3f1d3c elementor-widget__width-auto elementor-widget elementor-widget-heading" data-id="d3f1d3c" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h2 class="elementor-heading-title elementor-size-default">Demo Sites</h2> </div>
</div>
<div class="elementor-element elementor-element-a0f744c elementor-widget elementor-widget-spacer" data-id="a0f744c" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-7ccc301 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="7ccc301" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
The7 comes with 60+ prebuilt dummy websites complete with exclusive templates for Elementor, WPBakery Page Builder &amp; Slider Revolution. <span style="color: #ffffff;"><strong>Import them in a single click.</strong></span> <span class="paint-accent-color"><strong>Mix, match, change.</strong></span> Create a perfect foundation for your new website in minutes! </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-e440ee7 elementor-widget elementor-widget-spacer" data-id="e440ee7" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-7c9ae1c elementor-widget__width-initial elementor-widget elementor-widget-the7_elements" data-id="7c9ae1c" data-element_type="widget" data-settings="{&quot;widget_columns_wide_desktop_breakpoint&quot;:1800}" data-widget_type="the7_elements.default">
<div class="elementor-widget-container">
<div class="portfolio-shortcode the7-elementor-widget the7_elements-7c9ae1c mode-grid dt-css-grid-wrap classic-layout-list description-under-image meta-info-off content-bg-on resize-by-browser-width widget-with-filter loading-effect-none jquery-filter" data-padding="40px" data-mobile-columns-num="1" data-tablet-columns-num="2" data-desktop-columns-num="3" data-wide-desktop-columns-num="4" data-post-limit="24" data-pagination-mode="load-more" data-scroll-offset=""><div class="iso-filter filter-decorations css-grid-filter extras-off filter filter-pointer-none"><div class="filter-categories" data-default-order="" data-default-orderby=""><a href="https://the7.io/" class="show-all filter-item act" data-filter="*">All</a><a href="#" class="filter-item elementor" data-filter=".category-2">Elementor</a><a href="https://the7.io/?term=multi-page" class="filter-item multi-page" data-filter=".category-3">Multi page</a><a href="https://the7.io/?term=one-page" class="filter-item one-page" data-filter=".category-4">One page</a><a href="https://the7.io/?term=woocommerce" class="filter-item woocommerce" data-filter=".category-5">Shop</a><a href="https://the7.io/?term=wpbakery" class="filter-item wpbakery" data-filter=".category-6">WPBakery</a></div></div><div class="dt-css-grid custom-pagination-handler"><div class="visible wf-cell category-2 category-3 category-5" data-post-id="5298" data-date="2022-11-29T02:50:53+00:00" data-name="Elementor Main Demo"><article class="post visible post-5298 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Elementor Main Demo" data-date="2022-11-29T02:50:53+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/elmain1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/elmain1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/11/elmain1440-1152x720.jpg 1152w" alt="" title="elmain1440" width="768" height="480" /></a><div class="project-links-container"><a href="" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="" target="_blank" rel="bookmark" title="Elementor Main Demo">Elementor Main Demo</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="5369" data-date="2022-10-21T08:39:44+01:00" data-name="Online Shop Main Demo"><article class="post visible post-5369 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Online Shop Main Demo" data-date="2022-10-21T08:39:44+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-shop/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/10/e-sh-demo-001-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/10/e-sh-demo-001-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/10/e-sh-demo-001-1152x720.jpg 1152w" alt="" title="e-sh-demo-001" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-shop/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-shop/" target="_blank" rel="bookmark" title="Online Shop Main Demo">Online Shop Main Demo</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="5612" data-date="2022-10-13T07:59:47+01:00" data-name="Brand Shop"><article class="post visible post-5612 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Brand Shop" data-date="2022-10-13T07:59:47+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/brand-shop/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/10/br-sh-007-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/10/br-sh-007-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/10/br-sh-007-1152x720.jpg 1152w" alt="" title="br-sh-007" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/brand-shop/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/brand-shop/" target="_blank" rel="bookmark" title="Brand Shop">Brand Shop</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="8029" data-date="2022-09-10T14:46:29+01:00" data-name="Restaurant"><article class="post visible post-8029 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Restaurant" data-date="2022-09-10T14:46:29+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-restaurant/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/09/elrestg1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/09/elrestg1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/09/elrestg1440-1152x720.jpg 1152w" alt="" title="elrestg1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-restaurant/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-restaurant/" target="_blank" rel="bookmark" title="Restaurant">Restaurant</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-4 category-5" data-post-id="5452" data-date="2022-09-05T13:25:43+01:00" data-name="Coach"><article class="post visible post-5452 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-one-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-4 dt_portfolio_category-5 description-off" data-name="Coach" data-date="2022-09-05T13:25:43+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/coach/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/coach1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/coach1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/11/coach1440-1152x720.jpg 1152w" alt="" title="coach1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/coach/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/coach/" target="_blank" rel="bookmark" title="Coach">Coach</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-4 category-5" data-post-id="10766" data-date="2022-08-20T09:13:43+01:00" data-name="CBD Shop"><article class="post visible post-10766 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-one-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-4 dt_portfolio_category-5 description-off" data-name="CBD Shop" data-date="2022-08-20T09:13:43+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/cbd/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/cbd1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/cbd1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/11/cbd1440-1152x720.jpg 1152w" alt="" title="cbd1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/cbd/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/cbd/" target="_blank" rel="bookmark" title="CBD Shop">CBD Shop</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="10746" data-date="2022-08-19T18:29:23+01:00" data-name="Corporate"><article class="post visible post-10746 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Corporate" data-date="2022-08-19T18:29:23+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-corporate/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/08/elcorp1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/08/elcorp1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/08/elcorp1440-1152x720.jpg 1152w" alt="" title="elcorp1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-corporate/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-corporate/" target="_blank" rel="bookmark" title="Corporate">Corporate</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-4" data-post-id="5127" data-date="2022-08-17T22:01:38+01:00" data-name="Agency"><article class="post visible post-5127 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-one-page dt_portfolio_category-2 dt_portfolio_category-4 description-off" data-name="Agency" data-date="2022-08-17T22:01:38+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-agency/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/08/elagency1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/08/elagency1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/08/elagency1440-1152x720.jpg 1152w" alt="" title="elagency1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-agency/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-agency/" target="_blank" rel="bookmark" title="Agency">Agency</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="7996" data-date="2022-08-01T00:57:46+01:00" data-name="Company"><article class="post visible post-7996 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Company" data-date="2022-08-01T00:57:46+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-company/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/08/elcomp1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/08/elcomp1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/08/elcomp1440-1152x720.jpg 1152w" alt="" title="elcomp1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-company/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-company/" target="_blank" rel="bookmark" title="Company">Company</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="2091" data-date="2022-07-29T12:46:20+01:00" data-name="Minimal Creative Light"><article class="post visible post-2091 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Minimal Creative Light" data-date="2022-07-29T12:46:20+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-minimal-creative-light/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/08/mincrlight1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/08/mincrlight1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/08/mincrlight1440-1152x720.jpg 1152w" alt="" title="mincrlight1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-minimal-creative-light/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-minimal-creative-light/" target="_blank" rel="bookmark" title="Minimal Creative Light">Minimal Creative Light</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="2060" data-date="2022-07-02T23:59:05+01:00" data-name="Consulting"><article class="post visible post-2060 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Consulting" data-date="2022-07-02T23:59:05+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/consulting/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/08/cons1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/08/cons1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/08/cons1440-1152x720.jpg 1152w" alt="" title="cons1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/consulting/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/consulting/" target="_blank" rel="bookmark" title="Consulting">Consulting</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="5595" data-date="2022-07-01T00:56:26+01:00" data-name="Business Advisors"><article class="post visible post-5595 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Business Advisors" data-date="2022-07-01T00:56:26+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/business-advisors/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/07/banew1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/07/banew1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/07/banew1440-1152x720.jpg 1152w" alt="" title="banew1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/business-advisors/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/business-advisors/" target="_blank" rel="bookmark" title="Business Advisors">Business Advisors</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="2044" data-date="2022-06-28T00:14:51+01:00" data-name="Business"><article class="post visible post-2044 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Business" data-date="2022-06-28T00:14:51+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-business/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/06/bus1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/06/bus1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/06/bus1440-1152x720.jpg 1152w" alt="" title="bus1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-business/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-business/" target="_blank" rel="bookmark" title="Business">Business</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="2095" data-date="2022-04-09T00:01:33+01:00" data-name="Online Courses &amp; Education"><article class="post visible post-2095 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Online Courses &amp; Education" data-date="2022-04-09T00:01:33+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/online-courses/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/09/ec1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/09/ec1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/09/ec1440-1152x720.jpg 1152w" alt="" title="ec1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/online-courses/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/online-courses/" target="_blank" rel="bookmark" title="Online Courses &amp; Education">Online Courses &amp; Education</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="7940" data-date="2022-03-19T23:26:39+00:00" data-name="Accounting"><article class="post visible post-7940 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Accounting" data-date="2022-03-19T23:26:39+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/accounting/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/06/acc1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/06/acc1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/06/acc1440-1152x720.jpg 1152w" alt="" title="acc1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/accounting/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/accounting/" target="_blank" rel="bookmark" title="Accounting">Accounting</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-5" data-post-id="5419" data-date="2022-03-18T08:23:04+00:00" data-name="Winery"><article class="post visible post-5419 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-5 description-off" data-name="Winery" data-date="2022-03-18T08:23:04+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/winery/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/06/winery1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/06/winery1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/06/winery1440-1152x720.jpg 1152w" alt="" title="winery1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/winery/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/winery/" target="_blank" rel="bookmark" title="Winery">Winery</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="2055" data-date="2022-03-18T00:03:10+00:00" data-name="Logistics"><article class="post visible post-2055 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Logistics" data-date="2022-03-18T00:03:10+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/logistics/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/06/log1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/06/log1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/06/log1440-1152x720.jpg 1152w" alt="" title="log1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/logistics/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/logistics/" target="_blank" rel="bookmark" title="Logistics">Logistics</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3 category-5" data-post-id="2148" data-date="2022-03-12T00:01:01+00:00" data-name="Fashion Store"><article class="post visible post-2148 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-3 dt_portfolio_category-5 description-off" data-name="Fashion Store" data-date="2022-03-12T00:01:01+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/fashion-store" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/03/fash-home01-1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/03/fash-home01-1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/03/fash-home01-1440-1152x720.jpg 1152w" alt="" title="fash-home01-1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/fashion-store" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/fashion-store" target="_blank" rel="bookmark" title="Fashion Store">Fashion Store</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="1995" data-date="2022-03-02T08:49:37+00:00" data-name="Elementor Starter"><article class="post visible post-1995 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Elementor Starter" data-date="2022-03-02T08:49:37+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-starter/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/03/elstart440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/03/elstart440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/03/elstart440-1152x720.jpg 1152w" alt="" title="elstart440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-starter/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-starter/" target="_blank" rel="bookmark" title="Elementor Starter">Elementor Starter</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="2078" data-date="2022-01-28T13:36:20+00:00" data-name="Minimal Creative Dark"><article class="post visible post-2078 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Minimal Creative Dark" data-date="2022-01-28T13:36:20+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/elementor-minimal-creative-dark/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/03/mincrdark1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/03/mincrdark1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/03/mincrdark1440-1152x720.jpg 1152w" alt="" title="mincrdark1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/elementor-minimal-creative-dark/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/elementor-minimal-creative-dark/" target="_blank" rel="bookmark" title="Minimal Creative Dark">Minimal Creative Dark</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-3" data-post-id="2142" data-date="2020-03-02T11:02:52+00:00" data-name="Fashion Blog"><article class="post visible post-2142 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-multi-page dt_portfolio_category-2 dt_portfolio_category-3 description-off" data-name="Fashion Blog" data-date="2020-03-02T11:02:52+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/fashion-blog/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/03/fblog1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/03/fblog1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/03/fblog1440-1152x720.jpg 1152w" alt="" title="fblog1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/fashion-blog/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/fashion-blog/" target="_blank" rel="bookmark" title="Fashion Blog">Fashion Blog</a></h3>
</div></article></div><div class="visible wf-cell category-2 category-5" data-post-id="10871" data-date="2020-03-01T10:57:06+00:00" data-name="Elementor Blank"><article class="post visible post-10871 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-elementor dt_portfolio_category-woocommerce dt_portfolio_category-2 dt_portfolio_category-5 description-off" data-name="Elementor Blank" data-date="2020-03-01T10:57:06+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/blank/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/03/bl1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/03/bl1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2022/03/bl1440-1152x720.jpg 1152w" alt="" title="bl1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/blank/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/blank/" target="_blank" rel="bookmark" title="Elementor Blank">Elementor Blank</a></h3>
</div></article></div><div class="visible wf-cell category-3 category-5 category-6" data-post-id="5020" data-date="2020-02-01T18:38:48+00:00" data-name="WPBakery Main Demo"><article class="post visible post-5020 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-5 dt_portfolio_category-6 description-off" data-name="WPBakery Main Demo" data-date="2020-02-01T18:38:48+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/main/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2020/02/wpbmain1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2020/02/wpbmain1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2020/02/wpbmain1440-1152x720.jpg 1152w" alt="" title="wpbmain1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/main/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/main/" target="_blank" rel="bookmark" title="WPBakery Main Demo">WPBakery Main Demo</a></h3>
</div></article></div><div class="visible wf-cell category-3 category-6" data-post-id="2018" data-date="2020-01-23T14:53:55+00:00" data-name="WPBakery Starter"><article class="post visible post-2018 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="WPBakery Starter" data-date="2020-01-23T14:53:55+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/wpbakery-starter/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2020/02/wpbstart1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2020/02/wpbstart1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2020/02/wpbstart1440-1152x720.jpg 1152w" alt="" title="wpbstart1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/wpbakery-starter/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/wpbakery-starter/" target="_blank" rel="bookmark" title="WPBakery Starter">WPBakery Starter</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1965" data-date="2019-12-29T04:15:21+00:00" data-name="Yoga"><article class="post visible post-1965 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Yoga" data-date="2019-12-29T04:15:21+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/yoga/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2020/02/wpbyoga1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2020/02/wpbyoga1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2020/02/wpbyoga1440-1152x720.jpg 1152w" alt="" title="wpbyoga1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/yoga/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/yoga/" target="_blank" rel="bookmark" title="Yoga">Yoga</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-5 category-6" data-post-id="2037" data-date="2019-12-28T01:33:54+00:00" data-name="Clothing Store"><article class="post visible post-2037 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-5 dt_portfolio_category-6 description-off" data-name="Clothing Store" data-date="2019-12-28T01:33:54+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/clothing/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2020/02/wpbclothing1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2020/02/wpbclothing1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2020/02/wpbclothing1440-1152x720.jpg 1152w" alt="" title="wpbclothing1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/clothing/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/clothing/" target="_blank" rel="bookmark" title="Clothing Store">Clothing Store</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-5 category-6" data-post-id="1800" data-date="2019-12-27T17:45:04+00:00" data-name="Small Store"><article class="post visible post-1800 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-woocommerce dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-5 dt_portfolio_category-6 description-off" data-name="Small Store" data-date="2019-12-27T17:45:04+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/small-store/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2020/02/wpbsmallstore1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2020/02/wpbsmallstore1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2020/02/wpbsmallstore1440-1152x720.jpg 1152w" alt="" title="wpbsmallstore1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/small-store/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/small-store/" target="_blank" rel="bookmark" title="Small Store">Small Store</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1792" data-date="2019-12-27T17:36:03+00:00" data-name="Construction"><article class="post visible post-1792 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Construction" data-date="2019-12-27T17:36:03+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/construction/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2020/02/wpbconstr1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2020/02/wpbconstr1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2020/02/wpbconstr1440-1152x720.jpg 1152w" alt="" title="wpbconstr1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/construction/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/construction/" target="_blank" rel="bookmark" title="Construction">Construction</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1780" data-date="2019-12-26T17:11:44+00:00" data-name="Coffee"><article class="post visible post-1780 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Coffee" data-date="2019-12-26T17:11:44+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/coffee/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2019/12/wpbcoffee1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2019/12/wpbcoffee1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2019/12/wpbcoffee1440-1152x720.jpg 1152w" alt="" title="wpbcoffee1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/coffee/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/coffee/" target="_blank" rel="bookmark" title="Coffee">Coffee</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1808" data-date="2019-12-20T18:21:13+00:00" data-name="Software Company"><article class="post visible post-1808 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Software Company" data-date="2019-12-20T18:21:13+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/software-company/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2019/12/wpbsoft1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2019/12/wpbsoft1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2019/12/wpbsoft1440-1152x720.jpg 1152w" alt="" title="wpbsoft1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/software-company/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/software-company/" target="_blank" rel="bookmark" title="Software Company">Software Company</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1900" data-date="2019-11-25T07:53:33+00:00" data-name="Hotel"><article class="post visible post-1900 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Hotel" data-date="2019-11-25T07:53:33+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/hotel" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2019/11/wpbhotel1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2019/11/wpbhotel1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2019/11/wpbhotel1440-1152x720.jpg 1152w" alt="" title="wpbhotel1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/hotel" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/hotel" target="_blank" rel="bookmark" title="Hotel">Hotel</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-5 category-6" data-post-id="1822" data-date="2019-11-24T18:34:43+00:00" data-name="Medical Cannabis"><article class="post visible post-1822 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-5 dt_portfolio_category-6 description-off" data-name="Medical Cannabis" data-date="2019-11-24T18:34:43+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/weed/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2019/11/wpbweed1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2019/11/wpbweed1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2019/11/wpbweed1440-1152x720.jpg 1152w" alt="" title="wpbweed1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/weed/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/weed/" target="_blank" rel="bookmark" title="Medical Cannabis">Medical Cannabis</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-5 category-6" data-post-id="1798" data-date="2019-06-26T17:43:12+01:00" data-name="Store"><article class="post visible post-1798 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-woocommerce dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-5 dt_portfolio_category-6 description-off" data-name="Store" data-date="2019-06-26T17:43:12+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/shop/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2019/06/wpbshop1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2019/06/wpbshop1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2019/06/wpbshop1440-1152x720.jpg 1152w" alt="" title="wpbshop1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/shop/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/shop/" target="_blank" rel="bookmark" title="Store">Store</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-5 category-6" data-post-id="1796" data-date="2019-06-20T17:41:38+01:00" data-name="Book Store"><article class="post visible post-1796 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-woocommerce dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-5 dt_portfolio_category-6 description-off" data-name="Book Store" data-date="2019-06-20T17:41:38+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/ecommerce-book/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2019/06/wpbbook1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2019/06/wpbbook1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2019/06/wpbbook1440-1152x720.jpg 1152w" alt="" title="wpbbook1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/ecommerce-book/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/ecommerce-book/" target="_blank" rel="bookmark" title="Book Store">Book Store</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1878" data-date="2018-11-21T23:23:21+00:00" data-name="Church"><article class="post visible post-1878 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Church" data-date="2018-11-21T23:23:21+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/church/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/11/wpbchurch1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/11/wpbchurch1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/11/wpbchurch1440-1152x720.jpg 1152w" alt="" title="wpbchurch1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/church/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/church/" target="_blank" rel="bookmark" title="Church">Church</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1778" data-date="2018-10-21T23:50:48+01:00" data-name="Marketing Agency"><article class="post visible post-1778 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Marketing Agency" data-date="2018-10-21T23:50:48+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/marketing-agency/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/10/wpbmark1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/10/wpbmark1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/10/wpbmark1440-1152x720.jpg 1152w" alt="" title="wpbmark1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/marketing-agency/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/marketing-agency/" target="_blank" rel="bookmark" title="Marketing Agency">Marketing Agency</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1826" data-date="2018-09-01T18:37:14+01:00" data-name="Modern Business"><article class="post visible post-1826 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Modern Business" data-date="2018-09-01T18:37:14+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/modern-business/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/09/wpbmb1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/09/wpbmb1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/09/wpbmb1440-1152x720.jpg 1152w" alt="" title="wpbmb1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/modern-business/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/modern-business/" target="_blank" rel="bookmark" title="Modern Business">Modern Business</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1806" data-date="2018-08-20T18:20:13+01:00" data-name="Digital Agency"><article class="post visible post-1806 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Digital Agency" data-date="2018-08-20T18:20:13+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/digital-agency/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/08/wpbdigag1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/08/wpbdigag1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/08/wpbdigag1440-1152x720.jpg 1152w" alt="" title="wpbdigag1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/digital-agency/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/digital-agency/" target="_blank" rel="bookmark" title="Digital Agency">Digital Agency</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1764" data-date="2018-08-20T15:34:53+01:00" data-name="Product"><article class="post visible post-1764 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Product" data-date="2018-08-20T15:34:53+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/product/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/08/wpbproduct1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/08/wpbproduct1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/08/wpbproduct1440-1152x720.jpg 1152w" alt="" title="wpbproduct1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/product/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/product/" target="_blank" rel="bookmark" title="Product">Product</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1759" data-date="2018-08-20T15:13:29+01:00" data-name="Travel Agency"><article class="post visible post-1759 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Travel Agency" data-date="2018-08-20T15:13:29+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/expedition/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/08/wpbtravel1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/08/wpbtravel1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/08/wpbtravel1440-1152x720.jpg 1152w" alt="" title="wpbtravel1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/expedition/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/expedition/" target="_blank" rel="bookmark" title="Travel Agency">Travel Agency</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1784" data-date="2018-08-04T17:19:39+01:00" data-name="Law Firm"><article class="post visible post-1784 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Law Firm" data-date="2018-08-04T17:19:39+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/law/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/08/wpblaw1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/08/wpblaw1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/08/wpblaw1440-1152x720.jpg 1152w" alt="" title="wpblaw1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/law/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/law/" target="_blank" rel="bookmark" title="Law Firm">Law Firm</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1768" data-date="2018-06-20T16:04:56+01:00" data-name="Psychology"><article class="post visible post-1768 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Psychology" data-date="2018-06-20T16:04:56+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/psy/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/06/wpbpsy1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/06/wpbpsy1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/06/wpbpsy1440-1152x720.jpg 1152w" alt="" title="wpbpsy1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/psy/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/psy/" target="_blank" rel="bookmark" title="Psychology">Psychology</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1774" data-date="2018-06-20T15:16:09+01:00" data-name="Medical Clinic"><article class="post visible post-1774 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Medical Clinic" data-date="2018-06-20T15:16:09+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/medical/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/06/wpbmed1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/06/wpbmed1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/06/wpbmed1440-1152x720.jpg 1152w" alt="" title="wpbmed1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/medical/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/medical/" target="_blank" rel="bookmark" title="Medical Clinic">Medical Clinic</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1812" data-date="2018-05-01T01:58:16+01:00" data-name="WPBakery Corporate"><article class="post visible post-1812 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="WPBakery Corporate" data-date="2018-05-01T01:58:16+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/corporate/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/05/wpbcorp1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/05/wpbcorp1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/05/wpbcorp1440-1152x720.jpg 1152w" alt="" title="wpbcorp1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/corporate/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/corporate/" target="_blank" rel="bookmark" title="WPBakery Corporate">WPBakery Corporate</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1814" data-date="2018-03-29T18:25:06+01:00" data-name="WPBakery Agency"><article class="post visible post-1814 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="WPBakery Agency" data-date="2018-03-29T18:25:06+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/agency/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/03/wpbagency1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/03/wpbagency1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/03/wpbagency1440-1152x720.jpg 1152w" alt="" title="wpbagency1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/agency/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/agency/" target="_blank" rel="bookmark" title="WPBakery Agency">WPBakery Agency</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1776" data-date="2018-03-29T17:07:40+01:00" data-name="Restaurant"><article class="post visible post-1776 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Restaurant" data-date="2018-03-29T17:07:40+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/restaurant/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/03/wpbrest1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/03/wpbrest1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/03/wpbrest1440-1152x720.jpg 1152w" alt="" title="wpbrest1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/restaurant/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/restaurant/" target="_blank" rel="bookmark" title="Restaurant">Restaurant</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1790" data-date="2018-03-20T17:34:34+00:00" data-name="Beauty Studio"><article class="post visible post-1790 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Beauty Studio" data-date="2018-03-20T17:34:34+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/beauty-studio/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/03/wpbbeauty1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/03/wpbbeauty1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/03/wpbbeauty1440-1152x720.jpg 1152w" alt="" title="wpbbeauty1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/beauty-studio/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/beauty-studio/" target="_blank" rel="bookmark" title="Beauty Studio">Beauty Studio</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1983" data-date="2018-03-01T02:29:36+00:00" data-name="Company"><article class="post visible post-1983 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Company" data-date="2018-03-01T02:29:36+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/company/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2018/03/wpbcompany1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2018/03/wpbcompany1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2018/03/wpbcompany1440-1152x720.jpg 1152w" alt="" title="wpbcompany1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/company/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/company/" target="_blank" rel="bookmark" title="Company">Company</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1804" data-date="2017-11-01T18:18:32+00:00" data-name="Dental Clinic"><article class="post visible post-1804 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Dental Clinic" data-date="2017-11-01T18:18:32+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/dental/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/11/wpbdent1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/11/wpbdent1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/11/wpbdent1440-1152x720.jpg 1152w" alt="" title="wpbdent1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/dental/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/dental/" target="_blank" rel="bookmark" title="Dental Clinic">Dental Clinic</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1788" data-date="2017-08-22T17:27:45+01:00" data-name="Agency One-Page"><article class="post visible post-1788 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Agency One-Page" data-date="2017-08-22T17:27:45+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/one-page/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/08/wpbcreativeonepage1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/08/wpbcreativeonepage1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/08/wpbcreativeonepage1440-1152x720.jpg 1152w" alt="" title="wpbcreativeonepage1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/one-page/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/one-page/" target="_blank" rel="bookmark" title="Agency One-Page">Agency One-Page</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1772" data-date="2017-08-20T16:12:27+01:00" data-name="Blog &amp; News"><article class="post visible post-1772 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Blog &amp; News" data-date="2017-08-20T16:12:27+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/news/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/08/wpbblog1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/08/wpbblog1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/08/wpbblog1440-1152x720.jpg 1152w" alt="" title="wpbblog1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/news/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/news/" target="_blank" rel="bookmark" title="Blog &amp; News">Blog &amp; News</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1794" data-date="2017-06-26T17:40:03+01:00" data-name="WPBakery Business One-Page"><article class="post visible post-1794 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="WPBakery Business One-Page" data-date="2017-06-26T17:40:03+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/business-one-page/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/06/wpbbusinessonepage1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/06/wpbbusinessonepage1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/06/wpbbusinessonepage1440-1152x720.jpg 1152w" alt="" title="wpbbusinessonepage1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/business-one-page/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/business-one-page/" target="_blank" rel="bookmark" title="WPBakery Business One-Page">WPBakery Business One-Page</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1963" data-date="2017-06-01T10:12:45+01:00" data-name="Nutritionist"><article class="post visible post-1963 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Nutritionist" data-date="2017-06-01T10:12:45+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/nutritionist/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/06/wpbdiet1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/06/wpbdiet1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/06/wpbdiet1440-1152x720.jpg 1152w" alt="" title="wpbdiet1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/nutritionist/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/nutritionist/" target="_blank" rel="bookmark" title="Nutritionist">Nutritionist</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1802" data-date="2017-05-25T18:17:04+01:00" data-name="Web Master"><article class="post visible post-1802 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Web Master" data-date="2017-05-25T18:17:04+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/web-master/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/05/wpbwebmaster1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/05/wpbwebmaster1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/05/wpbwebmaster1440-1152x720.jpg 1152w" alt="" title="wpbwebmaster1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/web-master/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/web-master/" target="_blank" rel="bookmark" title="Web Master">Web Master</a></h3>
</div></article></div><div class="hidden wf-cell category-3 category-6" data-post-id="1766" data-date="2017-04-20T15:53:34+01:00" data-name="Photo Studio"><article class="post visible post-1766 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-wpbakery dt_portfolio_category-3 dt_portfolio_category-6 description-off" data-name="Photo Studio" data-date="2017-04-20T15:53:34+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/photo/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/04/wpbphoto1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/04/wpbphoto1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/04/wpbphoto1440-1152x720.jpg 1152w" alt="" title="wpbphoto1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/photo/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/photo/" target="_blank" rel="bookmark" title="Photo Studio">Photo Studio</a></h3>
</div></article></div><div class="hidden wf-cell category-4 category-6" data-post-id="1958" data-date="2017-02-21T10:01:39+00:00" data-name="Wedding"><article class="post visible post-1958 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-wpbakery dt_portfolio_category-4 dt_portfolio_category-6 description-off" data-name="Wedding" data-date="2017-02-21T10:01:39+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/wedding/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/02/wpbwedd1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/02/wpbwedd1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/02/wpbwedd1440-1152x720.jpg 1152w" alt="" title="wpbwedd1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/wedding/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/wedding/" target="_blank" rel="bookmark" title="Wedding">Wedding</a></h3>
</div></article></div><div class="hidden wf-cell category-4" data-post-id="1738" data-date="2017-01-20T14:03:24+00:00" data-name="Coming Soon Slideshow"><article class="post visible post-1738 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-4 description-off" data-name="Coming Soon Slideshow" data-date="2017-01-20T14:03:24+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/coming-soon-02/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/01/wpbcsslides1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/01/wpbcsslides1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/01/wpbcsslides1440-1152x720.jpg 1152w" alt="" title="wpbcsslides1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/coming-soon-02/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/coming-soon-02/" target="_blank" rel="bookmark" title="Coming Soon Slideshow">Coming Soon Slideshow</a></h3>
</div></article></div><div class="hidden wf-cell category-4" data-post-id="1736" data-date="2017-01-20T14:01:26+00:00" data-name="Coming Soon Simple"><article class="post visible post-1736 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-one-page dt_portfolio_category-4 description-off" data-name="Coming Soon Simple" data-date="2017-01-20T14:01:26+00:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/coming-soon-01/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2017/01/wpbcsvert1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2017/01/wpbcsvert1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2017/01/wpbcsvert1440-1152x720.jpg 1152w" alt="" title="wpbcsvert1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/coming-soon-01/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/coming-soon-01/" target="_blank" rel="bookmark" title="Coming Soon Simple">Coming Soon Simple</a></h3>
</div></article></div><div class="hidden wf-cell category-3" data-post-id="1819" data-date="2008-06-22T18:28:46+01:00" data-name="Gutenberg Creative"><article class="post visible post-1819 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-3 description-off" data-name="Gutenberg Creative" data-date="2008-06-22T18:28:46+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/g-creative/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2008/06/gutcre1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2008/06/gutcre1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2008/06/gutcre1440-1152x720.jpg 1152w" alt="" title="gutcre1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/g-creative/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/g-creative/" target="_blank" rel="bookmark" title="Gutenberg Creative">Gutenberg Creative</a></h3>
</div></article></div><div class="hidden wf-cell category-3" data-post-id="1816" data-date="2008-06-22T18:26:10+01:00" data-name="Gutenberg Business"><article class="post visible post-1816 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry dt_portfolio_category-multi-page dt_portfolio_category-3 description-off" data-name="Gutenberg Business" data-date="2008-06-22T18:26:10+01:00">
<div class="post-thumbnail-wrap rollover-active">
<div class="post-thumbnail">
<a href="https://the7.io/g-business/" class="post-thumbnail-rollover layzr-bg" aria-label="Post image" target="_blank"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20768%20480&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2008/06/gutbus1440-768x480.jpg" data-srcset="https://the7.io/wp-content/uploads/2008/06/gutbus1440-768x480.jpg 768w, https://the7.io/wp-content/uploads/2008/06/gutbus1440-1152x720.jpg 1152w" alt="" title="gutbus1440" width="768" height="480" /></a><div class="project-links-container"><a href="https://the7.io/g-business/" target="_blank" class="project-details" aria-label="Details link"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div>
</div>
</div>
<div class="post-entry-content">
<h3 class="ele-entry-title"><a href="https://the7.io/g-business/" target="_blank" rel="bookmark" title="Gutenberg Business">Gutenberg Business</a></h3>
</div></article></div></div><div class="paginator filter-decorations paginator-more-button filter-pointer-background">
<a class="button-load-more highlighted filter-item" href="javascript:void(0);" data-dt-page="1"><span class="button-caption">Load more</span><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></a>
</div></div> </div>
</div>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-e97351b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e97351b" data-element_type="section" id="the7elementor" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e1658fa" data-id="e1658fa" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-48fc546 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="48fc546" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-834e5f2" data-id="834e5f2" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-816e9de elementor-widget elementor-widget-image" data-id="816e9de" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="392" height="63" src="https://the7.io/wp-content/uploads/2022/10/logo-elementor-02.svg" class="attachment-full size-full wp-image-9094" alt="" loading="lazy" /> </div>
</div>
<div class="elementor-element elementor-element-c596853 elementor-widget elementor-widget-spacer" data-id="c596853" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-390ce26 elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="390ce26" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Most customizable theme</h3> </div>
</div>
<div class="elementor-element elementor-element-0366e5e elementor-widget__width-auto elementor-widget-tablet__width-inherit elementor-align-center elementor-widget elementor-widget-the7_icon_widget" data-id="0366e5e" data-element_type="widget" data-widget_type="the7_icon_widget.default">
<div class="elementor-widget-container">
<div class="the7-icon-wrapper the7-elementor-widget"><div class="elementor-icon"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path></svg></div></div> </div>
</div>
<div class="elementor-element elementor-element-56dc426 elementor-widget__width-auto elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="56dc426" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">World's leading page builder</h3> </div>
</div>
<div class="elementor-element elementor-element-11d514e elementor-widget elementor-widget-spacer" data-id="11d514e" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-2c2c893 elementor-widget elementor-widget-text-editor" data-id="2c2c893" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<span class="color-title" style="color: #ec407a;"><strong>Why have we chosen Elementor? </strong></span>Because it&#8217;s powerful and flexible. It can do things that other page builders can&#8217;t. The user base is at least 10x more than the closest competitors (including proprietary page builders built into popular themes). And like WordPress itself, it is GPL. It is better tested, and the addons ecosystem far exceeds anything on the market. </div>
</div>
<div class="elementor-element elementor-element-13ddd05 elementor-widget elementor-widget-spacer" data-id="13ddd05" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-7982661 elementor-align-center elementor-widget elementor-widget-the7_button_widget" data-id="7982661" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="" target="_blank" class="box-button elementor-button elementor-size-lg">Elementor main demo<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-9e523ee elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="9e523ee" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="2500" height="1175" src="https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3.jpg" class="attachment-full size-full wp-image-10332" alt="" loading="lazy" srcset="https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3.jpg 2500w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-300x141.jpg 300w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-1024x481.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-768x361.jpg 768w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-1536x722.jpg 1536w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-2048x963.jpg 2048w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-1160x545.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-860x404.jpg 860w, https://the7.io/wp-content/uploads/2022/11/landing-elementor-04-11-3-430x202.jpg 430w" sizes="(max-width: 2500px) 100vw, 2500px" /> </div>
</div>
<div class="elementor-element elementor-element-f118759 elementor-widget elementor-widget-spacer" data-id="f118759" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-4b15632 elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4b15632" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-396d04c" data-id="396d04c" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-5b89ce5 elementor-widget elementor-widget-heading" data-id="5b89ce5" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Advanced Theme Builder</h3> </div>
</div>
<div class="elementor-element elementor-element-604dbfb elementor-widget elementor-widget-spacer" data-id="604dbfb" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-44ab224 elementor-widget elementor-widget-text-editor" data-id="44ab224" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>The7 extends Elementor&#8217;s Theme Builder feature. It allows the customization of almost any place on your website. But unlike vanilla Elementor, you can also create floating headers that change size and colors on scroll, fully customize your WooCommerce, build mega menus, etc. </p><p>Create your own:</p> </div>
</div>
<div class="elementor-element elementor-element-dbf7aa0 elementor-widget elementor-widget-spacer" data-id="dbf7aa0" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-f903c5d icon-box-vertical-align-center icon-vertical-align-center content-align-left icon-position-left elementor-widget elementor-widget-the7_icon_box_grid_widget" data-id="f903c5d" data-element_type="widget" data-widget_type="the7_icon_box_grid_widget.default">
<div class="elementor-widget-container">
<div class="the7-box-grid-wrapper the7-elementor-widget loading-effect-none the7_icon_box_grid_widget-f903c5d"> <div class="dt-css-grid">
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Headers </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Hero sections </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Footers </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Mega menus </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Single posts </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Search results </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Page templates </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> WooCommerce </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> 404 Error page </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> and more! </a> </h4>
</div>
</div>
</div> </div>
</div>
</div> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ecf6c02" data-id="ecf6c02" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-67b155f elementor-widget elementor-widget-image" data-id="67b155f" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/el-builder-02.jpg" class="lazy-load attachment-full size-full wp-image-10562" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/el-builder-02.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/el-builder-02-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/el-builder-02-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/el-builder-02-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/el-builder-02-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/el-builder-02-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/el-builder-02-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-da73505 elementor-widget elementor-widget-spacer" data-id="da73505" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-c6b60aa elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c6b60aa" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4481e93" data-id="4481e93" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-da2804b elementor-widget elementor-widget-image" data-id="da2804b" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014.jpg" class="lazy-load attachment-full size-full wp-image-10516" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/el-style-rounded-014-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c62316b" data-id="c62316b" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-f18de1d elementor-widget elementor-widget-heading" data-id="f18de1d" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Design System and Theme Style</h3> </div>
</div>
<div class="elementor-element elementor-element-8111ba6 elementor-widget elementor-widget-spacer" data-id="8111ba6" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-911eb94 elementor-widget elementor-widget-text-editor" data-id="911eb94" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>The Design System feature allows the quick change of your website&#8217;s colors and typography. Change a parameter in one place, and it will propagate across the entire website.</p><p>And the advanced Theme Style customization lets you target the default styles of your site. E.g., general typography, forms, buttons, etc. What&#8217;s more, you can fully customize forms and buttons sizes. Which usually is not possible in Elementor.</p> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-3692826 elementor-widget elementor-widget-spacer" data-id="3692826" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-b106d05 elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b106d05" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a0f6cbb" data-id="a0f6cbb" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-8a641d3 elementor-widget elementor-widget-heading" data-id="8a641d3" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">The7 Widgets and Post Types</h3> </div>
</div>
<div class="elementor-element elementor-element-9956b27 elementor-widget elementor-widget-spacer" data-id="9956b27" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-2867180 elementor-widget elementor-widget-text-editor" data-id="2867180" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<div class="page" title="Page 2"><div class="section"><div class="layoutArea"><div class="column"><p>We have created a whole range of new widgets and altered many standard ones in order to enhance and extend the Elementor.</p><p>We have also added custom Post Types for Portfolio, Testimonials, Team, etc., and corresponding widgets to display them.</p><p>The7 widget types include (note that categories partly intersect):</p></div></div></div></div> </div>
</div>
<div class="elementor-element elementor-element-1a7c14b elementor-widget elementor-widget-spacer" data-id="1a7c14b" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-11dc4f8 icon-box-vertical-align-center icon-vertical-align-center content-align-left icon-position-left elementor-widget elementor-widget-the7_icon_box_grid_widget" data-id="11dc4f8" data-element_type="widget" data-widget_type="the7_icon_box_grid_widget.default">
<div class="elementor-widget-container">
<div class="the7-box-grid-wrapper the7-elementor-widget loading-effect-none the7_icon_box_grid_widget-11dc4f8"> <div class="dt-css-grid">
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> 26 general content widgets </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> 24 WooCommerce widgets </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> 22 Theme Builder widgets </a> </h4>
</div>
</div>
</div> </div>
</div>
</div> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ddcf83c" data-id="ddcf83c" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-dd3f4e1 elementor-widget elementor-widget-image" data-id="dd3f4e1" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/el-widgets-02.jpg" class="lazy-load attachment-full size-full wp-image-10536" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/el-widgets-02.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/el-widgets-02-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/el-widgets-02-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/el-widgets-02-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/el-widgets-02-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/el-widgets-02-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/el-widgets-02-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-e817cc0 elementor-widget elementor-widget-spacer" data-id="e817cc0" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-8f55a7c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8f55a7c" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d99d2d1" data-id="d99d2d1" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-ab91394 elementor-widget elementor-widget-image" data-id="ab91394" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02.jpg" class="lazy-load attachment-full size-full wp-image-10530" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/el-form-rounded-02-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7e07a75" data-id="7e07a75" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-9c13c1d elementor-widget elementor-widget-heading" data-id="9c13c1d" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Elementor Pro and PRO Elements Integration</h3> </div>
</div>
<div class="elementor-element elementor-element-61aaf90 elementor-widget elementor-widget-spacer" data-id="61aaf90" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-504c6f5 elementor-widget elementor-widget-text-editor" data-id="504c6f5" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<div class="page" title="Page 3"><div class="section"><div class="layoutArea"><div class="column"><p>The7 Elements integrates seamlessly with <span style="color: #ec407a;"><strong>Elementor Pro</strong></span> or its free alternative <span style="color: #ec407a;"><strong>PRO Elements</strong></span>. Giving you pro-level tools for marketing, lead generation, and dynamic content styling. No need to install bulky third-party addons or plugins.</p><p>Pro features include (but are not limited to):</p></div></div></div></div> </div>
</div>
<div class="elementor-element elementor-element-e2cc742 elementor-widget elementor-widget-spacer" data-id="e2cc742" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a00389f icon-box-vertical-align-center icon-vertical-align-center content-align-left icon-position-left elementor-widget elementor-widget-the7_icon_box_grid_widget" data-id="a00389f" data-element_type="widget" data-widget_type="the7_icon_box_grid_widget.default">
<div class="elementor-widget-container">
<div class="the7-box-grid-wrapper the7-elementor-widget loading-effect-none the7_icon_box_grid_widget-a00389f"> <div class="dt-css-grid">
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Pro widgets </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Dynamic styles &amp; content </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Forms &amp; popups builder </a> </h4>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<i aria-hidden="true" class="fas fa-circle"></i> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Popular marketing tools integrations </a> </h4>
</div>
</div>
</div> </div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-0d7124a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="0d7124a" data-element_type="section" id="woo" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d303206" data-id="d303206" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-8c003f1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8c003f1" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-489f348" data-id="489f348" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-0ba2f44 elementor-widget elementor-widget-image" data-id="0ba2f44" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" src="https://the7.io/wp-content/uploads/2022/10/logo-woocommerce-01.svg" title="logo-woocommerce-01" alt="logo-woocommerce-01" /> </div>
</div>
<div class="elementor-element elementor-element-56779b0 elementor-widget elementor-widget-spacer" data-id="56779b0" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-692cbe1 elementor-widget elementor-widget-heading" data-id="692cbe1" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Complete WooCommerce Builder</h3> </div>
</div>
<div class="elementor-element elementor-element-4550164 elementor-widget elementor-widget-spacer" data-id="4550164" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-97d5509 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="97d5509" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>WooCommerce is the most popular eCommerce software on the planet. You can create catalogs, sell physical goods, services, subscriptions, software, courses, and everything in between. And The7 takes it to a whole new level. You can create fully custom storefronts, product pages, product lists, shopping cart, checkout, and more!</p> </div>
</div>
<div class="elementor-element elementor-element-802c7b6 elementor-widget elementor-widget-spacer" data-id="802c7b6" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-69e6323 elementor-align-center elementor-widget elementor-widget-the7_button_widget" data-id="69e6323" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="https://the7.io/elementor-shop/" target="_blank" class="box-button elementor-button elementor-size-lg">WooCommerce main demo<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-cbc0732 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="cbc0732" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="2500" height="1120" src="https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2.jpg" class="attachment-full size-full wp-image-10342" alt="" loading="lazy" srcset="https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2.jpg 2500w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-300x134.jpg 300w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-1024x459.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-768x344.jpg 768w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-1536x688.jpg 1536w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-2048x918.jpg 2048w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-1160x520.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-860x385.jpg 860w, https://the7.io/wp-content/uploads/2022/11/landing-woo-04-11-2-430x193.jpg 430w" sizes="(max-width: 2500px) 100vw, 2500px" /> </div>
</div>
<div class="elementor-element elementor-element-811be32 elementor-widget elementor-widget-spacer" data-id="811be32" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-090925b elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="090925b" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b5a1145" data-id="b5a1145" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-ca4c4fc elementor-widget elementor-widget-heading" data-id="ca4c4fc" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">WooCommerce Theme Builder</h3> </div>
</div>
<div class="elementor-element elementor-element-52eb385 elementor-widget elementor-widget-spacer" data-id="52eb385" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-c125bbb elementor-widget elementor-widget-text-editor" data-id="c125bbb" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>You have probably tried to customize WooCommerce templates with standard Elementor widgets. Not a great experience, right?</p><p>With The7, you get all the tools necessary for meaningful WooCommerce customization. Finally, you can build your store <span style="color: #7e57c2;"><strong>the way you want it</strong></span> and escape the standard WooCommerce look and feel!</p><p>Build bespoke templates for the storefront, product pages and lists, checkout, cart, and more with advanced WooCommerce Theme Builder.</p> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a121792" data-id="a121792" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-f419526 elementor-widget elementor-widget-image" data-id="f419526" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/woo-builder-02.jpg" class="lazy-load attachment-full size-full wp-image-10548" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/woo-builder-02.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/woo-builder-02-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/woo-builder-02-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/woo-builder-02-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/woo-builder-02-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/woo-builder-02-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/woo-builder-02-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-5cdcfa9 elementor-widget elementor-widget-spacer" data-id="5cdcfa9" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-9d0a89c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9d0a89c" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-00eabfd" data-id="00eabfd" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-0a5af38 elementor-widget elementor-widget-image" data-id="0a5af38" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06.jpg" class="lazy-load attachment-full size-full wp-image-10381" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/woo-widgets-rounded-06-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-414eb08" data-id="414eb08" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-66cd976 elementor-widget elementor-widget-heading" data-id="66cd976" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Custom WooCommerce Widgets</h3> </div>
</div>
<div class="elementor-element elementor-element-b0d825b elementor-widget elementor-widget-spacer" data-id="b0d825b" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-eb1d028 elementor-widget elementor-widget-text-editor" data-id="eb1d028" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>Standard WooCommerce widgets in Elementor are rigid and basic.</p><p>But what if you need to display select products from different categories on the homepage (or other pages)? Or maybe a product grid? Or a fancy-looking carousel?</p><p>The7 picks up where Elementor left off. Our masonry, grid, carousel, and other product widgets feature a whole range of settings: starting from the advanced query selector to product card layout and tools to customize almost any aspect of widget appearance!</p> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-1fac636 elementor-widget elementor-widget-spacer" data-id="1fac636" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<section class="elementor-section elementor-inner-section elementor-element elementor-element-d1eb1ec elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d1eb1ec" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bf6eebb" data-id="bf6eebb" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-57e47c5 elementor-widget elementor-widget-heading" data-id="57e47c5" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Advanced Filtering</h3> </div>
</div>
<div class="elementor-element elementor-element-21e6835 elementor-widget elementor-widget-spacer" data-id="21e6835" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-c2b6edf elementor-widget elementor-widget-text-editor" data-id="c2b6edf" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>An excellent online store lets its customers find the products they need quickly and conveniently. That&#8217;s why creating tools to build comprehensive search, sorting, and filtering was one of our main priorities. We also studied hundreds of best online stores and ensured that filtering remains convenient and usable for people browsing your store from mobile phones and computers alike.</p> </div>
</div>
</div>
</div>
<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0cf38f3" data-id="0cf38f3" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-643f034 elementor-widget elementor-widget-image" data-id="643f034" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="1300" height="1100" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 1300 1100'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/woo-filt-04.jpg" class="lazy-load attachment-full size-full wp-image-10554" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/woo-filt-04.jpg 1300w, https://the7.io/wp-content/uploads/2022/11/woo-filt-04-300x254.jpg 300w, https://the7.io/wp-content/uploads/2022/11/woo-filt-04-1024x866.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/woo-filt-04-768x650.jpg 768w, https://the7.io/wp-content/uploads/2022/11/woo-filt-04-1160x982.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/woo-filt-04-860x728.jpg 860w, https://the7.io/wp-content/uploads/2022/11/woo-filt-04-430x364.jpg 430w" sizes="(max-width: 1300px) 100vw, 1300px" /> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-9f20555 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9f20555" data-element_type="section" id="bakery" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-74bb341" data-id="74bb341" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-39525bd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="39525bd" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-35f4e05" data-id="35f4e05" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-1ae1301 elementor-widget elementor-widget-image" data-id="1ae1301" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="400" height="77" src="https://the7.io/wp-content/uploads/2022/10/wpblogo-landing-color-3.svg" class="attachment-full size-full wp-image-9069" alt="" loading="lazy" /> </div>
</div>
<div class="elementor-element elementor-element-9a0decb elementor-widget elementor-widget-spacer" data-id="9a0decb" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-72046c3 elementor-widget elementor-widget-heading" data-id="72046c3" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Full support for WPB Page Builder <span class="paint-accent-color">&</span> Ultimate Addons</h3> </div>
</div>
<div class="elementor-element elementor-element-0930da7 elementor-widget elementor-widget-spacer" data-id="0930da7" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-ac0aeb8 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="ac0aeb8" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
WPBakery (formerly Visual Composer) is the first commercially successful and one of the most popular page builders on the market. The7 was released with WPB support from day one. And has become the most popular premium theme for this page builder on the market! </div>
</div>
<div class="elementor-element elementor-element-09571e4 elementor-widget elementor-widget-spacer" data-id="09571e4" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-ad70786 elementor-align-center elementor-widget elementor-widget-the7_button_widget" data-id="ad70786" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="https://the7.io/main/" target="_blank" class="box-button elementor-button elementor-size-lg">WPBakery main demo<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path></svg></a></div> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-4fde5d3 elementor-widget elementor-widget-image" data-id="4fde5d3" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="2500" height="980" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2500 980'%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3.jpg" class="lazy-load attachment-full size-full wp-image-10334" alt="" loading="lazy" data-srcset="https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3.jpg 2500w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-300x118.jpg 300w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-1024x401.jpg 1024w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-768x301.jpg 768w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-1536x602.jpg 1536w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-2048x803.jpg 2048w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-1160x455.jpg 1160w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-860x337.jpg 860w, https://the7.io/wp-content/uploads/2022/11/landing-wpb-04-11-3-430x169.jpg 430w" sizes="(max-width: 2500px) 100vw, 2500px" /> </div>
</div>
<div class="elementor-element elementor-element-10739d9 icon-position-top icon-position-mobile-top content-align-center icon-vertical-align-center content-align-tablet-center icon-box-vertical-align-top elementor-widget elementor-widget-the7_icon_box_grid_widget" data-id="10739d9" data-element_type="widget" data-widget_type="the7_icon_box_grid_widget.default">
<div class="elementor-widget-container">
<div class="the7-box-grid-wrapper the7-elementor-widget loading-effect-none the7_icon_box_grid_widget-10739d9"> <div class="dt-css-grid">
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0 1 12 17a7.978 7.978 0 0 1-3-.582zM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> The most popular theme for WPBakery Page Builder </a> </h4>
<div class="box-description">The7 supports WPBakery Page Builder and Ultimate Addons natively. And over the years, it has become the number one choice and the most popular premium theme for this builder.</div>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z"></path></svg> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> 50+ The7 Shortcodes </a> </h4>
<div class="box-description">The7 Elements extends the WPB even further with 7 post types, 50+ exclusive shortcodes, and many features that cannot be found in any other add-on.</div>
</div>
</div>
</div> </div>
<div class="wf-cell shown">
<div class="the7-icon-box-grid"> <div class="box-content-wrapper">
<a class="elementor-icon-div"> <div class="elementor-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2h3z"></path></svg> </div>
</a> <div class="box-content">
<h4 class="box-heading">
<a> Ultimate Addons </a> </h4>
<div class="box-description">Ultimate Addons is the most popular premium add-on plugin for the WPBakery Page Builder. It adds a ridiculous amount of shortcodes, settings, and features to the builder. Comes standard with The7.</div>
</div>
</div>
</div> </div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-3939f7e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3939f7e" data-element_type="section" id="more" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9d9fe73" data-id="9d9fe73" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-b5e03b8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b5e03b8" data-element_type="section">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8ea97ee" data-id="8ea97ee" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-10281a1 elementor-widget elementor-widget-heading" data-id="10281a1" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h2 class="elementor-heading-title elementor-size-default">What Else?</h2> </div>
</div>
<div class="elementor-element elementor-element-7babe65 elementor-widget elementor-widget-spacer" data-id="7babe65" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a00c0e5 elementor-widget elementor-widget-heading" data-id="a00c0e5" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">"There's a <span class="paint-accent-color">feature</span> for that"</h3> </div>
</div>
<div class="elementor-element elementor-element-4a8a0fc elementor-widget elementor-widget-spacer" data-id="4a8a0fc" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-1223c50 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="1223c50" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>The7 comes loaded with tons of cool stuff. Both that you expect to find in any modern multipurpose theme, and that is unique to The7. So if you can think of something, it probably is already implemented in The7!</p> </div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-2809d09 elementor-widget elementor-widget-spacer" data-id="2809d09" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-d1181ed content-align-center icon-vertical-align-center icon-box-vertical-align-top elementor-widget elementor-widget-the7_image_box_grid_widget" data-id="d1181ed" data-element_type="widget" data-widget_type="the7_image_box_grid_widget.default">
<div class="elementor-widget-container">
<div class="the7-box-grid-wrapper the7-elementor-widget loading-effect-none the7_image_box_grid_widget-d1181ed"> <div class="dt-css-grid">
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/01-up.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/01-up.jpg 750w" alt="" title="01-up" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">Free lifetime updates</h4><div class="box-description">No recurring membership or other hidden fees!</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/rating-5-the7.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/rating-5-the7.jpg 750w" alt="" title="rating-5-the7" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">Rock-solid 5-star rating</h4><div class="box-description">270 000+ purchases, 8500+ reviews.</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/more-help.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/more-help.jpg 750w" alt="" title="more-help" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">First-class support</h4><div class="box-description">Ongoing support with 6 months of priority access.</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/01-plug.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/01-plug.jpg 750w" alt="" title="01-plug" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">More bang for your buck!</h4><div class="box-description">$174+ worth premium plugins included.</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/seo-opt-the7.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/seo-opt-the7.jpg 750w" alt="" title="seo-opt-the7" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">SEO-ready &amp; mobile-friendly</h4><div class="box-description">Certified by Google.</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/whitelabel-the7-new.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/whitelabel-the7-new.jpg 750w" alt="" title="whitelabel-the7-new" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">Whitelabel tool</h4><div class="box-description">Transform The7 into Your_Theme in a few clicks.</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/more-lang.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/more-lang.jpg 750w" alt="" title="more-lang" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">Multilingual &amp; translation ready</h4><div class="box-description">Already translated into 10+ languages!</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/more-headers.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/more-headers.jpg 750w" alt="" title="more-headers" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">Unlimited headers</h4><div class="box-description">Desktop &amp; mobile headers, header builder.</div> </div>
</div>
</a> </div>
<div class="wf-cell shown">
<a class="the7-image-box-wrapper the7-box-wrapper the7-elementor-widget box-hover"> <div class="box-content-wrapper">
<div class="elementor-image-div">
<div class="post-thumbnail-rollover"><img decoding="async" loading="lazy" class="preload-me lazy-load" src="data:image/svg+xml,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%20750%20520&#39;%2F%3E" data-src="https://the7.io/wp-content/uploads/2022/11/more-mega.jpg" data-srcset="https://the7.io/wp-content/uploads/2022/11/more-mega.jpg 750w" alt="" title="more-mega" width="750" height="520" /></div> </div>
<div class="box-content">
<h4 class="box-heading">Mega menu</h4><div class="box-description">Built in mega menu capabilities.</div> </div>
</div>
</a> </div>
</div>
</div> </div>
</div>
</div>
</div>
</div>
</section>
<section class="elementor-section elementor-top-section elementor-element elementor-element-267f43b elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="267f43b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
<div class="elementor-background-overlay"></div>
<div class="elementor-container elementor-column-gap-wider">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e42022" data-id="4e42022" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-background-overlay"></div>
<div class="elementor-element elementor-element-261ce81 elementor-widget elementor-widget-image" data-id="261ce81" data-element_type="widget" data-widget_type="image.default">
<div class="elementor-widget-container">
<img decoding="async" width="900" height="900" src="https://the7.io/wp-content/uploads/2022/11/logo-the7-quicksand.svg" class="attachment-large size-large wp-image-10665" alt="" loading="lazy" /> </div>
</div>
<div class="elementor-element elementor-element-c38f1b6 elementor-widget elementor-widget-spacer" data-id="c38f1b6" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-f53312f elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="f53312f" data-element_type="widget" data-widget_type="heading.default">
<div class="elementor-widget-container">
<h3 class="elementor-heading-title elementor-size-default">Get your copy of The7 now!</h3> </div>
</div>
<div class="elementor-element elementor-element-cacc888 elementor-widget elementor-widget-spacer" data-id="cacc888" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-a0a1fd6 elementor-align-center elementor-widget elementor-widget-the7_button_widget" data-id="a0a1fd6" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="https://themeforest.net/user/themebeez500/portfolio" class="box-button elementor-button elementor-size-xl">Buy The7 now for $50<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.366 3.438L18.577 9H22v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h3.422l3.212-5.562 1.732 1L7.732 9h8.535l-2.633-4.562 1.732-1zM13 13h-2v4h2v-4zm-4 0H7v4h2v-4zm8 0h-2v4h2v-4z"></path></svg></a></div> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
<footer id="footer" class="footer solid-bg elementor-footer">
<div class="wf-wrap">
<div class="wf-container-footer">
<div class="wf-container">
<div data-elementor-type="footer" data-elementor-id="6647" class="elementor elementor-6647 elementor-location-footer">
<section class="elementor-section elementor-inner-section elementor-element elementor-element-419eb878 elementor-reverse-tablet elementor-reverse-mobile elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="419eb878" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div class="elementor-container elementor-column-gap-wide">
<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-22d7e8bb" data-id="22d7e8bb" data-element_type="column">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-61288a87 elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-the7_button_widget" data-id="61288a87" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="https://dev-civibythemebeez.pantheonsite.io/the-7/" class="box-button elementor-button elementor-size-md">Customers showcase</a></div> </div>
</div>
<div class="elementor-element elementor-element-1704844 elementor-widget__width-auto elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="1704844" data-element_type="widget" data-widget_type="divider.default">
<div class="elementor-widget-container">
<div class="elementor-divider">
<span class="elementor-divider-separator">
</span>
</div>
</div>
</div>
<div class="elementor-element elementor-element-48f2115 elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-the7_button_widget" data-id="48f2115" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="themebeez5@gmail.com" target="_blank" class="box-button elementor-button elementor-size-md">Support</a></div> </div>
</div>
<div class="elementor-element elementor-element-21ec0486 elementor-widget__width-auto elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="21ec0486" data-element_type="widget" data-widget_type="divider.default">
<div class="elementor-widget-container">
<div class="elementor-divider">
<span class="elementor-divider-separator">
</span>
</div>
</div>
</div>
<div class="elementor-element elementor-element-40e25eb3 elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-the7_button_widget" data-id="40e25eb3" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="#" class="box-button elementor-button elementor-size-md">Changelog</a></div> </div>
</div>
<div class="elementor-element elementor-element-222675ea elementor-widget__width-auto elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="222675ea" data-element_type="widget" data-widget_type="divider.default">
<div class="elementor-widget-container">
<div class="elementor-divider">
<span class="elementor-divider-separator">
</span>
</div>
 </div>
</div>
<div class="elementor-element elementor-element-77bfeddf elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-the7_button_widget" data-id="77bfeddf" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="" class="box-button elementor-button elementor-size-md">Privacy policy</a></div> </div>
</div>
<div class="elementor-element elementor-element-6f2f9d2d elementor-widget__width-auto elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="6f2f9d2d" data-element_type="widget" data-widget_type="divider.default">
<div class="elementor-widget-container">
<div class="elementor-divider">
<span class="elementor-divider-separator">
</span>
</div>
</div>
</div>
<div class="elementor-element elementor-element-7c385f25 elementor-mobile-align-center elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-the7_button_widget" data-id="7c385f25" data-element_type="widget" data-widget_type="the7_button_widget.default">
<div class="elementor-widget-container">
<div class="elementor-button-wrapper"><a href="#" class="box-button elementor-button elementor-size-md">Terms of service</a></div> </div>
</div>
<div class="elementor-element elementor-element-3ee94d9c elementor-widget elementor-widget-spacer" data-id="3ee94d9c" data-element_type="widget" data-widget_type="spacer.default">
<div class="elementor-widget-container">
<div class="elementor-spacer">
<div class="elementor-spacer-inner"></div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-32edd75e elementor-widget elementor-widget-text-editor" data-id="32edd75e" data-element_type="widget" data-widget_type="text-editor.default">
<div class="elementor-widget-container">
<p>© Copyright 2023 <a href="#" target="_blank" rel="noopener">Theme Beez</a>. All rights reserved.</p> </div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</footer>
<a href="#" class="scroll-top scroll-top-elementor-icon"> <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"></path></svg> <span class="screen-reader-text">Go to Top</span>
</a>
</div>
<script src='https://the7.io/wp-includes/js/dist/hooks.min.js?ver=4169d3cf8e8d95a3d6d5' id='wp-hooks-js'></script>
<script src='https://the7.io/wp-includes/js/dist/i18n.min.js?ver=9e794f35a71bb98672ae' id='wp-i18n-js'></script>
<script id='wp-i18n-js-after'>
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script id='elementor-pro-frontend-js-before'>
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/the7.io\/wp-admin\/admin-ajax.php","nonce":"954de8d891","urls":{"assets":"https:\/\/the7.io\/wp-content\/plugins\/pro-elements\/assets\/","rest":"https:\/\/the7.io\/wp-json\/"},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/the7.io\/wp-content\/plugins\/pro-elements\/modules\/lottie\/assets\/animations\/default.json"}};
</script>
<script src='https://the7.io/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2' id='jquery-ui-core-js'></script>
<script id='elementor-frontend-js-before'>
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":778,"lg":1051,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile","value":777,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Extra","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet","value":1050,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Extra","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},"version":"3.9.0","is_static":false,"experimentalFeatures":{"e_dom_optimization":true,"e_import_export":true,"e_hidden_wordpress_widgets":true,"theme_builder_v2":true,"landing-pages":true,"elements-color-picker":true,"favorite-widgets":true,"admin-top-bar":true,"kit-elements-defaults":true,"page-transitions":true,"notes":true,"form-submissions":true,"e_scroll_snap":true},"urls":{"assets":"https:\/\/the7.io\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"viewport_mobile":777,"viewport_tablet":1050,"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":2850,"title":"The7%20%E2%80%93%20The%20Most%20Customizable%20Theme%20on%20the%20Market%21","excerpt":"","featuredImage":false}};
</script>
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
<div class="pswp__bg"></div>
<div class="pswp__scroll-wrap">
<div class="pswp__container">
<div class="pswp__item"></div>
<div class="pswp__item"></div>
<div class="pswp__item"></div>
</div>
<div class="pswp__ui pswp__ui--hidden">
<div class="pswp__top-bar">
<div class="pswp__counter"></div>
<button class="pswp__button pswp__button--close" title="Close (Esc)" aria-label="Close (Esc)"></button>
<button class="pswp__button pswp__button--share" title="Share" aria-label="Share"></button>
<button class="pswp__button pswp__button--fs" title="Toggle fullscreen" aria-label="Toggle fullscreen"></button>
<button class="pswp__button pswp__button--zoom" title="Zoom in/out" aria-label="Zoom in/out"></button>
<div class="pswp__preloader">
<div class="pswp__preloader__icn">
<div class="pswp__preloader__cut">
<div class="pswp__preloader__donut"></div>
</div>
</div>
</div>
</div>
<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
<div class="pswp__share-tooltip"></div>
</div>
<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" aria-label="Previous (arrow left)">
</button>
<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)" aria-label="Next (arrow right)">
</button>
<div class="pswp__caption">
<div class="pswp__caption__center"></div>
</div>
</div>
</div>
</div>
</body>
</html>