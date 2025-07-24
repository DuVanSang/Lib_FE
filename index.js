// Nếu chưa đăng nhập -> chuyển về login
if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}

// Xử lý logout
document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "login.html";
});
