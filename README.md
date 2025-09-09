link aplikasi PWS: https://gusti-niera-oldschoolstrike.pbp.cs.ui.ac.id/

a. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
i. untuk membuat proyek Django baru kita harus membuat folder/direktori (disini kickoff-store) lalu aktifin virtual env dan ngelakuin instalasi terhadap dependencies, kemudian buat environment untuk simpen informasi konfigurasi dan untuk deployment ke web pws. Lalu edit juga izin akses website (allowed_host).
ii. untuk membuat aplikasi "main" kita aktifin virtual env di direktori lalu daftarkan 'main' ke INSTALLED_APPS di settings.py. 
iii. untuk buat model pada aplikasi main kita buat file main.html di folder baru (dalam direktori) yang isinya info kita. Di models.py buat model untuk website kita (disini football shop jadi isinya nama, harga, dll) lalu jalanin python manage. 
iv. untuk buat fungsi di views.py ke dalam template HTML kita bisa kasih context dari identitas kita di views.py yang sesuai dengan yg udah di tulis di main.html.
v. untuk routing urls.py kita buat urls.py (di main) dengan path('', show_main, name='main') trs include('main.urls') di urls.py (di projek) [include untuk impor pola rute URL dari aplikasi main ke urls.py (di projek)].
vi. untuk deploy ke PWS kita bisa git add, commit, dan push ke git dan juga pws di branch utama (master) [sebelumnya pastikan direktori sudah tersambung ke git dan juga pws].

b. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.
- workflow image link: 
https://miro.medium.com/v2/resize:fit:4800/format:webp/1*8GLGtS0YYD1c8-QQZIshqw.png
- reference: 
Pravesh Grewal. (2025, March 13). Understanding Django’s Workflow — A Visual Guide. Medium. Retrieved from https://medium.com/pythons-gurus/understanding-djangos-workflow-a-visual-guide-adb3867fb042
Respons itu jawaban yang dikirim server Django ke browser setelah view selesai memproses request. 
> View menerima request -> ambil dan proses data (opsional lewat models) -> conclude hasilnya jadi respons -> respons: yang browser/website tampilin.
1. Ketika client kirim request ke server Django, request masuk ke URL dispatcher (disini urls.py di project). Urls.py akan cocokin pola URL dengan nama view yang sesuai. 
> Mapping path -> view.
2. Django panggil view yg fungsinya untuk jembatan utama. View nerima objek request, eksekusi logika, dan nentuin tipe respons. 
> Jika diperlukan interaksi database, view manggil model
> Jika tidak, view hanya proses data internal
View bisa mengembalikan berbagai jenis respons (kotak biru jd pusat workflow).
3. Models berisi definisi struktur data untuk interaksi sama database. Jika view butuh data maka view akan panggil method model dimana model akan return objek yang akan diproses view. 
> Digambar ada jalur ke “database interaction?” dan kotak merah “Fetch Data (models.py)” yg menyediakan/pass data ke view.
4. Setelah view punya data, view manggil template untuk render berkas HTML. Template hanya nampilin data tapi logic tetap di view atau model.
> Tahap “Render HTML (templates/)” ngehasilin output yang dikirim sebagai respons ke user.

c. Jelaskan peran settings.py dalam proyek Django!
Settings.py adalah file utama yang berisi semua pengaturan untuk proyek Django kita. Settings.py tempat mengatur bagaimana aplikasi Django berfungsi dan berjalan. Di dalamnya ada hal-hal penting seperti aplikasi yang dipakai, databases, time zone and language zone, bahkan secret key, dll. File ini jg nentuin apakah aplikasi berjalan dalam mode development (DEBUG=True) atau production (DEBUG=False).

d. Bagaimana cara kerja migrasi database di Django?
Migrasi bekerja sebagai jembatan perubahan yang kita buat pada models.py dengan struktur yang di database agar struktur DB selalu cocok dengan model aplikasi. 
> Command python manage.py makemigrations membuat Django membandingkan keadaan model sekarang sama yang sudah tercatat lalu ngehasilin file berisi serangkaian operation yang mengdeskripsikan langkah-langkah perubahan. 
> Command python manage.py migrate untuk menerapkan perubahan tersebut ke database dimana Django.
> Django menyimpan catatan migrasi yang sudah dijalankan di tabel django_migrations.
- reference:
Yusuf T Ardho. (2020, April 30). Migrasi dan Penyemaian di Django. Medium. Retrieved from https://medium.com/@ardho/migration-and-seeding-in-django-3ae322952111 

e. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
Menurut saya karena Django adalah framework yang lengkap dan bisa mempermudah pembuatan aplikasi web dengan cepat lewat fitur bawaan. Selain mudah digunakan, Django juga hemat biaya karena merupakan proyek python gratis dan sumber terbuka. Mekanisme keamanan bawaan Django juga dapat melindungi dari serangan umum. Django juga merupakan framework yang populer dan punya komunitas besar sehingga pemula lebih mudah untuk menemukan guide di google, youtube, dll.
- reference:
Aws Amazon. (n.d). Apa itu Django? Retrieved from https://aws.amazon.com/id/what-is/django/#:~:text=Django%20adalah%20perangkat%20lunak%20yang,basis%20data%2C%20dan%20manajemen%20cookie. 

f. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?
Menurut saya, asisten dosen pada tutorial 1 sudah sangat baik karena bahasa yang digunakan mudah untuk dimengerti serta memberi step by step yang jelas. Pada tutorial, istilah-istilah asing untuk pemula juga dijelaskan dengan baik. Asdos juga memberi penjelasan secara umum mengenai materi/konsep,baik secara teori dan untuk praktik, dan beberapa side notes penting.