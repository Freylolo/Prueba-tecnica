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
            ['nombre_carg' => 'Administrador', 'codigo' => 'ADM', 'activo' => true],
            ['nombre_carg' => 'Desarrollador Frontend', 'codigo' => 'DEV-FE', 'activo' => true],
            ['nombre_carg' => 'Desarrollador Backend', 'codigo' => 'DEV-BE', 'activo' => true],
            ['nombre_carg' => 'Guardia', 'codigo' => 'GRD', 'activo' => true],
        ]);
    
    }
}
