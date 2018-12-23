<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;
$container = $app->getContainer();

$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig('templates', [
    ]);
    $router = $container->get('router');
    $uri = \Slim\Http\Uri::createFromEnvironment(new \Slim\Http\Environment($_SERVER));
    $view->addExtension(new Slim\Views\TwigExtension($router, $uri));
    return $view;
};

//Routing\\

$app->get('/', function (Request $request, Response $response, array $args) {
    return $this->view->render($response, 'index.html');
});

$app->get('/blog', function (Request $request, Response $response, array $args) {
    require('../db.php');
    $blog = new \App\Classes\blog($pdo);
    $articles = $blog->getArticles();
    return $this->view->render($response, 'blog.php', ["articles" => $articles]);
});

$app->get('/sign', function (Request $request, Response $response, array $args) {
    return $this->view->render($response, 'sign.html', [
    ]);
});

$app->run();