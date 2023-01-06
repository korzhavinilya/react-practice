export default function delaySync() {
  let start = new Date().getTime();
  let end = start;
  while (end < start + 3000) {
    end = new Date().getTime();
  }
}
