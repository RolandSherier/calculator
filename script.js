function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  /*Берем все значения, и получаем подстроку с помощью substring(0 то есть с нулевого символа получить подстроку и до какого символа получить строку).
  Фактически мы перезапишем сумму в поле с -1 еденицей на конце, к примеру: число 1998 после перезаписи получится 199 и эти данные снова запишутся в ячейку input */
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
  /*Данные из калькулятора приходят ввиде строки, функция eval принимает строку и высчитывает результат eval("8 * 5"), после этого она возвращает результат и мы его возвращаем в тектовое поле */
  var exp = document.form.textview.value;
  // если строка не пуста (exp)
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}
