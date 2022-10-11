export const useName = (nameList: string, locale: string) => {
  if (locale === "en") {
    if (nameList.length <= 10) {
      return nameList;
    } else {
      return `${nameList.substring(0, 10)}...`;
    }
  } else {
    if (nameList.length <= 5) {
      return nameList;
    } else {
      return `${nameList.substring(0, 4)}...`;
    }
  }
};
