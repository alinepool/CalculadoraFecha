document.getElementById("calcular").addEventListener("click", function(){
    var año = parseInt(document.getElementById("año").value);
    var mes = parseInt(document.getElementById("mes").value);
    var dia = parseInt(document.getElementById("dia").value);
    
    var fecha = new Date(año, mes, dia);
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var diaSemana = diasSemana[fecha.getDay()];
    
    document.getElementById("resultado").textContent = "El día de la semana para la fecha " + dia + "/" + (mes + 1) + "/" + año + " es: " + diaSemana;
});
