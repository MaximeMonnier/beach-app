<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

use App\Models\permissionUsers;
use App\Models\usersType;


class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * Les attributs qui sont assignables en masse.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * Les attributs qui doivent être cachés pour les tableaux.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Les attributs qui doivent être castés vers les types natifs.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Récupère la permission associée à l'utilisateur.
     */
    public function permission()
    {
        return $this->belongsTo(permissionUsers::class, 'permission_id');
    }

    /**
     * Récupère le type d'utilisateur associé à l'utilisateur.
     */
    public function userType()
    {
        return $this->belongsTo(usersType::class, 'users_type_id');
    }
}
