<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\BookController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Public routes
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('books-public/{book}', [BookController::class, 'show']);
Route::get('books-public', [BookController::class, 'index']);
Route::get('search/{text}', [BookController::class, 'search']);

Route::apiResource('users', UserController::class);

//Autenticate routes
Route::middleware('jwt.verify')->group(function () {
    Route::apiResource('books', BookController::class);
});
