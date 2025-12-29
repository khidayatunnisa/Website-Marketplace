function loadPage(page) {
  if (page === "catalog") {
    document.getElementById("content").innerHTML = `
      <h3>Catalog</h3>
      <p>Daftar produk UMKM</p>
    `;
  }

  if (page === "cart") {
    document.getElementById("content").innerHTML = `
      <h3>Cart</h3>
      <p>Isi keranjang</p>
    `;
  }

  if (page === "order") {
    document.getElementById("content").innerHTML = `
      <h3>Order</h3>
      <p>Status pesanan</p>
    `;
  }

  if (page === "payment") {
    document.getElementById("content").innerHTML = `
      <h3>Payment</h3>
      <button onclick="alert('Sandbox Payment')">Bayar</button>
    `;
  }

  if (page === "admin") {
    document.getElementById("content").innerHTML = `
      <h3>Admin Dashboard</h3>
      <p>Kelola produk</p>
    `;
  }

  // Untuk katalog bisa dikembangkan nantinya
console.log('Catalog page loaded');

}
