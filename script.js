$(document).ready(function () {
  $("#list-form").on("submit", function (e) {
    e.preventDefault();
    const inputForm = $("#input-form").val();
    const novoItem = $(`<li>${inputForm}</li>`);
    const checkbox = $("<input type='checkbox'>");

    $(checkbox).appendTo(novoItem);
    $(novoItem).appendTo("ul");

    $("#input-form").val("");

    $(checkbox).change(function () {
      if ($(this).prop("checked")) {
        $(novoItem).addClass("linha-through");
      } else {
        $(novoItem).removeClass("linha-through");
      }
    });
  });
});
