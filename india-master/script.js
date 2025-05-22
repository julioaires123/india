setInterval(function relog() { 
    let rel = document.getElementById('relogio01');
    let data = new Date();

    // Adiciona 18 segundos artificialmente
    data.setSeconds(data.getSeconds() + 18);

    // Converte para horário da Índia (UTC+5:30)
    let offsetIST = 5.5 * 60; // minutos
    data = new Date(data.getTime() + offsetIST * 60 * 1000);

    // Formata hora, minuto e segundo com 2 dígitos
    let h = data.getHours().toString().padStart(2, '0');
    let m = data.getMinutes().toString().padStart(2, '0');
    let s = data.getSeconds().toString().padStart(2, '0');

    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);


// Exibe a data em híndi
function exibirDataAtualizada() {
    let meses = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
    let semanas = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];

    let data = new Date();
    data.setSeconds(data.getSeconds() + 18);

    // Converte para horário da Índia
    let offsetIST = 5.5 * 60; // minutos
    data = new Date(data.getTime() + offsetIST * 60 * 1000);

    // Obtém dia, mês e ano em híndi
    let diaSemana = semanas[data.getDay()];
    let dia = data.getDate();
    let mes = meses[data.getMonth()];
    let ano = data.getFullYear().toString().replace(/\d/g, d => "०१२३४५६७८९"[d]);

    document.getElementById("date").innerHTML = `${diaSemana}, ${dia} ${mes}, ${ano}`;
}


// Atualiza a data automaticamente à meia-noite no horário da Índia
function atualizarData() {
    let data = new Date();
    data.setSeconds(data.getSeconds() + 18);

    let offsetIST = 5.5 * 60;
    data = new Date(data.getTime() + offsetIST * 60 * 1000);

    if (data.getHours() === 0 && data.getMinutes() === 0 && data.getSeconds() === 0) {
        exibirDataAtualizada();
    }

    setTimeout(atualizarData, 1000);
}

// Inicialização
exibirDataAtualizada();
atualizarData();
