from django.shortcuts import render
from django.http import HttpResponse, HttpRequest


# Create your views here.
def main(request: HttpRequest) -> HttpResponse:
    return HttpResponse("<h1>Hello</h1>")
