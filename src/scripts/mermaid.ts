const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

async function draw() {
  const nodes = document.querySelectorAll<HTMLElement>('pre.mermaid');
  if (!nodes.length) return;
  const { default: mermaid } = await import('mermaid');
  nodes.forEach((n) => {
    n.dataset.src ??= n.textContent ?? '';
    n.removeAttribute('data-processed');
    n.textContent = n.dataset.src;
  });
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    fontFamily: css('--sans'),
    themeVariables: {
      background: css('--bg'),
      primaryColor: css('--soft'),
      primaryTextColor: css('--text'),
      primaryBorderColor: css('--muted'),
      lineColor: css('--muted'),
      secondaryColor: css('--bg'),
      tertiaryColor: css('--bg'),
    },
  });
  await mermaid.run({ nodes: [...nodes] });
}

draw();
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', draw);
