<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;


class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'usuario' => 'required|string|unique:users',
            'primerNombre' => 'required|string',
            'segundoNombre' => 'string',
            'primerApellido' => 'required|string',
            'segundoApellido' => 'string',
            'idDepartamento' => 'numeric',
            'idCargo' => 'numeric',
        ]);

        $usuario = Usuario::create($request->all());
        return response()->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $usuario = Usuario::findOrFail($id);

        $request->validate([
            'usuario' => 'required|string|unique:users,usuario,' . $id,
            'primerNombre' => 'required|string',
            'segundoNombre' => 'string',
            'primerApellido' => 'required|string',
            'segundoApellido' => 'string',
            'idDepartamento' => 'numeric',
            'idCargo' => 'numeric',
        ]);

        $usuario->update($request->all());
        return response()->json($usuario, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(null, 204);
    }
}