const rePass = /^(?=.*[A-Z])([a-zA-Z0-9!@#%&*_?]{7,})$/;
const myF = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username === "" || password === "") {
    alert("Bạn nhập sai!");
    return;
  }
  if (!rePass.test(password)) {
    alert("Bạn nhập sai!");
    return;
  }
  if (!isNaN(password[0])) {
    alert("Bạn nhập sai!");
    return;
  }

  alert("Bạn nhập đúng!");
};
