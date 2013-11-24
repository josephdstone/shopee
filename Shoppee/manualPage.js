//Price.onblur=function total()
    {
        alert("working");
		var total;
		var price = $("#Price").val();
		var quantity = $("#quantity").val();
		total = price * quantity;
        $("#cartTotal").val() = total;
    }
