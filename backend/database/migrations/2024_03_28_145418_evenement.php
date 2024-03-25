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
        Schema::create('evenement', function (Blueprint $table) {
            $table->id();
            $table->string('evenement_name');
            $table->unsignedBigInteger('association_id')->nullable();
            $table->unsignedBigInteger('users_id')->nullable();
            $table->unsignedBigInteger('evenement_type_id');
            $table->foreign('association_id')->references('id')->on('association')->onDelete('cascade');
            $table->foreign('users_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('evenement_type_id')->references('id')->on('evenement_type')->onDelete('cascade');
            $table->date('date_creation_evenement');
            $table->date('date_fin_evenement');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evenement');
    }
};
