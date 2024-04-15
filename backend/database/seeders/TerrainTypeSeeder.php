<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TerrainType;

class TerrainTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TerrainType::create([
            'terrain_type_name' => 'Rugby',
        ]);

        TerrainType::create([
            'terrain_type_name' => 'Volley',
        ]);

        TerrainType::create([
            'terrain_type_name' => 'Tennis',
        ]);

        TerrainType::create([
            'terrain_type_name' => 'Petit Terrain',
        ]);

        TerrainType::create([
            'terrain_type_name' => 'Grand Terrain',
        ]);
    }
}
