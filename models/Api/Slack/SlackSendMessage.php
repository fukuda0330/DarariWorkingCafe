<?php

$token = 'xoxb-380558888914-2318050500673-7B8V8zpCFljTWF3iwufdyhhM';
$channel = 'アプリ開発';
$sendMessage = $_POST['SendMessage'];

$channel = urlencode($channel);
$sendMessage = urlencode($sendMessage);

$url = "https://slack.com/api/chat.postMessage?token=${token}&channel=%23${channel}&text=${sendMessage}";
file_get_contents($url);

