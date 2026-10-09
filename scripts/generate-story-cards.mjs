import {mkdirSync,writeFileSync} from 'node:fs';

const cards=[
  ['01','04.29','SHANGHAI','FIRST MEETING','#efb5ad','skyline'],
  ['02','05.29','SHANGHAI','HOT POT DAYS','#e88c62','hotpot'],
  ['03','06.12','XI\u2019AN','HER CITY','#cf876e','wall'],
  ['04','07.02','NANJING','HIS HOMETOWN','#8fae8b','window'],
  ['05','07.24','SEASIDE','RUN TO THE SEA','#74b7cd','waves'],
  ['06','08.08','NANJING \u00b7 YANGZHOU','DURIAN & RAIN','#d3a46f','rain'],
  ['07','09.11','BEIJING','DISTANCE IS NOT THE HEART','#91a6bf','plane'],
  ['08','10.03','SINGAPORE','FIRST FLIGHT ABROAD','#70b4ad','trees'],
  ['09','11.07','BEIJING','SIDE BY SIDE','#8094ab','snow'],
  ['10','11.27','SINGAPORE','CHRISTMAS WITHOUT SNOW','#897bb0','lights'],
  ['11','01.09','BEIJING','HOME, WITH NATURE','#c99b85','cat'],
  ['12','02.14','SINGAPORE','COUNTDOWN TO YOU','#d95858','lantern'],
];

const motifs={
  skyline:'<path d="M55 310h290M80 310v-70h35v70m15 0V190h45v120m18 0V120h32v190m18 0v-96h45v96m20 0V160h35v150"/>',
  hotpot:'<ellipse cx="200" cy="235" rx="110" ry="54"/><path d="M90 230h220M125 240c20-45 45 35 70-5s50 35 82-8M145 155c-25-28 25-35 0-64m70 65c-25-30 25-36 0-67"/>',
  wall:'<path d="M55 290h290v-98H55zm25-98v-38h54v38m132 0v-38h54v38M45 154h300M78 135h22m100 0h22m78 0h22"/>',
  window:'<rect x="72" y="82" width="256" height="218" rx="4"/><path d="M200 82v218M72 190h256M95 275c48-60 82-52 115 0 44-72 75-75 98 0"/>',
  waves:'<path d="M40 180c40-32 80-32 120 0s80 32 120 0 80-32 120 0M40 225c40-32 80-32 120 0s80 32 120 0 80-32 120 0M40 270c40-32 80-32 120 0s80 32 120 0 80-32 120 0"/>',
  rain:'<path d="M70 120h260M90 155l-18 36m80-36-18 36m80-36-18 36m80-36-18 36m70-36-18 36M70 250h260M105 250v60m95-60v60m95-60v60"/>',
  plane:'<path d="M55 255c105-45 190-105 285-160M210 170l-12-82m12 82 78 25M132 220l-50-18m50 18 15 50"/>',
  trees:'<path d="M92 300V175m0 0-55-55m55 55 55-55m-88 15h66M200 300V105m0 0-80-72m80 72 80-72m-125 30h90M310 300V190m0 0-48-46m48 46 48-46m-75 20h54"/>',
  snow:'<path d="M70 280h260M110 280V130h180v150M200 130v150M110 205h180M55 90l20 20m0-20-20 20m265-20 20 20m0-20-20 20"/>',
  lights:'<path d="M45 110c80 55 230 55 310 0M70 130v30m45-8v30m45-14v30m45-16v30m45-17v30m45-16v30m45-25v30"/><circle cx="70" cy="166" r="9"/><circle cx="115" cy="188" r="9"/><circle cx="160" cy="204" r="9"/><circle cx="205" cy="218" r="9"/><circle cx="250" cy="211" r="9"/><circle cx="295" cy="195" r="9"/><circle cx="340" cy="180" r="9"/>',
  cat:'<path d="M125 250c0-78 34-120 75-120s75 42 75 120c0 45-35 70-75 70s-75-25-75-70zM145 155l-12-64 55 42m67 22 12-64-55 42M168 220h1m62 0h1m-48 32c11 8 21 8 32 0"/>',
  lantern:'<path d="M70 88h75m-60 0c-20 24-20 78 0 102h45c20-24 20-78 0-102m-22 102v48m182-150h75m-60 0c-20 24-20 78 0 102h45c20-24 20-78 0-102m-22 102v48M157 250c25-42 62-42 86 0-24 32-61 32-86 0z"/>',
};

mkdirSync(new URL('../public/memories/',import.meta.url),{recursive:true});
for(const [number,date,city,title,color,motif] of cards){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${color}"/><stop offset="1" stop-color="#252638"/></linearGradient><filter id="n"><feTurbulence baseFrequency=".7" numOctaves="2" result="n"/><feBlend in="SourceGraphic" in2="n" mode="soft-light"/></filter></defs><rect width="400" height="520" rx="24" fill="url(#g)"/><rect x="20" y="20" width="360" height="480" rx="15" fill="none" stroke="#fff4db" stroke-opacity=".55"/><g fill="none" stroke="#fff4db" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity=".84">${motifs[motif]}</g><text x="40" y="48" fill="#fff4db" font-family="Georgia,serif" font-size="16">CHAPTER ${number}</text><text x="40" y="392" fill="#fff4db" font-family="Georgia,serif" font-size="15" letter-spacing="2">${date}  ${city}</text><text x="40" y="430" fill="#fff4db" font-family="Georgia,serif" font-size="19" letter-spacing="1">${title}</text><path d="M40 455h190" stroke="#fff4db" stroke-opacity=".5"/><text x="40" y="482" fill="#fff4db" opacity=".72" font-family="sans-serif" font-size="11" letter-spacing="3">SHMILY · OUR STORY</text></svg>`;
  writeFileSync(new URL(`../public/memories/story-${number}.svg`,import.meta.url),svg);
}

