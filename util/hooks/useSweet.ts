import Swal from "sweetalert2";

export const useSweet = (timer: any, icon: any, title: any) => {
  const text = title === "Unauthorized" ? "로그인이 필요합니다" : title;
  return Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon,
    text,
  });
};
