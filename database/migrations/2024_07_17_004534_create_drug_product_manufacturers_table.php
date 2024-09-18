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
        Schema::create('drug_product_manufacturers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('drug_product_id');
            $table->string('product_manufacturer');
            $table->foreign('drug_product_id')->references('id')->on('drug_products')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drug_product_manufacturers');
    }
};
