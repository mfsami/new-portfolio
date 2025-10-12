const links = [...document.querySelectorAll('.sidenav .nav-item[href^="#"]')];
const ids = links.map(a => a.getAttribute('href')).filter(Boolean).map(h => h.slice(1));
const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

const io = new IntersectionObserver(entries => {
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + visible.target.id));
}, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .25, .5, .75, 1] });

sections.forEach(s => io.observe(s));