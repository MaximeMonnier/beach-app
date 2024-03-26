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
        Schema::table('associations', function (Blueprint $table) {
            $table->foreign('association_membre_id')->references('id')->on('associations_membres')->onDelete('cascade');
            $table->foreign('association_president')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('associations', function (Blueprint $table) {
            $table->dropForeign(['association_membre_id']);
            $table->dropForeign(['association_president']);
        });
    }
};
