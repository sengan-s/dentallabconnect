import base64
import os
import subprocess
import time
from PIL import Image

def get_base64_img(rel_path):
    abs_path = os.path.abspath(rel_path)
    if not os.path.exists(abs_path):
        print(f"Warning: {abs_path} not found")
        return ""
    ext = os.path.splitext(abs_path)[1].lower().replace('.', '')
    mime = "image/png" if ext == "png" else "image/jpeg"
    with open(abs_path, "rb") as f:
        data = base64.b64encode(f.read()).decode('utf-8')
    return f"data:{mime};base64,{data}"

saravana_b64 = get_base64_img("public/images/saravana-kumar.png")
scanner_b64 = get_base64_img("public/images/categories/dental-scanner.jpg")
zirconia_b64 = get_base64_img("public/images/categories/reliance-zirconia.jpg")
bg_b64 = get_base64_img("public/images/dental-lab-hero-bg.jpg")

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }}
    body {{
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #08090B;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #FFFFFF;
      position: relative;
    }}
    .bg-image {{
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.22;
      filter: contrast(1.15) brightness(0.95);
      pointer-events: none;
    }}
    .bg-overlay {{
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #08090B 0%, rgba(8,9,11,0.96) 46%, rgba(8,9,11,0.85) 65%, rgba(8,9,11,0.30) 84%, rgba(8,9,11,0.80) 100%);
      pointer-events: none;
    }}
    .radial-glow-1 {{
      position: absolute;
      top: -100px;
      left: 100px;
      width: 600px;
      height: 420px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, transparent 70%);
      filter: blur(85px);
      pointer-events: none;
    }}
    .radial-glow-2 {{
      position: absolute;
      bottom: -60px;
      right: 140px;
      width: 650px;
      height: 420px;
      background: radial-gradient(circle, rgba(192, 196, 202, 0.14) 0%, transparent 70%);
      filter: blur(95px);
      pointer-events: none;
    }}
    .container {{
      position: relative;
      z-index: 10;
      width: 1200px;
      height: 630px;
      padding: 44px 54px 34px 54px;
      display: flex;
      justify-content: space-between;
    }}
    .left-col {{
      width: 720px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}
    .top-badge-row {{
      display: flex;
      align-items: center;
      gap: 12px;
    }}
    .logo-badge {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, #FFFFFF 0%, #C0C4CA 50%, #4A4E58 100%);
      padding: 1.5px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5);
    }}
    .logo-badge-inner {{
      width: 100%;
      height: 100%;
      border-radius: 10.5px;
      background: #08090B;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 16px;
      letter-spacing: 0.05em;
      color: #FFFFFF;
    }}
    .tag-pill {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.14);
      font-size: 11.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #D0D4DC;
    }}
    .new-indicator {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 999px;
      background: rgba(16, 185, 129, 0.16);
      border: 1px solid rgba(16, 185, 129, 0.40);
      font-size: 11px;
      font-weight: 700;
      color: #34D399;
      letter-spacing: 0.06em;
    }}
    .pulse-dot {{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10B981;
      box-shadow: 0 0 8px #10B981;
    }}
    .title-area {{
      margin-top: 14px;
    }}
    .main-title {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 800;
      font-size: 56px;
      line-height: 1.12;
      letter-spacing: -0.01em;
      color: #FFFFFF;
      text-shadow: 0 4px 20px rgba(0,0,0,0.9);
      display: flex;
      align-items: center;
      gap: 16px;
    }}
    .main-title-light {{
      color: #D2D6E2;
      font-weight: 700;
    }}
    .subtitle {{
      margin-top: 10px;
      font-size: 18.5px;
      font-weight: 500;
      color: #C0C5D2;
      line-height: 1.35;
      max-width: 680px;
      letter-spacing: -0.01em;
    }}
    .stats-pills {{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 16px;
    }}
    .stat-badge {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 13px;
      border-radius: 9px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.12);
      font-size: 11.5px;
      font-weight: 600;
      color: #E2E5EC;
    }}
    .stat-badge-accent {{
      background: rgba(16, 185, 129, 0.12);
      border-color: rgba(16, 185, 129, 0.35);
      color: #A7F3D0;
    }}
    .products-showcase {{
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 20px;
    }}
    .prod-card {{
      flex: 1;
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 16px;
      border-radius: 16px;
      background: rgba(18, 20, 26, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.14);
      box-shadow: 0 12px 28px rgba(0,0,0,0.55);
      backdrop-filter: blur(12px);
    }}
    .prod-thumb {{
      width: 66px;
      height: 66px;
      border-radius: 12px;
      overflow: hidden;
      background: #0B0D11;
      border: 1px solid rgba(255, 255, 255, 0.12);
      flex-shrink: 0;
    }}
    .prod-thumb img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }}
    .prod-info {{
      display: flex;
      flex-direction: column;
      gap: 3px;
    }}
    .prod-tag {{
      font-size: 9.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #34D399;
    }}
    .prod-name {{
      font-size: 15px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.2;
    }}
    .prod-sub {{
      font-size: 11px;
      color: #9AA0AC;
      font-weight: 400;
      line-height: 1.3;
    }}
    .footer-bar {{
      margin-top: 18px;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #9AA0AC;
    }}
    .contact-badge {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #FFFFFF;
      font-weight: 600;
      font-size: 12.5px;
    }}
    .whatsapp-icon {{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #25D366;
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 900;
    }}
    .right-col {{
      width: 410px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }}
    .owner-container {{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 410px;
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }}
    .owner-img {{
      max-height: 520px;
      width: auto;
      object-fit: contain;
      object-position: bottom center;
      filter: drop-shadow(0 20px 45px rgba(0,0,0,0.95)) brightness(1.02);
    }}
    .owner-overlay-plate {{
      position: relative;
      z-index: 20;
      width: 92%;
      margin-top: -26px;
      margin-bottom: 8px;
      padding: 10px 16px;
      border-radius: 14px;
      background: rgba(14, 16, 22, 0.94);
      border: 1px solid rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(14px);
      box-shadow: 0 14px 34px rgba(0,0,0,0.9);
      text-align: center;
    }}
    .signature-name {{
      font-family: 'Dancing Script', cursive;
      font-size: 32px;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.1;
      text-shadow: 0 2px 10px rgba(0,0,0,0.85);
    }}
    .owner-title {{
      font-size: 10px;
      font-family: 'Plus Jakarta Sans', monospace;
      font-weight: 700;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: #A0A5AE;
      margin-top: 2px;
    }}
  </style>
</head>
<body>
  <img src="{bg_b64}" class="bg-image" alt="">
  <div class="bg-overlay"></div>
  <div class="radial-glow-1"></div>
  <div class="radial-glow-2"></div>

  <div class="container">
    <div class="left-col">
      <div>
        <div class="top-badge-row">
          <div class="logo-badge">
            <div class="logo-badge-inner">DLC</div>
          </div>
          <div class="tag-pill">Dental Laboratory Solutions</div>
          <div class="new-indicator">
            <span class="pulse-dot"></span>
            <span>Dental Scanner Solutions</span>
          </div>
        </div>

        <div class="title-area">
          <h1 class="main-title">
            <span>Dental Lab</span>
            <span class="main-title-light">Connect</span>
          </h1>
          <p class="subtitle">Premium Dental Laboratory Products &amp; Digital Scanning Solutions</p>
        </div>

        <div class="stats-pills">
          <div class="stat-badge stat-badge-accent">
            <span>✦ Intraoral Scanner Available</span>
          </div>
          <div class="stat-badge">
            <span>Reliance Zirconia</span>
          </div>
          <div class="stat-badge">
            <span>Clear Aligners</span>
          </div>
          <div class="stat-badge">
            <span>CAD/CAM Restorations</span>
          </div>
        </div>
      </div>

      <div>
        <div class="products-showcase">
          <div class="prod-card">
            <div class="prod-thumb">
              <img src="{scanner_b64}" alt="Dental Scanner">
            </div>
            <div class="prod-info">
              <div class="prod-tag">NEW · DIGITAL SCANNING</div>
              <div class="prod-name">Dental Scanner Solutions</div>
              <div class="prod-sub">Accurate digital impressions &amp; lab sync</div>
            </div>
          </div>

          <div class="prod-card">
            <div class="prod-thumb">
              <img src="{zirconia_b64}" alt="Zirconia Crowns">
            </div>
            <div class="prod-info">
              <div class="prod-tag">PREMIUM RESTORATIONS</div>
              <div class="prod-name">Reliance Zirconia Crowns</div>
              <div class="prod-sub">Multilayer aesthetic translucency</div>
            </div>
          </div>
        </div>

        <div class="footer-bar">
          <div class="contact-badge">
            <span class="whatsapp-icon">✓</span>
            <span>WhatsApp &amp; Call: +91 76396 64119</span>
          </div>
          <div>Laboratory Partner for Dental Professionals</div>
        </div>
      </div>
    </div>

    <div class="right-col">
      <div class="owner-container">
        <img src="{saravana_b64}" class="owner-img" alt="Saravana Kumar">
        <div class="owner-overlay-plate">
          <div class="signature-name">Saravana Kumar</div>
          <div class="owner-title">DENTAL LAB CONNECT</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
"""

temp_html_path = os.path.abspath("temp_og_preview.html")
with open(temp_html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
out_png_path = os.path.abspath("public/og-thumbnail.png")

cmd = [
    edge_path,
    "--headless=new",
    f"--screenshot={out_png_path}",
    "--window-size=1200,630",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--virtual-time-budget=2000",
    f"file:///{temp_html_path.replace(os.sep, '/')}"
]

res = subprocess.run(cmd, capture_output=True, text=True)

if os.path.exists(out_png_path):
    img = Image.open(out_png_path)
    if img.size != (1200, 630):
        img = img.crop((0, 0, 1200, 630)) if img.size[0] >= 1200 and img.size[1] >= 630 else img.resize((1200, 630), Image.Resampling.LANCZOS)
        img.save(out_png_path, "PNG", optimize=True)
    print(f"Generated successfully: {out_png_path} ({img.size})")

if os.path.exists(temp_html_path):
    os.remove(temp_html_path)
