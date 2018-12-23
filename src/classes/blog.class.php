<?php
/**
 * Created by PhpStorm.
 * User: germainperdigal
 * Date: 23/12/2018
 * Time: 14:53
 */

namespace App\Classes;


class blog
{

    public function __construct(\PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function getArticles()
    {
        $articles = $this->pdo->query("SELECT * FROM articles ORDER BY ID DESC LIMIT 5");
        $article = $articles->fetchAll();
        return $article;
    }

}