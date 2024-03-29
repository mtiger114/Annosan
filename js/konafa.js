function findColorAndVegetable() {
  const colors = [
    "تلميذ",
    "مساعد",
    "خبير",
    "محترف",
    "قائد",
    "معلم",
    "طبيب",
    "مهندس",
    "جندي",
    "تاجر",
    "مختوم",
    "مجرم",
    "منبوذ",
    "شرطي",
    "عالم",
    "خباز",
    "تابع",
    "امير",
    "رسام",
    "خياط",
    "مبتدئ",
    "متمرس",
    "فنان",
    "شرير",
    "مجنون",
    "كاتب",
    "بائع",
    "مريض",
    "مجهول",
    "امبراطور",
    "جينيرال",
  ];
  const vegetables = [
    "صياد",
    "قرصان",
    "شبح",
    "نينجا",
    "غول",
    "عملاق",
    "ساحر",
    "سياف",
    "متحول",
    "سايبورج",
    "سايان",
    "قناص",
  ];

  const input = document.getElementById("birthday").value;
  const birthday = input.split("/");
  const day = parseInt(birthday[0]);
  const month = parseInt(birthday[1]);

  if (
    isNaN(day) ||
    isNaN(month) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12
  ) {
    showError("اكتبها صح (يوم / شهر)");
  } else {
    const color = colors[day - 1];
    const vegetable = vegetables[month - 1];
    showResult(
      `<span style="color:${color.toLowerCase()}">${color}</span> - ${vegetable}`
    );
  }
}

function showError(message) {
  const output = document.getElementById("output");
  output.innerHTML = message;
  output.classList.remove("show");
  output.classList.add("fade-in");
}

function showResult(message) {
  const output = document.getElementById("output");
  output.innerHTML = message;
  output.classList.add("show");
  output.classList.remove("fade-in");
}

