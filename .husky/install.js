// Skip Husky install if HUSKY=0 (CI server)
// https://typicode.github.io/husky/how-to.html#ci-server-and-docker
if (process.env.HUSKY === "0") {
  process.exit(0);
}
const husky = (await import("husky")).default;
console.log(husky());
