  document.addEventListener("mousemove", (e) => {
    document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`;
  });
