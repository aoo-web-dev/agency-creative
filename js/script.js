// TODO: 1-usuli
// button.onclick = () => {
//   if (!document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.add("dark");
//   } else document.documentElement.classList.remove("dark");
// };

// TODO: 2-usuli
// function toggleDarkMode() {
//   if (!document.documentElement.classList.contains("dark")) {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// }
// button.onclick = toggleDarkMode;

// TODO: 3-usuli
button.onclick = () => document.documentElement.classList.toggle("dark");
