import { useState } from 'react';

interface SettingsState {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: string;
}

const Settings = () => {
  const [settings, setSettings] = useState<SettingsState>({
    notifications: true,
    emailUpdates: true,
    darkMode: false,
    language: 'en'
  });

  const handleChange = (key: keyof SettingsState, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="settings-option">
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleChange('notifications', e.target.checked)}
            />
            Enable Push Notifications
          </label>
        </div>
        <div className="settings-option">
          <label>
            <input
              type="checkbox"
              checked={settings.emailUpdates}
              onChange={(e) => handleChange('emailUpdates', e.target.checked)}
            />
            Receive Email Updates
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Appearance</h2>
        <div className="settings-option">
          <label>
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={(e) => handleChange('darkMode', e.target.checked)}
            />
            Dark Mode
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Language</h2>
        <div className="settings-option">
          <select
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings; 