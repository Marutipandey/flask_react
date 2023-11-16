from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='user-registration'),
    path('login/', views.UserLoginView.as_view(), name='user-login'),
    path('logout/', views.UserLogoutView.as_view(), name='user-logout'),
    path('profile/', views.UserProfileUpdateView.as_view(), name='user-profile-update'),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),

]
