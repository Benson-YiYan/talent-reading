(function(){
  const translations={
    zh:{title:'九数天赋解读｜天赋图鉴',brand:'天赋图鉴',eyebrow:'九数天赋探索',heading:['你的出生日期','藏着怎样的天赋？'],intro:'输入出生日期，转动九数轮，查看你的天赋模式与个人天赋说明书。',birth:'出生日期',privacy:'日期仅在本页计算，不会上传或保存。',wheel:'九数玄轮',waiting:'等待生日坐标',radar:'天赋雷达图',footer:'天赋图鉴 · 九数天赋探索',disclaimer:'结果用于文化探索和自我反思，不构成专业建议或命运预测。'},
    en:{title:'Jiushu Talent Reading | Talent Atlas',brand:'Talent Atlas',eyebrow:'Jiushu talent exploration',heading:['Your Date of Birth.','Your Talent Patterns.'],intro:'Enter your birth date, spin the Jiushu wheel and discover your talent reading and personal talent manual.',birth:'Date of birth',privacy:'Calculated on this device only. Your date is not uploaded or saved.',wheel:'Jiushu Wheel',waiting:'Waiting for your birth date',radar:'Talent radar chart',footer:'Talent Atlas · Jiushu Exploration',disclaimer:'For cultural exploration and self-reflection, not professional advice or a prediction of destiny.'},
    es:{title:'Lectura de Talento Jiushu | Atlas del Talento',brand:'Atlas del Talento',eyebrow:'Exploración del talento Jiushu',heading:['Tu Fecha de Nacimiento.','Tus Patrones de Talento.'],intro:'Introduce tu fecha de nacimiento, gira la rueda Jiushu y descubre tu lectura y tu manual personal de talento.',birth:'Fecha de nacimiento',privacy:'El cálculo se realiza solo en este dispositivo. Tu fecha no se sube ni se guarda.',wheel:'Rueda Jiushu',waiting:'Esperando tu fecha de nacimiento',radar:'Gráfico de radar del talento',footer:'Atlas del Talento · Exploración Jiushu',disclaimer:'Para exploración cultural y reflexión personal, no es asesoramiento profesional ni una predicción del destino.'}
  };
  function apply(){
    const t=translations[lang];
    document.documentElement.lang=lang==='zh'?'zh-CN':lang;
    document.title=t.title;
    document.querySelector('meta[name="description"]').content=t.intro;
    document.querySelector('.brand span:last-child').textContent=t.brand;
    document.querySelector('.hook-intro .eyebrow').textContent=t.eyebrow;
    const heading=document.querySelector('.hook-intro h1');heading.replaceChildren(document.createTextNode(t.heading[0]),document.createElement('br'),document.createTextNode(t.heading[1]));
    document.querySelector('.hook-intro>p:last-child').textContent=t.intro;
    document.querySelector('label[for="birth"]').textContent=t.birth;
    document.querySelector('.hook-form>small').textContent=t.privacy;
    document.querySelector('#wheel-system-label').textContent=t.wheel;
    const stage=document.querySelector('#oracle-stage');
    if(!stage.classList.contains('revealed')&&!stage.classList.contains('spinning'))document.querySelector('#wheel-status').textContent=t.waiting;
    if(stage.classList.contains('revealed')){
      const n=document.querySelector('#wheel-action').textContent.match(/\d+/)?.[0];
      if(n)document.querySelector('#wheel-action').textContent=lang==='zh'?`${n}号显现`:lang==='en'?`Number ${n} revealed`:`Número ${n} revelado`;
    }
    document.querySelector('#talent-radar').setAttribute('aria-label',t.radar);
    document.querySelector('.hook-footer>span').textContent=t.footer;
    document.querySelector('.hook-footer>small').textContent=t.disclaimer;
    document.querySelectorAll('[data-lang]').forEach(button=>{const active=button.dataset.lang===lang;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
  }
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{lang=button.dataset.lang;apply()}));
  apply();
})();
