// Get all variables
let number_value = document.getElementById("number_value");
let rest_value = document.getElementById("rest_value");
let term_value = document.getElementById("term_value");
let check_input = document.querySelector(".check_input");
let first_check_input = document.getElementById("first_check_input");
let second_check_input = document.getElementById("second_check_input");
let clear_all = document.querySelector(".clear_all");
let calculateAll = document.querySelector(".calculateAll");
let error = document.querySelectorAll(".error");
let head_input = document.querySelectorAll(".head_input");
let info_input = document.querySelectorAll(".info_input");
let dolar_sinze = document.querySelector(".dolar_sinze");
let situation = document.querySelector(".situation");
let new_situation = document.querySelector(".new_situation");
let footer_input = document.querySelectorAll(".footer_input"); // Corrected selector
let normale_value = document.querySelector(".normale_value");
let result_value = document.querySelector(".result_value");
let new_ferst_result = document.querySelector(".new_ferst_result");
let new_second_result = document.querySelector(".new_second_result");
let input = document.querySelectorAll(".input");
// Initial values
let selectedCalculationMode = "";

//clear all ===
clear_all.onclick = () => {
  number_value.value = "";
  rest_value.value = "";
  term_value.value = "";

  removeErrors();
  closeNavResult();
  resetToNormaleStyleOfSituantio();
};
//=============removeErrors()=======
const removeErrors = () => {
  error.forEach((item) => (item.style.display = "none"));
  info_input.forEach((item) => (item.style.border = "2px solid var(--Lime)"));
};
//==============closeNavResult()==============
const closeNavResult = () => {
  normale_value.style.display = "flex";
  result_value.style.display = "none";
  new_ferst_result.innerHTML = "";
  new_second_result.innerHTML = "";
};
// ==================resetToNormaleStyleOfSituantio()============
const resetToNormaleStyleOfSituantio = () => {
  dolar_sinze.style.backgroundColor = "hsl(203, 41%, 72%)";
  situation.style.backgroundColor = "hsl(203, 41%, 72%)";
  new_situation.style.backgroundColor = "hsl(203, 41%, 72%)";
};

//============creatNum()=========
const creatNum = () => {
  dolar_sinze.style.backgroundColor = "var(--Lime)";
  situation.style.backgroundColor = "var(--Lime)";
  new_situation.style.backgroundColor = "var(--Lime)";
};
// check_input_function===========
const checkInputFunction = () => {
  footer_input.forEach((item) => {
    item.onclick = (e) => {
      let input_value = e.target.closest(".input_check");
      if (input_value) {
        input_value.parentElement.classList.add("new_check_input");
        selectedCalculationMode = input_value.parentElement.textContent
          .trim()
          .toLowerCase();
      }
    };
  });
};
checkInputFunction();
//calculate and check;
calculateAll.onclick = () => {
  if (
    number_value.value == "" ||
    term_value.value == "" ||
    rest_value.value == ""
  ) {
    addErrors();
  } else {
    calculate_result();
  }
};

//================addErrors()=========
const addErrors = () => {
  error.forEach((item) => (item.style.display = "flex"));
  info_input.forEach((item) => (item.style.border = "2px solid var(--Red)"));
};
//=============== calculate_result================
const calculate_result = () => {
  let number = number_value.value;
  let term = term_value.value;
  let rest = rest_value.value;
  let result, allResult;
  if (selectedCalculationMode == "repayment") {
    result = ((number * term) / 12) / rest;
    allResult=(number*term)/rest;
  }else if(selectedCalculationMode=="interest only"){
    result = (number / 12) / rest;
    allResult=number/rest;
  }else{
    return alert("sorry you need to select one check")
  }
  showResult(result,allResult)
};

// show result ============
const showResult=(result,allResult)=>{
  normale_value.style.display="none";
  result_value.style.display="flex";
  new_ferst_result.innerHTML=result.toFixed(2)+"dh";
  new_second_result.innerHTML=allResult.toFixed(2)+"dh";
}