<?php 
	require_once('db_manager.php');

	/* GET */
	if (isset($_GET['quote']) && $_GET['quote'] != ""){
		echo $_GET['quote'].'<br>';
		getQuote($_GET['quote']);
	}
	else{
		echo '[NO VALUES]';
	}

?>