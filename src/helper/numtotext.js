export const terbilangIndonesia = (angka) => {
  const huruf = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
    "enam belas",
    "tujuh belas",
    "delapan belas",
    "sembilan belas",
  ];
  const ribuan = ["", "ribu", "juta", "miliar", "triliun"];

  if (angka === 0) {
    return "nol";
  } else {
    let hasil = "";
    let digit = 0;

    while (angka > 0) {
      let sisa = angka % 1000;
      if (sisa > 0) {
        let temp = "";
        if (sisa < 20) {
          temp = huruf[sisa] + " ";
        } else if (sisa < 100) {
          temp =
            huruf[Math.floor(sisa / 10)] + " puluh " + huruf[sisa % 10] + " ";
        } else {
          temp =
            huruf[Math.floor(sisa / 100)] +
            " ratus " +
            huruf[Math.floor((sisa % 100) / 10)] +
            " puluh " +
            huruf[sisa % 10] +
            " ";
        }
        hasil = temp + ribuan[digit] + " " + hasil;
      }
      angka = Math.floor(angka / 1000);
      digit++;
    }

    return hasil.trim();
  }
};

export const ubahRupiah = (num) => {
  const currencyFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return currencyFormat.format(num);
};
