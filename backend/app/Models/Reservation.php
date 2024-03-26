<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Terrain;

class Reservation extends Model
{
    protected $table = 'reservations';

    protected $fillable = [
        'users_id',
        'terrain_id',
        'date_start',
        'date_end',
    ];

    /**
     * Obtient l'utilisateur qui a fait la réservation.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    /**
     * Obtient le terrain réservé.
     */
    public function terrain()
    {
        return $this->belongsTo(Terrain::class, 'terrain_id');
    }
}
