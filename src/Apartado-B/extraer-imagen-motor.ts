
export const regexCheck = (img: string): boolean => {
  const regexImg: RegExp = /<img\s+src="[^"]*"\s*\/?>/;
  return regexImg.test(img)
};

export const extractImg = (img: string): string[] => {
  const regexImg: RegExp = /<img\s+src="(?<image>[^"]*)"\s*\/?>/g;
  const matches: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regexImg.exec(img)) !== null) {
    matches.push(match[1]);
  };
  return matches;
};
