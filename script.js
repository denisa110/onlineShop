/*----------------------------------------------------------------------------------------------*/
/* ----------------------------------JAVA SCRIPT-----------------------------------------------*/
/*--------------------------------------TEMA 3-------------------------------------------------*/
/*--------------------------------------------------------------------------------------------*/ 

function cart() {


	var item = [
		Number(document.getElementById("170.00").value),
		Number(document.getElementById("95.00").value),
		Number(document.getElementById("80.50").value),

	];

	var total = [
		document.getElementById("170.00").value * 170.00,
		document.getElementById("95.00").value * 95,
		document.getElementById("80.50").value * 80.50,

	];
	// declarare
	var countItem = 0;
	var totalDue = 0;

	for (var i = 0; i < item.length; i++) {
		countItem += item[i];

	}

	for (var j = 0; j < total.length; j++) {
		totalDue += total[j];
	}

	document.getElementById("comanda").innerHTML = "Produse adaugate: " + countItem;
	document.getElementById("totalDue").innerHTML = "Valoare comanda " + totalDue.toFixed(2) + " RON";



	if (totalDue < 100) {
		document.getElementById("conditie").innerHTML = "Comanda minima: 100 RON"
	}
	else
		document.getElementById("conditie").innerHTML = "Transport gratuit!"


}

/*----------------------------------------------------------------------------------------------*/
/* ----------------------------------- JQUERY --------------------------------------------------*/
/*--------------------------------------TEMA 4-------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


$(document).ready(function () {
	$("#arata").click(function () {
		$("#cos").slideToggle("slow");
	});

	$(".changeQty").click(function () {
		var line = $(this).attr("data-line");
		var price = $(this).attr("data-price");
		var operand = $(this).attr("data-append");
		var qty = $("#qty" + line).text();
		var total = $("#totalCos" + line).text();
		if (qty > 0) {
			if (operand == "minus")
				qty--;
		}
		if (operand == "plus")
			qty++;
		if (operand == "X")
			qty = 0;

		$("#qty" + line).text(qty);

		total = qty * price;
		$("#qty" + line).text(qty);
		$("#total" + line).text(total);

		var valTotal;
		var totalpr1 = $("#qty1").text() * $("#price1").text();
		var totalpr2 = $("#qty2").text() * $("#price2").text();
		var totalpr3 = $("#qty3").text() * $("#price3").text();
		$("#valTotal").text(totalpr1 + totalpr2 + totalpr3);



	})
});


























