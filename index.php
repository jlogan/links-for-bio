<?php

if (version_compare(PHP_VERSION, '8.1') === -1) {
  exit('You need at least PHP 8.1 to install this application.');
}

// Check if app is installed
$isInstalled = false;
if (file_exists(__DIR__ . '/.env')) {
  $envContent = file_get_contents(__DIR__ . '/.env');
  $isInstalled = preg_match('/INSTALLED=(true|1)/', $envContent);
}

// If installed, redirect to public directory
if ($isInstalled) {
  $publicPath = '/public' . $_SERVER['REQUEST_URI'];
  header("Location: $publicPath");
  exit;
}

// If not installed yet, try to create .htaccess files (for Apache servers)
// But don't fail if server doesn't support .htaccess (e.g., Nginx)
$rootHtaccess = __DIR__ . '/.htaccess';
$rootHtaccessStub = __DIR__ . '/htaccess.example';
$publicHtaccess = __DIR__ . '/public/.htaccess';
$publicHtaccessStub = __DIR__ . '/public/htaccess.example';

$shouldReload = false;

try {
  if (!file_exists($rootHtaccess) && file_exists($rootHtaccessStub)) {
    $contents = file_get_contents($rootHtaccessStub);
    if (@file_put_contents($rootHtaccess, $contents)) {
      $shouldReload = true;
    }
  }

  if (!file_exists($publicHtaccess) && file_exists($publicHtaccessStub)) {
    $contents = file_get_contents($publicHtaccessStub);
    if (@file_put_contents($publicHtaccess, $contents)) {
      $shouldReload = true;
    }
  }
} catch (Exception $e) {
  // Silently fail - server might not support .htaccess (e.g., Nginx)
}

// If .htaccess files were created, reload to let them take effect
// Otherwise, redirect to public directory anyway (works for Nginx/other servers)
if ($shouldReload) {
  // Reload to let .htaccess take effect - will be handled by the HTML below
} else {
  // Server doesn't support .htaccess or files already exist
  // Redirect to public directory directly
  $requestUri = $_SERVER['REQUEST_URI'];
  $publicPath = '/public' . ($requestUri === '/' ? '' : $requestUri);
  header("Location: $publicPath");
  exit;
}
?>

<html lang="en">
<head>
  <title>.htaccess error</title>
  <style>
    html {
      width: 100%;
      height: 100%;
    }
    body {
      background: rgb(250, 250, 250);
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
    .logo {
      text-align: center;
      margin-bottom: 25px;
    }
    img {
      max-width: 200px;
    }
    .panel {
      background: rgb(255, 255, 255);
      border: 1px solid rgba(0, 0, 0, 0.12);
      padding: 40px 80px;
      border-radius: 4px;
      width: max-content;
      text-align: center;
      max-width: 700px;
    }
    h1 {
      margin: 0 0 6px;
    }
    p {
      font-size: 20px;
    }
  </style>
</head>
<body>
<?php if (!$shouldReload): ?>
  <div class="panel">
    <h1>Could not find .htaccess file</h1>
    <p>See this article <a href="https://support.vebto.com/hc/articles/21/27/172/site-not-loading">https://support.vebto.com/hc/articles/21/27/172/site-not-loading</a> for possible solutions.</p>
  </div>
<?php else: ?>
  <script>
    window.location.reload();
  </script>
<?php endif; ?>
</body>
</html>
