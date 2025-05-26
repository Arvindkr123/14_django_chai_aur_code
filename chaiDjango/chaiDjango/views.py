from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse('Welcome home, you are chai aur code home page')
    return render(request, 'website/index.html')


def about(request):
    return HttpResponse('Welcome about, you are chai aur code about page')


def contact(request):
    return HttpResponse('Welcome contact, you are chai aur code contact page')


def profile(request):
    return HttpResponse('Welcome profile, you are chai aur code profile page')


def screen(request):
    return HttpResponse('Welcome screen, you are chai aur code screen page')