<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class UsuariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('departamentos')->insert([
            [
                'usuario' => 'nombreUsuario1',
                'email' => 'correo1example.com',
                'primerNombre' => 'PrimerNombre1',
                'segundoNombre' => 'SegundoNombre1',
                'primerApellido' => 'PrimerApellido1',
                'segundoApellido' => 'SegundoApellido1',
                'idDepartamento' => 1, 
                'idCargo' => 1, 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'usuario' => 'nombreUsuario2',
                'email' => 'correo2example.com',
                'primerNombre' => 'PrimerNombre2',
                'segundoNombre' => 'SegundoNombre2',
                'primerApellido' => 'PrimerApellido2',
                'segundoApellido' => 'SegundoApellido2',
                'idDepartamento' => 2, 
                'idCargo' => 2, 
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    
    
    }
}
