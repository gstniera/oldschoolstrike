link aplikasi PWS: https://gusti-niera-oldschoolstrike.pbp.cs.ui.ac.id/

TUGAS INDIVDIU 2:
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