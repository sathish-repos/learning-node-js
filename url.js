import url from "url";

const urlString = "https://www.google.com/search?q=hello+world";

const urlObj = new URL(urlString);

console.log(urlObj);
console.log(urlObj.pathname);
console.log(urlObj.search);

console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

console.log(url.fileURLToPath(import.meta.url));

const perams = new URLSearchParams(urlObj.search);
console.log(perams);
console.log(perams.get("q"));

perams.append("limit", "5");
perams.delete("limit");
console.log(perams);
