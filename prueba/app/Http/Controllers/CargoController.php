<?php

namespace App\Http\Controllers;

use App\Models\Cargo;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class CargoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cargos = Cargo::paginate(10); // Ejemplo de paginación con 10 registros por página
        return response()->json($cargos, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre_carg' => 'required|string|unique:cargos',
            'codigo' => 'string|nullable',
            'activo' => 'boolean',
        ]);

        $cargo = Cargo::create($request->all());
        return response()->json($cargo, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cargo = Cargo::findOrFail($id);
        return response()->json($cargo, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $cargo = Cargo::findOrFail($id);

        $request->validate([
            'nombre_carg' => 'required|string|unique:cargos,nombre_carg,' . $id,
            'codigo' => 'string|nullable',
            'activo' => 'boolean',
        ]);

        $cargo->update($request->all());
        return response()->json($cargo, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cargo = Cargo::findOrFail($id);
        $cargo->delete();
    
        return response()->json(['message' => 'Cargo eliminado correctamente'], 200);
    }
}
