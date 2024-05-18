<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Terrain;
use App\Models\Reservation;
use Carbon\Carbon;

class TerrainController extends Controller
{
    public function getTerrain()
    {
        // function qui recupere tout les terrains dans la page peut etre utiliser pour envoyer d'autre donne depuis le serveur sur la pages terrains

        $terrainswithtype = Terrain::with('terrainType', 'reservations')->get();

        return response()->json($terrainswithtype);
    }

    public function reservationTerrain(Request $request)
    {
        $request->validate([
            'users_id' => 'required',
            'terrain_id' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
        ]);

        $reservation = Reservation::create([
            'users_id' => $request->users_id,
            'terrain_id' => $request->terrain_id,
            'date_start' => $request->date_start,
            'date_end' => $request->date_end,
        ]);

        return response()->json(['message' => 'Réservation créée avec succès', 'reservation' => $reservation], 201);
    }

    public function getReservationCalendrier()
    {
        // Récupérer toutes les réservations
        $reservations = Reservation::all();

        // Définir la locale sur français
        Carbon::setLocale('fr');

        // Convertir les dates en français
        $displayCalendrier = $reservations->map(function ($reservation) {
            return [
                'id' => $reservation->id,
                'users_id' => $reservation->users_id,
                'terrain_id' => $reservation->terrain_id,
                'date_start' => Carbon::parse($reservation->date_start)->toIso8601String(),
                'date_end' => Carbon::parse($reservation->date_end)->toIso8601String(),
            ];
        });

        // Retourner la réponse JSON
        return response()->json($displayCalendrier);
    }
}
