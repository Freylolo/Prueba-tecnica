<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CargosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cargos')->insert([
            ['nombre_carg' => 'Administrador'],
            ['nombre_carg' => 'Desarrollador Fronted'],
            ['nombre_carg' => 'Desarrollador Backend'],
            ['nombre_carg' => 'Guardia'],

        ]);
    
    }
}
