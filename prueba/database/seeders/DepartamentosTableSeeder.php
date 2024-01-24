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
            ['nombre' => 'Departamento de Marketing'],
            ['nombre' => 'Departamento de Informatica'],
            ['nombre' => 'Departamento de Seguridad'],
            ['nombre' => 'Departamento de Administracion'],

        ]);
    
    }
}
