<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with('user')->get();

        return response()->json($books, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validación de entrada
        $request->validate([
            'title' => 'required',
            'image' => 'required|image',
            'category' => 'required',
            'price' => 'required'
        ]);
    
        // Subida y almacenamiento de la imagen
        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $imagePath = 'images/books/';
        $image->move(public_path($imagePath), $imageName);
    
        // Creación y almacenamiento del libro
        $book = new Book();
        $book->title = $request->title;
        $book->description = $request->description;
        $book->user_id = auth()->id();
        $book->image = $imagePath . $imageName;
        $book->category = $request->category;
        $book->price = $request->price;
        $book->save();
    
        return response()->json($book, 201);
    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $book = Book::with('user')->find($id);

        if (!$book) {
            return response()->json(['message' => 'El libro no existe'], 404);
        }

        return response()->json($book, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Search for the specified resource in storage.
     */
    public function search(Request $request, string $text)
    {
        $books = DB::table('books')
        ->select(DB::raw('*'))
        ->where('title', 'like', '%'.$text.'%')
        ->orwhere('category', 'like', '%'.$text.'%')
        ->get();
        return response()->json($books, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'El libro no existe'], 404);
        }

        $book->delete();

        return response()->json(['message' => 'El libro se ha eliminado correctamente'], 200);
    }
}
