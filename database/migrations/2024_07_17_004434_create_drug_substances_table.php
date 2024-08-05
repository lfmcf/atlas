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
        Schema::create('drug_substances', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('meta_data_id');
            $table->string('substance')->nullable();
            $table->foreign('meta_data_id')->references('id')->on('meta_data')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drug_substances');
    }
};
