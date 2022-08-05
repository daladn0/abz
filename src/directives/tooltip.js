// `relative after:absolute after:top-0 after:left-0 after:bg-back after:block after:py-1 after:px-4 after:rounded after:text-white after:content-['${value}']`

export default {
  mounted(el, { value }) {
    if (el && value) {
      el.classList.add(`tooltip`);
    }
  },
};
