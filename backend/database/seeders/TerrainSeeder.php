<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Terrain;
use App\Models\TerrainType;

class TerrainSeeder extends Seeder

{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Terrain::create([
            'terrain_name' => 'Terrain 1',
            'terrain_type_id' =>5,
        ]);

        Terrain::create([
            'terrain_name' => 'Terrain 2',
            'terrain_type_id' =>5,
        ]);

        Terrain::create([
            'terrain_name' => 'Terrain 3',
            'terrain_type_id' =>5,
        ]);

        Terrain::create([
            'terrain_name' => 'Terrain 4',
            'terrain_type_id' =>5,
        ]);

        Terrain::create([
            'terrain_name' => 'Terrain 5',
            'terrain_type_id' =>5,
        ]);
        Terrain::create([
            'terrain_name' => 'Terrain 6',
            'terrain_type_id' =>5,
        ]);
        Terrain::create([
            'terrain_name' => 'Terrain 7',
            'terrain_type_id' =>4,
        ]);
        Terrain::create([
            'terrain_name' => 'Terrain 8',
            'terrain_type_id' =>4,
        ]);
    }
}
