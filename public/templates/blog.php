<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Players 2 Be - Notre blog</title>
    <link rel="stylesheet" href="../assets/styles/master.css">
    <link rel="stylesheet" href="../assets/styles/grid.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="../assets/styles/custom-download.css">
</head>
<body>
<div class="jumbotron blog ">
    <header>
        <div class="log"></div>
        <div class="nav">
            <ul>
                <li><a href="/#about">A Propos</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#contact">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a class="sign-up" href="sign-up">S'inscrire</a></li>
            </ul>
        </div>
    </header>
    <div class="category-title center">Notre blog</div>
</div>
<div class="feed">

        {% for key, article in articles %}
        <div class="container">
        <div class="col-50 lead-image"></div>
            <div class="col-50 content">
                <div class="article-title" id="{{article.ID}}-title">{{ article.title|raw }}</div>
                <div class="article-meta">{{ article.release_date }}</div>
                <div class="article-atrouver" id="{{article.ID}}-content">
                    {{ article.content }} <br />
                </div>
                <div class="translate">
                    <span id="fr-button-{{article.ID}}" class="translate--button" onclick="tradArticles('fr', '{{ article.content }}', '{{ article.us_content | escape }}', '{{ article.title | raw }}', '{{ article.us_title }}', '{{ article.ID }}')">FR</span>
                    <span id="en-button-{{article.ID}}" class="translate--button" onclick="tradArticles('en', '{{ article.content }}', '{{ article.us_content | escape }}', '{{ article.title | raw }}', '{{ article.us_title }}', '{{ article.ID }}')">EN</span>
                </div>
                </div>
            </div>
         {% endfor %}

</div>
<footer class="light brighter">
</footer>


<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script type="text/javascript" src="../assets/js/master.js"></script>
<script>

    function tradArticles(lang, frTrad, enTrad, frTrad_title, enTrad_title, element) {
        if (lang == 'fr') {
            document.getElementById(element+"-title").innerHTML = frTrad_title;
            document.getElementById(element+"-content").innerHTML = frTrad;
            document.getElementById("fr-button-"+element).classList.add("translate--button--active");
            document.getElementById("en-button-"+element).classList.remove("translate--button--active");
        } else {
            document.getElementById(element+"-title").innerHTML = enTrad_title;
            document.getElementById(element+"-content").innerHTML = enTrad;
            document.getElementById("en-button-"+element).classList.add("translate--button--active");
            document.getElementById("fr-button-"+element).classList.remove("translate--button--active");
        }
        return true;
    }

</script>
