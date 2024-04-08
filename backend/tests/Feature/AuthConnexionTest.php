<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthConnexionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function api_test_returns_success_message()
    {
        $response = $this->get('/api/test');

        $response->assertStatus(200)
            ->assertJson(['message' => 'API Test successful']);
    }

    /**
     * @test
     */
    public function user_can_register()
    {
        $userData = [
            'first_name' => 'John',
            'familly_name' => 'Doe',
            'email' => 'john@example.com',
            'password' => 'password',
            'dob' => '06-09-1995',
        ];

        $response = $this->postJson('/api/register', $userData);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'message',
                'user' => ['id', 'first_name', 'familly_name', 'email', 'dob'],
                'token'
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'john@example.com',
        ]);
    }

    /**
     * @test
     */
    public function user_can_login_with_valid_credentials()
    {
        $user = User::create([
            'first_name' => 'Jane',
            'familly_name' => 'Doe',
            'email' => 'jane@example.com',
            'password' => Hash::make('password'),
            'dob' => '06-09-1995',
        ]);

        $loginData = [
            'email' => 'jane@example.com',
            'password' => 'password',
        ];

        $response = $this->postJson('/api/login', $loginData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'message',
                'user' => ['id', 'email'],
                'token'
            ]);
    }
}
