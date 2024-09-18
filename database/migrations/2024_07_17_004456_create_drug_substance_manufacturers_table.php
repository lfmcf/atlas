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
        Schema::create('drug_substance_manufacturers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('drug_substance_id');
            $table->string('substance_manufacturer')->nullable();
            $table->foreign('drug_substance_id')->references('id')->on('drug_substances')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drug_substance_manufacturers');
    }
};
