<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class BooksTest extends TestCase
{
    private $token;

    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function setUp(): void
    {
        parent::setUp();
        $this->withoutExceptionHandling();
        Artisan::call('migrate --seed');
        $user = [
            'name' => 'user_example',
            'email' => 'user@gmail.com',
            'password' => 'user123',
            'password_confirmation' => 'user123',
        ];

        //login with data_super_admin
        $response = $this->post('/api/register', $user);

        // get token super admin
        $this->token = $response['token'];
    }

    public function tearDown(): void
    {
        Artisan::call('migrate:reset');
        parent::tearDown();
    }
    /**
     * @test
     */
    public function test_create_book_return_book()
    {


        // Preparación de datos de prueba
        Storage::fake('public');
        $file = UploadedFile::fake()->image('bookss.jpg');

        // Envío de la solicitud
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $this->token,
        ])->postJson('/api/books', [
            'title' => 'Test Title',
            'description' => 'Test description',
            'image' => $file,
            'category' => 'category',
            'price' => 005,
        ]); 

        // Verificación de la respuesta
        $response->assertStatus(201);

    }

    public function test_show_book_return_show()
    {
        // $response = $this->withHeaders([
        //     'Authorization' => 'Bearer ' . $this->token,
        // ])->get('/api/books/1');
        // $response->assertJsonStructure([
        //     'id',
        //     'title',
        //     'description',
        //     'user_id',
        //     'image',
        //     'category',
        //     'price',
        //     'created_at',
        //     'updated_at',
        //     'user' => [
        //         'id',
        //         'name',
        //         'email',
        //         'email_verified_at',
        //         'created_at',
        //         'updated_at',
        //     ],
        // ]);
    }
}
