<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CargoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\DepartamentoController;

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


Route::resource('usuarios', UsuarioController::class);
Route::get('departamentos', [DepartamentoController::class, 'index']);
Route::get('cargos', [CargoController::class, 'index']);