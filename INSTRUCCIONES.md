# 📚 Colegio Adventista de Paso Canoas – Guía del Sitio Web

## 📁 Estructura de carpetas recomendada

```
colegio-adventista/
│
├── index.html          ← Página principal
├── style.css           ← Estilos del sitio
├── script.js           ← Lógica e interactividad
│
└── img/                ← ★ CREA ESTA CARPETA y coloca tus imágenes aquí
    ├── logo.png              ← Logo del colegio (PNG transparente, ~200×200px)
    ├── banner-1.jpg          ← Foto banner principal (~1920×1080px)
    ├── banner-2.jpg          ← Foto banner 2
    ├── banner-3.jpg          ← Foto banner 3
    ├── historia.jpg          ← Foto histórica del colegio
    ├── galeria-aulas.jpg     ← Foto aulas
    ├── galeria-cancha.jpg    ← Foto cancha deportiva
    ├── galeria-acto.jpg      ← Foto acto cívico
    ├── galeria-labs.jpg      ← Foto laboratorio
    └── ...                   ← Más fotos según necesites
```

---

## 🖼️ Cómo reemplazar imágenes de relleno

Busca en `index.html` los comentarios:
```
★ REEMPLAZA esta imagen con...
★ Reemplaza src con tu foto real ★
```

Ejemplo — cambiar banner 1:
```html
<!-- ANTES (imagen de relleno): -->
<div class="hero-slide" style="background-image: url('https://images.unsplash.com/...');">

<!-- DESPUÉS (tu foto real): -->
<div class="hero-slide" style="background-image: url('img/banner-1.jpg');">
```

---

## 🔧 Cambios de contenido frecuentes

### Teléfonos y correos (`index.html`)
Busca y reemplaza:
- `+506 7777-7777` → tu número real
- `info@capc.ed.cr` → tu correo real
- `matriculas@capc.ed.cr` → tu correo de matrículas

### Logo
En `style.css`, busca:
```css
/* ★ Cuando tengas el logo real, reemplaza con: */
background: url('img/logo.png') center/contain no-repeat;
```
Y aplica esa línea al selector `.logo-placeholder`.

### Mapa de Google Maps
En `index.html`, busca el `<iframe>` de Google Maps y reemplaza la URL del `src` con tu embed real:
1. Ve a maps.google.com
2. Busca "Paso Canoas, Corredores"
3. Haz clic en Compartir → Insertar mapa → copia el código

### Formularios PDF descargables
En `script.js`, función `showAlert`:
```js
// Reemplaza con:
window.location.href = 'docs/formulario-matricula-2025.pdf';
```
Y coloca los PDFs reales en la carpeta `/docs/`.

---

## 🌐 Plataformas digitales

| Plataforma     | URL actual              | Cómo actualizar                          |
|----------------|------------------------|------------------------------------------|
| CloudCampus    | cloudcampus.cr         | Verifica la URL real de tu colegio       |
| Portal Estudiantes | `#` (por definir)   | Reemplaza `#` con la URL de tu sistema   |
| Portal Padres  | `#` (por definir)       | Reemplaza `#` con la URL de tu sistema   |

---

## 🚀 Publicar el sitio web

### Opción gratuita — GitHub Pages
1. Crea una cuenta en github.com
2. Nuevo repositorio → sube los 3 archivos y la carpeta `img/`
3. Settings → Pages → Branch: main → Save
4. Tu sitio estará en: `https://tunombre.github.io/nombre-repo/`

### Opción profesional — Hosting compartido (Hostinger, SiteGround, etc.)
1. Contrata un dominio: ej. `capc.ed.cr` o `adventistapasoanoas.cr`
2. Sube los archivos por FTP o el administrador de archivos del cPanel
3. Apunta el dominio a tu hosting

---

## 🎨 Personalización de colores

En `style.css`, al inicio del archivo, puedes cambiar la paleta:
```css
:root {
  --navy:        #0d2a4e;   /* Azul oscuro principal */
  --navy-mid:    #1a3f72;   /* Azul medio */
  --gold:        #c9912a;   /* Dorado */
  --gold-light:  #e8b84b;   /* Dorado claro */
}
```

---

## 📞 Soporte

Si necesitas modificaciones adicionales al sitio, contacta al desarrollador
que generó este código o a un profesional web local en Costa Rica.

**Generado para:** Colegio Adventista de Paso Canoas  
**Tecnologías:** HTML5 · CSS3 · JavaScript · Bootstrap 5 · AOS  
