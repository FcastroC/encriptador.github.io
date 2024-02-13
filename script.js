function encrypt() {
    const texto = document.getElementById("escribirtexto").value.toLowerCase();
    const textoCifrado = texto
        .replace("e", "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("resultado").textContent = textoCifrado;
    }

function decrypt() {
    const textoCifrado = document.getElementById("escribirtexto").value.toLowerCase();
    const textoOriginal = textoCifrado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultado").textContent = textoOriginal;
    }

    function copyResult() {
        var outputText = document.getElementById('resultado');
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
        }

        function clearFields() {
        document.getElementById('escribirtexto').value = '';
        document.getElementById('resultado').value = '';
        }