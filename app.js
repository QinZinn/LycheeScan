/* ============================================================
   LycheeScan - i18n (EN/VI) + router theo hash + logic tool
   ============================================================ */

"use strict";

/* ============================================================
   I18N: bảng dịch两国語
   ============================================================ */
const I18N = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.product": "Sản phẩm",
    "nav.significance": "Ý nghĩa",
    "nav.timeline": "Timeline",
    "nav.future": "Ý tưởng",
    "nav.team": "Đội nhóm",
    "nav.gallery": "Thư viện",

    "hero.eyebrow": "Đề tài nghiên cứu khoa học",
    "hero.titleA": "Soi độ chín quả vải",
    "hero.titleB": "bằng trí tuệ nhân tạo",
    "hero.sub": "Chụp một quả vải, mô hình AI chấm độ chín thuộc một trong ba mức lớn chỉ trong vài giây.",
    "hero.cta.try": "Thử ngay",
    "hero.cta.more": "Ý nghĩa đề tài",
    "hero.previewCaption": "Xem trước kết quả",
    "pd.kicker": "Kết quả phân tích",
    "pd.label": "Chín tới",

    "desc.heading": "Mô tả đề tài",
    "desc.body1": "Tóm tắt mục tiêu và bối cảnh đề tài sẽ được cập nhật tại đây. Phần này sẽ giới thiệu vấn đề, lý do chọn quả vải và hướng tiếp cận chung.",
    "desc.body2": "Chi tiết về phạm vi, dữ liệu huấn luyện và kiến trúc mô hình sẽ được bổ sung cùng tài liệu dự án.",
    "desc.chip1": "Lĩnh vực: Computer Vision & AI",
    "desc.chip2": "Đối tượng: Quả vải tươi",
    "desc.chip3": "Phương pháp: Phân loại ảnh",

    "product.kicker": "Sản phẩm",
    "product.heading": "LycheeScan, công cụ chấm độ chín",
    "product.sub": "Tải ảnh một quả vải lên, để mô hình đo độ chín thuộc một trong ba mức lớn.",

    "up.titleA": "Quả vải của bạn",
    "up.titleB": "đã chín chưa?",
    "up.sub": "Chụp hoặc tải ảnh một quả, AI chấm độ chín trong vài giây.",
    "dz.title": "Chọn ảnh quả vải",
    "dz.sub": "Chạm để chọn, hoặc kéo thả vào đây",
    "tip1": "Ảnh rõ nét, đủ sáng",
    "tip2": "Một quả vải trong khung",
    "tip3": "Không cần thẻ màu chuẩn",

    "btn.analyze": "Phân tích ngay",
    "btn.repick": "Thử ảnh khác",
    "btn.reset": "Thử ảnh khác",
    "btn.retry": "Thử lại",
    "btn.back": "Thử ảnh khác",

    "step0": "Đang tải ảnh lên máy chủ…",
    "step1": "Đang phân tích màu sắc vỏ quả…",
    "step2": "Đang đối chiếu mô hình độ chín…",
    "step3": "Đang tổng hợp kết quả…",

    "res.kicker": "Kết quả phân tích",
    "res.cap": "độ tin cậy",
    "res.probsH": "Độ tin cậy từng mức",
    "lvl.chua_chin": "Chưa chín",
    "lvl.chin_toi": "Chín tới",
    "lvl.chin_ky": "Chín kỹ",

    "err.title": "Chưa phân tích được",
    "err.tipA": "Kiểm tra máy chủ tại",
    "err.tipB": "đã chạy và bật CORS chưa nhé.",

    "sig.heading": "Ý nghĩa của đề tài",
    "sig.lede": "Ý nghĩa khoa học và thực tiễn của đề tài sẽ được trình bày tại đây.",
    "sig.p1h": "Giá trị khoa học",
    "sig.p1": "Đóng góp của phương pháp phân loại ảnh quả vải sẽ được mô tả tại đây.",
    "sig.p2h": "Giá trị thực tiễn",
    "sig.p2": "Ứng dụng tiềm năng cho thu hoạch và phân loại quả vải sẽ được nêu tại đây.",
    "sig.p3h": "Tiềm năng mở rộng",
    "sig.p3": "Hướng mở rộng sang các loại trái cây khác sẽ được bàn tới tại đây.",

    "tl.heading": "Timeline dự án",
    "tl.lede": "Các mốc thực hiện của dự án sẽ được cập nhật tại đây.",
    "tl.m1": "Khởi tạo ý tưởng", "tl.m1d": "Mô tả công việc tại mốc này.",
    "tl.m2": "Thu thập dữ liệu", "tl.m2d": "Mô tả công việc tại mốc này.",
    "tl.m3": "Huấn luyện mô hình", "tl.m3d": "Mô tả công việc tại mốc này.",
    "tl.m4": "Xây dựng giao diện", "tl.m4d": "Mô tả công việc tại mốc này.",
    "tl.m5": "Triển lãm NCKH", "tl.m5d": "Mô tả công việc tại mốc này.",

    "future.heading": "Ý tưởng phát triển",
    "future.lede": "Hướng phát triển tiếp theo của sản phẩm sẽ giới thiệu tại đây.",
    "future.i1h": "Mở rộng loại trái cây", "future.i1": "Mô tả ý tưởng phát triển tại đây.",
    "future.i2h": "Phiên bản di động", "future.i2": "Mô tả ý tưởng phát triển tại đây.",
    "future.i3h": "Tích hợp trực tiếp tại nhà máy", "future.i3": "Mô tả ý tưởng phát triển tại đây.",

    "team.heading": "Đội ngũ thực hiện",
    "team.lede": "Thành viên nhóm nghiên cứu sẽ giới thiệu tại đây.",
    "team.n1": "Đang cập nhật", "team.r1": "Vai trò",
    "team.n2": "Đang cập nhật", "team.r2": "Vai trò",
    "team.n3": "Đang cập nhật", "team.r3": "Vai trò",

    "gal.heading": "Thư viện",
    "gal.lede": "Ảnh chụp quá trình thực hiện và kết quả sẽ được bổ sung tại đây.",
    "gal.cap": "Ảnh mẫu",

    "foot.note": "Demo NCKH · Mô hình phân loại độ chín quả vải",

    "toast.notimage": "File đã chọn không phải ảnh. Hãy chọn ảnh JPG, PNG hoặc WEBP nhé.",
    "toast.toobig": "Ảnh vượt quá giới hạn, hãy chọn ảnh nhẹ hơn.",
    "toast.empty": "Chưa chọn ảnh. Hãy chọn một ảnh quả vải trước nhé.",
    "err.conn": "Không kết nối được tới máy chủ phân tích.",
    "err.http": (c) => `Máy chủ trả về lỗi (HTTP ${c}).`,
    "err.timeout": "Máy chủ phản hồi quá chậm, vui lòng thử lại.",
    "err.fmt": "Phản hồi từ máy chủ không đúng định dạng.",
    "err.generic": "Đã có lỗi xảy ra.",
  },
  en: {
    "nav.home": "Home",
    "nav.product": "Product",
    "nav.significance": "Impact",
    "nav.timeline": "Timeline",
    "nav.future": "Ideas",
    "nav.team": "Team",
    "nav.gallery": "Gallery",

    "hero.eyebrow": "Science research project",
    "hero.titleA": "Reading lychee ripeness",
    "hero.titleB": "with AI",
    "hero.sub": "Snap a lychee and the model rates its ripeness across three broad levels in seconds.",
    "hero.cta.try": "Try it now",
    "hero.cta.more": "Why it matters",
    "hero.previewCaption": "Result preview",
    "pd.kicker": "Analysis result",
    "pd.label": "Ripe",

    "desc.heading": "Project description",
    "desc.body1": "The goal and context of the project will be written here. This section will cover the problem, why lychees, and the overall approach.",
    "desc.body2": "Details on scope, training data, and model architecture will be added alongside the project documents.",
    "desc.chip1": "Field: Computer Vision & AI",
    "desc.chip2": "Target: Fresh lychees",
    "desc.chip3": "Method: Image classification",

    "product.kicker": "Product",
    "product.heading": "LycheeScan, a ripeness grader",
    "product.sub": "Upload a photo of one lychee and the model grades its ripeness into one of three broad levels.",

    "up.titleA": "Is your lychee",
    "up.titleB": "ripe yet?",
    "up.sub": "Snap or upload one photo, the AI grades the ripeness in seconds.",
    "dz.title": "Pick a lychee photo",
    "dz.sub": "Tap to choose, or drag & drop it here",
    "tip1": "Clear, well-lit photo",
    "tip2": "One lychee in frame",
    "tip3": "No color card needed",

    "btn.analyze": "Analyze now",
    "btn.repick": "Try another photo",
    "btn.reset": "Try another photo",
    "btn.retry": "Retry",
    "btn.back": "Try another photo",

    "step0": "Uploading image…",
    "step1": "Analyzing skin color…",
    "step2": "Matching ripeness model…",
    "step3": "Compiling result…",

    "res.kicker": "Analysis result",
    "res.cap": "confidence",
    "res.probsH": "Confidence by level",
    "lvl.chua_chin": "Unripe",
    "lvl.chin_toi": "Ripe",
    "lvl.chin_ky": "Overripe",

    "err.title": "Analysis failed",
    "err.tipA": "Make sure the server at",
    "err.tipB": "is running and CORS is enabled.",

    "sig.heading": "Significance of the research",
    "sig.lede": "The scientific and practical significance of the project will be presented here.",
    "sig.p1h": "Scientific value",
    "sig.p1": "The contribution of the lychee image classification method will be described here.",
    "sig.p2h": "Practical value",
    "sig.p2": "Potential applications for lychee harvest and sorting will be outlined here.",
    "sig.p3h": "Expansion potential",
    "sig.p3": "Paths to extend the approach to other fruits will be discussed here.",

    "tl.heading": "Project timeline",
    "tl.lede": "The milestones of the project will be added here.",
    "tl.m1": "Idea kickoff", "tl.m1d": "Work done at this milestone.",
    "tl.m2": "Data collection", "tl.m2d": "Work done at this milestone.",
    "tl.m3": "Model training", "tl.m3d": "Work done at this milestone.",
    "tl.m4": "Interface build", "tl.m4d": "Work done at this milestone.",
    "tl.m5": "Research fair", "tl.m5d": "Work done at this milestone.",

    "future.heading": "Future ideas",
    "future.lede": "Where the product goes next will be introduced here.",
    "future.i1h": "More fruit types", "future.i1": "Describe the idea here.",
    "future.i2h": "Mobile version", "future.i2": "Describe the idea here.",
    "future.i3h": "On-site factory integration", "future.i3": "Describe the idea here.",

    "team.heading": "The team",
    "team.lede": "The research team members will be introduced here.",
    "team.n1": "To be added", "team.r1": "Role",
    "team.n2": "To be added", "team.r2": "Role",
    "team.n3": "To be added", "team.r3": "Role",

    "gal.heading": "Gallery",
    "gal.lede": "Photos from the work and results will be added here.",
    "gal.cap": "Sample",

    "foot.note": "Science fair demo · Lychee ripeness classifier",

    "toast.notimage": "That file is not an image. Please pick a JPG, PNG or WEBP.",
    "toast.toobig": "The image is too large, please pick a lighter one.",
    "toast.empty": "No photo selected. Pick a lychee photo first.",
    "err.conn": "Cannot reach the analysis server.",
    "err.http": (c) => `The server returned an error (HTTP ${c}).`,
    "err.timeout": "The server is too slow, please try again.",
    "err.fmt": "The server response is invalid.",
    "err.generic": "Something went wrong.",
  },
};

let lang = localStorage.getItem("lang") || "vi";

/* 3 mức chín: icon + display + hint theo ngữ */
const LEVELS = {
  chua_chin: {
    vi: { display: "Chưa chín", hint: "Quả còn xanh, vỏ chưa chuyển màu. Nên chờ thêm vài ngày trước khi thu hoạch." },
    en: { display: "Unripe", hint: "Still green, the skin has not turned. Wait a few more days before harvesting." },
    icon: `<svg viewBox="0 0 48 48" fill="none"><path d="M38 10C22 12 12 20 10 38c18-2 26-12 28-28z" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M14 34c6-10 14-16 20-20" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>`,
  },
  chin_toi: {
    vi: { display: "Chín tới", hint: "Vỏ đã chuyển đỏ tươi, quả đang ở độ chín tối ưu. Có thể thu hoạch." },
    en: { display: "Ripe", hint: "The skin has turned bright red. The fruit is at peak ripeness and ready to harvest." },
    icon: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="28" r="14" stroke="#fff" stroke-width="3"/><path d="M30 14c1-4 5-5 7-5-1 3-3 6-6 6.5" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="19" cy="25" r="1.8" fill="#fff"/><circle cx="27" cy="23" r="1.8" fill="#fff"/><circle cx="23" cy="31" r="1.8" fill="#fff"/><circle cx="30" cy="30" r="1.8" fill="#fff"/></svg>`,
  },
  chin_ky: {
    vi: { display: "Chín kỹ", hint: "Vỏ đỏ sẫm, quả đã chín kỹ. Nên thu hoạch ngay để tránh hư hỏng." },
    en: { display: "Overripe", hint: "The skin is dark red. The fruit is overripe, harvest now to avoid spoilage." },
    icon: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="28" r="14" stroke="#fff" stroke-width="3"/><path d="M30 14c1-4 5-5 7-5-1 3-3 6-6 6.5" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M17 28.5l5 5 9-10" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  },
};

/* ============================================================
   DOM refs
   ============================================================ */
const $ = (id) => document.getElementById(id);
const els = {
  views: document.querySelectorAll(".view"),
  navLinks: document.querySelectorAll(".nav-link"),
  navMenu: $("nav-menu"),
  navToggle: $("nav-toggle"),
  langToggle: $("lang-toggle"),

  // product
  states: {
    upload: $("state-upload"),
    preview: $("state-preview"),
    loading: $("state-loading"),
    result: $("state-result"),
    error: $("state-error"),
  },
  dropzone: $("dropzone"),
  fileInput: $("file-input"),
  previewImg: $("preview-img"),
  fileName: $("file-name"),
  fileSize: $("file-size"),
  scanImg: $("scan-img"),
  btnAnalyze: $("btn-analyze"),
  btnRepick: $("btn-repick"),
  steps: Array.from(document.querySelectorAll("#steps li")),
  resultState: $("state-result"),
  resultImg: $("result-img"),
  resultBadge: $("result-badge"),
  resultLabel: $("result-label"),
  resultHint: $("result-hint"),
  ringFg: $("ring-fg"),
  confValue: $("confidence-value"),
  probRows: Array.from(document.querySelectorAll(".prob-row")),
  btnReset: $("btn-reset"),
  errorMessage: $("error-message"),
  btnRetry: $("btn-retry"),
  btnBack: $("btn-back"),
  toast: $("toast"),
  previewImgAlt: null, // đặt động theo i18n
};

const RING_LEN = 2 * Math.PI * 52;
const CONFIG = {
  API_URL: "http://localhost:8000/predict",
  FIELD_NAME: "file",
  MIN_LOADING_MS: 3000,
  MIN_ERROR_MS: 1200,
  TIMEOUT_MS: 30000,
  MAX_SIZE_MB: 10,
  STEP_MS: 800,
};

/* ============================================================
   i18n
   ============================================================ */
function applyLang(next) {
  lang = next;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "vi" ? "vi" : "en";
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val === "string") el.textContent = val;
  });
  // toggle buttons
  els.langToggle.querySelectorAll("button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  // re-render động nếu đang ở result (label/hint đa ngữ)
  if (lastResult) renderResult(lastResult, true);
  // alt ảnh preview/result theo ngữ
  setAlts();
}

function t(key) { return I18N[lang][key]; }

function setAlts() {
  const a = lang === "vi" ? "Ảnh quả vải" : "Lychee photo";
  if (els.previewImg) els.previewImg.alt = a;
  if (els.scanImg) els.scanImg.alt = lang === "vi" ? "Ảnh đang được phân tích" : "Photo being analyzed";
  if (els.resultImg) els.resultImg.alt = lang === "vi" ? "Ảnh quả vải đã phân tích" : "Analyzed lychee photo";
  if (els.navToggle) els.navToggle.setAttribute("aria-label", lang === "vi" ? "Mở menu" : "Open menu");
}

/* ============================================================
   Router theo hash
   ============================================================ */
const VIEWS = ["home", "product", "significance", "timeline", "future", "team", "gallery"];

function setView(name) {
  if (!VIEWS.includes(name)) name = "home";
  els.views.forEach((v) => v.classList.toggle("is-active", v.dataset.view === name));
  els.navLinks.forEach((l) => l.classList.toggle("is-active", l.dataset.go === name));
  closeMenu();
  window.scrollTo({ top: 0, behavior: "auto" });
  if (location.hash !== "#" + name) history.replaceState(null, "", "#" + name);
  // update title
  document.title = (lang === "vi" ? "LycheeScan - " : "LycheeScan - ") + t("nav." + (name === "home" ? "home" : name));
}

function currentViewFromHash() {
  const h = location.hash.replace("#", "");
  return VIEWS.includes(h) ? h : "home";
}

/* ============================================================
   Menu mobile
   ============================================================ */
function openMenu()  { els.navMenu.classList.add("is-open"); els.navToggle.setAttribute("aria-expanded", "true"); }
function closeMenu() { els.navMenu.classList.remove("is-open"); els.navToggle.setAttribute("aria-expanded", "false"); }
function toggleMenu() { els.navMenu.classList.contains("is-open") ? closeMenu() : openMenu(); }

/* ============================================================
   Tool: state machine + upload + predict
   ============================================================ */
let prodState = "upload";
let selectedFile = null;
let objectUrl = null;
let analyzing = false;
let stepTimer = null;
let toastTimer = null;
let resultTimer = null;
let lastResult = null;

function setProdState(next) {
  if (next === prodState) return;
  els.states[prodState].classList.remove("is-active");
  els.states[next].classList.add("is-active");
  prodState = next;
}

function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("is-visible"), 2600);
}

function handleFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) { showToast(t("toast.notimage")); return; }
  if (file.size > CONFIG.MAX_SIZE_MB * 1024 * 1024) { showToast(t("toast.toobig")); return; }
  selectedFile = file;
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(file);
  els.previewImg.src = objectUrl;
  els.scanImg.src = objectUrl;
  els.resultImg.src = objectUrl;
  els.fileName.textContent = file.name;
  els.fileSize.textContent = formatSize(file.size);
  setProdState("preview");
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function startSteps() {
  stopSteps();
  els.steps.forEach((li) => li.classList.remove("is-active", "is-done"));
  els.steps[0].classList.add("is-active");
  let i = 0;
  stepTimer = setInterval(() => {
    els.steps[i].classList.replace("is-active", "is-done");
    i = Math.min(i + 1, els.steps.length - 1);
    els.steps[i].classList.add("is-active");
    if (i === els.steps.length - 1) clearInterval(stepTimer);
  }, CONFIG.STEP_MS);
}
function finishSteps() { stopSteps(); els.steps.forEach((li) => { li.classList.remove("is-active"); li.classList.add("is-done"); }); }
function stopSteps() { if (stepTimer) { clearInterval(stepTimer); stepTimer = null; } }

async function predict(file) {
  const form = new FormData();
  form.append(CONFIG.FIELD_NAME, file);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CONFIG.TIMEOUT_MS);
  try {
    const res = await fetch(CONFIG.API_URL, { method: "POST", body: form, signal: controller.signal });
    if (!res.ok) throw new Error("HTTP:" + res.status);
    const data = await res.json();
    return normalizeResult(data);
  } catch (err) {
    if (err.name === "AbortError") throw new Error("TIMEOUT");
    if (err instanceof TypeError) throw new Error("CONN");
    throw err;
  } finally { clearTimeout(timeout); }
}

function normalizeResult(data) {
  if (!data || typeof data !== "object" || !LEVELS[data.label]) throw new Error("FMT");
  const level = LEVELS[data.label];
  const langDisplay = level[lang] ? level[lang].display : level.vi.display;
  const confidence = Math.min(1, Math.max(0, Number(data.confidence) || 0));
  const probs = {};
  for (const key of Object.keys(LEVELS)) {
    const p = data.probs && Number(data.probs[key]);
    probs[key] = Number.isFinite(p) ? Math.min(1, Math.max(0, p)) : 0;
  }
  // Ưu tiên label_display tiếng Việt từ API nếu đang ở VI, ngược lại dùng display theo ngữ
  const useApiDisplay = lang === "vi" && typeof data.label_display === "string" && data.label_display.trim();
  return {
    label: data.label,
    display: useApiDisplay ? data.label_display.trim() : langDisplay,
    confidence,
    probs,
    hint: level[lang] ? level[lang].hint : level.vi.hint,
    icon: level.icon,
  };
}

async function analyze() {
  if (!selectedFile) { showToast(t("toast.empty")); return; }
  if (analyzing) return;
  analyzing = true;
  els.btnAnalyze.disabled = true;
  setProdState("loading");
  startSteps();
  const startedAt = Date.now();
  try {
    const result = await predict(selectedFile);
    await waitUntil(startedAt, CONFIG.MIN_LOADING_MS);
    finishSteps();
    setProdState("result");
    lastResult = result;
    renderResult(result, false);
  } catch (err) {
    await waitUntil(startedAt, CONFIG.MIN_ERROR_MS);
    stopSteps();
    const code = /HTTP:(\d+)/.exec(err.message || "");
    let key = "err.generic";
    if (err.message === "CONN") key = "err.conn";
    else if (err.message === "TIMEOUT") key = "err.timeout";
    else if (err.message === "FMT") key = "err.fmt";
    else if (code) { els.errorMessage.textContent = I18N[lang]["err.http"](code[1]); setProdState("error"); analyzing = false; els.btnAnalyze.disabled = false; return; }
    els.errorMessage.textContent = t(key);
    setProdState("error");
  } finally {
    analyzing = false;
    els.btnAnalyze.disabled = false;
  }
}

function waitUntil(startedAt, minMs) {
  const elapsed = Date.now() - startedAt;
  return new Promise((r) => setTimeout(r, Math.max(0, minMs - elapsed)));
}

function renderResult(result, langOnly) {
  els.resultState.dataset.level = result.label;
  document.body.dataset.level = result.label;
  els.resultBadge.innerHTML = result.icon;
  els.resultLabel.textContent = result.display;
  els.resultHint.textContent = result.hint;

  if (langOnly) return; // đổi ngữ giữa chừng: chỉ cập nhật text, giữ ring/bar nguyên

  clearTimeout(resultTimer);
  els.ringFg.style.transition = "none";
  els.ringFg.style.strokeDashoffset = RING_LEN;
  els.confValue.textContent = "0.0";
  els.probRows.forEach((row) => {
    row.querySelector(".prob-fill").style.transform = "scaleX(0)";
    row.querySelector(".prob-value").textContent = "0%";
    row.classList.remove("is-winner");
  });

  resultTimer = setTimeout(() => {
    els.ringFg.style.transition = "";
    els.ringFg.style.strokeDashoffset = RING_LEN * (1 - result.confidence);
    animateCounter(els.confValue, result.confidence * 100, 1200, 1);
    els.probRows.forEach((row, i) => {
      const key = row.dataset.key;
      const value = result.probs[key] || 0;
      if (key === result.label) row.classList.add("is-winner");
      setTimeout(() => {
        row.querySelector(".prob-fill").style.transform = `scaleX(${value})`;
        animateCounter(row.querySelector(".prob-value"), value * 100, 900, 0, "%");
      }, i * 120);
    });
  }, 560);
}

function animateCounter(el, target, duration, decimals, suffix = "") {
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (target * eased).toFixed(decimals) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function resetAll() {
  selectedFile = null;
  lastResult = null;
  clearTimeout(resultTimer);
  if (objectUrl) { URL.revokeObjectURL(objectUrl); objectUrl = null; }
  els.fileInput.value = "";
  delete els.resultState.dataset.level;
  delete document.body.dataset.level;
  setProdState("upload");
}

/* ============================================================
   Events
   ============================================================ */
// nav + hero CTA: mọi phần tử [data-go] điều khiển view
document.querySelectorAll("[data-go]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setView(el.dataset.go);
  });
});
window.addEventListener("hashchange", () => setView(currentViewFromHash()));
els.navToggle.addEventListener("click", toggleMenu);
document.addEventListener("click", (e) => {
  // click ngoài menu -> đóng
  if (!els.navMenu.contains(e.target) && !els.navToggle.contains(e.target)) closeMenu();
});

// lang toggle
els.langToggle.querySelectorAll("button").forEach((b) => {
  b.addEventListener("click", () => applyLang(b.dataset.lang));
});

// product tool
els.dropzone.addEventListener("click", () => els.fileInput.click());
els.fileInput.addEventListener("change", (e) => handleFile(e.target.files[0]));
["dragenter", "dragover"].forEach((evt) => els.dropzone.addEventListener(evt, (e) => { e.preventDefault(); els.dropzone.classList.add("is-dragover"); }));
["dragleave", "drop"].forEach((evt) => els.dropzone.addEventListener(evt, (e) => { e.preventDefault(); els.dropzone.classList.remove("is-dragover"); }));
els.dropzone.addEventListener("drop", (e) => { const f = e.dataTransfer.files && e.dataTransfer.files[0]; handleFile(f); });
els.btnAnalyze.addEventListener("click", analyze);
els.btnRepick.addEventListener("click", resetAll);
els.btnReset.addEventListener("click", resetAll);
els.btnBack.addEventListener("click", resetAll);
els.btnRetry.addEventListener("click", () => { if (selectedFile) analyze(); else resetAll(); });

/* ============================================================
   Init
   ============================================================ */
applyLang(lang);
setView(currentViewFromHash());