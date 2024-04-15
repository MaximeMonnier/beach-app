<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\TerainType;

class Terrain extends Model
{
    protected $table = 'terrains';

    protected $fillable = [
        'terrain_name',
        'terrain_type_id',
        'date_start',
        'date_end',
    ];

    /**
     * Obtient le type du terrain.
     */
    public function terrainType()
    {
        return $this->belongsTo(TerrainType::class, 'terrain_type_id');
    }

    /**
     * Obtient les réservations associées à ce terrain.
     */
    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
