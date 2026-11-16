<?php
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (preg_match('#^/modules/([a-z0-9-]+)/?$#i', $path, $matches)) {
  $_GET['module'] = rawurldecode($matches[1]);
  require __DIR__ . '/module.php';
  return true;
}

return false;
