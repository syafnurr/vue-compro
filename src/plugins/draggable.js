const draggable = {
  mounted(el) {
    let isDown = false;
    let startX;
    let scrollLeft;

    el.startDrag = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = el.scrollLeft;
    };

    el.endDrag = () => {
      isDown = false;
    };

    el.onDrag = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 2; // the * 2 is a multiplier to make scroll faster
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', el.startDrag);
    el.addEventListener('mouseleave', el.endDrag);
    el.addEventListener('mouseup', el.endDrag);
    el.addEventListener('mousemove', el.onDrag);
    el.addEventListener('touchstart', el.startDrag);
    el.addEventListener('touchend', el.endDrag);
    el.addEventListener('touchmove', el.onDrag);
  },
  unmounted(el) {
    // Clean up, remove event listeners
    el.removeEventListener('mousedown', el.startDrag);
    el.removeEventListener('mouseleave', el.endDrag);
    el.removeEventListener('mouseup', el.endDrag);
    el.removeEventListener('mousemove', el.onDrag);
    el.removeEventListener('touchstart', el.startDrag);
    el.removeEventListener('touchend', el.endDrag);
    el.removeEventListener('touchmove', el.onDrag);
  },
};

export default draggable;