<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Terrain;

class TerrainController extends Controller
{
    public function getTerrain()
    {
        $terrainswithtype = Terrain::with('terrainType', 'reservations')->get();

        // @dd($terrainswithtype);

        return response()->json($terrainswithtype);
    }
}
