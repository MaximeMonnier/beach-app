<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TerrainType extends Model
{
    protected $fillable = ['terrain_type_name'];
    use HasFactory;
    protected $table = 'terrain_types';

    public function terrains()
    {
        return $this->hasMany(Terrain::class);
    }

}
