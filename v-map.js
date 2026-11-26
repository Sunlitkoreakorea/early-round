// 지도 탭: 미국 전체 + 동북부 확대. d3-geo, topojson, us-atlas 는 이 탭을 처음 열 때만 불러온다.
(() => {
  'use strict';
  const E = window.EP;
  const { C, $, esc, chip, tierChip, ddTxt } = E;

  const LIBS = [
    'https://cdn.jsdelivr.net/npm/d3-array@3.2.4/dist/d3-array.min.js',
    'https://cdn.jsdelivr.net/npm/d3-geo@3.1.1/dist/d3-geo.min.js',
    'https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js',
  ];
  const ATLAS = 'https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json';
  // 동북부 확대 범위 (경도, 위도)
  const NE_BOX = [[-78.3, 38.85], [-69.2, 45.15]];
  const REGION = { ne: '동북부', mw: '중서부', w: '서부' };

  let geo = null;
  let loading = null;

  function script(src) {
    return new Promise((ok, no) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = ok;
      s.onerror = () => no(new Error(src));
      document.head.appendChild(s);
    });
  }

  function loadGeo() {
    if (geo) return Promise.resolve(geo);
    if (!loading) {
      loading = LIBS.reduce((p, src) => p.then(() => script(src)), Promise.resolve())
        .then(() => fetch(ATLAS))
        .then(r => { if (!r.ok) throw new Error('atlas'); return r.json(); })
        .then(topo => {
          const states = window.topojson.feature(topo, topo.objects.states);
          const mesh = window.topojson.mesh(topo, topo.objects.states, (a, b) => a !== b);
          geo = { states, mesh };
          return geo;
        })
        .catch(err => { loading = null; throw err; });
    }
    return loading;
  }

  function cls(s) {
    const p = E.pickOf(s);
    if (!p) return 'pt-none';
    return `pt-${p}`;
  }

  function dotsSvg(list, proj, r, withLabels) {
    let out = '';
    for (const s of list) {
      const xy = proj([s.loc.lon, s.loc.lat]);
      if (!xy) continue;
      const [x, y] = xy;
      const star = E.isStar(s);
      out += `<g class="pt ${cls(s)}${star ? ' dream' : ''}" data-pt="${esc(s.id)}" transform="translate(${x.toFixed(1)},${y.toFixed(1)})">
        <circle class="hit" r="${r + 7}"></circle>
        <circle class="mk" r="${r}"></circle>
        ${withLabels ? `<text x="${s.loc.lx ?? r + 4}" y="${s.loc.ly ?? 4}" text-anchor="${s.loc.la || 'start'}">${esc(s.name)}${star ? ' ★' : ''}</text>` : ''}
      </g>`;
    }
    return out;
  }

  function draw() {
    const d3 = window.d3;
    const list = E.live().filter(s => s.loc);
    const neList = list.filter(s => s.loc.region === 'ne');
    const other = list.filter(s => s.loc.region !== 'ne');

    // 전체 지도
    const W = 960;
    const H = 600;
    const albers = d3.geoAlbersUsa().scale(1280).translate([W / 2, H / 2]);
    const pathA = d3.geoPath(albers);
    // 확대 범위 테두리 (위경도 사각형을 촘촘히 찍어 투영)
    const ring = [];
    const [[x0, y0], [x1, y1]] = NE_BOX;
    for (let i = 0; i <= 20; i++) ring.push([x0 + ((x1 - x0) * i) / 20, y0]);
    for (let i = 0; i <= 20; i++) ring.push([x1, y0 + ((y1 - y0) * i) / 20]);
    for (let i = 0; i <= 20; i++) ring.push([x1 - ((x1 - x0) * i) / 20, y1]);
    for (let i = 0; i <= 20; i++) ring.push([x0, y1 - ((y1 - y0) * i) / 20]);
    const boxPts = ring.map(p => albers(p)).filter(Boolean);
    const boxD = boxPts.length ? `M${boxPts.map(p => p.map(v => v.toFixed(1)).join(',')).join('L')}Z` : '';

    const main = `<svg class="usmap" viewBox="0 0 ${W} ${H}" role="img" aria-label="미국 지도">
      <path class="land" d="${pathA(geo.states)}"></path>
      <path class="border" d="${pathA(geo.mesh)}"></path>
      ${boxD ? `<path class="nebox" d="${boxD}"></path>` : ''}
      ${dotsSvg(neList, albers, 4.5, false)}
      ${dotsSvg(other, albers, 6.5, true)}
    </svg>`;

    // 동북부 확대
    const IW = 560;
    const IH = 470;
    const merc = d3.geoMercator().fitExtent([[6, 6], [IW - 6, IH - 6]], { type: 'MultiPoint', coordinates: NE_BOX });
    const pathM = d3.geoPath(merc);
    const inset = `<svg class="nemap" viewBox="0 0 ${IW} ${IH}" role="img" aria-label="미국 동북부 확대">
      <defs><clipPath id="neClip"><rect x="0" y="0" width="${IW}" height="${IH}" rx="10"></rect></clipPath></defs>
      <g clip-path="url(#neClip)">
        <rect class="sea" x="0" y="0" width="${IW}" height="${IH}"></rect>
        <path class="land" d="${pathM(geo.states)}"></path>
        <path class="border" d="${pathM(geo.mesh)}"></path>
      </g>
      ${dotsSvg(neList, merc, 7, true)}
    </svg>`;

    const legend = `<div class="legend mapLegend">
      <span><i class="lg pt-ED"></i>ED</span><span><i class="lg pt-REA"></i>REA, SCEA</span><span><i class="lg pt-EA"></i>EA</span>
      <span><i class="lg pt-ED2"></i>ED2</span><span><i class="lg pt-RD"></i>정시</span><span><i class="lg pt-none"></i>미정</span>
    </div>`;

    const regions = ['ne', 'mw', 'w'].map(rg => {
      const items = list.filter(s => s.loc.region === rg).sort((a, b) => a.name.localeCompare(b.name));
      if (!items.length) return '';
      return `<div class="rgn"><h3>${REGION[rg]} <span class="fine">${items.length}</span></h3><div class="rgnList">${items.map(s => {
        const p = E.pickOf(s);
        return `<a class="rgnItem" href="#s/${encodeURIComponent(s.id)}">${esc(s.name)}${p ? chip(p) : ''}<span class="fine">${esc(s.loc.state)}</span></a>`;
      }).join('')}</div></div>`;
    }).join('');

    const own = E.st.custom.length ? `<p class="fine noLoc">직접 추가한 학교는 지도에 없어요</p>` : '';

    $('#view-map').innerHTML = `${legend}<div class="maps"><div class="mapMain">${main}</div><div class="mapNE"><div class="neTag">동북부 확대</div>${inset}</div></div><div class="rgns">${regions}</div>${own}`;
  }

  function tipHtml(s) {
    const p = E.pickOf(s);
    const kp = E.keyPlan(s);
    const d = kp ? E.due(s, kp) : null;
    const ch = E.chanceOf(s);
    return `<div class="tipName">${esc(s.name)}${E.isStar(s) ? ' <span class="tstar">★</span>' : ''}</div>
      <div class="tipSub">${esc(s.loc.city)}, ${esc(s.loc.state)}</div>
      <div class="tipRow">${p ? chip(p) : ''}${d ? `<span>${C.md(d)} ${ddTxt(C.dday(d, E.today()))}</span>` : ''}${tierChip(ch.tier, ch.label)}</div>
      <a class="tipGo" href="#s/${encodeURIComponent(s.id)}">학교 보기 ›</a>`;
  }

  E.views.map = {
    render() {
      const el = $('#view-map');
      if (geo) { draw(); return; }
      el.innerHTML = '<p class="empty">지도 불러오는 중</p>';
      loadGeo().then(() => { if (E.route().tab === 'map') draw(); })
        .catch(() => { el.innerHTML = '<p class="empty">지도를 불러오지 못했어요. 인터넷 연결을 확인해 주세요.</p>'; });
    },
    bind() {
      const root = $('#view-map');
      const hover = matchMedia('(hover: hover)');
      root.addEventListener('pointerover', e => {
        if (!hover.matches) return;
        const g = e.target.closest('[data-pt]');
        if (!g) return;
        const s = E.byId(g.dataset.pt);
        const b = g.getBoundingClientRect();
        if (s) E.showTip(tipHtml(s), b.left + b.width / 2, b.top);
      });
      root.addEventListener('pointerout', e => {
        if (!hover.matches) return;
        const g = e.target.closest('[data-pt]');
        if (g && !g.contains(e.relatedTarget)) E.hideTip();
      });
      root.addEventListener('click', e => {
        const g = e.target.closest('[data-pt]');
        if (!g) return;
        e.stopPropagation();
        const s = E.byId(g.dataset.pt);
        if (!s) return;
        if (hover.matches) { location.hash = `#s/${encodeURIComponent(s.id)}`; return; }
        const b = g.getBoundingClientRect();
        E.showTip(tipHtml(s), b.left + b.width / 2, b.top);
      });
    },
  };
})();
