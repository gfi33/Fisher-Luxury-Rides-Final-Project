$('#SubmitButton').click(function() {
    var firstNameVal = $('#FirstNameTextBox').val();
    var lastNameVal = $('#LastNameTextBox').val();
    $('#DivOutput').text(firstNameVal + ' ' + lastNameVal);
});

$('.MyInput').change(function() {
   alert(`This is from an Input `+$(this).val());
   $(this).addClass('Highlight');
 });

 $('#MyDiv').on('mouseenter mouseleave mouseup', function(e) {
$(this).toggleClass('Highlight');
  $(this).css('cursor', 'pointer');
  if (e.type == 'mouseup') {
    $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
  }
});

if $('.item').length > 0 ? $('#noResultsContainer').show() :
$('#noResultsContainer').hide();
$('#noResult').show();
} else {
$('#noResult').hide();
}
