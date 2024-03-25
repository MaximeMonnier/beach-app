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
        Schema::create('association', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('association_membre_id');
            $table->unsignedBigInteger('association_president');
            $table->foreign('association_membre_id')->references('id')->on('association_membre')->onDelete('cascade');
            $table->foreign('association_president')->references('id')->on('users')->onDelete('cascade');
            $table->string('association_descritpion');
            $table->date('association_date_creation');
            $table->date('association_date_inscritpion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('association');
    }
};
