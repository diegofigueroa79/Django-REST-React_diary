from django.urls import path

from .views import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleDestroyView, ArticleUpdateView

app_name = "diary"
urlpatterns = [
    path('', ArticleListView.as_view()),
    path('create/', ArticleCreateView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
    path('<pk>/destroy/', ArticleDestroyView.as_view()),
    path('<pk>/update/', ArticleUpdateView.as_view()),
]