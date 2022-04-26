const form = document.querySelector(".joinForm");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
  if (!isId("userId", 6)) {
    e.preventDefault();
  }

  if (!isPassword("pwd1", "pwd2", 8)) {
    e.preventDefault();
  }

  if (!isEmail("email")) {
    e.preventDefault();
  }

  if (!isCheck("gender")) {
    e.preventDefault();
  }

  if (!isInterest("interest")) {
    e.preventDefault();
  }
});

function isId(name, len = 6) {
  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;

  const userIdBox = form.querySelector("#userId");

  if (txt.length >= len) {
    userIdBox.classList.remove("error");

    return true;
  } else {
    userIdBox.classList.add("error");

    return false;
  }
}

function isPassword(name1, name2, len = 8) {
  let pwd = form.querySelector(`[name=${name1}]`);
  let rePwd = form.querySelector(`[name=${name2}]`);

  let pwdValue = pwd.value;
  let rePwdValue = rePwd.value;

  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+?><]/;

  const rePwdBox = form.querySelector("#pwd2");
  const pwdBox = form.querySelector("#pwd1");

  if (
    num.test(pwdValue) &&
    eng.test(pwdValue) &&
    spc.test(pwdValue) &&
    pwdValue.length >= len
  ) {
    if (pwdValue === rePwdValue) {
      rePwdBox.classList.remove("error");
      pwdBox.classList.remove("error");
      return true;
    } else {
      pwdBox.classList.remove("error");
      rePwdBox.classList.add("error");
    }
  } else {
    pwdBox.classList.add("error");
    return false;
  }
}

function isEmail(name) {
  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;
  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const userEmailBox = form.querySelector("#email");

  if (regEmail.test(txt)) {
    userEmailBox.classList.remove("error");

    return true;
  } else {
    userEmailBox.classList.add("error");

    return false;
  }
}

function isCheck(name) {
  let inputs = form.querySelectorAll(`[name=${name}]`);
  let isCheck = false;

  const userGenderBox = form.querySelector(".genderTitle");

  for (let input of inputs) {
    if (input.checked) {
      isCheck = true;
    }
  }

  if (isCheck) {
    userGenderBox.classList.remove("error");

    return true;
  } else {
    userGenderBox.classList.add("error");

    return false;
  }
}

function isInterest(name) {
  let inputs = form.querySelectorAll(`[name=${name}]`);
  let isCheck = false;

  const userInterestBox = form.querySelector(".interestTitle");

  for (let input of inputs) {
    if (input.checked) {
      isCheck = true;
    }
  }

  if (isCheck) {
    userInterestBox.classList.remove("error");

    return true;
  } else {
    userInterestBox.classList.add("error");

    return false;
  }
}

const formMo = document.querySelector(".joinFormMo");
const btnSubmitMo = formMo.querySelector("input[type=submit]");

btnSubmitMo.addEventListener("click", (e) => {
  if (!isIdMo("userIdMo", 6)) {
    e.preventDefault();
  }

  if (!isPasswordMo("pwd1Mo", "pwd2Mo", 8)) {
    e.preventDefault();
  }

  if (!isEmailMo("emailMo")) {
    e.preventDefault();
  }

  if (!isCheckMo("genderMo")) {
    e.preventDefault();
  }

  if (!isInterestMo("interestMo")) {
    e.preventDefault();
  }
});

function isIdMo(name, len = 6) {
  let input = formMo.querySelector(`[name=${name}]`);
  let txt = input.value;

  const userIdBox = formMo.querySelector("#userIdMo");

  if (txt.length >= len) {
    userIdBox.classList.remove("error");

    return true;
  } else {
    userIdBox.classList.add("error");

    return false;
  }
}

function isPasswordMo(name1, name2, len = 8) {
  let pwd = formMo.querySelector(`[name=${name1}]`);
  let rePwd = formMo.querySelector(`[name=${name2}]`);

  let pwdValue = pwd.value;
  let rePwdValue = rePwd.value;

  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+?><]/;

  const rePwdBox = formMo.querySelector("#pwd2Mo");
  const pwdBox = formMo.querySelector("#pwd1Mo");

  if (
    num.test(pwdValue) &&
    eng.test(pwdValue) &&
    spc.test(pwdValue) &&
    pwdValue.length >= len
  ) {
    if (pwdValue === rePwdValue) {
      rePwdBox.classList.remove("error");
      pwdBox.classList.remove("error");
      return true;
    } else {
      pwdBox.classList.remove("error");
      rePwdBox.classList.add("error");
    }
  } else {
    pwdBox.classList.add("error");
    return false;
  }
}

function isEmailMo(name) {
  let input = formMo.querySelector(`[name=${name}]`);
  let txt = input.value;
  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const userEmailBox = formMo.querySelector("#emailMo");

  if (regEmail.test(txt)) {
    userEmailBox.classList.remove("error");

    return true;
  } else {
    userEmailBox.classList.add("error");

    return false;
  }
}

function isCheckMo(name) {
  let inputs = formMo.querySelectorAll(`[name=${name}]`);
  let isCheck = false;

  const userGenderH2 = formMo.querySelector(".genderTitle");

  for (let input of inputs) {
    if (input.checked) {
      isCheck = true;
    }
  }

  if (isCheck) {
    userGenderH2.classList.remove("error");

    return true;
  } else {
    userGenderH2.classList.add("error");

    return false;
  }
}

function isInterestMo(name) {
  let inputs = formMo.querySelectorAll(`[name=${name}]`);
  let isCheck = false;

  const userInterestH2 = formMo.querySelector(".interestTitle");

  for (let input of inputs) {
    if (input.checked) {
      isCheck = true;
    }
  }

  if (isCheck) {
    userInterestH2.classList.remove("error");

    return true;
  } else {
    userInterestH2.classList.add("error");

    return false;
  }
}

