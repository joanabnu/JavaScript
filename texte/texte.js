var hora = new Date();

// Horário da França em português
var horarioFrancaPt = hora.toLocaleString("pt-BR", { timeZone: "Europe/Paris" });


console.log(`Horário na França (pt-BR): ${horarioFrancaPt}`);

