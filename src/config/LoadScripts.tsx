import { useEffect } from "react";

const LoadScripts = () => {
  useEffect(() => {
    // Danh sách các script cần tải
    const scripts = [
      "/assets/vendor/jquery/jquery-3.2.1.min.js",
      "/assets/vendor/animsition/js/animsition.min.js",
      "/assets/vendor/bootstrap/js/popper.js",
      "/assets/vendor/bootstrap/js/bootstrap.min.js",
      "/assets/vendor/select2/select2.min.js",
      "/assets/vendor/daterangepicker/moment.min.js",
      "/assets/vendor/daterangepicker/daterangepicker.js",
      "/assets/vendor/slick/slick.min.js",
      "/assets/js/slick-custom.js",
      "/assets/vendor/parallax100/parallax100.js",
      "/assets/vendor/MagnificPopup/jquery.magnific-popup.min.js",
      "/assets/vendor/isotope/isotope.pkgd.min.js",
      "/assets/vendor/sweetalert/sweetalert.min.js",
      "/assets/vendor/perfect-scrollbar/perfect-scrollbar.min.js",
      "/assets/js/main.js",
    ];

    // Tải từng script
    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    // Cleanup khi component bị hủy
    return () => {
      scripts.forEach((src) => {
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      });
    };
  }, []);

  return null; // Không render gì cả, chỉ thực hiện tải script
};

export default LoadScripts;
