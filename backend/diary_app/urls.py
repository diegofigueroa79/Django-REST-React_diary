from django.urls import path

from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet)

app_name = "diary"
urlpatterns = router.urls