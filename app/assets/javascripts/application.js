//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {


  $.get(window.location + "/questions", function (data, status) {
    console.log(data);

    $('.nav').hide();

      $('.questions').append(data[0].description);
    $('.btn-default').append(data[0].possible_answers[0].description);
    $('.btn-success').append(data[0].possible_answers[1].description);
    $('.btn-danger').append(data[0].possible_answers[2].description);
    $('.btn-primary').append(data[0].possible_answers[3].description);
    $('.score').append('1/4');



    $('.btn').on('click', function () {
      $('.nav').show();
      $('.nav').on('click', function () {
        $('.questions').text(data[1].description);
        $('.btn-default').text(data[1].possible_answers[0].description);
        $('.btn-success').text(data[1].possible_answers[1].description);
        $('.btn-danger').text(data[1].possible_answers[2].description);
        $('.btn-primary').text(data[1].possible_answers[3].description);
        $('.score').text('2/4');
        $('.nav').hide();
      })

    });

//    $('.btn').click(function () {
//      $('.nav').show();
//      $('.nav').click(function () {
//        $('.questions').text(data[2].description);
//        $('.btn-default').text(data[2].possible_answers[0].description);
//        $('.btn-success').text(data[2].possible_answers[1].description);
//        $('.btn-danger').text(data[2].possible_answers[2].description);
//        $('.btn-primary').text(data[2].possible_answers[3].description);
//        $('.score').text('3/4');
//        $('.nav').hide();
//      })
//    });
//
//    $('.btn').click(function () {
//      $('.nav').show();
//      $('.nav').click(function () {
//        $('.questions').text(data[3].description);
//        $('.btn-default').text(data[3].possible_answers[0].description);
//        $('.btn-success').text(data[3].possible_answers[1].description);
//        $('.btn-danger').text(data[3].possible_answers[2].description);
//        $('.btn-primary').text(data[3].possible_answers[3].description);
//        $('.score').text('4/4');
//        $('.nav').hide();
//      })
//    });


  });
});

//    $('.result').hide
//
//    $('.btn').click(function () {
//      if (data[0].possible_answers.correct === false) {
//        $('.result').append('Correct!');
//      }
//  });



