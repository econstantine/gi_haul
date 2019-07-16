/*
===============================================================================================
Component:  script2.js
Purpose:    Javascript meant for the GI Haul website
Programmer: Ed Constantine

Modification History:
Date             Programmer           Description
--------         -------------        --------------------
June 11, 2019    EConstantine         Initial Creation
===============================================================================================
*/

$(document).ready(function () {

    console.log("script2 loaded")

    $('#checkAvail').click(function () {
        var zip = $('#inputZipCode').val();
        $('#inputZip').val(zip);
    })

    $('#small_form_button').click(function(e) {
        console.log("Submit clicked");
        e.preventDefault();
        formSubmit('small_get_quote');
      });

    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');});

})


    function formSubmit(name) {
      var serializedData = $(document.forms[name]).serializeObject();
      var url = 'https://script.google.com/macros/s/AKfycbyQPMDiIfpKToDsHDnFHCGEoVxTeaSswE-l2LyMgtbo9Y-mQUrC/exec';
      var jqxhr = $.ajax({
        url,
        method: "GET",
        dataType: "json",
        data: serializedData,
        success: function(data){
        console.log('success', data);
        }
      });
      console.log("form submitted")
      $('#quoteModal').modal('hide');
      console.log("modal hidden");
      $("#requestquote_success").toggleClass('in out');
      console.log("requestquote_success should appear")


}
