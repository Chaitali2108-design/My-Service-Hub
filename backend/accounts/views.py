
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.db import transaction
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import UserAccount
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token


@api_view(['POST'])
def register(request):
    full_name = request.data.get('full_name', '').strip()
    email = request.data.get('email', '').strip().lower()
    phone = request.data.get('phone', '').strip()
    password = request.data.get('password', '')
    role = request.data.get('role', 'customer')
    city = request.data.get('city', '').strip()

    if not all([full_name, email, phone, password, city]):
        return Response(
            {'error': 'All fields are required.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if role not in ['customer', 'provider']:
        return Response(
            {'error': 'Invalid account role.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(email__iexact=email).exists():
        return Response(
            {'error': 'An account with this email already exists.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if UserAccount.objects.filter(phone=phone).exists():
        return Response(
            {'error': 'This phone number is already registered.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        validate_password(password)
    except ValidationError as error:
        return Response(
            {'error': list(error.messages)},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        with transaction.atomic():
            user = User.objects.create_user(
                username=email,
                email=email,
                password=password
            )

            UserAccount.objects.create(
                user=user,
                full_name=full_name,
                email=email,
                phone=phone,
                role=role,
                city=city
            )
    except Exception:
        return Response(
            {'error': 'Registration could not be completed.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    return Response(
        {
            'message': 'Account registered successfully.',
            'account': { 
                'full_name': full_name,
                'email': email,
                'role': role,
                'city': city
            }
        },
        status=status.HTTP_201_CREATED
    )


@api_view(['POST'])
def login(request):
    email = request.data.get('email', '').strip().lower()
    password = request.data.get('password', '')

    if not email or not password:
        return Response(
            {'error': 'Email and password are required.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user_record = User.objects.get(email__iexact=email)
    except User.DoesNotExist:
        return Response(
            {'error': 'Invalid email or password.'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    user = authenticate(
        request,
        username=user_record.username,
        password=password
    )

    if user is None:
        return Response(
            {'error': 'Invalid email or password.'},
            status=status.HTTP_401_UNAUTHORIZED
        )

    try:
        profile = UserAccount.objects.get(user=user)
    except UserAccount.DoesNotExist:
        return Response(
            {'error': 'Account profile not found.'},
            status=status.HTTP_404_NOT_FOUND
        )

    token, created = Token.objects.get_or_create(user=user)

    return Response({
        'message': 'Login successful.',
        'token': token.key,
        'account': {
            'full_name': profile.full_name,
            'email': profile.email,
            'role': profile.role,
            'city': profile.city
        }
    }, status=status.HTTP_200_OK)
