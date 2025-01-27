document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Permen Jagoan Neon",
        img: "jagoan-neon.jpg",
        price: 500,
        stars: [
          "currentColor",
          "currentColor",
          "currentColor",
          "currentColor",
          "currentColor",
        ],
      },
      {
        id: 2,
        name: "Silkys Marshmallow",
        img: "silkys-marshmallow.jpg",
        price: 1000,
        stars: [
          "currentColor",
          "currentColor",
          "currentColor",
          "currentColor",
          "none",
        ],
      },
      {
        id: 3,
        name: "Royale",
        img: "royale-500.jpg",
        price: 500,
        stars: ["currentColor", "currentColor", "currentColor", "none", "none"],
      },
      {
        id: 4,
        name: "Rinso",
        img: "rinso.jpg",
        price: 1000,
        stars: ["currentColor", "currentColor", "none", "none", "none"],
      },
      {
        id: 5,
        name: "Minyak Goreng",
        img: "minyak-goreng.jpg",
        price: 5000,
        stars: ["currentColor", "none", "none", "none", "none"],
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    showItem: {},
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      //   jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      //   jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
    show(item) {
      this.showItem = item;
    },
  });
});

// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
