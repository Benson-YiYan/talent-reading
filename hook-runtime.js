(function(){
  const note=document.querySelector('#algorithm-note');
  if(!note)return;
  const notes={
    zh:'九数系统将出生日期数字逐位相加，并反复化简到 1—9。结果用于文化探索和自我反思，不自动推断疾病、创伤、财富或命运。',
    en:'Jiushu adds the digits of your birth date and reduces the sum to 1–9. Results are for cultural exploration and self-reflection, not predictions of illness, trauma, wealth or destiny.',
    es:'Jiushu suma los dígitos de tu fecha de nacimiento y reduce el resultado a 1–9. Los resultados son para exploración cultural y reflexión personal, no para predecir enfermedades, traumas, riqueza o destino.'
  };
  function update(){if(note.textContent!==notes[lang])note.textContent=notes[lang]}
  new MutationObserver(update).observe(note,{childList:true,characterData:true,subtree:true});
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',update));
})();
