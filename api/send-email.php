<?php
// Load .env variables manually (PHP doesn't auto-load .env)
$envFile = __DIR__ . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            [$key, $val] = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($val, " \t\n\r\0\x0B\"'");
        }
    }
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Accept FormData (multipart) or JSON body
$input = $_POST;
if (empty($input)) {
    $json = json_decode(file_get_contents('php://input'), true);
    if ($json) $input = $json;
}

if (empty($input)) {
    echo json_encode(["success" => false, "message" => "No data provided."]);
    exit();
}

$name           = htmlspecialchars(trim($input['name']           ?? 'No Name'));
$email          = htmlspecialchars(trim($input['email']          ?? 'No Email'));
$brief          = htmlspecialchars(trim($input['brief']          ?? 'Not Specified'));
$source         = htmlspecialchars(trim($input['source']         ?? 'Not Specified'));
$projectDetails = trim($input['projectDetails'] ?? 'No Details');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

$smtpUser   = $_ENV['SMTP_USER']      ?? '';
$smtpPass   = $_ENV['SMTP_PASS']      ?? '';
$smtpFrom   = $_ENV['SMTP_FROM']      ?? $smtpUser;
$smtpFromNm = $_ENV['SMTP_FROM_NAME'] ?? 'Business Anatomy';
$smtpPort   = (int)($_ENV['SMTP_PORT'] ?? 465);
$toEmail    = $smtpFrom; // send to the site owner inbox

$subject = "New Enquiry from {$name} — Business Anatomy";

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto;padding:24px;'>
  <h2 style='color:#512594;border-bottom:2px solid #512594;padding-bottom:8px;'>
    New Contact Form Submission
  </h2>
  <table style='width:100%;border-collapse:collapse;margin-top:16px;'>
    <tr style='background:#f7f3ff;'>
      <td style='padding:10px 14px;font-weight:bold;width:160px;'>Name</td>
      <td style='padding:10px 14px;'>{$name}</td>
    </tr>
    <tr>
      <td style='padding:10px 14px;font-weight:bold;'>Email</td>
      <td style='padding:10px 14px;'><a href='mailto:{$email}'>{$email}</a></td>
    </tr>
    <tr style='background:#f7f3ff;'>
      <td style='padding:10px 14px;font-weight:bold;'>Service Brief</td>
      <td style='padding:10px 14px;'>{$brief}</td>
    </tr>
    <tr>
      <td style='padding:10px 14px;font-weight:bold;'>Heard From</td>
      <td style='padding:10px 14px;'>{$source}</td>
    </tr>
    <tr style='background:#f7f3ff;'>
      <td style='padding:10px 14px;font-weight:bold;vertical-align:top;'>Project Details</td>
      <td style='padding:10px 14px;'>" . nl2br(htmlspecialchars($projectDetails)) . "</td>
    </tr>
  </table>
  <p style='margin-top:24px;font-size:12px;color:#888;'>Sent via Business Anatomy contact form.</p>
</body>
</html>";

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpPort;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($smtpFrom, $smtpFromNm);
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;

    $mail->send();
    echo json_encode(["success" => true, "message" => "Email sent successfully."]);

} catch (\Exception $e) {
    // Fallback to PHP mail()
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$smtpFrom}\r\n";
    $headers .= "Reply-To: {$email}\r\n";

    if (mail($toEmail, $subject, $htmlBody, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent via fallback."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email: " . $e->getMessage()]);
    }
}
?>
