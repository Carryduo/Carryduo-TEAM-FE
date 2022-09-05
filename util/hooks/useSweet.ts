import Swal from "sweetalert2";

// SweetAlert CustomHook
export const useSweet = (timer: any, icon: any, title: any) => {
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
    title,
  });
};
