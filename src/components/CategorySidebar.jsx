import { useState } from "react";
import "./CategorySidebar.css";

// ── Group Icons (parent level) ─────────────────────────
const GROUP_ICONS = {
  "All": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
  "Tech": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "Men's": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M20 21a8 8 0 1 0-16 0"/>
    </svg>
  ),
  "Women's": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
    </svg>
  ),
  "Kids": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>
      <path d="M17.21 15.89A7 7 0 1 0 6.79 15.89"/>
      <path d="M12 22v-3"/>
    </svg>
  ),
  "Home": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  "Travel": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  "Stationery & Office": (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
};

// ── Category Icons (subcategory level) ────────────────
const CATEGORY_ICONS = {
  "Electronics": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  "Accessories": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  "Fashion": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
    </svg>
  ),
  "Footwear": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  ),
  "Beauty & Care": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  "Kitchen": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  "Kitchen Gadgets": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  ),
  "Organization": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="8" y1="6" x2="21" y2="6"/>
      <line x1="8" y1="12" x2="21" y2="12"/>
      <line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/>
      <line x1="3" y1="12" x2="3.01" y2="12"/>
      <line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  ),
  "Decor": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  "Home Care": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="23 4 23 10 17 10"/>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  ),
  "Bags": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  "Office": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  "Stationery": (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
};

// ── Component ──────────────────────────────────────────
const CategorySidebar = ({
  groupedCategories,
  activeGroup,
  activeCategory,
  onGroupSelect,
  onCategorySelect,
}) => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedGroups, setMobileExpandedGroups] = useState({});

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const toggleMobileGroup = (group) => {
    setMobileExpandedGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const handleGroupClick = (group) => {
    if (activeGroup === group) {
      // Already active — just toggle expand, don't reset group
      toggleGroup(group);
    } else {
      // New group — select it and expand it
      onGroupSelect(group);
      setExpandedGroups((prev) => ({ ...prev, [group]: true }));
    }
  };

  const handleMobileGroupClick = (group) => {
    if (activeGroup === group) {
      toggleMobileGroup(group);
    } else {
      onGroupSelect(group);
      setMobileExpandedGroups((prev) => ({ ...prev, [group]: true }));
    }
  };

  const handleMobileCategoryClick = (category) => {
    onCategorySelect(category);
    setMobileOpen(false);
  };

  // Mobile button label
  const mobileLabel =
    activeCategory !== "All"
      ? `${activeGroup} › ${activeCategory}`
      : activeGroup !== "All"
      ? activeGroup
      : "All Categories";

  const isFiltered = activeGroup !== "All" || activeCategory !== "All";

  return (
    <>
      {/* ── Desktop Sidebar ──────────────────────────── */}
      <aside className="category-sidebar" aria-label="Product categories">
        <p className="sidebar-label">Categories</p>
        <ul className="sidebar-list" role="list">

          {/* All */}
          <li>
            <button
              className={`sidebar-item ${activeGroup === "All" ? "sidebar-item-active" : ""}`}
              onClick={() => { onGroupSelect("All"); setExpandedGroups({}); }}
              aria-pressed={activeGroup === "All"}
            >
              <span className="sidebar-icon" aria-hidden="true">
                {GROUP_ICONS["All"]}
              </span>
              <span className="sidebar-text">All</span>
            </button>
          </li>

          {/* Groups */}
          {Object.entries(groupedCategories).map(([group, categories]) => {
            const isGroupActive = activeGroup === group;
            const isExpanded = expandedGroups[group] || isGroupActive;

            return (
              <li key={group} className="sidebar-group">
                <button
                  className={`sidebar-item sidebar-group-btn ${
                    isGroupActive && activeCategory === "All"
                      ? "sidebar-item-active"
                      : isGroupActive
                      ? "sidebar-group-selected"
                      : ""
                  }`}
                  onClick={() => handleGroupClick(group)}
                  aria-expanded={isExpanded}
                >
                  <span className="sidebar-icon" aria-hidden="true">
                    {GROUP_ICONS[group] || GROUP_ICONS["All"]}
                  </span>
                  <span className="sidebar-text">{group}</span>
                  <svg
                    className={`sidebar-chevron ${isExpanded ? "sidebar-chevron-open" : ""}`}
                    width="12" height="12" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>

                {/* Subcategories */}
                {isExpanded && (
                  <ul className="sidebar-subcategories" role="list">
                    {categories.map((cat) => {
                      const isActive = isGroupActive && activeCategory === cat;
                      return (
                        <li key={cat}>
                          <button
                            className={`sidebar-subitem ${isActive ? "sidebar-subitem-active" : ""}`}
                            onClick={() => onCategorySelect(cat)}
                            aria-pressed={isActive}
                          >
                            <span className="sidebar-subicon" aria-hidden="true">
                              {CATEGORY_ICONS[cat] || CATEGORY_ICONS["Accessories"]}
                            </span>
                            {cat}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      {/* ── Mobile Filter Button ──────────────────────── */}
      <div className="mobile-filter-wrap">
        <button
          className={`mobile-filter-btn ${isFiltered ? "mobile-filter-btn-active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open category filter"
          aria-expanded={mobileOpen}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
            <line x1="6" y1="18" x2="18" y2="18"/>
          </svg>
          <span className="mobile-filter-label">{mobileLabel}</span>
          {isFiltered && (
            <span className="mobile-filter-active-dot" aria-hidden="true" />
          )}
          <svg
            width="12" height="12" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            style={{
              transform: mobileOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              flexShrink: 0,
            }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* ── Mobile Drawer ─────────────────────────── */}
        {mobileOpen && (
          <>
            <div
              className="mobile-drawer-overlay"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <div className="mobile-drawer" role="dialog" aria-label="Category filter">
              <div className="mobile-drawer-header">
                <span className="mobile-drawer-title">Browse by Category</span>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close filter"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              <ul className="mobile-drawer-list" role="list">
                {/* All */}
                <li>
                  <button
                    className={`mobile-drawer-item ${activeGroup === "All" ? "mobile-drawer-item-active" : ""}`}
                    onClick={() => {
                      onGroupSelect("All");
                      setMobileOpen(false);
                      setMobileExpandedGroups({});
                    }}
                  >
                    <span className="sidebar-icon" aria-hidden="true">
                      {GROUP_ICONS["All"]}
                    </span>
                    All Products
                    {activeGroup === "All" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: "auto" }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </button>
                </li>

                {/* Groups */}
                {Object.entries(groupedCategories).map(([group, categories]) => {
                  const isGroupActive = activeGroup === group;
                  const isExpanded = mobileExpandedGroups[group] || isGroupActive;

                  return (
                    <li key={group} className="mobile-drawer-group">
                      <button
                        className={`mobile-drawer-item mobile-drawer-group-btn ${
                          isGroupActive && activeCategory === "All"
                            ? "mobile-drawer-item-active"
                            : isGroupActive
                            ? "mobile-drawer-group-selected"
                            : ""
                        }`}
                        onClick={() => handleMobileGroupClick(group)}
                        aria-expanded={isExpanded}
                      >
                        <span className="sidebar-icon" aria-hidden="true">
                          {GROUP_ICONS[group] || GROUP_ICONS["All"]}
                        </span>
                        {group}
                        <svg
                          className={`sidebar-chevron ${isExpanded ? "sidebar-chevron-open" : ""}`}
                          width="12" height="12" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                          style={{ marginLeft: "auto" }}
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </button>

                      {/* Mobile subcategories */}
                      {isExpanded && (
                        <ul className="mobile-subcategories" role="list">
                          {categories.map((cat) => {
                            const isActive = isGroupActive && activeCategory === cat;
                            return (
                              <li key={cat}>
                                <button
                                  className={`mobile-subitem ${isActive ? "mobile-subitem-active" : ""}`}
                                  onClick={() => handleMobileCategoryClick(cat)}
                                  aria-pressed={isActive}
                                >
                                  <span className="sidebar-subicon" aria-hidden="true">
                                    {CATEGORY_ICONS[cat] || CATEGORY_ICONS["Accessories"]}
                                  </span>
                                  {cat}
                                  {isActive && (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ marginLeft: "auto" }}>
                                      <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                  )}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CategorySidebar;