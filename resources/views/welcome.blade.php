<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Software Engineering</title>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <div class="container" id="app">
        <main class="wrapper">
            <section v-if="view == 1">
                <div>
                    <navbar />
                </div>
                <search :update-view="updateView" :phone="phone" />
            </section>
            <section v-if="view == 2">
                <div>
                    <navbar :update-view="updateView" id="1"  />
                </div>
                <new-customer :update-view="updateView" />
            </section>
            <section v-if="view == 3">
                <div>
                    <navbar :update-view="updateView" id="1" add-item="yes" />
                </div>
                <order :update-view="updateView" :customer="customer" />
            </section>
            <section v-if="view == 4">
                <confirmation :update-view="updateView" :customer="customer" :order="order" />
            </section>
        </main>
        <modal />
    </div>
    <script src="js/app.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
</body>
</html>
