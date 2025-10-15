import React from "react";

export default function ThemeToggle({ toggleTheme, theme }) {
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: "none",
                border: "1px solid var(--accent)",
                color: "var(--text)",
                padding: "6px 12px",
                borderRadius: "8px",
                cursor: "pointer",
            }}
        >
            {theme === "light" ? "🌙" : "☀️"}
        </button>
    );
}
