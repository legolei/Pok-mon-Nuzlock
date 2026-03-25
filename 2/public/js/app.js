// =============================================================
//  ZENTRALE DATENQUELLE – alle Reads/Writes gehen über db
// =============================================================

// ── Konstanten ────────────────────────────────────────────────
const POKEMON_LIST = ['','Bisasam','Bisaknosp','Bisaflor','Glumanda','Glutexo','Glurak','Schiggy','Schillok','Turtok','Raupy','Safcon','Smettbo','Hornliu','Kokuna','Bibor','Taubsi','Tauboga','Tauboss','Rattfratz','Rattikarl','Habitak','Ibitak','Rettan','Arbok','Pikachu','Raichu','Sandan','Sandamer','Nidoran\u2640','Nidorina','Nidoqueen','Nidoran\u2642','Nidorino','Nidoking','Piepi','Pixi','Vulpix','Vulnona','Pummeluff','Knuddeluff','Zubat','Golbat','Myrapla','Duflor','Giflor','Paras','Parasek','Bluzuk','Omot','Digda','Digdri','Mauzi','Snobilikat','Enton','Entoron','Menki','Rasaff','Fukano','Arkani','Quapsel','Quaputzi','Quappo','Abra','Kadabra','Simsala','Machollo','Maschock','Machomei','Knofensa','Ultrigaria','Sarzenia','Tentacha','Tentoxa','Kleinstein','Georok','Geowaz','Ponita','Gallopa','Flegmon','Lahmus','Magnetilo','Magneton','Porenta','Dodu','Dodri','Jurob','Jugong','Sleima','Sleimok','Muschas','Austos','Nebulak','Alpollo','Gengar','Onix','Traumato','Hypno','Krabby','Kingler','Voltobal','Lektrobal','Owei','Kokowei','Tragosso','Knogga','Kicklee','Nockchan','Schlurp','Smogon','Smogmog','Rihorn','Rizeros','Chaneira','Tangela','Kangama','Seeper','Seemon','Goldini','Golking','Sterndu','Starmie','Pantimos','Sichlor','Rossana','Elektek','Magmar','Pinsir','Tauros','Karpador','Garados','Lapras','Ditto','Evoli','Aquana','Blitza','Flamara','Porygon','Amonitas','Amoroso','Kabuto','Kabutops','Aerodactyl','Relaxo','Arktos','Zapdos','Lavados','Dratini','Dragonir','Dragoran','Mewtu','Mew','Endivie','Lorblatt','Meganie','Feurigel','Igelavar','Tornupto','Karnimani','Tyracroc','Impergator','Wiesor','Wiesenior','Hoothoot','Noctuh','Ledyba','Ledian','Webarak','Ariados','Iksbat','Lampi','Lanturn','Pichu','Pii','Fluffeluff','Togepi','Togetic','Natu','Xatu','Voltilamm','Waaty','Ampharos','Blubella','Marill','Azumarill','Mogelbaum','Quaxo','Hoppspross','Hubelupf','Papungha','Griffel','Sonnkern','Sonnflora','Yanma','Felino','Morlord','Psiana','Nachtara','Kramurx','Laschoking','Traunfugil','Icognito','Woingenau','Girafarig','Tannza','Forstellka','Dummisel','Skorgla','Stahlos','Snubbull','Granbull','Baldorfish','Scherox','Pottrott','Skaraborn','Sniebel','Teddiursa','Ursaring','Schneckmag','Magcargo','Quiekel','Keifel','Corasonn','Remoraid','Octillery','Botogel','Mantax','Panzaeron','Hunduster','Hundemon','Seedraking','Phanpy','Donphan','Porygon2','Damhirplex','Farbeagle','Rabauz','Kapoera','Kussilla','Elekid','Magby','Miltank','Heiteira','Raikou','Entei','Suicune','Larvitar','Pupitar','Despotar','Lugia','Ho-Oh','Celebi','Geckarbor','Reptain','Gewaldro','Flemmli','Jungglut','Lohgock','Hydropi','Moorabbel','Sumpex','Fiffyen','Magnayen','Zigzachs','Geradaks','Waumpel','Schaloko','Papinella','Panekon','Pudox','Loturzel','Lombrero','Kappalores','Samurzel','Blanas','Tengulist','Schwalbini','Schwalboss','Wingull','Pelipper','Trasla','Kirlia','Guardevoir','Gehweiher','Maskeregen','Knilz','Kapilz','Bummelz','Muntier','Letarking','Nincada','Ninjask','Ninjatom','Flurmel','Krakeelo','Krawumms','Makuhita','Hariyama','Azurill','Nasgnet','Eneco','Enekoro','Zobiris','Flunkifer','Stollunior','Stollrak','Stolloss','Meditie','Meditalis','Frizelbliz','Voltenso','Plusle','Minun','Volbeat','Illumise','Roselia','Schluppuck','Schlukwech','Kanivanha','Tohaido','Wailmer','Wailord','Camaub','Camerupt','Qurtel','Spoink','Groink','Pandir','Knacklion','Vibrava','Libelldra','Tuska','Noktuska','Wablu','Altaria','Sengo','Vipitis','Lunastein','Sonnfel','Schmerbe','Welsar','Krebscorps','Krebutack','Puppance','Lepumentas','Liliep','Wielie','Anorith','Armaldo','Barschwa','Milotic','Formeo','Kecleon','Shuppet','Banette','Zwirrlicht','Zwirrklop','Tropius','Palimpalim','Absol','Isso','Schneppke','Firnontor','Seemops','Seejong','Walraisa','Perlu','Aalabyss','Saganabyss','Relicanth','Liebiskus','Kindwurm','Draschel','Brutalanda','Tanhel','Metang','Metagross','Regirock','Regice','Registeel','Latias','Latios','Kyogre','Groudon','Rayquaza','Jirachi','Deoxys','Chelast','Chelcarain','Chelterrar','Panflam','Panpyro','Panferno','Plinfa','Pliprin','Impoleon','Staralili','Staravia','Staraptor','Bidiza','Bidifas','Zirpurze','Zirpeise','Sheinux','Luxio','Luxtra','Knospi','Roserade','Koknodon','Rameidon','Schilterus','Bollterus','Burmy','Burmadame','Moterpel','Wadribie','Honweisel','Pachirisu','Bamelin','Bojelin','Kikugi','Kinoso','Schalellos','Gastrodon','Ambidiffel','Driftlon','Drifzepeli','Haspiror','Schlapor','Traunmagil','Kramshef','Charmian','Shnurgarst','Klingplim','Skunkapuh','Skuntank','Bronzel','Bronzong','Mobai','Pantimimi','Wonneira','Plaudagei','Kryppuk','Kaumalat','Knarksel','Knakrack','Mampfaxo','Riolu','Lucario','Hippopotas','Hippoterus','Pionskora','Piondragi','Glibunkel','Toxiquak','Venuflibis','Finneon','Lumineon','Mantirps','Shnebedeck','Rexblisar','Snibunna','Magnezone','Schlurplek','Rihornior','Tangoloss','Elevoltek','Magbrant','Togekiss','Yanmega','Folipurba','Glaziola','Skorgro','Mamutel','Porygon-Z','Galagladi','Voluminas','Zwirrfinst','Frosdedje','Rotom','Selfe','Vesprit','Tobutz','Dialga','Palkia','Heatran','Regigigas','Giratina','Cresselia','Phione','Manaphy','Darkrai','Shaymin','Arceus','Victini','Serpifeu','Efoserp','Serpiroyal','Floink','Ferkokel','Flambirex','Ottaro','Zwottronin','Admurai','Nagelotz','Kukmarda','Yorkleff','Terribark','Bissbark','Felilou','Kleoparda','Vegimak','Vegichita','Grillmak','Grillchita','Sodamak','Sodachita','Somniam','Somnivora','Dusselgurr','Navitaub','Fasasnob','Elezeba','Zebritz','Kiesling','Sedimantur','Brockoloss','Fleknoil','Fletiamo','Rotomurf','Stalobor','Ohrdoch','Praktibalk','Strepoli','Meistagrif','Schallquap','Mebrana','Branawarz','Jiutesto','Karadonis','Strawickl','Folikon','Matrifol','Toxiped','Rollum','Cerapendra','Waumboll','Elfun','Lilminip','Dressella','Barschuft','Ganovil','Rokkaiman','Rabigator','Flampion','Flampivian','Maracamba','Lithomith','Castellith','Zurrokex','Irokex','Symvolara','Makabaja','Echnatoll','Galapaflos','Karippas','Flapteryx','Aeropteryx','Unrat\u00fctox','Deponitox','Zorua','Zoroark','Picochilla','Chillabell','Mollimorba','Hypnomorba','Morbitesse','Monozyto','Mitodos','Zytomega','Piccolente','Swaroness','Gelatini','Gelatroppo','Gelatwino','Sesokitz','Kronjuwild','Emolga','Laukaps','Cavalanzas','Tarnpignon','Hutsassa','Quabbel','Apoquallyp','Mamolida','Wattzapf','Voltula','Kastadur','Tentantel','Klikk','Kliklak','Klikdiklak','Zapplardin','Zapplalek','Zapplarang','Pygraulon','Megalon','Lichtel','Laternecto','Skelabra','Milza','Sharfax','Maxax','Petznief','Siberio','Frigometri','Schnuthelm','Hydragil','Flunschlik','Lin-Fu','Wie-Shu','Shardrago','Golbit','Golgantes','Gladiantri','Caesurio','Bisofank','Geronimatz','Washakwil','Skallyk','Grypheldis','Furnifra\u00df','Fermicula','Kapuno','Duodino','Trikephalo','Ignivor','Ramoth','Kobalium','Terrakium','Viridium','Boreos','Voltolos','Reshiram','Zekrom','Demeteros','Kyurem','Keldeo','Meloetta','Genesect'];

let ALL_ROUTES = [];

const statuses = ["", "Lebendig", "Tot", "Blockiert"];

const levelCaps = ["11/13","15/17","19/21","23/25","27/29","31/33","35/37","39/41","43/45"];

const GAME_CONFIG = {
  "Schwarz":              { badges: "/assets/badges/unova2/badges.png",  levelCaps: ["12 / 14","18 / 20","21 / 23","25 / 27","29 / 31","33 / 35","37 / 39","46 / 50","46 / 50"] },
  "Schwarz 2":            { badges: "/assets/badges/unova2/badges.png",  levelCaps: ["1/13","13/18","18/24","24/27","27/31","31/35","35/39","39/43"] },
  "Soul Silver":          { badges: "/assets/badges/johto/badges.png",   levelCaps: ["1/13","13/17","17/19","19/25","25/31","31/35","35/41","41/45"] },
  "Platin":               { badges: "/assets/badges/sinnoh/badges.png",  levelCaps: ["1/14","14/22","22/26","26/30","30/37","37/39","39/44","44/49"] },
  "Feuer Rot":            { badges: "/assets/badges/kanto/badges.png",   levelCaps: ["1/14","14/21","21/24","24/29","29/43","43/43","43/47","47/50"] },
  "Pokemon X":            { badges: "/assets/badges/kalos/badges.png",   levelCaps: ["1/12","12/25","25/32","32/34","34/37","37/42","42/45","45/48"] },
  "Pokemon Alpha Saphir": { badges: "/assets/badges/hoenn/badges.png",   levelCaps: ["1/15","15/18","18/24","24/28","28/31","31/33","33/42","42/46"] }
};

function getGameCfg() {
  return (db && db.game && GAME_CONFIG[db.game]) || null;
}

function getLevelCapsForGame() {
  const cfg = getGameCfg();
  return cfg ? cfg.levelCaps : levelCaps;
}

function getBadgeImgForGame() {
  const cfg = getGameCfg();
  return cfg ? cfg.badges : "/assets/badges.png";
}

// ── Sprite helper ─────────────────────────────────────────────
function getSpriteUrl(name) {
  if (!name) return null;
  const idx = POKEMON_LIST.indexOf(name);
  return idx > 0
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idx}.gif`
    : null;
}

// ── Berechne lebende Pokémon für einen Spieler ─────────────────
function getAliveForPlayer(pIdx) {
  const p = db && db.players[pIdx];
  if (!p || !p.catches) return [];
  const seen = new Set();
  const alive = [];
  for (const c of Object.values(p.catches)) {
    if (c && c.name && c.status === "Lebendig" && !seen.has(c.name)) {
      seen.add(c.name);
      alive.push(c.name);
    }
  }
  return alive;
}

// ── DB-Initialisierung & Migration ───────────────────────────
function initPlayer(p) {
  if (!p.catches) p.catches = {};
  if (!Array.isArray(p.team)) p.team = [null, null, null, null, null, null];
  p.team = p.team.map(t =>
    (t && typeof t === "string" && t.startsWith("http")) ? null : (t || null)
  );
  if (!Array.isArray(p.badges)) p.badges = Array(8).fill(false);
  if (typeof p.deaths !== "number") p.deaths = 0;
  if (typeof p.mainStream  !== "string") p.mainStream  = "";
  if (typeof p.touchStream !== "string") p.touchStream = "";
  if (!p.mainAdj  || (p.mainAdj.w == null && !p.mainAdj.crop))  p.mainAdj  = { left: 0, top: 0, w: 100, h: 100 };
  if (!p.touchAdj || (p.touchAdj.w == null && !p.touchAdj.crop)) p.touchAdj = { left: 0, top: 0, w: 100, h: 100 };
}

function initDB() {
  if (!db) return;
  if (typeof db.game !== "string") db.game = "";
  db.players.forEach(initPlayer);
  if (!Array.isArray(db.graveyard)) db.graveyard = [];
  db.graveyard = db.graveyard
    .map(g => {
      if (!g) return null;
      if (!g.name && g.sprite) return { name: "?", player: g.player || 0, color: g.color || "gray" };
      return g;
    })
    .filter(Boolean);
}

// ── Socket & globaler State ───────────────────────────────────
const socket = io({ transports: ["websocket"] });
let db   = null;
let user = { role: "viewer", slot: null };

let dragStart            = null;
let skipNextTrackerSync  = false;
let syncTimer            = null;
let overlayBuilt         = false;
let trackerBuilt         = false;

function debouncedSync() {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncDB, 600);
}

function syncDB() {
  skipNextTrackerSync = true;
  socket.emit("update", db);
}

function sync() { syncDB(); }

// ── Login ─────────────────────────────────────────────────────
function login() {
  if (!db) { alert("Verbindung wird aufgebaut, bitte kurz warten..."); return; }
  const name = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (name === "Legolei" && pass === "Alex-Osterhase-1293") {
    user.role = "admin";
    user.slot = 0;
    db.players[0].name = "Legolei";
  } else if (pass === "Nuzlock") {
    user.role = "player";
    user.name = name;
    const fixedSlots = { "Jasmin":1,"Kevin":2,"Niklas":3,"Richard":4,"Jannik":5,"Antonino":6,"Fabian":7 };
    user.slot = fixedSlots[name] ?? null;
    if (user.slot !== null) {
      db.players[user.slot].name = user.name;
      syncDB();
    }
  } else {
    alert("Falsches Passwort");
    return;
  }

  document.getElementById("overlay").style.display = "grid";
  document.getElementById("login").style.display   = "none";
  const gs = document.getElementById("graveyard-section");
  if (gs) gs.style.display = "block";
  const tb = document.getElementById("tracker-btn");
  if (tb) tb.style.display = "inline-block";
}

// ── State vom Server ──────────────────────────────────────────
socket.on("state", (state) => {
  const isRemote = !skipNextTrackerSync;
  skipNextTrackerSync = false;

  db = state;
  initDB();

  if (user.role === "player" && user.slot === null) {
    for (let i = 1; i < 8; i++) {
      if (!db.players[i].taken) {
        db.players[i].taken = true;
        db.players[i].name  = user.name;
        user.slot = i;
        break;
      }
    }
  }
  if (user.role === "admin") db.players[0].name = "Legolei";
  if (user.role === "player" && user.slot !== null && user.name)
    db.players[user.slot].name = user.name;

  if (!overlayBuilt) {
    overlayBuilt = true;
    buildOverlay();
  } else {
    updateOverlay();
  }
  renderGraveyard();

  // Gespeicherte Edition wiederherstellen (z.B. nach Serverstart)
  if (db.game && !ALL_ROUTES.length) {
    const sel = document.getElementById("edition-select");
    if (sel && sel.value !== db.game) sel.value = db.game;
    if (typeof ROUTES_BY_GAME !== "undefined" && ROUTES_BY_GAME[db.game]) {
      ALL_ROUTES = ROUTES_BY_GAME[db.game].slice();
    }
  }

  if (!trackerBuilt) {
    trackerBuilt = true;
    if (typeof buildTrackerTable === "function") buildTrackerTable();
  } else if (isRemote && typeof syncTrackerFromDB === "function") {
    syncTrackerFromDB();
  }
});

// ── Sidebar: lebende Pokémon die NICHT im Team sind ──────────
function sidebarIconsHTML(p) {
  if (!p || !p.catches) return '';
  const teamSet = new Set((p.team || []).filter(Boolean));
  const seen = new Set();
  let html = '';
  for (const c of Object.values(p.catches)) {
    if (!c || !c.name || c.status !== 'Lebendig') continue;
    if (teamSet.has(c.name) || seen.has(c.name)) continue;
    seen.add(c.name);
    const idx = POKEMON_LIST.indexOf(c.name);
    if (idx <= 0) continue;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idx}.gif`;
    html += `<img src="${url}" title="${c.name}">`;
  }
  return html;
}

// ── Overlay: Erstaufbau (Iframes werden einmal gebaut) ────────
function playerHTML(p, i) {
  const badgeCount = p.badges.filter(b => b).length;
  const caps       = getLevelCapsForGame();
  const levelcap   = caps[badgeCount] || "";
  const badgeImg   = getBadgeImgForGame();
  return `
<h3 id="pname-${i}">${p.name}</h3>
<div class="player-stream-row">
  <div class="pokemon-sidebar" id="psidebar-${i}">${sidebarIconsHTML(p)}</div>
  <div class="stream-col">
    <div class="mainScreen" id="pmain-${i}" onclick="openCropEditor(${i})">
      ${p.mainStream ? `<div class="viewport" id="mvp-${i}"><div class="content" id="mct-${i}"><iframe src="${p.mainStream}" id="mif-${i}" frameborder="0" allow="autoplay; fullscreen" muted></iframe></div></div><div class="streamCapture"></div>` : "Click to add stream"}
    </div>
    <div class="touchScreen" id="ptouch-${i}">
      ${p.mainStream ? `<div class="viewport" id="tvp-${i}"><div class="content" id="tct-${i}"><iframe src="${p.mainStream}" id="tif-${i}" frameborder="0" allow="autoplay; fullscreen" muted></iframe></div></div><div class="streamCapture"></div>` : ""}
    </div>
  </div>
</div>
<div class="badges" id="pbadges-${i}">
  ${p.badges.map((b,j) => `<div class="badge ${b?"active":""}" style="background-image:url('${badgeImg}')" onclick="toggleBadge(${i},${j})"></div>`).join("")}
</div>
<div class="team" id="pteam-${i}">
  ${teamHTML(p, i)}
</div>
<div id="plc-${i}" style="margin-top:6px;font-size:12px;text-align:center;">Level Cap: ${levelcap}</div>
<div id="pdeaths-${i}">&#x26B0; ${p.deaths}</div>`;
}

function teamHTML(p, i) {
  return p.team.map((name, s) => {
    const sprite = getSpriteUrl(name);
    return `<div class="slot" id="p${i+1}_slot${s+1}"
      draggable="true"
      ondragstart="dragStart={p:${i},s:${s}}"
      ondragover="event.preventDefault()"
      ondrop="handleDrop(event,${i},${s})"
      oncontextmenu="return removePokemon(event,${i},${s})">
      ${sprite ? `<img src="${sprite}" class="${isDead(name, i) ? "dead" : ""}">` : ""}
    </div>`;
  }).join("");
}

function buildOverlay() {
  const overlay = document.getElementById("overlay");
  if (!overlay || !db) return;
  overlay.innerHTML = "";
  db.players.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "player";
    div.id        = `player-card-${i}`;
    div.style.border = "4px solid " + p.color;
    div.innerHTML = playerHTML(p, i);
    overlay.appendChild(div);
  });
  applyAllAdj();
}

// ── Overlay: Gezieltes Update – keine Iframe-Neuladungen ──────
function updateOverlay() {
  if (!db) return;

  db.players.forEach((p, i) => {
    const card = document.getElementById(`player-card-${i}`);
    if (!card) { buildOverlay(); return; }

    const nameEl = document.getElementById(`pname-${i}`);
    if (nameEl && nameEl.textContent !== p.name) nameEl.textContent = p.name;

    const lcEl = document.getElementById(`plc-${i}`);
    if (lcEl) {
      const caps = getLevelCapsForGame();
      const lc = "Level Cap: " + (caps[p.badges.filter(b => b).length] || "");
      if (lcEl.textContent !== lc) lcEl.textContent = lc;
    }

    const badgesEl = document.getElementById(`pbadges-${i}`);
    if (badgesEl) {
      const badgeImg = getBadgeImgForGame();
      badgesEl.innerHTML = p.badges.map((b,j) =>
        `<div class="badge ${b?"active":""}" style="background-image:url('${badgeImg}')" onclick="toggleBadge(${i},${j})"></div>`
      ).join("");
    }

    const teamEl = document.getElementById(`pteam-${i}`);
    if (teamEl) teamEl.innerHTML = teamHTML(p, i);

    const sidebarEl = document.getElementById(`psidebar-${i}`);
    if (sidebarEl) sidebarEl.innerHTML = sidebarIconsHTML(p);

    const deathsEl = document.getElementById(`pdeaths-${i}`);
    if (deathsEl) deathsEl.textContent = "\u26B0 " + p.deaths;

    const mainEl = document.getElementById(`pmain-${i}`);
    if (mainEl) {
      const iframe = mainEl.querySelector("iframe");
      const cur    = iframe ? iframe.src : null;
      if (p.mainStream && cur !== p.mainStream)
        mainEl.innerHTML = `<div class="viewport" id="mvp-${i}"><div class="content" id="mct-${i}"><iframe src="${p.mainStream}" id="mif-${i}" frameborder="0" allow="autoplay; fullscreen" muted></iframe></div></div><div class="streamCapture"></div>`;
      else if (!p.mainStream && iframe)
        mainEl.innerHTML = "Click to add stream";
    }

    const touchEl = document.getElementById(`ptouch-${i}`);
    if (touchEl) {
      const iframe = touchEl.querySelector("iframe");
      const cur    = iframe ? iframe.src : null;
      if (p.mainStream && cur !== p.mainStream)
        touchEl.innerHTML = `<div class="viewport" id="tvp-${i}"><div class="content" id="tct-${i}"><iframe src="${p.mainStream}" id="tif-${i}" frameborder="0" allow="autoplay; fullscreen" muted></iframe></div></div><div class="streamCapture"></div>`;
      else if (!p.mainStream && iframe)
        touchEl.innerHTML = "";
    }
  });

  applyAllAdj();
}

// ── Aktionen ──────────────────────────────────────────────────
function setStreams(i) {
  if (user.role !== "admin" && user.slot !== Number(i)) return;
  const url = prompt("Stream URL (leer lassen = entfernen):", db.players[i].mainStream || "");
  if (url !== null) {
    db.players[i].mainStream  = url;
    db.players[i].touchStream = url;
  }
  syncDB();
  updateOverlay();
}

function removePokemon(e, p, s) {
  e.preventDefault();
  if (user.role !== "admin" && user.slot !== Number(p)) return false;

  const name = db.players[p].team[s];
  if (!name) return false;

  const catches = db.players[p].catches;
  if (catches) {
    for (const c of Object.values(catches)) {
      if (c && c.name === name && c.status === "Lebendig") { c.status = "Tot"; break; }
    }
  }

  db.players[p].team[s] = null;
  db.players[p].deaths++;
  db.graveyard.push({ name, player: p, color: db.players[p].color });

  syncDB();
  updateOverlay();
  renderGraveyard();
  if (typeof syncTrackerFromDB === "function") syncTrackerFromDB();
  return false;
}

function renderGraveyard() {
  const g = document.getElementById("graveyard");
  if (!g || !db) return;
  g.innerHTML = "";

  const sorted = db.graveyard
    .map((d, i) => ({ ...d, _origIdx: i }))
    .sort((a, b) => (a.player ?? 0) - (b.player ?? 0));

  sorted.forEach((d) => {
    const origIdx = d._origIdx;
    const div    = document.createElement("div");
    div.className = "grave";
    div.style.borderColor = d.color || "gray";
    const sprite = getSpriteUrl(d.name);
    div.innerHTML = sprite
      ? `<img src="${sprite}" width=50 title="${d.name || ""}">`
      : `<div style="width:50px;text-align:center;font-size:10px">${d.name || "?"}</div>`;

    div.oncontextmenu = (e) => {
      e.preventDefault();
      const player = db.players[d.player];
      if (player && player.catches) {
        for (const c of Object.values(player.catches)) {
          if (c && c.name === d.name) { c.status = "Lebendig"; break; }
        }
      }
      if (player) player.deaths = Math.max(0, player.deaths - 1);
      db.graveyard.splice(origIdx, 1);
      syncDB();
      updateOverlay();
      renderGraveyard();
      if (typeof syncTrackerFromDB === "function") syncTrackerFromDB();
    };
    g.appendChild(div);
  });
}

function toggleBadge(p, b) {
  if (user.role !== "admin" && user.slot !== Number(p)) return;
  db.players[p].badges[b] = !db.players[p].badges[b];
  console.log(`[badge] player=${p} badge=${b} active=${db.players[p].badges[b]}`);
  syncDB();
  updateOverlay();
}

function handleDrop(e, p, s) {
  e.preventDefault();
  if (!dragStart) return;

  const temp = db.players[p].team[s];
  db.players[p].team[s]                         = db.players[dragStart.p].team[dragStart.s];
  db.players[dragStart.p].team[dragStart.s]     = temp;

  dragStart = null;
  syncDB();
  updateOverlay();
  if (typeof syncTrackerFromDB === "function") syncTrackerFromDB();
}

function isDead(name, playerIndex) {
  if (!name || !db || !db.graveyard) return false;
  return db.graveyard.some(g => g.name === name && g.player === playerIndex);
}


// ── Core: single-transform pipeline per screen ───────────────────────────────
function applyCrop(pi, type, crop) {
  var existing = _getAdj(pi, type) || {};
  var adj = { crop: crop, offX: existing.offX || 0, offY: existing.offY || 0, userScale: existing.userScale || 1 };
  _setAdj(pi, type, adj);
  if (type === 'main')  applyMainScreenAdj(pi);
  else                   applyTouchScreenAdj(pi);
  fetch('/api/updatePlayer', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ index:pi, player:db.players[pi] }) });
}

// ── Core: single-transform pipeline per screen ───────────────────────────────
// iframe is ALWAYS 1280×720.  .content receives ONE transform only.
// No scale on iframe.  No multiple transforms.
var _VW = 1280, _VH = 720;

function _applyAdjToContent(content, viewport, adj) {
  if (!content || !viewport) return;

  viewport.style.overflow = 'hidden';
  viewport.style.position = 'relative';
  content.style.position       = 'absolute';
  content.style.top             = '0';
  content.style.left            = '0';
  content.style.transformOrigin = 'top left';

  var vpW = viewport.clientWidth  || 300;
  var vpH = viewport.clientHeight || 200;

  var offX      = adj && adj.offX      != null ? adj.offX      : 0;
  var offY      = adj && adj.offY      != null ? adj.offY      : 0;
  var userScale = adj && adj.userScale != null ? adj.userScale : 1;
  userScale = Math.max(0.5, Math.min(2, userScale));

  // No crop → cover-fit the 1280×720 into viewport, apply user offsets/zoom
  if (!adj || !adj.crop || !adj.crop.w) {
    var coverScale = Math.max(vpW / _VW, vpH / _VH);
    var finalScale = coverScale * userScale;
    var tx = offX;
    var ty = offY;
    content.style.transform =
      'translate(' + tx + 'px,' + ty + 'px) scale(' + finalScale + ')';
    return;
  }

  // Crop → compute region in native video pixels
  var crop = adj.crop;
  var cx = crop.x != null ? crop.x : 0;
  var cy = crop.y != null ? crop.y : 0;
  var cw = crop.w != null ? crop.w : 100;
  var ch = crop.h != null ? crop.h : 100;
  if (cw < 1) cw = 1;
  if (ch < 1) ch = 1;

  var cropX = _VW * cx / 100;
  var cropY = _VH * cy / 100;
  var cropW = _VW * cw / 100;
  var cropH = _VH * ch / 100;

  // Scale so crop fills viewport, then apply user zoom on top
  var baseScale  = Math.max(vpW / cropW, vpH / cropH);
  var finalScale = baseScale * userScale;

  var tx = (-cropX * baseScale) + offX;
  var ty = (-cropY * baseScale) + offY;

  // ONE transform on .content only
  content.style.transform =
    'translate(' + tx + 'px,' + ty + 'px) scale(' + finalScale + ')';
}

// Legacy alias kept for crop reset
function applyScreenAdj(iframe, adj) {
  if (!iframe) return;
  var content  = iframe.parentElement;
  var viewport = content ? content.parentElement : null;
  _applyAdjToContent(content, viewport, adj);
}

// ── Adjust mode: drag-to-move + scroll-to-zoom ───────────────────────────────
var _adj = { active: false, pi: -1, type: 'main', startX: 0, startY: 0, startOffX: 0, startOffY: 0 };

function startAdjust(pi, type) {
  // Close context menu FIRST – it sits at z:299999 and blocks the drag layer
  var _cm = document.getElementById('adjContextMenu');
  if (_cm) _cm.style.display = 'none';

  if (_adj.active && _adj.pi === pi && _adj.type === type) {
    stopAdjust(); return;
  }
  stopAdjust();
  _adj.active = true; _adj.pi = pi; _adj.type = type;

  var viewport = document.getElementById((type === 'main' ? 'mvp-' : 'tvp-') + pi);
  if (!viewport) return;

  // Red border: fixed overlay aligned to viewport bounding rect
  var screenBox = viewport.parentElement; // .mainScreen or .touchScreen
  var r = viewport.getBoundingClientRect();
  var border = document.createElement('div');
  border.id = 'adjBorder';
  border.style.cssText =
    'position:fixed;pointer-events:none;z-index:399999;box-sizing:border-box;' +
    'border:3px solid red;' +
    'top:'+(r.top-3)+'px;left:'+(r.left-3)+'px;' +
    'width:'+(r.width+6)+'px;height:'+(r.height+6)+'px;';
  document.body.appendChild(border);

  // Drag layer: fixed on body — completely outside any stacking context
  var drag = document.createElement('div');
  drag.id = 'adjDragLayer';
  drag.style.cssText =
    'position:fixed;z-index:400000;cursor:grab;pointer-events:auto;background:transparent;' +
    'top:'+r.top+'px;left:'+r.left+'px;' +
    'width:'+r.width+'px;height:'+r.height+'px;';
  document.body.appendChild(drag);

  // iframe inside viewport: block all events (belt-and-suspenders)
  var iframe = viewport.querySelector('iframe');
  if (iframe) iframe.style.pointerEvents = 'none';

  // streamCapture: disable just in case
  var capture = screenBox.querySelector('.streamCapture');
  if (capture) capture.style.pointerEvents = 'none';

  // ── Drag: translate ──────────────────────────────────────────────────────
  drag.addEventListener('mousedown', function onDown(e) {
    if (e.button !== 0) return;
    _adj.dragging  = true;
    _adj.startX    = e.clientX;
    _adj.startY    = e.clientY;
    var a          = _getAdj(pi, type);
    _adj.startOffX = a.offX || 0;
    _adj.startOffY = a.offY || 0;
    drag.style.cursor = 'grabbing';
    e.preventDefault();
    e.stopPropagation();
  });

  function onMove(e) {
    if (!_adj.dragging || !_adj.active) return;
    var a  = _getAdj(pi, type);
    a.offX = _adj.startOffX + (e.clientX - _adj.startX);
    a.offY = _adj.startOffY + (e.clientY - _adj.startY);
    _setAdj(pi, type, a);
    if (type === 'main') applyMainScreenAdj(pi); else applyTouchScreenAdj(pi);
  }

  function onUp() {
    _adj.dragging     = false;
    drag.style.cursor = 'grab';
  }

  // ── Zoom: scale ───────────────────────────────────────────────────────────
  drag.addEventListener('wheel', function onWheel(e) {
    e.preventDefault();
    e.stopPropagation();
    var a        = _getAdj(pi, type);
    var delta    = e.deltaY < 0 ? 0.05 : -0.05;
    a.userScale  = Math.max(0.2, Math.min(8, (a.userScale || 1) + delta));
    _setAdj(pi, type, a);
    if (type === 'main') applyMainScreenAdj(pi); else applyTouchScreenAdj(pi);
  }, { passive: false });

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup',   onUp);

  // Store cleanup refs on the drag element
  drag._onMove = onMove;
  drag._onUp   = onUp;
}

function stopAdjust() {
  if (!_adj.active) return;
  _adj.active   = false;
  _adj.dragging = false;

  var border = document.getElementById('adjBorder');
  if (border) border.remove();

  var drag = document.getElementById('adjDragLayer');
  if (drag) {
    document.removeEventListener('mousemove', drag._onMove);
    document.removeEventListener('mouseup',   drag._onUp);
    drag.remove();
  }

  var vp = document.getElementById((_adj.type === 'main' ? 'mvp-' : 'tvp-') + _adj.pi);
  if (vp) {
    // Restore iframe pointer-events
    var iframe = vp.querySelector('iframe');
    if (iframe) iframe.style.pointerEvents = '';
    // Restore streamCapture
    var capture = vp.parentElement ? vp.parentElement.querySelector('.streamCapture') : null;
    if (capture) capture.style.pointerEvents = '';
  }
}

document.addEventListener('keydown', function(e) { if (e.key === 'Escape') stopAdjust(); });

// Apply adj independently per screen type
function applyMainScreenAdj(pi) {
  if (!db || !db.players[pi]) return;
  _applyAdjToContent(
    document.getElementById('mct-' + pi),
    document.getElementById('mvp-' + pi),
    db.players[pi].mainAdj
  );
}

function applyTouchScreenAdj(pi) {
  if (!db || !db.players[pi]) return;
  _applyAdjToContent(
    document.getElementById('tct-' + pi),
    document.getElementById('tvp-' + pi),
    db.players[pi].touchAdj
  );
}

function applyAllAdj() {
  if (!db) return;
  db.players.forEach(function(p, i) {
    applyMainScreenAdj(i);
    applyTouchScreenAdj(i);
    initScreenDrag(i, 'main');
    initScreenDrag(i, 'touch');
  });
}

// ── Always-on drag + zoom via .streamCapture ──────────────────────────────────
function initScreenDrag(pi, type) {
  var screenId = type === 'main' ? 'pmain-' + pi : 'ptouch-' + pi;
  var screen = document.getElementById(screenId);
  if (!screen) return;
  var capture = screen.querySelector('.streamCapture');
  if (!capture || capture._dragInit) return;
  capture._dragInit = true;

  capture._alignMode = false;  // toggled externally via menuToggleMove
  var dragging = false;
  var moved    = false;
  var sX, sY, sOffX, sOffY;

  // Drag: only when alignment mode is on
  capture.addEventListener('mousedown', function(e) {
    if (e.button !== 0 || !capture._alignMode) return;
    dragging = true;
    moved    = false;
    sX = e.clientX; sY = e.clientY;
    var a = _getAdj(pi, type);
    sOffX = a.offX || 0;
    sOffY = a.offY || 0;
    capture.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', function(e) {
    if (!dragging || !capture._alignMode) return;
    moved = true;
    var a = _getAdj(pi, type);
    a.offX = sOffX + (e.clientX - sX);
    a.offY = sOffY + (e.clientY - sY);
    _setAdj(pi, type, a);
    if (type === 'main') applyMainScreenAdj(pi); else applyTouchScreenAdj(pi);
  });

  document.addEventListener('mouseup', function() {
    if (dragging && moved) {
      fetch('/api/updatePlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: pi, player: db.players[pi] })
      });
    }
    dragging = false;
    if (capture._alignMode) capture.style.cursor = 'grab';
  });

  // Block click if mouse moved during drag
  capture.addEventListener('click', function(e) {
    if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; }
  }, true);

  // Zoom: only in alignment mode
  var _zoomSaveTimer = null;
  capture.addEventListener('wheel', function(e) {
    if (!capture._alignMode) return;
    e.preventDefault();
    var a = _getAdj(pi, type);
    var delta = e.deltaY < 0 ? 0.05 : -0.05;
    a.userScale = Math.max(0.5, Math.min(2, (a.userScale || 1) + delta));
    _setAdj(pi, type, a);
    if (type === 'main') applyMainScreenAdj(pi); else applyTouchScreenAdj(pi);
    clearTimeout(_zoomSaveTimer);
    _zoomSaveTimer = setTimeout(function() {
      fetch('/api/updatePlayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index: pi, player: db.players[pi] })
      });
    }, 600);
  }, { passive: false });
}

function openCropEditor(i) {
  // Only prompt for URL when no stream or in adjust mode
  if (_adj && _adj.active) return;   // ignore clicks during adjust mode
  if (document.getElementById('adjOverlayEl')) return;
  setStreams(Number(i));
}

// ── Adj State ─────────────────────────────────────────────────

// ── Full Size Modus ───────────────────────────────────────────
function openFullSize(pi) {
  if (pi < 0 || !db) return;
  const menu = document.getElementById("adjContextMenu");
  if (menu) menu.style.display = "none";
  const p = db.players[pi];
  let ol = document.getElementById("fullSizeOverlay");
  if (!ol) {
    ol = document.createElement("div");
    ol.id = "fullSizeOverlay";
    ol.style.cssText = "display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:200000;";
    const closeBtn = document.createElement("div");
    closeBtn.onclick = closeFullSize;
    closeBtn.style.cssText = "position:absolute;top:10px;right:16px;color:white;font-size:22px;cursor:pointer;z-index:200001;";
    closeBtn.innerHTML = "&#x2715;";
    const mainDiv = document.createElement("div");
    mainDiv.id = "fsMain";
    mainDiv.style.cssText = "position:absolute;top:0;left:0;width:100%;height:80%;overflow:hidden;";
    const touchDiv = document.createElement("div");
    touchDiv.id = "fsTouch";
    touchDiv.style.cssText = "position:absolute;top:80%;left:0;width:100%;height:20%;overflow:hidden;";
    ol.appendChild(closeBtn);
    ol.appendChild(mainDiv);
    ol.appendChild(touchDiv);
    document.body.appendChild(ol);
    document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeFullSize(); });
  }
  const fsMain  = ol.querySelector("#fsMain");
  const fsTouch = ol.querySelector("#fsTouch");
  if (p.mainStream) {
    fsMain.innerHTML  = '<iframe src="' + p.mainStream + '" frameborder="0" allow="autoplay; fullscreen" style="width:100%;height:100%;border:none;"></iframe>';
    fsTouch.innerHTML = '<iframe src="' + p.mainStream + '" frameborder="0" allow="autoplay; fullscreen" style="width:100%;height:100%;border:none;"></iframe>';
  } else {
    fsMain.innerHTML  = '<div style="color:white;text-align:center;padding-top:80px;font-size:18px;">Kein Stream</div>';
    fsTouch.innerHTML = "";
  }
  ol.style.display = "block";
}

function closeFullSize() {
  const ol = document.getElementById("fullSizeOverlay");
  if (!ol) return;
  ol.style.display = "none";
  const m = ol.querySelector("#fsMain");
  const t = ol.querySelector("#fsTouch");
  if (m) m.innerHTML = "";
  if (t) t.innerHTML = "";
}

// ── Adj State ─────────────────────────────────────────────────
function _getAdj(pi, type)       { return type === 'main' ? db.players[pi].mainAdj  : db.players[pi].touchAdj; }
function _setAdj(pi, type, adj)  { if (type === 'main') db.players[pi].mainAdj = adj; else db.players[pi].touchAdj = adj; }
function _getCont(pi, type)      { return document.getElementById(type === 'main' ? `pmain-${pi}` : `ptouch-${pi}`); }
function _getIfr(pi, type)       { return document.getElementById(type === 'main' ? `mif-${pi}`   : `tif-${pi}`); }

// Context menu via event delegation
// ── Crop UI ──────────────────────────────────────────────────────────────
function openCropUI(pi, type) {
  var menu = document.getElementById('adjContextMenu');
  if (menu) menu.style.display = 'none';
  var existing = document.getElementById('cropUIOverlay');
  if (existing) existing.remove();
  // Use viewport for preview size (correct crop reference)
  var container = document.getElementById((type === 'main' ? 'mvp-' : 'tvp-') + pi)
                  || _getCont(pi, type);
  if (!container) return;
  var rect = container.getBoundingClientRect();
  var overlay = document.createElement('div');
  overlay.id = 'cropUIOverlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9000;display:flex;flex-direction:column;align-items:center;justify-content:center;';
  var title = document.createElement('div');
  title.textContent = 'Ausschnitt für ' + (type === 'main' ? 'Main Screen' : 'Touch Screen') + ' auswählen';
  title.style.cssText = 'color:#fff;font-size:16px;margin-bottom:10px;font-family:sans-serif;font-weight:bold;';
  overlay.appendChild(title);
  // Preview must match container's aspect ratio exactly
  // so crop % map 1:1 when applied
  var boxW = Math.min(window.innerWidth * 0.8, 800);
  var ratio = (rect.height > 0 && rect.width > 0) ? rect.height / rect.width : 9/16;
  var boxH = Math.round(boxW * ratio);
  var preview = document.createElement('div');
  preview.style.cssText = 'position:relative;width:' + boxW + 'px;height:' + boxH + 'px;overflow:hidden;background:#000;border:2px solid #fff;cursor:crosshair;user-select:none;';
  var p = db.players[pi];
  if (p && p.mainStream) {
    var ifr = document.createElement('iframe');
    ifr.src = p.mainStream;
    ifr.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;pointer-events:none;';
    ifr.setAttribute('allow', 'autoplay;fullscreen');
    preview.appendChild(ifr);
  }
  var sel = document.createElement('div');
  sel.style.cssText = 'position:absolute;border:2px solid rgba(255,200,0,0.95);background:rgba(255,200,0,0.15);box-sizing:border-box;pointer-events:none;display:none;';
  preview.appendChild(sel);
  var isDragging = false, sx = 0, sy = 0, ex = 0, ey = 0;
  function clampPx(v, max) { return Math.max(0, Math.min(max, v)); }
  function pct(val, dim) { return val / dim * 100; }
  function updateSel() {
    var x1 = Math.min(sx, ex), y1 = Math.min(sy, ey);
    var x2 = Math.max(sx, ex), y2 = Math.max(sy, ey);
    sel.style.left = x1 + 'px'; sel.style.top = y1 + 'px';
    sel.style.width = (x2-x1) + 'px'; sel.style.height = (y2-y1) + 'px';
    sel.style.display = (x2-x1 > 2 && y2-y1 > 2) ? 'block' : 'none';
  }
  preview.addEventListener('mousedown', function(e) {
    var r = preview.getBoundingClientRect();
    sx = clampPx(e.clientX - r.left, boxW); sy = clampPx(e.clientY - r.top, boxH);
    ex = sx; ey = sy; isDragging = true; updateSel(); e.preventDefault();
  });
  document.addEventListener('mousemove', function onMM(e) {
    if (!isDragging) return;
    var r = preview.getBoundingClientRect();
    ex = clampPx(e.clientX - r.left, boxW); ey = clampPx(e.clientY - r.top, boxH);
    updateSel();
  });
  document.addEventListener('mouseup', function onMU() {
    if (!isDragging) return;
    isDragging = false;
    document.removeEventListener('mousemove', onMM);
    document.removeEventListener('mouseup', onMU);
  });
  overlay.appendChild(preview);
  var btns = document.createElement('div');
  btns.style.cssText = 'display:flex;gap:12px;margin-top:12px;';
  var btnOk = document.createElement('button');
  btnOk.textContent = '✔ Anwenden';
  btnOk.style.cssText = 'padding:9px 22px;background:#4caf50;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:14px;';
  btnOk.onclick = function() {
    var x1 = Math.min(sx,ex), y1 = Math.min(sy,ey), x2 = Math.max(sx,ex), y2 = Math.max(sy,ey);
    if (x2-x1 < 5 || y2-y1 < 5) { alert('Bitte einen Bereich auswählen'); return; }
    var crop = { x: pct(x1, boxW), y: pct(y1, boxH), w: pct(x2-x1, boxW), h: pct(y2-y1, boxH), videoW: boxW, videoH: boxH };
    applyCrop(pi, type, crop);
    overlay.remove();
    fetch('/api/updatePlayer', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ index:pi, player:db.players[pi] }) });
  };
  var btnReset = document.createElement('button');
  btnReset.textContent = '↺ Reset';
  btnReset.style.cssText = 'padding:9px 22px;background:#777;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:14px;';
  btnReset.onclick = function() {
    _setAdj(pi, type, { left:0, top:0, w:100, h:100, crop:null });
    applyScreenAdj(_getIfr(pi, type), null);
    overlay.remove();
    fetch('/api/updatePlayer', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ index:pi, player:db.players[pi] }) });
  };
  var btnCancel = document.createElement('button');
  btnCancel.textContent = '✕ Abbrechen';
  btnCancel.style.cssText = 'padding:9px 22px;background:#c33;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:14px;';
  btnCancel.onclick = function() { overlay.remove(); };
  btns.appendChild(btnOk); btns.appendChild(btnReset); btns.appendChild(btnCancel);
  overlay.appendChild(btns);
  var hint = document.createElement('div');
  hint.textContent = 'Ziehe den gewünschten Bereich. Dieser Ausschnitt füllt den Screen ohne Verzerrung.';
  hint.style.cssText = 'color:#aaa;font-size:12px;margin-top:8px;font-family:sans-serif;max-width:700px;text-align:center;';
  overlay.appendChild(hint);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

document.addEventListener("contextmenu", function(e) {
  var ms   = e.target.closest(".mainScreen");
  var ts   = e.target.closest(".touchScreen");
  var menu = document.getElementById("adjContextMenu");

  if (!ms && !ts) {
    if (menu) menu.style.display = "none";
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  var screen = ms || ts;
  var type   = ms ? 'main' : 'touch';
  var m = screen.id.match(/p(?:main|touch)-(\d+)/);
  if (!m) return;

  var pi = +m[1];

  // Permission check: admin sees all, player only own slot
  if (window.user && user.role === 'player' && pi !== user.slot) {
    console.log('[contextmenu] blocked – player', user.slot, 'on slot', pi);
    return;
  }

  window._cmPi      = pi;
  window._cmType    = type;
  window._cmCapture = screen.querySelector('.streamCapture');

  // Show current move-mode state on button
  var moveBtn = document.getElementById('menuMoveBtn');
  if (moveBtn) {
    var on = window._cmCapture && window._cmCapture._alignMode;
    moveBtn.style.background = on ? '#29a' : '';
    moveBtn.style.color      = on ? '#fff' : '';
    moveBtn.innerHTML        = (on ? '&#x2714; ' : '') + '&#x2194; Bild bewegen / Zoom';
  }

  if (menu) {
    menu.style.left    = e.clientX + 'px';
    menu.style.top     = e.clientY + 'px';
    menu.style.display = 'block';
  }
});

document.addEventListener("mousedown", function(e) {
  var menu = document.getElementById("adjContextMenu");
  if (menu && menu.style.display !== "none" && !e.target.closest("#adjContextMenu")) {
    menu.style.display = "none";
  }
});

function menuFullSize() {
  document.getElementById('adjContextMenu').style.display = 'none';
  openFullSize(window._cmPi);
}

function menuToggleMove() {
  document.getElementById('adjContextMenu').style.display = 'none';
  var cap = window._cmCapture;
  if (!cap) return;
  cap._alignMode   = !cap._alignMode;
  cap.style.cursor = cap._alignMode ? 'grab' : 'default';
}

function menuDisconnect() {
  document.getElementById('adjContextMenu').style.display = 'none';
  var pi = window._cmPi != null ? window._cmPi : -1;
  if (pi < 0 || !db) return;
  db.players[pi].mainStream  = '';
  db.players[pi].touchStream = '';
  syncDB();
  updateOverlay();
}



// ── Fixed crop presets (replaces drag/resize system) ─────────────────────
const CROP_PRESETS = {
  full:   { x: 0,   y: 0,  w: 100, h: 100 },
  top:    { x: 0,   y: 0,  w: 100, h: 50  },
  bottom: { x: 0,   y: 50, w: 100, h: 50  },
  left:   { x: 0,   y: 0,  w: 50,  h: 100 },
  right:  { x: 50,  y: 0,  w: 50,  h: 100 },
};

function setCropPreset(pi, type, presetName) {
  var preset = CROP_PRESETS[presetName];
  if (!preset) return;
  var crop = Object.assign({}, preset);
  var adj  = { crop: crop, offX: 0, offY: 0, userScale: 1 };
  _setAdj(pi, type, adj);
  if (type === 'main') applyMainScreenAdj(pi);
  else                  applyTouchScreenAdj(pi);
  fetch('/api/updatePlayer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ index: pi, player: db.players[pi] })
  });
}

function clearCrop(pi, type) {
  _setAdj(pi, type, { left: 0, top: 0, w: 100, h: 100 });
  if (type === 'main') applyMainScreenAdj(pi);
  else                  applyTouchScreenAdj(pi);
  fetch('/api/updatePlayer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ index: pi, player: db.players[pi] })
  });
}

// ── Keep-alive: ping server every 5 min to prevent sleep ──────
setInterval(function() {
  fetch('/api/ping')
    .then(r => r.ok ? console.log('[keep-alive] server OK', new Date().toLocaleTimeString()) : console.warn('[keep-alive] server responded with', r.status))
    .catch(() => console.warn('[keep-alive] server unreachable'));
}, 5 * 60 * 1000);

// ── Validation helpers (callable from browser console) ────────
window._testBadgePersistence = function() {
  if (!db) { console.warn('[test] db not loaded'); return; }
  const p0 = db.players[0];
  const before = p0.badges.slice();
  console.log('[test] badge state before toggle:', before);
  fetch('/api/ping').then(r => r.json()).then(d => {
    console.log('[test] server alive, saved game:', d.game);
  }).catch(() => console.warn('[test] server not responding'));
};

