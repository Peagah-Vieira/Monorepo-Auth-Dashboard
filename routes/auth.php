<?php

use App\DataSource\ConfirmPasswordDataSource;
use App\DataSource\ForgotPasswordDataSource;
use App\DataSource\LoginUserDataSource;
use App\DataSource\RegisterUserDataSource;
use App\DataSource\ResetPasswordDataSource;
use App\Http\Controllers\Auth\ConfirmPasswordController;
use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Auth\LogoutUserController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\ResetPasswordLinkController;
use App\Http\Controllers\Auth\SendEmailVerificationController;
use App\Http\Controllers\Auth\SendEmailVerificationNotificationController;
use App\Http\Controllers\Auth\UpdatePasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get(
        'register',
        fn () => Inertia::render('Auth/Register', RegisterUserDataSource::data())
    )
        ->name('register');
    Route::post('register', RegisterUserController::class);

    Route::get(
        'login',
        fn () => Inertia::render('Auth/Login', LoginUserDataSource::data())
    )
        ->name('login');
    Route::post('login', LoginUserController::class);

    Route::get(
        'forgot-password',
        fn () => Inertia::render('Auth/ForgotPassword', ForgotPasswordDataSource::data())
    )
        ->name('password.request');
    Route::post('forgot-password', ResetPasswordLinkController::class)
        ->name('password.email');

    Route::get(
        'reset-password/{token}',
        fn (Request $request) => Inertia::render('Auth/ResetPassword', ResetPasswordDataSource::data($request))
    )
        ->name('password.reset');
    Route::post('reset-password', ResetPasswordController::class)
        ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', SendEmailVerificationController::class)
        ->name('verification.notice');
    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', SendEmailVerificationNotificationController::class)
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get(
        'confirm-password',
        fn () => Inertia::render('Auth/ConfirmPassword', ConfirmPasswordDataSource::data())
    )
        ->name('password.confirm');
    Route::post('confirm-password', ConfirmPasswordController::class);

    Route::put('password', UpdatePasswordController::class)
        ->name('password.update');

    Route::post('logout', LogoutUserController::class)
        ->name('logout');
});
