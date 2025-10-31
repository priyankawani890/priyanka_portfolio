# Priyanka Wani — Portfolio (Plain HTML + Tailwind CSS)

This is a ready-to-use portfolio built with plain HTML and Tailwind CSS (Play CDN).  
It was generated from the user's resume (name, experience, projects, contact) to provide a professional dark-mode portfolio you can edit quickly.

## How to use
1. Unzip the folder.
2. Open `index.html` in your browser.
3. Edit content:
   - Replace `assets/profile.svg` with your profile photo (same filename) or update the `<img>` `src`.
   - Update contact links and GitHub links in the `index.html`.
4. To deploy:
   - Push to GitHub and enable GitHub Pages, or
   - Host on Netlify/Vercel by dragging the folder.

## Notes
- The contact form is static and will `alert()` on submit. Integrate Formspree/Netlify Forms or a backend to enable submissions.
- Tailwind is included via CDN (good for quick edits). For production, consider installing Tailwind locally for purging unused CSS.

## Source
The content (experience, projects, contact) was derived from the user's uploaded resume PDF.
