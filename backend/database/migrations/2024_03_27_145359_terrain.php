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
        Schema::create('terrain', function (Blueprint $table) {
            $table->id();
            $table->string('terrain_name');
            $table->unsignedBigInteger('terrain_type_id');
            $table->foreign('terrain_type_id')->references('id')->on('terrain_type')->onDelete('cascade');
            $table->date('date_start');
            $table->date('date_end');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('terrain');
    }
};
