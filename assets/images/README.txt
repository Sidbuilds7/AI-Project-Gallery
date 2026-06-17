Celestial Pathway — image assets
=================================

Drop final photography here, then replace the placeholder blocks in the HTML.

Search the HTML files for `TODO(Himanshu)` or `placeholder` to find each spot.

Recommended images (all should feel calm, warm, premium — soft natural light):

  founder-portrait.jpg     ~  900 x 1125  (4:5)   — used on home hero + about page
  service-reiki.jpg        ~ 1200 x  825  (16:11) — services.html #reiki
  service-numerology.jpg   ~ 1200 x  825  (16:11) — services.html #numerology
  service-palmistry.jpg    ~ 1200 x  825  (16:11) — services.html #palmistry
  product-*.jpg            ~  800 x  800  (1:1)    — homepage #products
  og.jpg                   ~ 1200 x  630          — social share preview

Tips:
- Export web-optimised JPG/WebP, keep each under ~250KB where possible.
- The .media containers already crop with object-fit: cover, so exact sizes are flexible.
- Example replacement:
    <div class="media media--portrait">
      <img src="assets/images/founder-portrait.jpg" alt="Healer Vinita Raizada" />
    </div>
  (remove the <div class="placeholder">…</div> block)
