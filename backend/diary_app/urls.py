from django.urls import path

from .views import ArticleListView, ArticleDetailView

app_name = "diary"
urlpatterns = [
    path('', ArticleListView.as_view()),
    path('', ArticleDetailView.as_view()),
]