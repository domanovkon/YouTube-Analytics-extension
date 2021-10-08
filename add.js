i = 0;
inputs = new Array();
$(document).on('click', '.redStyle', function () {
    if (i === 5) {
        console.log(inputs);
        $( ".labelWar" ).text("Введено максимум тем!");
    }
    else {
        let data = $("#in1").val()
        if (data === "") {
            $( ".labelWar" ).text("Введите данные!");
            return 0;
        }
        if ($.inArray(data, inputs) === -1) {
            $( ".labelWar" ).text("");
            inputs.push(data);
            $( ".inner" ).append(data + "\n</br>");
            $(".inputQuery").val('');
            i++;
        }
    else {
        $( ".labelWar" ).text("Такой запрос уже есть!");
        }


    }
});