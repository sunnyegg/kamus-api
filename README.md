# Kamus API

Seperti namanya, ini adalah sebuah API untuk mencari arti dari sebuah kata dalam Bahasa Indonesia dengan merujuk ke [KBBI](https://kbbi.web.id/) (Kamus Besar Bahasa Indonesia).

## Fitur Utama

| Nama | Deskripsi | Endpoint | Payload | Headers |
| ---- | ---- | ---- | ---- | ---- |
| GetOneKata | Untuk mencari sebuah kata yang tersedia di dalam database | GET `/kata?nama=` | Sebuah query di URL: `nama: string` | - |
| CreateOneKata | Untuk memasukkan kata baru ke dalam database | POST `/kata` | Sebuah JSON Object di body: `{ "nama": string, "arti": string }` | `"Content-Type": "application/json"` |
| UpdateOneKata | Untuk memperbarui kata yang tersedia di dalam database | PUT `/kata/:id` | Sebuah params di URL `id: string` & JSON Object di body: `{ "nama": string, "arti": string }` | `"Content-Type": "application/json"` |
| DeleteOneKata | Untuk menghapus kata yang tersedia di dalam database | DELETE `/kata/:id` | Sebuah params di URL `id: string` | - |

## Fitur Yang Akan Datang

- [x] Authentication
- [x] Authorization
- [x] Menampilkan lebih dari satu arti (jika ada)
- [x] Menampilkan cara ucap
- [x] Menampilkan jenis kata
- [x] Menampilkan contoh penggunaan kata
- [ ] Mencari kata di web KBBI jika kata tidak ditemukan di dalam database, kemudian menyimpannya

## Development

Jika ingin menggunakan untuk development, cukup jalankan perintah:

```bash
bun run dev
```

Maka program akan berjalan sesuai dengan `PORT` pada `.env`.