export const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  console.log(element);
  element.scrollIntoView({
    behavior: "smooth",
  });
};
