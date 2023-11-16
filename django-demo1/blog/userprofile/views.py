from django.shortcuts import render

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import DashboardSerializer
# Create your views here.
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from .models import CustomUser
from .serializers import CustomUserSerializer, UserRegistrationSerializer, UserProfileUpdateSerializer,DashboardSerializer

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = CustomUser.objects.create_user(email=email, password=password)
            refresh = RefreshToken.for_user(user)
            access_token = refresh.access_token
            return Response({'access_token': str(access_token), 'refresh_token': str(refresh)})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)

            if user:
                login(request, user)
                refresh = RefreshToken.for_user(user)
                access_token = refresh.access_token
                return Response({'access_token': str(access_token), 'refresh_token': str(refresh)})
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'})

class UserProfileUpdateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request):
        serializer = UserProfileUpdateSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            user.email = serializer.validated_data.get('email', user.email)
            user.save()
            return Response({'message': 'Profile updated successfully'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DashboardView(generics.RetrieveAPIView):
    serializer_class = DashboardSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def get_object(self):
        user = self.request.user
        user_type = user.user_type
        print("user register ")
        # if user_type == 'admin':
        #     dashboard_data = {'admin_info': 'Dashboard information for admin'}
        # elif user_type == 'client':
        #     dashboard_data = {'client_info': 'Dashboard information for client'}
        # elif user_type == 'superuser':
        #     dashboard_data = {'superuser_info': 'Dashboard information for superuser'}
        # else:
            

        # return dashboard_data