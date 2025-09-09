from django.shortcuts import render

# Create your views here.
def show_main(request):
    context = {
        'nama_aplikasi' : 'OldSchool Strike',
        'name': 'Gusti Niera',
        'class': 'PBP A'
    }

    return render(request, "main.html", context)