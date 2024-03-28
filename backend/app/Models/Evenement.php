<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Association;
use App\Models\EvenementType;

class Evenement extends Model
{
    protected $table = 'evenements';

    protected $fillable = [
        'evenement_name',
        'association_id',
        'users_id',
        'evenement_type_id',
        'date_creation_evenement',
        'date_fin_evenement',
    ];

    /**
     * Obtient l'association liée à l'événement.
     */
    public function association()
    {
        return $this->belongsTo(Association::class, 'association_id');
    }

    /**
     * Obtient l'utilisateur (organisateur) lié à l'événement.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    /**
     * Obtient le type d'événement.
     */
    public function evenementType()
    {
        return $this->belongsTo(EvenementType::class, 'evenement_type_id');
    }
}
