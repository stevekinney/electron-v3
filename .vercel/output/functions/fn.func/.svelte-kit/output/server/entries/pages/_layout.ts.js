const prerender = true;
const config = {
  runtime: "nodejs18.x"
};
const load = async ({ fetch }) => {
  const response = await fetch("/posts");
  const posts = await response.json();
  return { posts };
};
export {
  config,
  load,
  prerender
};
