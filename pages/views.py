from django.shortcuts import render, redirect
from api.query import Query
from modules.recaptcha import recaptcha


def index(request):
    query = Query()
    data = query.get(
        'product.template',
        'search_read', [
            ['type', '=', 'product'],
            ['categ_id', '=', 153],
            ['x_studio_field_OaF3K', '=', True]
        ],
        {
            'fields': ['id', 'name', 'default_code', 'x_studio_field_QlEui', 'create_date', 'create_date'],
            'order': 'create_date'
        })

    context = {"products": data}
    return render(request, 'pages/index.html', context)


def contact(request):
    return render(request, 'pages/contact.html')


def send_lead(request):
    if request.method == 'POST' and recaptcha(request):
        full_name = request.POST['full_name']
        email = request.POST['email']
        phone = request.POST['phone']
        msg = request.POST['msg']
        create_lead(full_name, email, phone, msg)
        return redirect('thanks')
    else:
        return redirect('index')


def thanks(request):
    return render(request, 'pages/thanks.html')
