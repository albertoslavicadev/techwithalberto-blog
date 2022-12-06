---
description: PHP
slug: laravel-crud
public: true
layout: ../../layouts/blogLayout.astro
title: How to build a Laravel CRUD
createdAt: '2022-12-04'
updatedAt: 1663635618067
tags:
  - Computing
heroImage: https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhwfGVufDB8fDB8fA%3D%3D&w=1000&q=80
---

To create a cars CRUD (create, read, update, delete) application in Laravel, you can follow these steps:
Install Laravel by running the following command in your terminal:
```
composer create-project laravel/laravel my-app
```
<br/>
    Create a database and connect it to your Laravel application by modifying the .env file in the root directory of your project.
<br/>
    Create a Car model by running the following command:
    <br/>

```
php artisan make:model Car
```
<br/>
    Create a migration for the cars table by running the following command:
<br/>

php artisan make:migration create_cars_table
<br/>
    In the generated migration file, define the schema for the cars table. For example:
<br/>
<br/>
```
public function up()
{
    Schema::create('cars', function (Blueprint $table) {
        $table->id();
        $table->string('make');
        $table->string('model');
        $table->integer('year');
        $table->timestamps();
    });
}
```
<br/>
    Run the migration to create the cars table in the database:
<br/>
<br/>

```
php artisan migrate
```
<br/>

    Create a controller for the cars by running the following command:

php artisan make:controller CarController

    In the CarController, define the methods for each of the CRUD operations. For example:

public function index()
{
    $cars = Car::all();
    return view('cars.index', compact('cars'));
}

public function create()
{
    return view('cars.create');
}

public function store(Request $request)
{
    $car = new Car();
    $car->make = $request->make;
    $car->model = $request->model;
    $car->year = $request->year;
    $car->save();
    return redirect()->route('cars.index')->with('success', 'Car added successfully.');
}

public function show($id)
{
    $car = Car::find($id);
    return view('cars.show', compact('car'));
}

public function edit($id)
{
    $car = Car::find($id);
    return view('cars.edit', compact('car'));
}

public function update(Request $request, $id)
{
    $car = Car::find($id);
    $car->make = $request->make;
    $car->model = $request->model;
    $car->year = $request->year;
    $car->save();
    return redirect()->route('cars.index')->with('success', 'Car updated successfully.');
}

public function destroy($id)
{
    $car = Car::find($id);
    $car->delete();
    return redirect()->route('cars.index')->with('success', 'Car deleted successfully.');
}

    Create views for each of the car CRUD operations by creating a cars directory in the resources/views directory. Then, create a view file for each of the actions in the CarController. For example, `index.blade.php