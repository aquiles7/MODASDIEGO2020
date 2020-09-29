<?php

// Llamando a los campos
$name = $_POST['nombre'];
$email = $_POST['direccion'];
$phone = $_POST['telefono'];
$subject = $_POST['asunto'];
$message = $_POST['mensaje'];



// Datos para el correo
$addressee = "aquilesjosecuropaz@gmail.com";
$who = "Gsuck Contactos";

$letter = "A: $who \n";
$letter .= " $message \n";
$letter .= "Para mayor información, puede contacterse con mi persona al email $email o al teléfono $phone. \n";
$letter .= "De: $name";



// Enviando mensaje
mail($addressee, $subject, $letter);
header('Location: ../contact.html')

?>
