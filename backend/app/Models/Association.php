<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\AssociationMembre;

class Association extends Model
{
    protected $table = 'associations';

    protected $fillable = [
        'association_membre_id',
        'association_president',
        'association_descritpion',
        'association_date_creation',
        'association_date_inscritpion',
    ];

    /**
     * Obtient le président de l'association.
     */
    public function president()
    {
        return $this->belongsTo(User::class, 'association_president');
    }

    /**
     * Obtient les membres de l'association.
     *
     * Note: Cela suppose que vous avez une relation de "appartient à plusieurs" entre associations et membres.
     * Si votre relation est différente, ajustez cette méthode en conséquence.
     */
    public function membres()
    {
        return $this->hasMany(AssociationMembre::class, 'association_membre_id');
    }

    // Ajoutez d'autres méthodes de relations ou de logique spécifique au modèle ici si nécessaire.
}
