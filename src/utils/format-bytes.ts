export function bytesToMegabytes(bytes: number): string {
  const k = 1024;
  const megabytes = bytes / k / k;
  return megabytes.toFixed(1) + " MB";
}
