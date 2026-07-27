
const BRANCHES = [{"name": "강서구종합사회복지관", "gu": "강서구", "type": "체험존", "addr": "부산광역시 강서구 대저로63번길 31", "detail": "-", "people": "3,401명", "rate": "5.2%", "rateNum": 5.2, "pop": "66,159명", "lat": 35.216814, "lng": 128.959397, "tier": 3}, {"name": "신중년더채움학습관", "gu": "금정구", "type": "체험존", "addr": "부산광역시 금정구 금정로 29-6", "detail": "-", "people": "4,583명", "rate": "4.4%", "rateNum": 4.4, "pop": "105,003명", "lat": 35.227422, "lng": 129.085521, "tier": 2}, {"name": "다행복한종합사회복지관", "gu": "기장군", "type": "체험존", "addr": "부산광역시 기장군 기장읍 차성로417번길 11", "detail": "기장교육행복타운", "people": "3,244명", "rate": "4.1%", "rateNum": 4.1, "pop": "80,493명", "lat": 35.255225, "lng": 129.215524, "tier": 2}, {"name": "용호종합사회복지관", "gu": "남구", "type": "체험존", "addr": "부산광역시 남구 이기대공원로 7", "detail": "용호동 36-7", "people": "5,134명", "rate": "4.3%", "rateNum": 4.3, "pop": "121,069명", "lat": 35.12461, "lng": 129.113532, "tier": 2}, {"name": "부산유라시아플랫폼", "gu": "동구", "type": "거점센터", "addr": "부산광역시 동구 중앙대로 210", "detail": "201호", "people": "6,215명", "rate": "13.4%", "rateNum": 13.4, "pop": "46,279명", "lat": 35.11493, "lng": 129.040784, "tier": 4}, {"name": "동래종합사회복지관", "gu": "동래구", "type": "체험존", "addr": "부산광역시 동래구 시실로107번길 151", "detail": "-", "people": "8,615명", "rate": "7.0%", "rateNum": 7.0, "pop": "122,645명", "lat": 35.211291, "lng": 129.098565, "tier": 4}, {"name": "부산발달장애인훈련센터", "gu": "부산진구", "type": "체험존", "addr": "부산광역시 부산진구 범일로 181", "detail": "사학연금회관빌딩 13~14층", "people": "10,702명", "rate": "5.7%", "rateNum": 5.7, "pop": "189,476명", "lat": 35.146217, "lng": 129.058861, "tier": 3}, {"name": "부산진우체국", "gu": "부산진구", "type": "거점센터·체험존", "addr": "부산광역시 부산진구 가야대로 579", "detail": "3층", "people": "10,702명", "rate": "5.7%", "rateNum": 5.7, "pop": "189,476명", "lat": 35.154912, "lng": 129.03536, "tier": 3}, {"name": "신한 학이재 부산", "gu": "부산진구", "type": "체험존", "addr": "부산광역시 부산진구 새싹로 6", "detail": "신한은행 부산서면지점 2층 로비", "people": "10,702명", "rate": "5.7%", "rateNum": 5.7, "pop": "189,476명", "lat": 35.158725, "lng": 129.058738, "tier": 3}, {"name": "금곡종합사회복지관", "gu": "북구", "type": "체험존", "addr": "부산광역시 북구 효열로 144", "detail": "-", "people": "3,095명", "rate": "2.5%", "rateNum": 2.5, "pop": "122,000명", "lat": 35.258875, "lng": 129.015501, "tier": 1}, {"name": "부산도서관", "gu": "사상구", "type": "거점센터·체험존", "addr": "부산광역시 사상구 사상로310번길 33", "detail": "-", "people": "6,712명", "rate": "6.8%", "rateNum": 6.8, "pop": "98,642명", "lat": 35.172718, "lng": 128.985289, "tier": 3}, {"name": "학장종합사회복지관", "gu": "사상구", "type": "체험존", "addr": "부산광역시 사상구 학감대로49번길 28-70", "detail": "-", "people": "6,712명", "rate": "6.8%", "rateNum": 6.8, "pop": "98,642명", "lat": 35.138638, "lng": 128.989748, "tier": 3}, {"name": "하하센터 신평", "gu": "사하구", "type": "체험존", "addr": "부산광역시 사하구 하신중앙로 175", "detail": "부산도시철도 1호선 신평역 2층 역사 안", "people": "5,241명", "rate": "3.8%", "rateNum": 3.8, "pop": "139,403명", "lat": 35.095141, "lng": 128.960599, "tier": 2}, {"name": "부산광역시 서구청", "gu": "서구", "type": "체험존", "addr": "부산광역시 서구 구덕로 120", "detail": "-", "people": "3,281명", "rate": "6.1%", "rateNum": 6.1, "pop": "53,424명", "lat": 35.097924, "lng": 129.024296, "tier": 3}, {"name": "부산종합사회복지관", "gu": "수영구", "type": "체험존", "addr": "부산광역시 수영구 금련로43번길 54", "detail": "-", "people": "5,176명", "rate": "5.9%", "rateNum": 5.9, "pop": "87,709명", "lat": 35.170879, "lng": 129.098579, "tier": 3}, {"name": "연제구거제종합사회복지관", "gu": "연제구", "type": "체험존", "addr": "부산광역시 연제구 아시아드대로46번길 45", "detail": "복지관 식당 안", "people": "5,040명", "rate": "5.0%", "rateNum": 5.0, "pop": "100,592명", "lat": 35.188298, "lng": 129.070609, "tier": 3}, {"name": "동삼종합사회복지관", "gu": "영도구", "type": "체험존", "addr": "부산광역시 영도구 상리로 30", "detail": "-", "people": "3,507명", "rate": "6.6%", "rateNum": 6.6, "pop": "53,021명", "lat": 35.083313, "lng": 129.06686, "tier": 3}, {"name": "중구노인복지관", "gu": "중구", "type": "체험존", "addr": "부산광역시 중구 책방골목길 3-1", "detail": "본관", "people": "2,999명", "rate": "12.9%", "rateNum": 12.9, "pop": "23,331명", "lat": 35.104077, "lng": 129.026021, "tier": 4}, {"name": "부산우1동우체국", "gu": "해운대구", "type": "거점센터·체험존", "addr": "부산광역시 해운대구 중동1로 11", "detail": "7층", "people": "2,674명", "rate": "1.6%", "rateNum": 1.6, "pop": "169,835명", "lat": 35.16393, "lng": 129.161152, "tier": 1}, {"name": "해운대종합사회복지관", "gu": "해운대구", "type": "체험존", "addr": "부산광역시 해운대구 재반로12번길 16", "detail": "-", "people": "2,674명", "rate": "1.6%", "rateNum": 1.6, "pop": "169,835명", "lat": 35.180097, "lng": 129.127639, "tier": 1}];

const TIER = {
  4:{c:'var(--t4)',hex:'#16a34a',label:'높음',range:'7% 이상'},
  3:{c:'var(--t3)',hex:'#84cc16',label:'양호',range:'5–7%'},
  2:{c:'var(--t2)',hex:'#eab308',label:'보통',range:'3–5%'},
  1:{c:'var(--t1)',hex:'#f97316',label:'낮음',range:'3% 미만'},
};
const TYPE = {
  '체험존':{hex:'#2563eb',cls:'exp',short:'체험존'},
  '거점센터':{hex:'#dc2626',cls:'hub',short:'거점센터'},
  '거점센터·체험존':{hex:'#9333ea',cls:'both',short:'복합'},
};

let colorMode='type';
const state={q:'',gu:'',type:'',tier:''};
const markers={}; // name -> marker
let activeName=null;
let numByName={}; // name -> 목록 순번

// ---- Map ----
const map=L.map('map',{zoomControl:true,scrollWheelZoom:true}).setView([35.16,129.06],11);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  {maxZoom:20,subdomains:'abcd',attribution:'&copy; OpenStreetMap &copy; CARTO'}).addTo(map);
L.control.scale({imperial:false}).addTo(map);

function colorFor(b){ return colorMode==='tier' ? TIER[b.tier].hex : TYPE[b.type].hex; }

// 유형별 건물 실루엣: 체험존=단일지붕 집, 복합=이중지붕 집, 거점센터=타워+깃발
function houseShape(type){
  if(type==='거점센터')
    return {inner:'<path d="M7 14 H33 V46 H7 Z"/><path d="M18.5 2 H21.5 V14 H18.5 Z"/><path d="M21.5 2 L31 5.5 L21.5 9 Z"/>', ny:34};
  if(type==='거점센터·체험존')
    return {inner:'<path d="M3 21 L11 7 L20 21 L29 7 L37 21 L37 46 L3 46 Z"/>', ny:39};
  return {inner:'<path d="M20 3 L37 18 L37 46 L3 46 L3 18 Z"/>', ny:38};
}
function makeIcon(b,selected,number){
  const col=colorFor(b);
  const hp=houseShape(b.type);
  const sz = selected?46:36, h=sz*1.2;
  const glow = selected?' drop-shadow(0 0 5px rgba(37,99,235,.7))':'';
  const svg=`<svg width="${sz}" height="${h}" viewBox="0 0 40 48" style="filter:drop-shadow(0 2px 3px rgba(15,23,42,.45))${glow};overflow:visible">
    <g fill="${col}" stroke="#fff" stroke-width="2.5" stroke-linejoin="round">${hp.inner}</g>
    <text x="20" y="${hp.ny}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff"
      style="paint-order:stroke;stroke:rgba(15,23,42,.38);stroke-width:2.4px;font-family:sans-serif">${number||''}</text>
  </svg>`;
  return L.divIcon({className:'houseIcon', html:svg, iconSize:[sz,h], iconAnchor:[sz/2, h*0.96], popupAnchor:[0,-h*0.9]});
}

function popupHtml(b){
  const t=TYPE[b.type];
  const naver=`https://map.naver.com/v5/search/${encodeURIComponent(b.addr)}`;
  const kakao=`https://map.kakao.com/link/to/${encodeURIComponent(b.name)},${b.lat},${b.lng}`;
  return `<div class="pop">
    <h4>${b.name}</h4>
    <div class="body">
      <div class="tags">
        <span class="tag ${t.cls}">${b.type}</span>
        <span class="tag" style="background:#f1f5f9;color:#475569">${b.gu}</span>
      </div>
      <dl>
        <dt>주소</dt><dd>${b.addr}</dd>
        ${b.detail && b.detail!=='-' ? `<dt>상세위치</dt><dd>${b.detail}</dd>`:''}
      </dl>
      <div class="perf">
        <div class="ph">📊 ${b.gu} 전체 디지털교육 실적 <span style="color:#b45309">(지점 개별 아님)</span></div>
        <div class="pv">
          <span class="big" style="color:${TIER[b.tier].hex}">${b.people}</span>
          <span class="rt" style="color:${TIER[b.tier].hex}">참여율 ${b.rate}</span>
        </div>
        <div class="warn">인구 ${b.pop} 대비 · 참여율 등급 <b>${TIER[b.tier].label}</b></div>
      </div>
      <div class="acts">
        <a class="primary" href="${kakao}" target="_blank" rel="noopener">길찾기</a>
        <a href="${naver}" target="_blank" rel="noopener">네이버지도</a>
      </div>
    </div>
  </div>`;
}

BRANCHES.forEach(b=>{
  const m=L.marker([b.lat,b.lng],{icon:makeIcon(b,false,'')}).addTo(map);
  m.bindPopup(popupHtml(b),{closeButton:true});
  m.on('click',()=>setActive(b.name,false));
  m.on('popupclose',()=>{ if(activeName===b.name) setActive(null,false); });
  markers[b.name]=m;
});

function refreshIcons(){
  BRANCHES.forEach(b=>markers[b.name].setIcon(makeIcon(b, b.name===activeName, numByName[b.name])));
}

// ---- Filtering ----
function visible(){
  return BRANCHES.filter(b=>{
    if(state.gu && b.gu!==state.gu) return false;
    if(state.type && b.type!==state.type) return false;
    if(state.tier && String(b.tier)!==state.tier) return false;
    if(state.q){
      const q=state.q.toLowerCase();
      if(!(b.name+b.gu+b.addr+b.type).toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

function renderList(){
  const vis=visible();
  vis.sort((a,b)=> b.rateNum-a.rateNum || a.name.localeCompare(b.name));
  // 목록 순번 부여(현재 필터/정렬 기준) → 지도 마커 숫자와 동일
  numByName={};
  vis.forEach((b,i)=>numByName[b.name]=i+1);
  const names=new Set(vis.map(b=>b.name));
  // 마커 표시/숨김 + 번호가 반영된 아이콘 갱신
  BRANCHES.forEach(b=>{
    const el=markers[b.name];
    if(names.has(b.name)){
      el.setIcon(makeIcon(b, b.name===activeName, numByName[b.name]));
      if(!map.hasLayer(el)) el.addTo(map);
    } else if(map.hasLayer(el)){ map.removeLayer(el); }
  });
  document.getElementById('cnt').textContent=vis.length;
  const list=document.getElementById('list');
  if(!vis.length){ list.innerHTML='<div style="padding:24px 12px;text-align:center;color:#94a3b8;font-size:13px">조건에 맞는 지점이 없습니다.</div>'; return; }
  list.innerHTML=vis.map(b=>{
    const t=TYPE[b.type];
    return `<div class="card${b.name===activeName?' active':''}" data-name="${b.name}">
      <div class="top">
        <span class="num" style="background:${colorFor(b)}">${numByName[b.name]}</span>
        <h3>${b.name}</h3>
        <span class="tag ${t.cls}">${t.short}</span>
      </div>
      <div class="meta">
        <span>${b.gu}</span>
        <span class="rate" style="color:${TIER[b.tier].hex}">참여율 ${b.rate}</span>
        <span>${b.people}</span>
      </div>
    </div>`;
  }).join('');
  list.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click',()=>setActive(c.dataset.name,true));
  });
}

function setActive(name,fly){
  activeName=name;
  refreshIcons();
  document.querySelectorAll('.card').forEach(c=>c.classList.toggle('active',c.dataset.name===name));
  if(name){
    const b=BRANCHES.find(x=>x.name===name);
    const m=markers[name];
    if(fly){ map.flyTo([b.lat,b.lng], Math.max(map.getZoom(),14), {duration:.5}); setTimeout(()=>m.openPopup(),350); closeSidebarMobile(); }
    const card=document.querySelector(`.card[data-name="${CSS.escape(name)}"]`);
    if(card) card.scrollIntoView({block:'nearest'});
  }
}

// ---- Legend ----
function miniHouse(type,color){
  const hp=houseShape(type);
  return `<svg width="17" height="20" viewBox="0 0 40 48" style="overflow:visible;flex:0 0 auto"><g fill="${color||'#94a3b8'}" stroke="#fff" stroke-width="2.5" stroke-linejoin="round">${hp.inner}</g></svg>`;
}
function renderLegend(){
  const scale=document.getElementById('lscale');
  const gloss=document.getElementById('gloss');
  if(colorMode==='tier'){
    scale.innerHTML=[4,3,2,1].map(k=>`<div class="lrow"><span class="sw" style="background:${TIER[k].hex}"></span><span><b>${TIER[k].label}</b> <small>참여율 ${TIER[k].range}</small></span></div>`).join('');
  }else{
    scale.innerHTML=Object.entries(TYPE).map(([k,v])=>`<div class="lrow">${miniHouse(k,v.hex)}<span><b>${k}</b></span></div>`).join('');
  }
  gloss.innerHTML=
    `<div style="display:flex;gap:10px;align-items:center;margin-bottom:5px">
       <span style="display:flex;align-items:center;gap:3px">${miniHouse('체험존')}체험존</span>
       <span style="display:flex;align-items:center;gap:3px">${miniHouse('거점센터·체험존')}복합</span>
       <span style="display:flex;align-items:center;gap:3px">${miniHouse('거점센터')}거점센터</span>
     </div>
     <div>모양=시설 유형 · 숫자=목록 순번(참여율 높은 순)</div>`;
}

// ---- Controls wiring ----
const guSel=document.getElementById('guSel');
[...new Set(BRANCHES.map(b=>b.gu))].sort().forEach(g=>{
  const o=document.createElement('option'); o.value=g; o.textContent=g; guSel.appendChild(o);
});
guSel.addEventListener('change',e=>{state.gu=e.target.value;renderList();});
document.getElementById('q').addEventListener('input',e=>{state.q=e.target.value.trim();renderList();});
document.getElementById('typeChips').addEventListener('click',e=>{
  if(!e.target.classList.contains('chip'))return;
  state.type=e.target.dataset.type;
  setChips('typeChips',e.target); renderList();
});
document.getElementById('tierChips').addEventListener('click',e=>{
  if(!e.target.classList.contains('chip'))return;
  state.tier=e.target.dataset.tier;
  setChips('tierChips',e.target); renderList();
});
function setChips(id,on){document.querySelectorAll('#'+id+' .chip').forEach(c=>c.classList.toggle('on',c===on));}
document.getElementById('reset').addEventListener('click',()=>{
  Object.assign(state,{q:'',gu:'',type:'',tier:''});
  document.getElementById('q').value=''; guSel.value='';
  setChips('typeChips',document.querySelector('#typeChips .chip'));
  setChips('tierChips',document.querySelector('#tierChips .chip'));
  renderList();
});
document.getElementById('colorToggle').addEventListener('click',e=>{
  if(e.target.tagName!=='BUTTON')return;
  colorMode=e.target.dataset.mode;
  document.querySelectorAll('#colorToggle button').forEach(btn=>btn.classList.toggle('on',btn===e.target));
  refreshIcons(); renderLegend(); renderList();
});
document.getElementById('legendHead').addEventListener('click',()=>{
  const lg=document.getElementById('legend'); lg.classList.toggle('collapsed');
  document.getElementById('legChevron').textContent=lg.classList.contains('collapsed')?'▸':'▾';
});
document.getElementById('noticeX').addEventListener('click',()=>document.getElementById('notice').style.display='none');

// mobile sidebar
const sidebar=document.getElementById('sidebar'), scrim=document.getElementById('scrim');
document.getElementById('menuBtn').addEventListener('click',()=>{sidebar.classList.add('open');scrim.classList.add('show');});
function closeSidebarMobile(){sidebar.classList.remove('open');scrim.classList.remove('show');}
scrim.addEventListener('click',closeSidebarMobile);

// init
renderLegend();
renderList();
