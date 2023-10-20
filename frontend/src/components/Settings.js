import React, { useState } from 'react';
import './Settings.css';

function Settings() {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
        document.documentElement.setAttribute('data-theme', event.target.value);
    };

    return (
        <div className="settings-sidebar">
            <h2>Settings</h2>
            <div className="settings-content">
                <label>
                    Theme:
                    <select value={theme} onChange={handleThemeChange}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default Settings;
