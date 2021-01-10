export function r(r: string, t: string): string {
  let e = '';
  let n = r.length;
  let a = t.length;
  let i = Math.max(n, a);
  for (let o = 0; i > o; o +=1) {
      e += String.fromCharCode(r.charCodeAt(o % n) ^ t.charCodeAt(o % a));
  }
  return e;
}

export function t(r: string): string {
  for (var t = "", o = 0, e = 0, n = 0, a = 0; o < r.length;)
      e = r.charCodeAt(o),
      128 > e ? (t += String.fromCharCode(e),
      o++) : e > 191 && 224 > e ? (n = r.charCodeAt(o + 1),
      t += String.fromCharCode((31 & e) << 6 | 63 & n),
      o += 2) : (n = r.charCodeAt(o + 1),
      a = r.charCodeAt(o + 2),
      t += String.fromCharCode((15 & e) << 12 | (63 & n) << 6 | 63 & a),
      o += 3);
  return t
}

export function decrypt(token: string, data: string): string {
  const key = '84m5Gdpu47D31aKebFIDTrND44NFWdolWFitpKwYis95FY0K1YY5D7jG96YirxQi';
  const a = r(token, key);
  const decodedData = window.atob(data);
  return t(r(a, decodedData));
}