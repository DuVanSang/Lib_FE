document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Tài khoản cố định
  if (username === "admin" && password === "123456") {
    localStorage.setItem("token", "fake-jwt-token");
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
  }
});
