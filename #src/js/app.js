// Перевірка підтримки webp, додавання класу webp або no-webp для HTML //
import * as LitFunctions from "./modules/functions.js";
LitFunctions.isWebp();
//================ANIMATIONS=================
import { initAnimation } from "./modules/animation.js";
initAnimation();
//================BURGER=====================
import { burger } from "./modules/burger.js";
burger();
//===============DYNAMIC-ADAPT================
import { useDynamicAdapt } from "./modules/dynamic-adapt.js";
useDynamicAdapt();
//===============POPUP================
/*
import { popup } from "./modules/popup.js";
popup();
*/
//===============SPOLLERS================
import { spollers } from "./modules/spollers.js";
spollers();
//===============SWIPPER================
import "./modules/swiper.js";
//===============HEADER-SCROLLING================
import { headerScrolling } from "./modules/header-scrolling.js";
headerScrolling();
//===============GALLERY================
import "./modules/gallery.js";
//===============HEADER-HIDDEN-SCROLL================
/*
import { headerHidenScroll } from "./modules/headerHiddenScroll.js";
headerHidenScroll();
*/
//===============SCROLLING-GO-TO================
import { scrollingGoTo } from "./modules/scrollingGoTo.js";
scrollingGoTo();
//===============LAZY-LOAD================
import "./modules/lazy-load.js";