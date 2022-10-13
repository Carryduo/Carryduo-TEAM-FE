type objType = {
  [key: string]: string;
};

export const useGetPosition = (obj: objType, value: string) => {
  return Object.keys(obj).find((key: string) => {
    return obj[key] === value;
  });
};
