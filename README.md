link aplikasi PWS: https://gusti-niera-oldschoolstrike.pbp.cs.ui.ac.id/

TUGAS INDIVDIU 2:
a. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
i. untuk membuat proyek Django baru kita harus membuat folder/direktori (disini oldschool-strike) lalu aktifin virtual env dan ngelakuin instalasi terhadap dependencies, kemudian buat environment untuk simpen informasi konfigurasi dan untuk deployment ke web pws. Lalu edit juga izin akses website (allowed_host).
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


TUGAS INDIVIDU 3:
image1:![xml](<Screenshot 2025-09-13 160309.png>)
image2:![json](<Screenshot 2025-09-13 160321-1.png>) 
image3:![xml product_id](<Screenshot 2025-09-13 161409.png>)
image4:![json product_id](<Screenshot 2025-09-13 161428.png>)

a. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?
> Data delivery penting dalam implementasi suatu platform untuk berfungsi karena itu menjamin data secara konsisten untuk tetap available, akurat, dan bisa diakses pengguna dan sistem. Data delivery memastikan data berpindah antarkomponen sehingga pengalaman pengguna terjaga. Tanpa data delivery, platform akan menjadi tidak efektif yang dapat menyebabkan kualitas data buruk.
- reference:
Oscar Mike. (2024, April 04). Implementing a data platform. Digital Power. Retrieved from https://digital-power.com/en/inspiration/implementing-a-data-platform/#:~:text=Data%20Delivery%20(Democratized%20access),horizontal%20scaling%20and%20vertical%20scaling. 

b. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?
> Menurut saya sendiri, mungkin JSON lebih baik daripada XML. Keduanya tentu mempunyai kelebihan dan kekuranganny masing-masing. JSON adalah data format yang terkesan lebih "modern" daripada XML yang juga unggul dalam data delivery antarserver/browser karena file yang dihasilkan lebih ringan dan cepat. JSON sendiri lebih populer dibandingkan XML karena XML sendiri dikenal dengan struktur nya dan terkesan lebih kompleks, sedangkan JSON dapat merepresentasikan data yang sama dalam ukuran file yang lebih kecil/less complex.
- reference:
Mariana Berga & Rute Figueiredo. (2023, Sept 14). JSON vs XML: which one is more faster and more efficient? Imaginary Cloud. Retrieved from https://www.imaginarycloud.com/blog/json-vs-xml 

c. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?
> Method is_valid() pada Django adalah fungsi yang memulai dan menjalankan seluruh proses validasi pada suatu data form. Ketika dipanggil, method tsb melakukan serangkaian validasi/pemeriksaan pada data untuk menentukan apakah data tersebut memenuhi persyaratan yg dibutuhkan. Kita membutuhkan method tsb karena ia memastikan data yg kita proses memenuhi syarat/tidak dan ia jg akan menghasilkan cleaned data.
- reference: DjangoProject

d. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?
> CSRF token berfungsi sebagai pencegah terjadinya malicious attack. Server menaruh nilai acak unik pada halaman dan meminta nilai itu dikirim kembali oleh form sehingga cuma request yang dibuat dari halaman asli yang lolos verifikasi. Hal ini mencegah pihak ketiga memaksa browser kita untuk mengirim request berbahaya ke aplikasi kita. Jika kita tidak menambahkan csrf_token, maka penyerang bisa memanfaatkan kemampuan browser utk mengirim cookie otomatis untuk menjalankan aksi dengan memanfaatkan data kita seperti pencurian data, transfer, penghapusan, atau perubahan data atas nama pengguna tanpa izin kita. 
- reference: DjangoProject

e. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
i. untuk menambahkan 4 fungsi views baru pertama-tama tambahkan import HttpResponse dan serializers di views.py lalu buat fungsi show_xml(request) yang mengambil semua objek Product.objects.all(), dan lakukan serializers.serialize("xml", product_list) dan mengembalikan HttpResponse(xml_data, content_type="application/xml") utk memastikan respons terserialisasi dengan benar ke XML. Selanjutnya buat show_json(request) dengan pola yang sama. Lalu untuk bentuk id nya buat show_xml_by_id yang memakai Product.objects.filter(pk=product_id) dan serializers.serialize("xml", product_item) mengembalikan HttpResponse(..., content_type="application/xml") serta json dengan pola sama lalu impor ke urls.py.

ii. untuk membuat routing URL untuk masing-masing views pertama-tama tambahkan from django.urls import path serta from . import views lalu buat variabel app_name = "product" untuk namespacing, lalu tambahkan empat route terpisah ke dalam urlpatterns path('xml/', views.show_xml, name='xml-list'), path('json/', views.show_json, name='json-list'), path('xml/<int:product_id>/', views.show_xml_by_id, name='xml-detail'), path('json/<int:product_id>/', views.show_json_by_id, name='json-detail'). buat nama route yang mudah dipanggil. 

iii. untuk membuat halaman yang menampilkan data objek model yang memiliki tombol "Add" yang akan redirect ke halaman form, serta tombol "Detail" pada setiap data objek model yang akan menampilkan halaman detail objek pertama-tama buat ProductForm sebagai ModelForm di forms.py dan tambahkan tiga view yaitu product_list, create_product, dan product_detail. Lalu perbarui urls.py dengan path untuk ketiga view tsb. Buat di main.html untuk menampilkan tombol “Add Product" sebagai dan tombol “Detail" di main.html. 

iv. untuk membuat halaman form untuk menambahkan objek model pada app sebelumnya pertama-tama buat dua berkas HTML baru di direktori main>templates untuk halaman form input serta detail dari produk. Yang pertama adalah berkas create_product.html untuk menampilkan halaman ketika kita sudah menekan tombol add product di halaman utama, atur bentuk tampilanya dan tambahkan tombol "add product" dengan tipe submit. Yang kedua adalah berkas dan product_detail.html untuk menampilkan halaman ketika sudah menambah suatu product lalu ingin melihat product tsb secara detail, atur tampilannya (mirip dengan main.html tp beda ukuran/lebih besar).

v. untuk membuat halaman yang menampilkan detail dari setiap data objek model kita bisa menggunakkan pengembalian detail data/produk yang di add dalam bentuk XML dan JSON di postman. Pertama-tama pastikan server Django berjalan lalu buka Postman dan buat request GET dengan masukkan http://localhost:8000/xml/ atau http://localhost:8000/json/ lalu tekan Send untuk melihat apakah semua data Product terkirim.

f. Apakah ada feedback untuk asdos di tutorial 2 yang sudah kalian kerjakan?
> Menurut saya, asisten dosen pada tutorial 2 sangat baik krn bahasanya mudah dipahami dan penyajian langkah demi langkahnya jelas. asdos memberikan gambaran menyeluruh tentang materi yang mudah untuk dimengerti oleh pemula.


TUGAS INDIVIDU 4:
a. Apa itu Django AuthenticationForm? Jelaskan juga kelebihan dan kekurangannya.
Django AuthenticationForm adalah form bawaan Django yang digunakan untuk proses autentikasi pengguna, yaitu proses login dengan nama pengguna dan password. Form bawaan ini juga menangani validasi data dan pengiriman permintaan autentikasi ke Django's auth system. Kelebihannya adalah kemudahan penggunaan dan keamanan bawaan yang ada, serta otomatisasi proses login/autentikasi. Kekurangannya yaitu kurangnya fleksibilitas atau keterbatasan customization dalam desain dan kompleksitas awal untuk penyesuaian. 
- reference: 
Sunscrapers. (2023, Jan 30). Retrieved from https://sunscrapers.com/blog/pros-and-cons-of-using-django-for-web-development/ 

b. Apa perbedaan antara autentikasi dan otorisasi? Bagaiamana Django mengimplementasikan kedua konsep tersebut?
"Autentikasi" dan "Otorisasi" merujuk kepada proses keamanan yang berbeda dimana autentikasi merupakan tindakan verifikasi identitas pengguna, sementara otorisasi menentukan tindakan apa yang boleh diakses oleh pengguna terautentikasi. Proses autentikasi bergantung pada kredensial (password) untuk verifikasi/pembuktian sedangkan proses otorisasi bergantung pada izin pengguna tentang apa yang bisa dilakukan. Untuk pengimplementasiannya kita dapat memanfaatkan sistem bawaan django.contrib.auth (pada views ataupun models). Kemudian, kita dapat membuat menu login, logout, dan registrasi pengguna menggunakan django.contrib.auth.authenticate untuk memverifikasi kredensial dan django.contrib.auth.logout untuk keluar dari sesi. 
- reference: 
Curity. (n.d). Retrieved from https://curity.io/resources/learn/authentication-vs-authorization/#:~:text=Istilah%20%22autentikasi%22%20dan%20%22otorisasi,boleh%20diakses%20oleh%20pengguna%20terautentikasi
Mozilla. (n.d). Retrieved from https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Authentication#:~:text=tampilan%20dan%20templat.-,Mengaktifkan%20autentikasi,memanggil%20python%20manage.py%20migrate%20. 

c. Apa saja kelebihan dan kekurangan session dan cookies dalam konteks menyimpan state di aplikasi web?
i. Kelebihan Session
Session menyimpan state di server sehingga browser hanya menyimpan cookie berisi session ID dan karena data disimpan di backend maka kapasitas penyimpanan jadi lebih besar dan fleksibel. Session juga membuat informasi login bersifat transparan.
ii. Kekurangan Session 
Sangat tergantung pada cookie session id. Jika cookie dinonaktifkan atau dihapus oleh pengguna, aplikasi tidak dapat melacak sesi sama sekali. Selain itu, sesi juga bersifat sementara dan menyimpan session memerlukan perhatian pada skala aplikasi yang berpengaruh terhadap performa.
iii. Kelebihan Cookie
Cookie dapat diatur masa berlakunya sehingga data kecil yang tidak sensitif dapat bertahan dimana berguna untuk fitur yang menyimpan preferensi interface sehingga pengguna tidak perlu isi setiap kali. Karena state sederhana dikelola browser maka beban server berkurang.
iv. Kekurangan Cookie
Cookie memiliki keterbatasan teknis dan risiko keamanan. Ukurannya terbatas sehingga hanya cocok untuk data kecil. Karena data cookie tersimpan di klien, isinya dapat dilihat atau diubah oleh pengguna sehingga data sensitif tanpa proteksi tidak aman.
- reference: 
StackOverflow. (2014). Retrived from https://stackoverflow.com/questions/20706480/django-session-authentication-and-disabled-cookies#:~:text=,44%20more 
Alfin F. (2024, August 5). Bagaimana Cara Kerja Cookies dan Session? Halovina. Retrived from https://halovina.com/bagaimana-cara-kerja-cookies-dan-sessions/#:~:text=,dalam%20bahasa%20yang%20dipilih%20pengguna 

d. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai? Bagaimana Django menangani hal tersebut?
Penggunaan cookies tidak aman secara default karena nilainya dapat dibaca atau diubah oleh pengguna dan memiliki potensi risiko keamanan privasi dimana penyerang berpotensi mencuri informasi sensitif untuk melakukan penyalahgunaan data. Django menangani risiko yang ada dengan menyediakan pengaturan bawaan untuk mengelola keamanan cookie, misalnya session_cookie yg default httponly=True sehingga session cookie tidak bisa diakses javascript.
- reference:
Soffya Ranti. (2025, January 1). Kompas. Retrieved from https://tekno.kompas.com/read/2025/01/16/03350077/apakah-menyetujui-cookie-di-website-selalu-aman-ini-penjelasannya-?page=all#:~:text=Dalam%20hal%20privasi%2C%20cookies%20dapat,persetujuan%20agar%20privasi%20tetap%20terjaga. 

e. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
i. untuk mengimplementasikan fungsi registrasi pertama-tama buka views.py dan tambahkan contrib.auth.forms import UserCreationForm agar bisa pakai form registrasi bawaan Django, kemudian buat fungsi register serta membuat UserCreationForm untuk validasi input dan simpan akun baru. impor register di urls.py dan tambahkan path('register/', register, name='register') supaya endpoint pendaftaran bisa diakses (kemudian buat pula halaman untuk menampilkan register).

ii. untuk mengimplementasikan fungsi login pertama-tama buka views.py dan tambahkan contrib.auth.forms import AuthenticationForm dan contrib.auth import authenticate, login untuk melakukan autentikasi dan login (jika autentikasi berhasil). Kemudian buat fungsi login dimana 'POST'  untuk memeriksa apakah pengguna mengirimkan permintaan login melalui halaman login dan akan divalidasi.  impor login di urls.py dan tambahkan path('login/', login, name='login') supaya endpoint autentikasi bisa diakses (kemudian buat pula halaman untuk menampilkan login). 

iii. untuk mengimplementasikan fungsi logout pertama-tama buka views.py dan tambahkan contrib.auth import logout. Kemudian buat fungsi logout untuk menghapus sesi pengguna yang saat ini masuk dan mengarahkan pengguna kembali ke halaman login. impor logout di urls.py dan tambahkan path('logout/', logout, name='logout') supaya penghapusan session cookie bisa diakses (kemudian buat pula halaman untuk menampilkan logout). 

iv. Membuat dua (2) akun pengguna dengan masing-masing tiga (3) dummy data menggunakan model yang telah dibuat sebelumnya untuk setiap akun di lokal.
Jalankan python manage.py runserver lalu akses localhost. Saat masuk ke halaman login, pilih menu registrasi dan daftarkan 2 akun kemudian balik kembali ke halaman login. Masuk ke akun pertama yang sudah dibuat lalu tambahkan 3 produk berbeda dengan memekan tombol "Add Product" setelah itu kita bisa logout dari akun pertama dan lakukanlah hal yang sama pada akun kedua.

v. untuk menghubungkan model Product dengan User pertama-tama tambahkan contrib.auth.models import User pada models.py lalu tambahkan field user = models.ForeignKey(User, on_delete=models.CASCADE, null=True) pada model Product bertujuan utk menghubungkan setiap produk ke penjualnya jalankan migrasi agar data tersinkron. Ubah create_product supaya pake form.save(commit=False), set product_entry.user = request.user lalu product_entry.save() untuk menyimpan relasi user–product saat pembuatan. Perbarui main.html dengan tombol +Add Product, Logout, serta tombol filter All Products dan My Products, dan perbarui prodict_detail.html untuk nampilin nama seller dari product tersebut. 

vi. Menampilkan detail informasi pengguna yang sedang logged in seperti username dan menerapkan cookies seperti last_login pada halaman utama aplikasi.
buka views.py dan di show_main tambahkan ke context 'username' : request.COOKIES.get('username', request.user.username). Di login user set cookie dengan response.set_cookie('username', user.name), lalu return response dengan memperhatikan identasi. Lakukan hal serupa di logout dimana tambahkan response.delete_cookie('username') dan return response untuk menghapus cookie saat logout. Terakhir tambahkan di main.html baris untuk menampilka username yang currently active/loggin in. 


TUGAS INDIVIDU 5:
a. Jika terdapat beberapa CSS selector untuk suatu elemen HTML, jelaskan urutan prioritas pengambilan CSS selector tersebut!
Dalam CSS, ketika terdapat beberapa aturan gaya/style yang dapat berlaku untuk elemen HTML yang sama, browser akan milih aturan berdasarkan specificity dan urutan penulisannya. Semakin spesifik selector maka semakin tinggi prioritasnya. Prioritas tertinggi dapat override selector yang lain. Untuk paham specificity, kita harus tau bobot masing-masing selector. Bobot atau nilai specificity dihitung berdasarkan jenis dan jumlah kategori selector yang digunakan, yaitu ID selector, class selector, serta tipe selector (dan pseudo-element selector)
Urutan prioritas selector dari yang tertinggi ke terendah:
1. Inline styles (misalnya <h1 style="color:red">): memiliki nilai specificity tertinggi (1,0,0,0).
2. Selector ID (contoh #header): nilai specificity berikutnya (0,1,0,0)
3. Selector kelas, atribut, pseudo-class (contoh .container, [type="text"], :hover): nilai (0,0,1,0)
4. Selector elemen atau pseudo-elemen (contoh div, p, ::before): nilai (0,0,0,1)
5. Selector universal (*): nilai terendah (0,0,0,0)
6. Selain itu, aturan yang ditandai !important dapat mengesampingkan aturan lain. Jika dua aturan memiliki specificity yg sama, maka aturan yang muncul terakhir dalam kode yang akan diterapkan. 
Misalnya sebuah elemen <h1 id="header" class="title"> memiliki tiga aturan warna (h1, .title, dan #header), yang akan berlaku adalah aturan dengan selector #header karena ID lebih spesifik.
- reference:
Easycoding. (2024, October 1). Urutan Prioritas Selector CSS. Retrieved from https://www.easycoding.id/blog/urutan-prioritas-selector-css-specificity-panduan-lengkap-untuk-memahami-dan-menggunakan

b. Mengapa responsive design menjadi konsep yang penting dalam pengembangan aplikasi web? Berikan contoh aplikasi yang sudah dan belum Menerapkan responsive design, serta jelaskan mengapa!
Desain responsive memastikan tampilan website aplikasi web tetap optimal di berbagai ukuran layar (desktop, tablet, smartphone, dll). Hal ini penting karena mayoritas pengguna mengakses web melalui perangkat mobile. Terdapat studi yang menyebutkan bahwa 53% pengguna internet akan meninggalkan suatu website jika halamannya terlalu lambat atau tampilannya tidak sesuai dengan layar perangkat mereka. Dengan desain yg responsive, website dapat menyesuaikan letak, ukuran gambar, dan huruf agar nyaman dibaca di layar kecil, sehingga meningkatkan pengalaman pengguna (UX). Selain itu, Google mengutamakan website yang mobile-friendly sehingga website yg responsive mendapat lebih banyak traffic.
Contoh aplikasi web yang telah menerapkan desain responsive beberapa diantaranya adalah Amazon/Shopee/Tokopedia (online shops). Website besar tersebut menyesuaikan tampilan interface agar sama mudahnya utk digunakan lewat HP ataupun desktop. Sebaliknya, website lawas atau ga responsive (kayak website-website pemerintahan lama atau SIAKNG) sering kali masih memaksa pengguna untuk zoom dan scroll secara horizontal. Akibatnya, pengguna kesulitan utk membaca konten dan beralih. Oleh karena itu, responsive design sangat penting untuk menjangkau audiens yang luas dan mempertahankan kenyamanan pengguna.
- reference:
Nurul Huda. (2024, November 29). Apa itu Responsive Web Design? Dewaweb. Retrieved from https://www.dewaweb.com/blog/pengertian-website-responsive/#:~:text=Keunggulan%20utama%20dari%20responsive%20web,dan%20mengurangi%20tingkat%20bounce%20rate 

c. Jelaskan perbedaan antara margin, border, dan padding, serta cara untuk mengimplementasikan ketiga hal tersebut!
Margin, border, dan padding adalah bagian dari CSS Box Model yang mengontrol tata letak elemen:
> Margin adalah spasi di luar elemen yang berada di antara border elemen dengan elemen lain. Margin ngasih jarak eksternal supaya elemen tidak saling menumpuk. Menambah margin ga akan mengubah ukuran kotak elemen itu sendiri, cuma menggeser jarak ke elemen sekitar. Kita bisa mengatur margin untuk masing-masing sisi elemen pake properti margin-top, margin-right, margin-bottom, dan margin-left. 
> Border adalah garis tepi (tepi luar) elemen yang membatasi padding dan margin. Border bisa dikasih ketebalan, style, dan warna, misalnya border: 1px solid black. Border “mengelilingi” padding dan konten.
> Padding adalah spasi di dalam elemen, antara konten (teks, gambar, dll) dan border. Padding nambah ruang internal supaya konten ga terlalu menempel sama border. Menambah padding akan memperbesar total ukuran elemen karena ruang extra di dalamnya. Kita dapat mengatur padding untuk setiap sisi elemen dengan properti padding-top, padding-right, padding-bottom, dan padding-left. 
Contoh implementasi:
div {
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
- reference:
Prasatya. (2025, July 29). Apa itu Margin? Apa perbedaannya dengan Padding? Codepolitan. Retrieved from https://www.codepolitan.com/blog/apa-itu-margin-apa-perbedaannya-dengan-padding/
https://www.w3schools.com/css/css_boxmodel.asp#:~:text=%2A%20Content%20,The%20margin%20is%20transparent 

d. Jelaskan konsep flex box dan grid layout beserta kegunaannya!
> Flexbox (Flexible Box Layout) adalah model layout satu dimensi. Flexbox fokus pada pengaturan elemen dalam satu baris atau satu kolom saja. Dengan flexbox, kita bisa mendistribusikan ruang di antara item dan mengatur perataan horizontal/vertikal. Flexbox berguna untuk layout yang sederhana dan linier, misalnya menu navigasi, toolbar, atau mengatur kumpulan tombol dalam satu baris. Flexbox juga berguna untuk tata letak responsive di satu arah karena elemen dapat wrap atau nyesuaiin ukurannya kalau ruang berubah.
> CSS Grid adalah model layout dua dimensi yang membuat kita mengatur elemen dalam baris dan kolom secara bersamaan. Dengan grid, kita dapat mendefinisikan jumlah baris dan kolom, mengatur jarak antar sel (gap), dan menempatkan item di sel tertentu. Grid berguna untuk membuat desain halaman yang lebih kompleks dan terstruktur, seperti dashboard, galeri produk, dll. Grid memudahkan layout responsive  yang perlu menyesuaikan banyak kolom/baris pada ukuran layar berbeda.
Flexbox cocok untuk mengatur baris atau kolom sederhana dengan item dinamis, sedangkan Grid cocok untuk layout keseluruhan halaman yang kompleks. 
- reference:
Irhan Hisyam. (2023, October 31). CSS Grid vs Flexbox: Perbandingan, Penggunaan, dan Contohnya. Dibimbing.id. Retrieved from https://dibimbing.id/blog/detail/memahami-penggunaan-css-grid-dan-flexbox#:~:text=CSS%20Grid%20sangat%20berguna%20untuk,yang%20lebih%20sederhana%20dan%20linier
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#:~:text=The%20flexible%20box%20layout%20module,the%20rest%20of%20these%20guides

e. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial)!
i. Implementasikan fungsi untuk menghapus dan mengedit product.
> Untuk button edit product pertama-tama kita tambahkan fungsi edit_product di views.py yang mengambil objek Product dengan get_object_or_404, membuat ProductForm(request.POST or None, instance=product) supaya form terisi data lama, lalu jika request adalah POST dan form valid menyimpan perubahan dengan form.save() dan redirect ke main:show_mainme. Di urls.py kita impor edit_product dan menambahkan path nya. Kemudian, perbarui main.html di loop product_list dengan menampilkan tombol Edit yang hanya muncul jika user.is_authenticated and product.user == user yang menautkan ke halaman edit.
> Untuk button hapus product pertama-tama kita buat fungsi delete_product(request, id) di views.py dan panggil product.delete() lalu arahin kembali ke halaman utama. Import fungsi tersebut di urls.py dan tambahkan route path nya. Pada main.html tambahkan tombol Delete di dalam loop product_list sehingga tampil bersama tombol Edit dan buat tombol tersebut agar hanya pemilik yang melihatnya.

ii. Kustomisasi halaman login, register, tambah product, edit product, dan detail product semenarik mungkin.
> Untuk kustomisasi halaman-halaman yang ada saya sendiri menggunakkan tema/color-palette warna biru secara konsisten dimana saya gunakan pada button, text, background, grid, dan semacamnya, untuk tampilan yang rapi dan enak diliat. Login akan menampilkan autentikasi, tampilkan error/message, CSRF. Register yaitu membuat user baru dengan validasi password dan feedback. Tambah Product adalah form dengan CSRF, field, upload thumbnail dan tombol Publish. Edit Product dimana form terisi otomatis lewat instance=..., cek izin supaya hanya pemilik bisa menyimpan perubahan. Detail Product dengan layout responsive grid, preview gambar, info harga/kategori/seller, dan featured serta juga ada handling error/messages dan responsive styling supaya semuanya rapi di desktop dan mobile.

iii. Kustomisasi halaman daftar product menjadi lebih menarik dan responsive. Jika pada aplikasi belum ada product yang tersimpan, halaman daftar product akan menampilkan gambar dan pesan bahwa belum ada product yang terdaftar. Jika sudah ada product yang tersimpan, halaman daftar product akan menampilkan detail setiap product dengan menggunakan card.
> Halaman daftar produk ini dibuat responsive dimana ada navbar, background biru muda dan padding atas agar tidak tertutup navbar, serta tampilan terakhir login. Jika belum ada produk ditampilkan, akan muncul gambar (yang disimpan di static) untuk no_product serta pesan dan opsi untuk ke halaman buat produk. Sedangkan kalo ada, produk ditampilkan dalam grid responsive yang merender setiap product lewat card_product.html. Keseluruhan pake gaya card putih dan palette biru untuk konsistensi, sehingga halaman mudah dibaca dan nyaman dipakai di desktop ataupun mobile.

iv. Untuk setiap card product, buatlah dua buah button untuk mengedit dan menghapus product pada card tersebut!
Tombol Edit dibuat sebagai link yang hanya ditampilkan bila user.is_authenticated dan product.user == user, jadi ketika diklik user akan ke halaman edit yang memuat form dengan instance=product sehingga field nya udh otomatis terisi. Tombol Delete dibuat sebagai form POST yang berisi {% csrf_token %} dan onsubmit="return confirm supaya ada konfirmasi dan proteksi CSRF. Pastikan request.user == product.user sebelum product.delete() dan redirect. 

v. Buatlah navigation bar (navbar) untuk fitur-fitur pada aplikasi yang responsive terhadap perbedaan ukuran device, khususnya mobile dan desktop.
Navbar ini menggunakan Tailwind untuk styling (background, border, shadow, z-index) dan dibagi menjadi tiga area: di kiri ada title, di tengah-kanan ada navigasi desktop yang nampilin link Home dan Create Product, dan bagian user desktop yang juga hanya tampil di layar lebar untuk menampilkan nama/npm/class, dan link Logout atau menampilkan Login/Register ketika belum terautentikasi. Untuk mobile ada tombol hamburger yang terdiri dari tiga ikon garis untuk men-toggle .mobile-menu yang awalnya hidden. Isinya adalah untuk melihat fitur tombol home, create product, nampilin identitas, serta link logout.


TUGAS INDIVIDU 5:
a. Apa perbedaan antara synchronous request dan asynchronous request?
i. Ciri‑ciri Synchronous Request:
> Perlilaku: Request dieksekusi secara berurutan secara blok (sekuensial), di mana satu tugas harus selesai sebelum tugas berikutnya dimulai yang dapat menyebabkan tampilan membeku. 
> Pemblokiran: Bersifat memblokir dimana program akan berhenti dan menunggu respons dari permintaan sebelum menjalankan operasi selanjutnya.
> Kelebihan: Alur kontrol lebih mudah diprediksi dan diimplementasikan, cocok untuk tugas-tugas sederhana yang tidak memerlukan penanganan respons yang kompleks. 
ii. Ciri‑ciri Asynchronous Request:
> Perilaku: Request dieksekusi dengan memulai tugas dan segera melanjutkan ke tugas berikutnya tanpa harus menunggu respons. ode selanjutnya tetap berjalan sambil menunggu callback untuk menangani respons. 
> Pemblokiran: Bersifat non-pemblokiran dimana program dapat mengeksekusi tugas lain secara paralel . Asynchronous memanfaatkan event loop untuk mengeksekusi tugas lain selagi menunggu respons server.
> Kelebihan: Menghasilkan kecepatan pemrosesan yang lebih baik dan aplikasi terasa lebih responsif, terutama untuk tugas berat yang memakan waktu karena respons diproses melalui callback atau promise (.then(), async/await).
- reference:
https://www.dicoding.com/blog/mengenal-fungsi-asynchronous-request-pada-javascript/#:~:text=Umumnya%20dalam%20dunia%20programing%2C%20kode,pastikan%20kapan%20pekerjaan%20itu%20selesai   

b. Bagaimana AJAX bekerja di Django (alur request–response)?
1. Sisi Klien (Browser): suatu aktivitas terjadi di halaman web, seperti klik tombol, pengiriman formulir, atau pergerakan kursor. 
2. Membuat Permintaan AJAX: kode JavaScript di browser menggunakan library seperti Fetch API untuk membuat objek XMLHttpRequest atau menggunakan fetch untuk membuat permintaan ke server. 
3. Mengirim Permintaan ke Server Django: permintaan ini yang berisi data atau informasi tertentu akan dikirim ke URL Django yang sesuai. View di Django kemdian menerima permintaan AJAX. 
4. Menganalisis dan Memproses Permintaan: Django memeriksa apakah permintaan berasal dari AJAX. Fungsi view akan memproses data yang diterima dan melakukan operasi yang diperlukan (misalnya, mengambil data dari database, memvalidasi, atau memproses logika). 
5. Menyiapkan Respons dan Mengirim ke Browser: setelah memproses maka view akan menyiapkan respons yang akan dikirim kembali ke browser. Respons ini biasanya dalam format JSON karena mudah diproses oleh JavaScript. Django kemudian mengirimkan data respons kembali ke browser. 
6. Menangani Respons di JavaScript dan Memperbarui DOM: JavaScript di browser menangkap respons dari server. JavaScript secara langsung akan memperbarui bagian-bagian tertentu dari halaman web (Document Object Model/DOM) tanpa me-refresh halaman secara keseluruhan. 
7. Menampilkan Data: konten di halaman web diubah untuk menampilkan data baru atau memberikan feedback kepada pengguna. 
- reference:
https://www.pluralsight.com/resources/blog/guides/work-with-ajax-django#:~:text=Cara%20Kerja%20AJAX,merespons%20kembali%20dengan%20data%20respons. 

c. Apa keuntungan menggunakan AJAX dibandingkan render biasa di Django?
1. Performa dan Efisiensi 
AJAX hanya mentransfer data yang dibutuhkan (biasanya JSON), bukan seluruh HTML. Ini akan menghemat bandwidth dan mempercepat respons. Memuat sebagian data mengurangi beban server dan memanfaatkan caching, karena bagian halaman yang tidak berubah tetap di-render di browser.
2. User Experience Lebih Responsif
Halaman tidak perlu di-refresh karena bagian tertentu diperbarui secara otomatis sehingga UI terasa responsif. Form asynchronous memungkinkan validasi real‑time. Pesan error dikirim balik dalam JSON sehingga pengguna dapat memperbaiki input tanpa reload.
3. Skalabilitas
Karena hanya memuat data yang diperlukan, server dapat menangani lebih banyak permintaan. Teknik seperti “infinite scroll” memanfaatkan AJAX untuk mengambil data bertahap sesuai kebutuhan pengguna.
- reference:
https://moldstud.com/articles/p-speed-up-your-django-app-how-to-use-ajax-with-django-templates-for-faster-page-loads#:~:text=If%20your%20web%20project%20still,according%20to%20research%20by%20Google 

d. Bagaimana cara memastikan keamanan saat menggunakan AJAX untuk fitur Login dan Register di Django?
1. Gunakan CSRF Token
Django memiliki mekanisme bawaan untuk mencegah serangan CSRF. Pastikan setiap permintaan POST melalui AJAX menyertakan token csrftoken di header X-CSRFToken. Cara mendapatkannya adalah membaca cookie csrftoken kemudian mengirimnya di header sebelum setiap request. Tanpa token, middleware akan menolak request (status 403).
2. Validasi Input di Server
Lakukan validasi server menggunakan Django Forms atau serializers untuk memastikan format data benar untuk mencegah injeksi SQL dan XSS dan jangan hanya mengandalkan validasi di sisi client. Selalu validasi input di server walaupun telah divalidasi di klien. Gunakan QuerySet/filter untuk query parameterized dan hindari membangun query SQL dari input langsung.
3. Gunakan HTTPS dan Enkripsi
Pastikan seluruh komunikasi menggunakan protokol HTTPS. Ini melindungi data login dan register dari serangan man‑in‑the‑middle dan sniffing. 
4. Kontrol Akses dan Autentikasi
Pastikan view yang menerima permintaan login/register hanya dapat diakses oleh user yang sesuai. Gunakan sistem authenticate() dan login() bawaan Django, serta atur @login_required pada endpoint sensitif. Bagi endpoint API, gunakan token-based authentication untuk menghindari sesi cookies rawan CSRF. 
- reference:
https://www.freecodecamp.org/news/how-to-secure-your-django-app/#:~:text=1,ensure%20that%20you%20don%27t%20set
https://aisaastemplate.com/blog/5-strategies-mastering-django-ajax-form-submissions/#:~:text=,injection%20and%20other%20malicious%20attacks

e. Bagaimana AJAX mempengaruhi pengalaman pengguna (User Experience) pada website?
AJAX meningkatkan user experience dengan memungkinkan pembaruan sebagian halaman web secara asynchronous (di latar belakang) tanpa harus memuat ulang seluruh halaman, menghasilkan pengalaman yang lebih cepat, lancar, dan interaktif. Hal ini membuat website terasa lebih responsif dan dinamis, memungkinkan pengguna untuk melakukan tindakan seperti mengisi formulir atau menggulir konten tanpa gangguan. 
- reference:
https://www.sekawanmedia.co.id/blog/apa-itu-ajax/