<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive DOM Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1 id="title">Hello, DOM World!</h1>
  </header>

  <main>
    <section>
      <p id="description">This text will change dynamically.</p>
      <button id="textChanger">Change Text</button>
    </section>

    <section>
      <p id="styledText">Watch my style change!</p>
      <button id="styleChanger">Change Style</button>
    </section>

    <section>
      <button id="toggleBtn">Add/Remove Element</button>
      <div id="elementZone"></div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Interactive Demo</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
