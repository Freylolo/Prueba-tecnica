<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::paginate(10); // paginación con 10 registros por página
        return response()->json($usuarios, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'usuario' => 'required|string|unique:usuarios',
            'email' => 'required|email|unique:usuarios',
            'primerNombre' => 'required|string',
            'segundoNombre' => 'string|nullable',
            'primerApellido' => 'required|string',
            'segundoApellido' => 'string|nullable',
            'idDepartamento' => 'numeric|nullable',
            'idCargo' => 'numeric|nullable',
        ]);

        $usuario = Usuario::create($request->all());
        return response()->json($usuario, 201);
    }

    public function show(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario, 200);
    }

    public function update(Request $request, string $id)
    {
        $usuario = Usuario::findOrFail($id);

        $request->validate([
            'usuario' => 'required|string|unique:usuarios,usuario,' . $id,
            'email' => 'required|email|unique:usuarios,email,' . $id,
            'primerNombre' => 'required|string',
            'segundoNombre' => 'string|nullable',
            'primerApellido' => 'required|string',
            'segundoApellido' => 'string|nullable',
            'idDepartamento' => 'numeric|nullable',
            'idCargo' => 'numeric|nullable',
        ]);

        $usuario->update($request->all());
        return response()->json($usuario, 200);
    }

    public function destroy(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(null, 204);
    }
}
