const fs = require('fs');
const file = 'index.html';
let css = fs.readFileSync(file, 'utf8');

// 1. Swap :root
css = css.replace(/:root \{[\s\S]*?\}/, `:root {
            --bg-base: #0b0f19;
            --bg-panel: rgba(15, 23, 42, 0.6);
            --bg-panel-hover: rgba(30, 41, 59, 0.6);
            --primary: #3b82f6; 
            --primary-glow: rgba(59, 130, 246, 0.45);
            --secondary: #6366f1;
            --secondary-glow: rgba(99, 102, 241, 0.45);
            --success: #10b981;
            --success-bg: rgba(16, 185, 129, 0.1);
            --success-glow: rgba(16, 185, 129, 0.4);
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --border: rgba(255, 255, 255, 0.08);
            --border-highlight: rgba(255, 255, 255, 0.15);
            --input-bg: rgba(0, 0, 0, 0.3);
            --font-family: 'Outfit', sans-serif;
            --gradient-accent: linear-gradient(90deg, #3b82f6, #6366f1, #3b82f6);
            --gradient-btn: linear-gradient(135deg, #2563eb, #4f46e5);
            --modal-bg: rgba(7, 10, 16, 0.8);
            --table-row: rgba(40, 48, 68, 0.4);
            --table-row-hover: rgba(50, 60, 80, 0.6);
            --checkbox-border: rgba(255, 255, 255, 0.15);
            --shadow-panel: 0 10px 40px rgba(0, 0, 0, 0.3);
            --shadow-modal: 0 10px 50px rgba(0, 0, 0, 0.5);
        }

        [data-theme="light"] {
            --bg-base: #f8fafc;
            --bg-panel: rgba(255, 255, 255, 0.85);
            --bg-panel-hover: rgba(248, 250, 252, 0.9);
            --primary: #2563eb;
            --primary-glow: rgba(37, 99, 235, 0.2);
            --secondary: #4f46e5;
            --secondary-glow: rgba(79, 70, 229, 0.2);
            --success: #059669;
            --success-bg: rgba(5, 150, 105, 0.1);
            --success-glow: rgba(5, 150, 105, 0.3);
            --text-main: #0f172a;
            --text-muted: #475569;
            --border: rgba(0, 0, 0, 0.08);
            --border-highlight: rgba(0, 0, 0, 0.15);
            --input-bg: rgba(255, 255, 255, 0.6);
            --gradient-accent: linear-gradient(90deg, #2563eb, #4f46e5, #2563eb);
            --gradient-btn: linear-gradient(135deg, #2563eb, #4f46e5);
            --modal-bg: rgba(241, 245, 249, 0.85);
            --table-row: rgba(255, 255, 255, 0.9);
            --table-row-hover: #f1f5f9;
            --checkbox-border: rgba(0, 0, 0, 0.15);
            --shadow-panel: 0 10px 40px rgba(0, 0, 0, 0.05);
            --shadow-modal: 0 10px 50px rgba(0, 0, 0, 0.1);
        }
        
        .theme-toggle {
            position: absolute; top: 20px; right: 20px; z-index: 100;
            background: var(--bg-panel); border: 1px solid var(--border);
            color: var(--text-main); width: 45px; height: 45px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.2rem; cursor: pointer; transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }
        .theme-toggle:hover { transform: scale(1.1); background: var(--bg-panel-hover); box-shadow: 0 0 15px var(--primary-glow); color: var(--primary); }`);

// Replacing standard variables manually
css = css.replace(/var\(--bg-dark\)/g, 'var(--bg-base)');
css = css.replace(/var\(--glass-bg\)/g, 'var(--bg-panel)');
css = css.replace(/var\(--glass-border\)/g, 'var(--border)');

css = css.replace(/background: linear-gradient\(90deg, #00f0ff, #b400ff, #00f0ff\);/g, 'background: var(--gradient-accent);');
css = css.replace(/text-shadow: 0 0 30px rgba\(180, 0, 255, 0.2\);/g, 'text-shadow: 0 0 30px var(--primary-glow);');
css = css.replace(/background: linear-gradient\(135deg, #00f0ff, #8a2be2\);/g, 'background: var(--gradient-btn);');

css = css.replace(/rgba\(0, 240, 255, 0\.3\)/g, 'var(--primary-glow)');
css = css.replace(/rgba\(0, 240, 255, 0\.15\)/g, 'var(--primary-glow)');
css = css.replace(/rgba\(0,240,255,0\.3\)/g, 'var(--primary-glow)');
css = css.replace(/rgba\(0,240,255,0\.2\)/g, 'var(--primary-glow)');
css = css.replace(/#00f0ff/g, 'var(--primary)');

css = css.replace(/rgba\(255, 255, 255, 0\.1\)/g, 'var(--border-highlight)');
css = css.replace(/rgba\(255,255,255,0\.1\)/g, 'var(--border-highlight)');
css = css.replace(/rgba\(255, 255, 255, 0\.02\)/g, 'var(--table-row)');
css = css.replace(/rgba\(255,255,255,0\.02\)/g, 'var(--table-row)');
css = css.replace(/rgba\(255, 255, 255, 0\.05\)/g, 'var(--border)');
css = css.replace(/rgba\(255,255,255,0\.05\)/g, 'var(--border)');
css = css.replace(/rgba\(0, 0, 0, 0\.3\)/g, 'var(--input-bg)');
css = css.replace(/rgba\(0, 0, 0, 0\.25\)/g, 'var(--input-bg)');
css = css.replace(/rgba\(0,0,0,0\.25\)/g, 'var(--input-bg)');

css = css.replace(/rgba\(255, 255, 255, 0\.06\)/g, 'var(--table-row-hover)');
css = css.replace(/rgba\(0, 255, 136, 0\.05\)/g, 'var(--success-bg)');
css = css.replace(/rgba\(0,255,136,0\.2\)/g, 'var(--success-glow)');

css = css.replace(/0 0 15px var\(--success\)/g, '0 0 15px var(--success-glow)');
css = css.replace(/color: #ccc/g, 'color: var(--text-muted)');
css = css.replace(/rgba\(255, 255, 255, 0\.15\)/g, 'var(--checkbox-border)');
css = css.replace(/rgba\(255,255,255,0\.15\)/g, 'var(--checkbox-border)');

css = css.replace(/rgba\(0,0,0,0\.8\)/g, 'var(--modal-bg)');
css = css.replace(/rgba\(0, 0, 0, 0\.5\)/g, 'var(--shadow-modal)');
css = css.replace(/rgba\(0,0,0,0\.5\)/g, 'var(--shadow-modal)');
css = css.replace(/0 10px 40px rgba\(0, 0, 0, 0.5\)/g, 'var(--shadow-panel)');
css = css.replace(/box-shadow: 0 10px 40px rgba\(0, 0, 0, 0.5\)/g, 'box-shadow: var(--shadow-panel)');

css = css.replace(/rgba\(255,255,255,0\.03\)/g, 'var(--table-row)');
css = css.replace(/rgba\(255, 255, 255, 0\.04\)/g, 'var(--table-row)');
css = css.replace(/rgba\(255, 255, 255, 0\.08\)/g, 'var(--border)');

css = css.replace(/rgba\(0, 255, 136, 0\.4\)/g, 'var(--success-glow)');
css = css.replace(/rgba\(0, 255, 136, 0\.1\)/g, 'var(--success-bg)');
css = css.replace(/rgba\(0, 255, 136, 0\.15\)/g, 'var(--success-bg)');
css = css.replace(/rgba\(0, 255, 136, 0\.6\)/g, 'var(--success-glow)');
css = css.replace(/rgba\(0, 255, 136, 0\.5\)/g, 'var(--success-glow)');
css = css.replace(/rgba\(0, 255, 136, 0\.9\)/g, 'var(--success-glow)');

// Success page advanced gradient text
css = css.replace(/linear-gradient\(to right, #00ff88 0%, var\(--primary\) 50%, #00ff88 100%\)/g, 'linear-gradient(to right, var(--success) 0%, var(--primary) 50%, var(--success) 100%)');
css = css.replace(/linear-gradient\(to right, #00ff88 0%, #00f0ff 50%, #00ff88 100%\)/g, 'linear-gradient(to right, var(--success) 0%, var(--primary) 50%, var(--success) 100%)');

css = css.replace(/rgba\(7, 7, 10, 0.95\)/g, 'var(--modal-bg)');
css = css.replace(/background: transparent; border: 1px solid var\(--border-highlight\);/g, 'background: var(--input-bg); border: 1px solid var(--border-highlight);');

css = css.replace('<div class="container fade-in">', '<button id="themeToggle" class="theme-toggle" aria-label="Toggle Theme"><i class="fas fa-sun"></i></button>\n    <div class="container fade-in">');

css = css.replace("const saveBtn = document.getElementById('saveBtn');", `const saveBtn = document.getElementById('saveBtn');
        const themeToggleBtn = document.getElementById('themeToggle');
        const rootStr = document.documentElement;
        
        let currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') rootStr.setAttribute('data-theme', 'light');
        updateThemeIcon();

        themeToggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            if (currentTheme === 'light') {
                rootStr.setAttribute('data-theme', 'light');
            } else {
                rootStr.removeAttribute('data-theme');
            }
            localStorage.setItem('theme', currentTheme);
            updateThemeIcon();
        });

        function updateThemeIcon() {
            if (currentTheme === 'light') {
                themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }`);

// Particles JS function fix
css = css.replace(/Math\.random\(\) > 0\.5 \? '#00ff88' : '#00f0ff'/g, 'Math.random() > 0.5 ? "var(--success)" : "var(--primary)"');

fs.writeFileSync(file, css);
console.log("Refactored aesthetic into " + file);
