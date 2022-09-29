const methods = ["GET", "POST", "PUT", "DELETE", "_"];
const modes = ["no-cors", "cors", "same-origin", "_"];
const cats = [
  "default",
  "no-cache",
  "reload",
  "force-cache",
  "only-if-cached",
  "_",
];

const credential = ["same-origin", "include", "omit", "_"];
const contentTypes = ["text/plain", "_"];
const redirects = ["manual", "follow", "error", "_"];
const referrerPolicies = [
  "no-referrer",
  "no-referrer-when-downgrade",
  "origin",
  "strict-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url",
  "_"
];

export {
  methods,
  modes,
  cats,
  credential,
  contentTypes,
  redirects,
  referrerPolicies,
};
