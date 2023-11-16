from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'is_active', 'is_staff')

class UserRegistrationSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

class UserProfileUpdateSerializer(serializers.Serializer):
    email = serializers.EmailField(required=False)


class DashboardSerializer(serializers.Serializer):
    admin_info = serializers.CharField()
    client_info = serializers.CharField()
    superuser_info = serializers.CharField()
    user_type = serializers.CharField(source='CustomUser.user_type')
    class Meta:
        fields = ['user_type']