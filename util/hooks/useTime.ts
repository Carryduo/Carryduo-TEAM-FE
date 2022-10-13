export const useTime = (time: number) => {
  let now = new Date();
  let after2w = new Date();
  after2w.setMinutes(now.getMinutes() + time);
  return after2w;
};
