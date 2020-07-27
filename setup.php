<?php

$config = include('config.php');

if($config['debug']) {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
}

$ver = empty($config['ver'])? $config['ver'] : time();