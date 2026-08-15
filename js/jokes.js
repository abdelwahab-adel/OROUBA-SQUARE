'use strict';

// jokes.js — simple random joke generator using JokeAPI (no API key)
// Source: https://v2.jokeapi.dev/

(function(){
  const API = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode';
  const jokeText = document.getElementById('joke-text');
  const jokeMeta = document.getElementById('joke-meta');
  const btnNew = document.getElementById('joke-new');
  const btnShare = document.getElementById('joke-share');
  const card = document.getElementById('joke-card');

  function setLoading(){
    if(jokeText) jokeText.textContent = 'جارٍ تحميل نكتة...';
    card && card.classList.add('is-loading');
  }
  function clearLoading(){ card && card.classList.remove('is-loading'); }

  async function fetchJoke(){
    setLoading();
    try{
      const res = await fetch(API);
      if(!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      let text = '';
      if(data.type === 'single') text = data.joke;
      else if(data.type === 'twopart') text = data.setup + ' — ' + data.delivery;
      else text = 'لا توجد نكتة متاحة الآن.';
      if(jokeText) jokeText.textContent = text;
      if(jokeMeta) jokeMeta.textContent = data.category ? ('Category: ' + data.category) : '';
    }catch(err){
      if(jokeText) jokeText.textContent = 'عذراً، فشل تحميل النكتة. حاول مرة أخرى.';
      console.error('fetchJoke error', err);
    }finally{ clearLoading(); }
  }

  function shareCurrent(){
    const text = jokeText ? jokeText.textContent : '';
    if(!text) return;
    const shareText = encodeURIComponent(text + ' — Orouba Square');
    const url = 'https://twitter.com/intent/tweet?text=' + shareText;
    window.open(url, '_blank', 'noopener');
  }

  if(btnNew) btnNew.addEventListener('click', fetchJoke);
  if(btnShare) btnShare.addEventListener('click', shareCurrent);

  // keyboard support: N for new joke
  document.addEventListener('keydown', (e) => { if(e.key.toLowerCase() === 'n') fetchJoke(); });

  // initial load
  document.addEventListener('DOMContentLoaded', fetchJoke);
})();
