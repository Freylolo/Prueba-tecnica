<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DepartamentosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('departamentos')->insert([
            ['nombre_dep' => 'Departamento de Marketing', 'codigo' => 'MKT', 'activo' => true],
            ['nombre_dep' => 'Departamento de Informatica', 'codigo' => 'IT', 'activo' => true],
            ['nombre_dep' => 'Departamento de Seguridad', 'codigo' => 'SEC', 'activo' => true],
            ['nombre_dep' => 'Departamento de Administracion', 'codigo' => 'ADM', 'activo' => true],        

        ]);
    
    }
}
