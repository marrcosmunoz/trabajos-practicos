function sumar (valor) {
    var total = 0;	
    valor = parseInt(valor);
    total = document.getElementById('spTotal').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('spTotal').innerHTML = total;
}

<><span>Valor #1</span><input type="text" id="txt_campo_1" onchange="sumar(this.value);" /><br /><span>Valor #2</span><input type="text" id="txt_campo_2" onchange="sumar(this.value);" /><br /><span>Valor #3</span><input type="text" id="txt_campo_3" onchange="sumar(this.value);" /><br /><span>El resultado es: </span><span id="spTotal"></span></>