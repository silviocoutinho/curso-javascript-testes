const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your params');
  }
  return `${key}=${value}`;
};

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}

export function parse(string) {
  return Object.fromEntries(
    string.split('&').map(item => {
      const parts = item.split('=');
      if (parts[1].indexOf(',') > -1) {
        parts[1] = parts[1].split(',');
      }
      return parts;
    }),
  );
}
