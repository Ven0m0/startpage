// Widget visibility management
function toggleWidget(widgetType) {
	const widgets = {
		title: document.getElementById("title-display"),
		date: document.getElementById("date-display"),
		image: document.getElementById("image-container"),
		icons: document.getElementById("icons-box"),
	};

	const checkbox = document.getElementById(`toggle-${widgetType}`);
	const widget = widgets[widgetType];

	if (widget) {
		widget.style.display = checkbox.checked ? "" : "none";
		saveWidgetPreferences();
	}
}

function saveWidgetPreferences() {
	const preferences = {
		title: document.getElementById("toggle-title").checked,
		date: document.getElementById("toggle-date").checked,
		image: document.getElementById("toggle-image").checked,
		icons: document.getElementById("toggle-icons").checked,
	};
	localStorage.setItem("widgetPreferences", JSON.stringify(preferences));
}

function loadWidgetPreferences() {
	const saved = localStorage.getItem("widgetPreferences");
	if (saved) {
		const preferences = JSON.parse(saved);
		Object.keys(preferences).forEach((key) => {
			const checkbox = document.getElementById(`toggle-${key}`);
			if (checkbox) {
				checkbox.checked = preferences[key];
				toggleWidget(key);
			}
		});
	}
}

// Custom shortcuts management
function addCustomShortcut() {
	const nameInput = document.getElementById("shortcut-name");
	const urlInput = document.getElementById("shortcut-url");

	const name = nameInput.value.trim();
	const url = urlInput.value.trim();

	if (!name || !url) {
		alert("Please enter both name and URL");
		return;
	}

	const shortcuts = getCustomShortcuts();
	shortcuts.push({ name, url });
	saveCustomShortcuts(shortcuts);

	nameInput.value = "";
	urlInput.value = "";

	updateCustomShortcutsList();
	renderCustomShortcuts();
}

function deleteCustomShortcut(index) {
	const shortcuts = getCustomShortcuts();
	shortcuts.splice(index, 1);
	saveCustomShortcuts(shortcuts);
	updateCustomShortcutsList();
	renderCustomShortcuts();
}

function getCustomShortcuts() {
	const saved = localStorage.getItem("customShortcuts");
	return saved ? JSON.parse(saved) : [];
}

function saveCustomShortcuts(shortcuts) {
	localStorage.setItem("customShortcuts", JSON.stringify(shortcuts));
}

function updateCustomShortcutsList() {
	const listContainer = document.getElementById("custom-shortcuts-list");
	const shortcuts = getCustomShortcuts();

	listContainer.innerHTML = "";

	shortcuts.forEach((shortcut, index) => {
		const item = document.createElement("div");
		item.className = "custom-shortcut-item";
		item.innerHTML = `
			<span>${shortcut.name}</span>
			<button onclick="deleteCustomShortcut(${index})">Delete</button>
		`;
		listContainer.appendChild(item);
	});
}

function renderCustomShortcuts() {
	const shortcuts = getCustomShortcuts();

	if (shortcuts.length === 0) {
		// Remove custom shortcuts container if it exists
		const existing = document.getElementById("custom-shortcuts-container");
		if (existing) {
			existing.remove();
		}
		return;
	}

	// Check if container exists, if not create it
	let container = document.getElementById("custom-shortcuts-container");
	if (!container) {
		container = document.createElement("div");
		container.id = "custom-shortcuts-container";

		// Insert after search form
		const searchForm = document.getElementById("search-form");
		searchForm.parentNode.insertBefore(
			container,
			searchForm.nextSibling,
		);
	}

	// Build shortcuts HTML
	let html = "<ul><li>~/custom </li>";
	shortcuts.forEach((shortcut) => {
		html += `<li><a href="${shortcut.url}">${shortcut.name}</a></li>`;
	});
	html += "</ul>";

	container.innerHTML = html;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
	loadWidgetPreferences();
	updateCustomShortcutsList();
	renderCustomShortcuts();
});
