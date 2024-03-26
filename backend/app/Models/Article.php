<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Categorie;
use App\Models\Picture;

class Article extends Model
{
    protected $table = 'articles';

    protected $fillable = [
        'article_name',
        'article_content',
        'users_id',
        'categorie_id',
        'picture_id',
        'date_creation',
    ];

    /**
     * Obtient l'utilisateur (auteur) associé à l'article.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    /**
     * Obtient la catégorie associée à l'article.
     */
    public function categorie()
    {
        // Notez que le nom de la table est 'categorie' dans la migration.
        // Assurez-vous que le nom du modèle et de la table soit cohérent.
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }

    /**
     * Obtient l'image associée à l'article.
     */
    public function picture()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }
}
