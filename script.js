const API_BASE = "https://phi-lab-server.vercel.app/api/v1/lab";
const ALL_ISSUES = `${API_BASE}/issues`;
const SEARCH_API = `${API_BASE}/issues/search?q=`;

const issuesGrid = document.getElementById("issuesGrid");
const loadingOverlay = document.getElementById("loadingOverlay");
const issueCountEl = document.getElementById("issueCount");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const modal = document.getElementById("issueModal");
const modalTitle = document.getElementById("modalTitle");
const modalStatusBtn = document.getElementById("modalStatusBtn");
const modalOpenedBy = document.getElementById("modalOpenedBy");
const modalCreatedDate = document.getElementById("modalCreatedDate");
const modalLabels = document.getElementById("modalLabels");
const modalDesc = document.getElementById("modalDesc");
const modalAssignee = document.getElementById("modalAssignee");
const modalPriority = document.getElementById("modalPriority");
const modalCloseBtn = document.getElementById("modalCloseBtn");

let currentStatus = "all";