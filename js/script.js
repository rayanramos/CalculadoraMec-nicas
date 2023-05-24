$("#1 :checkbox").change(function () {
    let textAreaVal = $(".TextoTunagens").val(); if ($(this).prop("checked") == true) { if (!textAreaVal.includes($(this).attr("id"))) { textAreaVal += $(this).attr("id") + "\n"; } }
    else { if (textAreaVal.includes($(this).attr("id"))) { textAreaVal = textAreaVal.replace($(this).attr("id") + "\n", ""); } }
    $(".TextoTunagens").val(textAreaVal);
}); $("#2 :checkbox").change(function () {
    let textAreaVal = $(".TextoTunagens").val(); if ($(this).prop("checked") == true) { if (!textAreaVal.includes($(this).attr("id"))) { textAreaVal += $(this).attr("id") + "\n"; } }
    else { if (textAreaVal.includes($(this).attr("id"))) { textAreaVal = textAreaVal.replace($(this).attr("id") + "\n", ""); } }
    $(".TextoTunagens").val(textAreaVal);
}); $("#3 :checkbox").change(function () {
    let textAreaVal = $(".TextoTunagens").val(); if ($(this).prop("checked") == true) { if (!textAreaVal.includes($(this).attr("id"))) { textAreaVal += $(this).attr("id") + "\n"; } }
    else { if (textAreaVal.includes($(this).attr("id"))) { textAreaVal = textAreaVal.replace($(this).attr("id") + "\n", ""); } }
    $(".TextoTunagens").val(textAreaVal);
}); function limpar() {
    var tunagens = document.getElementsByName('tunagem'); for (var i = 0; i < tunagens.length; i++) { tunagens[i].checked = false; }
    $("#copiado")[0].style.display = 'none'
    var valor = document.getElementById("valor"); valor.value = 0; document.getElementById("copy-text").value = "";
}
function tirarBloco() { $("#copiado")[0].style.display = 'none'; }
document.getElementById('copy').addEventListener('click', function () {
    var text = document.getElementById('copy-text'); text.select(); document.execCommand('copy'); $("#copiado")[0].style.display = 'block'
    const timeOut = setTimeout(tirarBloco, 3000);
})
function calcular() {
    var Valor = 0; var tunagens = document.getElementsByName('tunagem'); for (var i = 0; i < tunagens.length; i++) {
        if (tunagens[i].checked) { var valores_tunganes = tunagens[i].value.split("|"); Valor += parseInt(valores_tunganes[0]); }
        var valor_txt = document.getElementById("valor"); valor_txt.value = "" + Valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });;
    }
}