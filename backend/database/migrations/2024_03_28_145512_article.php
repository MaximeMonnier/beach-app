<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('article', function (Blueprint $table) {
            $table->id();
            $table->string('article_name');
            $table->string('article_content');
            $table->int('picture_id');

            $table->unsignedBigInteger('users_id');
            $table->unsignedBigInteger('categorie_id');
            $table->unsignedBigInteger('users_type_id');

            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('categorie_id')->references('id')->on('categorie')->onDelete('cascade');
            $table->foreign('picture_id')->references('id')->on('picture')->onDelete('cascade');

            $table->date('date_creation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('article');
    }
};
