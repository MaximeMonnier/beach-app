<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'familly_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'dob' => 'required|date',
            // 'permission_id' => 'nullable|integer|exists:permissions,id',
            // 'users_type_id' => 'nullable|integer|exists:users_types,id',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'familly_name' => $request->familly_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dob' => $request->dob,
            // 'permission_id' => $request->permission_id,
            // 'users_type_id' => $request->users_type_id,
            // 'email_verified_at' => now(), // Décommentez cette ligne si vous voulez vérifier l'email dès l'inscription
        ]);

        // \Log::info($request->all());

        // Retournez une réponse ou un token selon votre besoin
        return response()->json(['message' => 'User successfully registered', 'user' => $user], 201);
    }

    public function index()
    {
        return response()->json(['message' => 'API Test successful']);
    }
}
