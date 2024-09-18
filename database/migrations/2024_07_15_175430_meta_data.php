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
        Schema::create('meta_data', function (Blueprint $table) {
            $table->id();
            $table->string('procedure');
            $table->string('country');
            $table->string('invented_name')->nullable();
            $table->string('agencyCode')->nullable();
            $table->string('uuid')->nullable();
            $table->string('applicant')->nullable();
            $table->string('inn')->nullable();
            $table->string('code')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meta_data');
    }
};
