'use strict';

(async function I18n(){
  const DEFAULT = 'ar';
  const storageKey = 'orouba_lang';
  function getSaved(){ return localStorage.getItem(storageKey) || (navigator.language && navigator.language.startsWith('en') ? 'en' : DEFAULT); }
  let lang = getSaved();

  async function load(lang){
    try{
      const res = await fetch('/assets/i18n/' + lang + '.json');
      if(!res.ok) throw new Error('i18n file not found');
      return await res.json();
    }catch(e){ console.warn('i18n load failed', e); return null; }
  }

  function setLangAttr(l){ document.documentElement.lang = l; document.documentElement.dir = (l === 'ar') ? 'rtl' : 'ltr'; document.body.dir = document.documentElement.dir; }

  function applyDict(dict){
    if(!dict) return;
    // Title
    if(dict.site && dict.site.title) document.title = dict.site.title;
    // Brand
    const brandAr = document.querySelector('.brand__ar'); if(brandAr && dict.brand && dict.brand.ar) brandAr.textContent = dict.brand.ar;
    const brandEn = document.querySelector('.brand__en'); if(brandEn && dict.brand && dict.brand.en) brandEn.textContent = dict.brand.en;
    // Topbar contact/email
    const tel = document.querySelector('.topbar__left a[href^="tel:"] span'); if(tel && dict.topbar && dict.topbar.phone) tel.textContent = dict.topbar.phone;
    const mail = document.querySelector('.topbar__left a[href^="mailto:"] span'); if(mail && dict.topbar && dict.topbar.email) mail.textContent = dict.topbar.email;
    // Nav
    const navMap = {home: 'nav.home', about: 'nav.about', services: 'nav.services', facilities: 'nav.facilities', units: 'nav.units', contact: 'nav.contact'};
    Object.keys(navMap).forEach(k => {
      const el = document.querySelector('.nav__item[data-nav="' + k + '"]');
      if(el && dict.nav && dict.nav[k]) el.textContent = dict.nav[k];
      const del = document.querySelector('.drawer__nav-item[data-nav="' + k + '"]');
      if(del && dict.nav && dict.nav[k]) del.textContent = dict.nav[k];
    });
    // Hero
    const heroTitle = document.querySelector('.hero__title'); if(heroTitle && dict.hero && dict.hero.title) heroTitle.innerHTML = dict.hero.title;
    const heroLead = document.querySelector('.hero__lead'); if(heroLead && dict.hero && dict.hero.lead) heroLead.textContent = dict.hero.lead;
    // Header CTA
    const hdrCta = document.querySelector('#hdr-inq'); if(hdrCta && dict.cta && dict.cta.inquire) hdrCta.textContent = dict.cta.inquire;
    const drwInq = document.querySelector('#drw-inq'); if(drwInq && dict.cta && dict.cta.inquire) drwInq.textContent = dict.cta.inquire;
    // Units banner
    const unitsTag = document.querySelector('.units-banner__text'); if(unitsTag && dict.units && dict.units.available) unitsTag.textContent = dict.units.available;
    // Update any other small labels by data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = dict;
      for(const p of parts){ val = val ? val[p] : null; }
      if(val) el.textContent = val;
    });
    // update lang label button
    const lbl = document.getElementById('lang-label'); if(lbl) lbl.textContent = (lang === 'ar') ? 'AR' : 'EN';
  }

  async function init(l){
    lang = l || lang;
    setLangAttr(lang);
    const dict = await load(lang);
    applyDict(dict);
  }

  // Toggle button
  const btn = document.getElementById('lang-toggle');
  if(btn){
    btn.addEventListener('click', async () => {
      lang = (lang === 'ar') ? 'en' : 'ar';
      localStorage.setItem(storageKey, lang);
      await init(lang);
    });
  }

  // init on load
  document.addEventListener('DOMContentLoaded', () => init());

})();
