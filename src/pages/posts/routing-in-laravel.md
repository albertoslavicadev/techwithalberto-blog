---
description: Laravel
slug: routing-in-laravel
public: true
layout: ../../layouts/blogLayout.astro
title: How Routing in Laravel work?
createdAt: 1663134489800
updatedAt: 1663635618067
tags:
  - Computing
heroImage: https://www.cloudways.com/blog/wp-content/uploads/Main.jpg
---

Routing in Laravel allows you to map URLs to specific controller actions. This means that when a user navigates to a certain URL on your website, they will be directed to the appropriate controller action that will handle the request.

To create a route in Laravel, you can use the Route facade's :: method. The :: method accepts two arguments: the HTTP verb and the URL pattern. For example, to create a route that responds to a GET request to the /hello URL, you could use the following code:
<br/>
<br/>
```
Route::get('/hello', function () {
    return 'Hello World';
});
```
<br/>
<br/>
In this example, the anonymous function that we've passed as the second argument to the ::get method will be executed when a user navigates to the /hello URL on your website. The function simply returns the string 'Hello World', which will be displayed in the user's browser.
<br/>
<br/>
You can also map a route to a specific controller action by passing the controller and method name as a string to the :: method. For example, if you have a UsersController with a show method, you could map a route to that method like this:
<br/>
<br/>

```
Route::get('/users/{id}', 'UsersController@show');
```
<br/>
<br/>
In this example, the show method of the UsersController will be executed when a user navigates to the /users/{id} URL on your website. The {id} portion of the URL is a wildcard, which means that it will match any value. For example, if a user navigates to /users/1, the show method will be executed with $id set to 1.
<br/>
<br/>
You can also specify constraints on the wildcard values in your route URLs. For example, if you only want the {id} wildcard to match numeric values, you could use the where method like this:
<br/>
<br/>

```
Route::get('/users/{id}', 'UsersController@show')->where('id', '[0-9]+');
```

<br/>
<br/>
In this example, the where method is used to specify that the {id} wildcard can only match numeric values. If a user navigates to /users/abc, for example, the route will not match and the request will not be handled by the UsersController@show action.
<br/>
<br/>
In addition to the ::get method, the Route facade also provides methods for the other HTTP verbs, such as ::post, ::put, ::patch, and ::delete. You can use these methods to create routes that respond to requests made using these verbs.

Here is an example of a route that responds to a POST request to the /users URL:
<br/>
<br/>
```
Route::post('/users', 'UsersController@store');
```
<br/>
<br/>
In this example, the store method of the UsersController will be executed when a user submits a POST request to the /users URL on your website.
<br/>
<br/>

Thanks for reading!
