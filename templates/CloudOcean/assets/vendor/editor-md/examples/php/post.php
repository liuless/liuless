<?php
    header("Content-Type:text/html; charset=utf-8");

    if (isset($_POST['submit'])) {
        echo "<pre>";
        echo htmlspecialchars($_POST["test-editormd-markdown-doc"]);
        echo "<br/><br/>";
        echo htmlspecialchars($_POST["test-editormd-html-code"]);
        echo "</pre>";
    }

    exit;
?>