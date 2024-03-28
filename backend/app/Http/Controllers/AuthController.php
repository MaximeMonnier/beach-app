<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

    public function index()
    {
        return response()->json(['message' => 'API Test successful']);
    }
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'familly_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'dob' => 'required|date',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'familly_name' => $request->familly_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dob' => $request->dob,
        ]);

        return response()->json(['message' => 'User successfully registered', 'user' => $user], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = auth()->user();

        // Créer un token de Sanctum pour l'utilisateur connecté
        //intelephense ne reconnait pas createToken donc souligne en rouge mais le code marche
        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token,
        ]);
    }
}
