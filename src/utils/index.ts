export const isExternalLink = (url: string): boolean => {
  return /^https?:\/\//.test(url);
};