/**
 * Scroll To
 * @param {string} selector - selector of dom element
 */
export const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  element.scrollIntoView({
    behavior: "smooth",
  });
};
