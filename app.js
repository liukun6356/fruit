'use strict';

/* ==================== 商品数据 ==================== */
const PRODUCTS = [
  {
    id: 1, emoji: '🍎', hue: 355, name: '烟台红富士苹果', origin: '山东烟台',
    price: 6.8, originalPrice: 9.9, unit: '斤', stock: 200, rating: 4.9, sales: 3264,
    category: 'seasonal', tags: ['限时特惠', '脆甜多汁'],
    desc: '烟台苹果核心产区直供，昼夜温差造就高甜度，果肉紧实脆爽、一口爆汁。',
    detail: '精选 80-85mm 大果，果面光洁、色泽红润。脆甜微酸、汁水充沛，削皮后不易氧化，是日常补水补纤维的健康之选。',
    nutrition: { kcal: '53 kcal', vc: '4.6 mg', sugar: '13.4 g', fiber: '2.4 g' },
    storage: '阴凉干燥处存放 7 天左右，冷藏后口感更脆甜。',
    reviews: [
      { user: '果**酱', text: '又大又红，咬一口特别脆，汁水多，全家都爱吃！' },
      { user: 'M**n', text: '包装严实没有磕碰，比超市划算，回购第三次了。' }
    ]
  },
  {
    id: 2, emoji: '🍊', hue: 28, name: '赣南脐橙', origin: '江西赣州',
    price: 8.9, unit: '斤', stock: 150, rating: 4.8, sales: 2891,
    category: 'citrus', tags: ['当季现摘', '皮薄多汁'],
    desc: '赣南脐橙核心产区现摘现发，皮薄好剥、果肉饱满，甜度可达 14°+。',
    detail: '富含维生素 C，果肉细嫩无渣、化渣率高。手剥或切开吃都合适，一箱吃出满满元气。',
    nutrition: { kcal: '47 kcal', vc: '53.2 mg', sugar: '9.0 g', fiber: '1.7 g' },
    storage: '阴凉通风处可存 10 天，冷藏后更爽口。',
    reviews: [
      { user: '橘**子', text: '皮很好剥，水分特别足，甜甜的没有酸味。' },
      { user: 'y**7', text: '个头均匀，新鲜度高，孩子每天都要吃一个。' }
    ]
  },
  {
    id: 3, emoji: '🍇', hue: 265, name: '阳光玫瑰葡萄', origin: '云南建水',
    price: 25.9, originalPrice: 32.0, unit: '斤', stock: 80, rating: 4.9, sales: 1876,
    category: 'seasonal', tags: ['人气爆款', '无籽脆甜'],
    desc: '阳光玫瑰青提，粒粒翠绿饱满，无籽脆甜，自带玫瑰清香。',
    detail: '串型紧凑、果粉均匀，甜度 18° 以上。冰镇后风味更佳，是水果篮里的人气王。',
    nutrition: { kcal: '53 kcal', vc: '3.5 mg', sugar: '16.2 g', fiber: '0.4 g' },
    storage: '冷藏保存 3-5 天，食用前再冲洗，吃前冰镇风味更佳。',
    reviews: [
      { user: '葡**TA', text: '每一颗都脆甜，无籽，洗完直接吃根本停不下来。' },
      { user: '桃**气', text: '青提界的天花板名不虚传，就是吃完还想买。' }
    ]
  },
  {
    id: 4, emoji: '🍓', hue: 348, name: '丹东红颜草莓', origin: '辽宁丹东',
    price: 29.9, unit: '斤', stock: 60, rating: 4.9, sales: 4125,
    category: 'berry', tags: ['草莓天花板', '香气浓郁'],
    desc: '丹东红颜草莓，99 品种，香气浓郁、奶香十足，甜度 12°+。',
    detail: '清晨采摘、冷链直发，泡沫箱加冰袋护送。果肉细腻、入口即化，空口吃就是享受。',
    nutrition: { kcal: '32 kcal', vc: '47 mg', sugar: '7.1 g', fiber: '1.1 g' },
    storage: '0-4℃ 冷藏保存，建议 2 天内食用完毕。',
    reviews: [
      { user: '莓**心', text: '香味很浓，一开箱满屋子都是草莓味，甜度在线。' },
      { user: 's**2', text: '泡沫箱 + 冰袋包装，一颗都没压坏，很新鲜。' }
    ]
  },
  {
    id: 5, emoji: '🥝', hue: 80, name: '徐香猕猴桃', origin: '陕西周至',
    price: 9.9, unit: '斤', stock: 180, rating: 4.7, sales: 1567,
    category: 'seasonal', tags: ['维C小金矿', '酸甜适口'],
    desc: '周至徐香猕猴桃，酸甜比例恰到好处，一颗补足每日维C。',
    detail: '果肉翠绿、中心细嫩，放软后用勺子挖着吃，风味浓郁。大小适中，全家分享最划算。',
    nutrition: { kcal: '61 kcal', vc: '62 mg', sugar: '8.5 g', fiber: '2.6 g' },
    storage: '生果阴凉存放，软熟后冷藏并尽快食用。',
    reviews: [
      { user: '猕**桃', text: '放软之后特别甜，勺子挖着吃，孩子最爱。' },
      { user: 'z**8', text: '维C补起来，酸酸甜甜口感刚好。' }
    ]
  },
  {
    id: 6, emoji: '🍍', hue: 45, name: '海南金钻凤梨', origin: '海南三亚',
    price: 15.8, unit: '个', stock: 90, rating: 4.8, sales: 986,
    category: 'tropical', tags: ['免盐水即食', '甜香浓郁'],
    desc: '海南金钻凤梨，无需泡盐水、不用挖眼，切开即食。',
    detail: '果肉金黄、纤维少，甜香浓郁。直接吃、榨汁、做凤梨饭都百搭。',
    nutrition: { kcal: '44 kcal', vc: '18 mg', sugar: '10.3 g', fiber: '1.4 g' },
    storage: '阴凉通风存放 5 天左右，冷藏后更清甜。',
    reviews: [
      { user: '菠**萝', text: '不用泡盐水，切开来金黄的，又甜又香。' },
      { user: '海**风', text: '核心挖掉就能吃，方便，甜度很高。' }
    ]
  },
  {
    id: 7, emoji: '🥭', hue: 40, name: '树上熟贵妃芒果', origin: '海南三亚',
    price: 19.9, unit: '斤', stock: 70, rating: 4.8, sales: 1231,
    category: 'tropical', tags: ['树上熟', '香浓软糯'],
    desc: '树上自然熟贵妃芒果，香浓软糯、汁水丰盈，芒果控必入。',
    detail: '成熟后香气扑鼻，皮薄肉厚、核小。冷藏后口感似冰淇淋，风味更清甜。',
    nutrition: { kcal: '35 kcal', vc: '23 mg', sugar: '8.3 g', fiber: '1.3 g' },
    storage: '常温催熟后冷藏，冷藏后风味似冰淇淋。',
    reviews: [
      { user: '芒**果', text: '软糯香甜，芒果味特别浓，熟得刚刚好。' },
      { user: 'c**5', text: '树上熟的就是不一样，香气扑鼻。' }
    ]
  },
  {
    id: 8, emoji: '🍉', hue: 135, name: '宁夏麒麟西瓜', origin: '宁夏中卫',
    price: 3.9, unit: '斤', stock: 300, rating: 4.8, sales: 5230,
    category: 'melon', tags: ['皮薄沙瓤', '脆甜爆汁'],
    desc: '宁夏麒麟瓜，皮薄如纸、沙瓤脆甜，一刀下去"咔嚓"开裂。',
    detail: '戈壁滩昼夜温差大，瓜瓤红艳、籽少而脆。冰镇后切块，全家一起吃才够爽。',
    nutrition: { kcal: '26 kcal', vc: '6.0 mg', sugar: '6.2 g', fiber: '0.3 g' },
    storage: '整瓜阴凉存放，切开后保鲜膜封好冷藏，24 小时内食用。',
    reviews: [
      { user: '瓜**子', text: '沙瓤又甜，皮薄，冰镇之后绝了。' },
      { user: '夏**天', text: '瓜很新鲜，一刀下去咔嚓就裂开了。' }
    ]
  },
  {
    id: 9, emoji: '🍑', hue: 15, name: '阳山水蜜桃', origin: '无锡阳山',
    price: 12.9, originalPrice: 15.8, unit: '斤', stock: 55, rating: 4.7, sales: 874,
    category: 'seasonal', tags: ['爆汁水嫩', '季节限定'],
    desc: '无锡阳山水蜜桃，水嫩爆汁、入口即化，被称为"水果皇后"。',
    detail: '成熟后可撕皮吸食，汁水顺着指缝流。轻拿轻放，软糯香甜，错过等一年。',
    nutrition: { kcal: '42 kcal', vc: '8.0 mg', sugar: '8.8 g', fiber: '1.3 g' },
    storage: '轻拿轻放，常温放软后食用，冷藏可延缓熟化。',
    reviews: [
      { user: '水**蜜', text: '轻轻一撕皮就下来了，咬一口爆汁，太满足。' },
      { user: 'f**6', text: '一到货就被家人分完了，好评。' }
    ]
  },
  {
    id: 10, emoji: '🍌', hue: 55, name: '高山甜香蕉', origin: '云南河口',
    price: 5.9, unit: '斤', stock: 260, rating: 4.6, sales: 3902,
    category: 'tropical', tags: ['自然熟', '无催熟'],
    desc: '云南高山甜香蕉，自然熟无催熟剂，甜糯无涩味。',
    detail: '山地香蕉风味浓郁，果肉绵密香甜。青蕉发货耐存放，黄熟后尽快享用。',
    nutrition: { kcal: '93 kcal', vc: '8.7 mg', sugar: '20.8 g', fiber: '1.2 g' },
    storage: '悬挂阴凉处存放，避免挤压；冷藏表皮变黑属正常现象。',
    reviews: [
      { user: '香**蕉', text: '自然熟的，没有涩味，甜糯香甜。' },
      { user: 'u**1', text: '整把新鲜，放几天也不发黑。' }
    ]
  },
  {
    id: 11, emoji: '🍒', hue: 350, name: '智利车厘子 JJ级', origin: '智利',
    price: 49.9, unit: '斤', stock: 40, rating: 4.9, sales: 2103,
    category: 'imported', tags: ['进口精选', '大果JJ级'],
    desc: '智利进口车厘子 JJ 级，果径 28-30mm，脆甜多汁，轻松实现车厘子自由。',
    detail: '空运直达、全程冷链，果梗青绿、果面光亮。一口一个根本停不下来，送礼自吃两相宜。',
    nutrition: { kcal: '63 kcal', vc: '7.0 mg', sugar: '12.8 g', fiber: '1.1 g' },
    storage: '0-4℃ 冷藏保存，开封后尽快食用。',
    reviews: [
      { user: '车**厘', text: 'JJ 级果径真的大，脆甜多汁，自由达成！' },
      { user: 'v**0', text: '冰袋保鲜很到位，果梗都是绿的。' }
    ]
  },
  {
    id: 12, emoji: '🥑', hue: 95, name: '秘鲁牛油果', origin: '秘鲁',
    price: 9.9, unit: '个', stock: 100, rating: 4.6, sales: 756,
    category: 'imported', tags: ['轻食健康', '优质脂肪'],
    desc: '秘鲁牛油果，果肉细腻顺滑，轻食健身的好搭档。',
    detail: '富含优质脂肪与膳食纤维，捏起来微软即可食用。涂抹面包、拌沙拉、做奶昔都合适。',
    nutrition: { kcal: '161 kcal', vc: '10 mg', sugar: '0.7 g', fiber: '6.7 g' },
    storage: '未熟常温存放，熟后冷藏并于 2-3 天内食用。',
    reviews: [
      { user: '牛**油', text: '捏起来微软，切开熟度正好，做沙拉棒极了。' },
      { user: '轻**食', text: '早餐配面包，顺滑细腻，回购了。' }
    ]
  },
  {
    id: 13, emoji: '🍋', hue: 60, name: '安岳黄柠檬', origin: '四川安岳',
    price: 2.99, unit: '个', stock: 220, rating: 4.7, sales: 1689,
    category: 'citrus', tags: ['皮薄多汁', '泡水首选'],
    desc: '安岳黄柠檬，皮薄多汁、香气清新，泡水烘焙两相宜。',
    detail: '果香纯正、酸味明亮，切片冷冻可长期保存。每天一杯柠檬水，清新又解腻。',
    nutrition: { kcal: '37 kcal', vc: '22 mg', sugar: '5.4 g', fiber: '1.3 g' },
    storage: '阴凉处可存两周，切片后冷冻保存更久。',
    reviews: [
      { user: '柠**檬', text: '皮薄多汁，香味清新，泡水绝佳。' },
      { user: 'q**4', text: '个头大颜色黄，切片冻起来随取随用。' }
    ]
  },
  {
    id: 14, emoji: '🍈', hue: 130, name: '海南香蜜瓜', origin: '海南乐东',
    price: 16.9, unit: '个', stock: 75, rating: 4.8, sales: 1345,
    category: 'melon', tags: ['当季首发', '香甜似蜜'],
    desc: '海南香蜜瓜，网纹细密、果肉翠绿，香甜多汁，甜度可达 16°。',
    detail: '藤上熟成后采摘，瓜香浓郁。冷藏后食用，口感似冰淇淋般绵密清甜。',
    nutrition: { kcal: '36 kcal', vc: '36 mg', sugar: '8.8 g', fiber: '0.9 g' },
    storage: '阴凉存放，切开后保鲜膜封好冷藏，24 小时内食用。',
    reviews: [
      { user: '瓜**农', text: '瓜香特别浓，切开满屋飘香，甜到心里。' },
      { user: 'h**8', text: '冰镇之后吃，口感像冰淇淋，好吃！' }
    ]
  }
];

const CATEGORIES = [
  { key: 'all', label: '全部水果' },
  { key: 'seasonal', label: '国产时令' },
  { key: 'tropical', label: '热带风情' },
  { key: 'berry', label: '浆果专区' },
  { key: 'citrus', label: '柑橘橙柚' },
  { key: 'melon', label: '清爽瓜类' },
  { key: 'imported', label: '进口精选' }
];

const FREE_SHIP = 39;   // 满 39 元免运费
const SHIP_FEE = 8;     // 不满 39 元运费 8 元

/* ==================== 状态 ==================== */
const state = {
  cart: loadJSON('fruitCart_v1', []),     // [{ id, qty }]
  orders: loadJSON('fruitOrders_v1', []), // 订单列表
  category: 'all',
  search: '',
  sort: 'default',
  modalId: null,
  modalQty: 1
};

/* ==================== 工具 ==================== */
const $ = (sel) => document.querySelector(sel);

const els = {
  grid: $('#productGrid'),
  emptyState: $('#emptyState'),
  chips: $('#categoryChips'),
  sortSelect: $('#sortSelect'),
  searchInput: $('#searchInput'),
  cartBtn: $('#cartBtn'),
  cartBadge: $('#cartBadge'),
  cartDrawer: $('#cartDrawer'),
  cartItems: $('#cartItems'),
  freeShipBar: $('#freeShipBar'),
  cartSubtotal: $('#cartSubtotal'),
  checkoutModal: $('#checkoutModal'),
  checkoutItems: $('#checkoutItems'),
  checkoutTotals: $('#checkoutTotals'),
  checkoutForm: $('#checkoutForm'),
  successModal: $('#successModal'),
  successInfo: $('#successInfo'),
  ordersModal: $('#ordersModal'),
  ordersList: $('#ordersList'),
  ordersBtn: $('#ordersBtn'),
  productModal: $('#productModal'),
  productModalCard: $('#productModalCard'),
  mask: $('#mask'),
  toast: $('#toast')
};

function loadJSON(key, fallback) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v : fallback;
  } catch { return fallback; }
}
function saveJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }
const saveCart = () => saveJSON('fruitCart_v1', state.cart);
const saveOrders = () => saveJSON('fruitOrders_v1', state.orders);

const getProduct = (id) => PRODUCTS.find(p => p.id === id);
const fmt = (n) => '¥' + n.toFixed(2);
const fmtSales = (n) => n >= 10000 ? (n / 10000).toFixed(1) + '万' : String(n);
const cartCount = () => state.cart.reduce((s, i) => s + i.qty, 0);
const cartSubtotal = () => state.cart.reduce((s, i) => {
  const p = getProduct(i.id);
  return p ? s + p.price * i.qty : s;
}, 0);

let toastTimer = null;
function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

/* ==================== 弹层开关 ==================== */
function anyOpen() {
  return !!document.querySelector('.modal.open') || els.cartDrawer.classList.contains('open');
}
function syncLock() { document.body.classList.toggle('locked', anyOpen()); }

function openOverlay(el) { el.classList.add('open'); syncLock(); }
function closeOverlay(el) { el.classList.remove('open'); syncLock(); }

function openDrawer() {
  renderCartUI();
  els.cartDrawer.classList.add('open');
  els.mask.classList.add('show');
  syncLock();
}
function closeDrawer() {
  els.cartDrawer.classList.remove('open');
  els.mask.classList.remove('show');
  syncLock();
}

/* ==================== 商品列表 ==================== */
function badgeHTML(p) {
  const b = [];
  if (p.originalPrice) b.push('<span class="badge b-sale">特惠</span>');
  if (p.sales >= 3000) b.push('<span class="badge b-hot">热销</span>');
  else if (p.tags.includes('当季首发')) b.push('<span class="badge b-new">新品</span>');
  return b.slice(0, 2).join('');
}

function cardHTML(p, i) {
  return `
  <article class="card" data-action="open-product" data-id="${p.id}" style="animation-delay:${i * 0.03}s">
    <div class="fruit-face" style="--h:${p.hue}">
      <div class="badges">${badgeHTML(p)}</div>
      <span class="face-emoji">${p.emoji}</span>
    </div>
    <div class="card-body">
      <h3 class="card-name">${p.name}</h3>
      <p class="card-origin">📍 ${p.origin} · 产地直发</p>
      <p class="card-meta">⭐ ${p.rating} 分 · 已售 ${fmtSales(p.sales)} 件</p>
      <div class="card-foot">
        <div class="price">
          <strong>${fmt(p.price).replace('¥', '¥')}</strong><span>/${p.unit}</span>
          ${p.originalPrice ? `<del>${fmt(p.originalPrice)}</del>` : ''}
        </div>
        <button class="add-btn" data-action="add" data-id="${p.id}" title="加入购物车" aria-label="加入购物车">＋</button>
      </div>
    </div>
  </article>`;
}

function renderGrid() {
  const q = state.search.trim();
  let list = PRODUCTS.filter(p =>
    (state.category === 'all' || p.category === state.category) &&
    (!q || p.name.includes(q) || p.origin.includes(q) || p.tags.some(t => t.includes(q)))
  );
  if (state.sort === 'sales') list = [...list].sort((a, b) => b.sales - a.sales);
  else if (state.sort === 'priceAsc') list = [...list].sort((a, b) => a.price - b.price);
  else if (state.sort === 'priceDesc') list = [...list].sort((a, b) => b.price - a.price);

  els.grid.innerHTML = list.map(cardHTML).join('');
  els.emptyState.classList.toggle('hidden', list.length > 0);
}

function renderChips() {
  els.chips.innerHTML = CATEGORIES.map(c =>
    `<button class="chip${c.key === state.category ? ' active' : ''}" data-cat="${c.key}">${c.label}</button>`
  ).join('');
}

/* ==================== 商品详情弹窗 ==================== */
function openProduct(id) {
  const p = getProduct(id);
  if (!p) return;
  state.modalId = id;
  state.modalQty = 1;

  els.productModalCard.innerHTML = `
    <button class="close-btn modal-close" style="position:absolute;top:16px;right:16px" data-action="close-product">✕</button>
    <div class="pm-top">
      <div class="fruit-face pm-face" style="--h:${p.hue}">
        <div class="badges">${badgeHTML(p)}</div>
        <span class="face-emoji">${p.emoji}</span>
      </div>
      <div class="pm-info">
        <h3>${p.name}</h3>
        <p class="pm-origin">📍 ${p.origin} · 产地直发 · 冷链配送</p>
        <p class="card-meta">⭐ ${p.rating} 分 · 已售 ${fmtSales(p.sales)} 件 · 库存 ${p.stock} ${p.unit}</p>
        <div class="pm-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="price pm-price">
          <strong>${fmt(p.price)}</strong><span>/${p.unit}</span>
          ${p.originalPrice ? `<del>${fmt(p.originalPrice)}</del>` : ''}
        </div>
      </div>
    </div>

    <h4 class="pm-section-title">🍎 商品介绍</h4>
    <p class="pm-desc">${p.desc}</p>
    <p class="pm-detail" style="margin-top:8px">${p.detail}</p>

    <h4 class="pm-section-title">📊 营养成分（每 100g）</h4>
    <div class="nutri-grid">
      <div class="nutri-cell"><b>${p.nutrition.kcal}</b><i>热量</i></div>
      <div class="nutri-cell"><b>${p.nutrition.vc}</b><i>维生素C</i></div>
      <div class="nutri-cell"><b>${p.nutrition.sugar}</b><i>碳水化合物</i></div>
      <div class="nutri-cell"><b>${p.nutrition.fiber}</b><i>膳食纤维</i></div>
    </div>

    <h4 class="pm-section-title">🧊 保存方式</h4>
    <p class="pm-storage">${p.storage}</p>

    <h4 class="pm-section-title">💬 买家评价（${p.reviews.length}）</h4>
    ${p.reviews.map(r => `
      <div class="review">
        <p class="review-user">${r.user} ⭐⭐⭐⭐⭐</p>
        <p class="review-text">${r.text}</p>
      </div>`).join('')}

    <div class="pm-buybar">
      <div class="stepper">
        <button data-action="pdec" aria-label="减少数量">－</button>
        <span id="pmQty">1</span>
        <button data-action="pinc" aria-label="增加数量">＋</button>
      </div>
      <div class="pm-total">合计<strong id="pmTotal">${fmt(p.price)}</strong></div>
      <button class="btn btn-ghost" data-action="pm-add">加入购物车</button>
      <button class="btn btn-primary" data-action="pm-buy">立即购买</button>
    </div>`;

  openOverlay(els.productModal);
}

function bumpModalQty(d) {
  const p = getProduct(state.modalId);
  if (!p) return;
  const q = Math.min(p.stock, Math.max(1, state.modalQty + d));
  if (q === state.modalQty) {
    if (d > 0) toast(`最多可购买 ${p.stock} ${p.unit}`);
    return;
  }
  state.modalQty = q;
  $('#pmQty').textContent = q;
  $('#pmTotal').textContent = fmt(p.price * q);
}

/* ==================== 购物车 ==================== */
function addToCart(id, qty, opts = {}) {
  const p = getProduct(id);
  if (!p) return;
  const item = state.cart.find(i => i.id === id);
  const cur = item ? item.qty : 0;
  const next = Math.min(p.stock, cur + qty);
  if (next === cur) {
    toast(`「${p.name}」库存仅剩 ${p.stock} ${p.unit}，快下单吧`);
    return;
  }
  if (item) item.qty = next;
  else state.cart.push({ id, qty: next });
  saveCart();
  updateBadge();
  renderCartUI();
  if (!opts.silent) toast(`已将「${p.name}」加入购物车 🛒`);
  els.cartBtn.classList.remove('bump');
  void els.cartBtn.offsetWidth; // 重置动画
  els.cartBtn.classList.add('bump');
}

function changeQty(id, d) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  const p = getProduct(id);
  if (d > 0 && item.qty >= p.stock) {
    toast(`最多可购买 ${p.stock} ${p.unit}`);
    return;
  }
  item.qty += d;
  if (item.qty <= 0) {
    removeFromCart(id, true);
    return;
  }
  saveCart();
  updateBadge();
  renderCartUI();
}

function removeFromCart(id, silent = false) {
  const p = getProduct(id);
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  updateBadge();
  renderCartUI();
  if (!silent && p) toast(`已将「${p.name}」移出购物车`);
}

function updateBadge() {
  const n = cartCount();
  els.cartBadge.textContent = n;
  els.cartBadge.classList.toggle('show', n > 0);
}

function renderCartUI() {
  // 免运费进度
  const sub = cartSubtotal();
  if (state.cart.length === 0) {
    els.freeShipBar.innerHTML = '🛒 满揽水果即可享受 <b>满 ¥39 免运费</b>';
  } else if (sub >= FREE_SHIP) {
    els.freeShipBar.innerHTML = `🎉 已满 ${fmt(FREE_SHIP)}，本单免运费！<div class="ship-track"><div class="ship-fill" style="width:100%"></div></div>`;
  } else {
    const pct = Math.min(100, (sub / FREE_SHIP) * 100).toFixed(1);
    els.freeShipBar.innerHTML = `再买 <b>${fmt(FREE_SHIP - sub)}</b> 即可免运费<div class="ship-track"><div class="ship-fill" style="width:${pct}%"></div></div>`;
  }

  // 商品列表
  if (state.cart.length === 0) {
    els.cartItems.innerHTML = `
      <div class="cart-empty">
        🛒
        <p>购物车还是空的</p>
        <button class="btn btn-primary" data-action="close-drawer">去逛逛</button>
      </div>`;
  } else {
    els.cartItems.innerHTML = state.cart.map(i => {
      const p = getProduct(i.id);
      if (!p) return '';
      return `
      <div class="cart-row">
        <div class="cart-face" style="--h:${p.hue}">${p.emoji}</div>
        <div class="cart-info">
          <p class="cart-name">${p.name}</p>
          <p class="cart-price">${fmt(p.price)} / ${p.unit}</p>
          <div class="stepper sm">
            <button data-action="dec" data-id="${p.id}" aria-label="减少">－</button>
            <span>${i.qty}</span>
            <button data-action="inc" data-id="${p.id}" aria-label="增加">＋</button>
          </div>
        </div>
        <div class="cart-right">
          <strong>${fmt(p.price * i.qty)}</strong>
          <button class="remove-btn" data-action="remove" data-id="${p.id}">删除</button>
        </div>
      </div>`;
    }).join('');
  }

  els.cartSubtotal.textContent = fmt(sub);
}

/* ==================== 结算与下单 ==================== */
function renderCheckout() {
  els.checkoutItems.innerHTML = state.cart.map(i => {
    const p = getProduct(i.id);
    if (!p) return '';
    return `
    <div class="ci-row">
      <span class="ci-emoji" style="--h:${p.hue}">${p.emoji}</span>
      <span class="ci-name">${p.name} × ${i.qty}${p.unit}</span>
      <span class="ci-price">${fmt(p.price * i.qty)}</span>
    </div>`;
  }).join('');

  const sub = cartSubtotal();
  const ship = sub >= FREE_SHIP ? 0 : SHIP_FEE;
  els.checkoutTotals.innerHTML = `
    <div class="t-row"><span>商品金额（共 ${cartCount()} 件）</span><span>${fmt(sub)}</span></div>
    <div class="t-row"><span>运费</span>${ship === 0 ? '<span class="ship-free">已免运费 🎉</span>' : `<span>${fmt(ship)}</span>`}</div>
    <div class="t-row total"><span>应付合计</span><strong>${fmt(sub + ship)}</strong></div>`;
}

function openCheckout() {
  if (state.cart.length === 0) {
    toast('购物车还是空的，先挑点水果吧 🍇');
    return;
  }
  closeDrawer(); // 避免抽屉遮挡结算弹窗
  renderCheckout();
  openOverlay(els.checkoutModal);
}

function genOrderNo() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `SG${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${Math.floor(1000 + Math.random() * 9000)}`;
}

function setFieldErr(input, msg) {
  input.closest('label').classList.add('err');
  toast(msg);
  input.focus();
}

els.checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = els.checkoutForm.elements;
  els.checkoutForm.querySelectorAll('label.err').forEach(l => l.classList.remove('err'));

  const receiver = f.receiver.value.trim();
  const phone = f.phone.value.trim();
  const address = f.address.value.trim();

  if (!receiver) return setFieldErr(f.receiver, '请填写收货人姓名');
  if (!/^1\d{10}$/.test(phone)) return setFieldErr(f.phone, '请填写正确的 11 位手机号');
  if (address.length < 5) return setFieldErr(f.address, '请填写完整的收货地址（至少 5 个字）');

  const sub = cartSubtotal();
  const ship = sub >= FREE_SHIP ? 0 : SHIP_FEE;
  const order = {
    no: genOrderNo(),
    time: new Date().toLocaleString('zh-CN', { hour12: false }),
    items: state.cart.map(i => {
      const p = getProduct(i.id);
      return { id: p.id, emoji: p.emoji, name: p.name, price: p.price, unit: p.unit, qty: i.qty };
    }),
    count: cartCount(),
    subtotal: sub,
    ship,
    total: sub + ship,
    receiver,
    phone,
    address,
    slot: f.slot.value,
    pay: f.pay.value,
    note: f.note.value.trim(),
    status: '配送中'
  };

  state.orders.unshift(order);
  saveOrders();

  state.cart = [];
  saveCart();
  updateBadge();
  renderCartUI();

  closeOverlay(els.checkoutModal);

  els.successInfo.innerHTML = `
    <div class="t-row"><span>订单编号</span><strong>${order.no}</strong></div>
    <div class="t-row"><span>支付金额</span><strong style="color:var(--price);font-size:17px">${fmt(order.total)}</strong></div>
    <div class="t-row"><span>商品清单</span><span style="font-size:17px;letter-spacing:1px">${order.items.map(i => i.emoji + '×' + i.qty).join('  ')}</span></div>
    <div class="t-row"><span>送达时间</span><span>${order.slot}</span></div>
    <div class="t-row"><span>收货信息</span><span>${order.receiver} ${order.phone}</span></div>
    <div class="t-row"><span>收货地址</span><span>${order.address}</span></div>`;

  openOverlay(els.successModal);
  toast('下单成功，感谢惠顾！🍓');
});

/* ==================== 我的订单 ==================== */
function renderOrders() {
  if (state.orders.length === 0) {
    els.ordersList.innerHTML = `<div class="cart-empty">🧾<p>还没有订单，去下一单吧</p></div>`;
    return;
  }
  els.ordersList.innerHTML = state.orders.map(o => `
    <div class="order-card">
      <div class="order-head"><strong>${o.no}</strong><span class="status-chip">🚚 ${o.status}</span></div>
      <p class="order-date">${o.time} · ${o.pay}</p>
      <div class="order-items">${o.items.map(i => `<span class="oi" title="${i.name} × ${i.qty}">${i.emoji}×${i.qty}</span>`).join('')}</div>
      <div class="t-row"><span>共 ${o.count} 件 · 应付</span><strong style="color:var(--price)">${fmt(o.total)}</strong></div>
      <p class="order-addr">📍 ${o.receiver} · ${o.phone} · ${o.address}</p>
      <p class="order-addr">🕐 ${o.slot}${o.note ? ` · 备注：${o.note}` : ''}</p>
    </div>`).join('');
}

/* ==================== 事件绑定 ==================== */
// 全局点击委托
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const id = el.dataset.id ? Number(el.dataset.id) : null;

  switch (el.dataset.action) {
    case 'open-product': openProduct(id); break;
    case 'add': addToCart(id, 1); break;
    case 'close-drawer': closeDrawer(); break;
    case 'open-checkout': openCheckout(); break;
    case 'close-checkout': closeOverlay(els.checkoutModal); break;
    case 'close-product': closeOverlay(els.productModal); break;
    case 'close-success': closeOverlay(els.successModal); break;
    case 'close-orders': closeOverlay(els.ordersModal); break;
    case 'view-orders':
      closeOverlay(els.successModal);
      renderOrders();
      openOverlay(els.ordersModal);
      break;
    case 'inc': changeQty(id, 1); break;
    case 'dec': changeQty(id, -1); break;
    case 'remove': removeFromCart(id); break;
    case 'pinc': bumpModalQty(1); break;
    case 'pdec': bumpModalQty(-1); break;
    case 'pm-add': addToCart(state.modalId, state.modalQty); break;
    case 'pm-buy':
      addToCart(state.modalId, state.modalQty, { silent: true });
      closeOverlay(els.productModal);
      openCheckout();
      break;
  }
});

// 分类切换
els.chips.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  state.category = chip.dataset.cat;
  els.chips.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === chip));
  renderGrid();
});

els.sortSelect.addEventListener('change', () => { state.sort = els.sortSelect.value; renderGrid(); });
els.searchInput.addEventListener('input', () => { state.search = els.searchInput.value; renderGrid(); });

els.cartBtn.addEventListener('click', openDrawer);
els.ordersBtn.addEventListener('click', () => { renderOrders(); openOverlay(els.ordersModal); });
els.mask.addEventListener('click', closeDrawer);

// 点击弹窗空白处关闭
[els.productModal, els.checkoutModal, els.successModal, els.ordersModal].forEach(m => {
  m.addEventListener('click', (e) => { if (e.target === m) closeOverlay(m); });
});

// Esc 关闭所有弹层
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(m => closeOverlay(m));
    closeDrawer();
  }
});

/* ==================== 初始化 ==================== */
renderChips();
renderGrid();
updateBadge();
renderCartUI();
