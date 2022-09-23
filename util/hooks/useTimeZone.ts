export const useTimeZone = (time: string) => {
  return `${time.slice(0, 10)} ${time.slice(11, 19)}`;
};
