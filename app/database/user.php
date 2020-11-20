<?php
require_once('./class/class_database.php');
/**
 * Class database_user
 * User Tabelle und ihre funktionen
 */
class database_user {
	
	public function getUser($name, $pasword) {
		$db = new class_database();
		$user = null;
		$user = $db->mysql->query("SELECT * FROM user WHERE Name ='" . $name . "' AND Pasword ='" . $pasword . "'")
											->fetch_row();
		return $user;
	}
	
}