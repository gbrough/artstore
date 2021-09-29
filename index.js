<!doctype html>
<html lang="en">

<head>
  <!-- The first thing in any HTML file should be the charset -->
  <meta charset="utf-8">

  <!-- Make the page mobile compatible -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Allow installing the app to the homescreen -->
  <meta name="mobile-web-app-capable" content="yes">

  <link rel="icon" href="/favicon.ico" />
  <title>React.js Boilerplate</title>
</head>

<body>
  <!-- Display a message if JS has been disabled on the browser. -->
  <noscript>If you're seeing this message, that means
    <strong>JavaScript has been disabled on your browser</strong>, please
    <strong>enable JS</strong> to make this app work.</noscript>

  <!-- The app hooks into this div -->
  <div id="app"></div>

  <!-- Open Sans Font -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">

  <!-- A lot of magic happens in this file. HtmlWebpackPlugin automatically injects all assets (e.g. bundle.js, main.css) with the correct HTML tags, which is why they are missing in this file. Don't add any assets here! (Check out webpack.dev.babel.js and webpack.prod.babel.js if you want to know more) -->
</body>

</html>