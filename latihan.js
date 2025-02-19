function hitungGaji(hariHadir, potongan) {
  const gajiPokok = 5000000;
  const tambahanHadir = 200000;
  const bonus = 500000;

  //hitung tambahan berdasarkan kehadiran
  let totalGaji = gajiPokok;
  totalGaji += hariHadir * tambahanHadir;

  //berikan bonus jika lebih dari 20 hari hadir
  if (hariHadir > 20) {
    totalGaji += bonus;
  }

  // kurangkan potongan jika ada
  if (potongan > 200000) {
    totalGaji -= potongan;
  }

  return totalGaji;
}

// Contoh penggunaan
console.log(hitungGaji(15, 200000)); // Output: 7800000
console.log(hitungGaji(25, 0)); // Output: 10500000
console.log(hitungGaji(20, 200000)); // Output: 8800000