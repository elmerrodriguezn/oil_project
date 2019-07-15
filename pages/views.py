from django.shortcuts import render
from api.queries import context_limit

# Create your views here.
def index(request):
    return render(request, 'pages/index.html', context_limit())