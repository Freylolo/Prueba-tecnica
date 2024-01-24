<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('usuario');
            $table->string('email');
            $table->string('primerNombre');
            $table->string('segundoNombre')->nullable(); 
            $table->string('primerApellido');
            $table->string('segundoApellido')->nullable();
            $table->unsignedBigInteger('idDepartamento');
            $table->unsignedBigInteger('idCargo');
            $table->timestamps();

            // Definir claves foráneas
            $table->foreign('idDepartamento')->references('id')->on('departamentos');
            $table->foreign('idCargo')->references('id')->on('cargos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
