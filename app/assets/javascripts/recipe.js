$(function(){

  function buildTip(input){
    var html = $('<div>', {'class': 'contents__post__tips__result__text'}).text(input);
    return html;
  }
  $('.contents__post__tips__display__click').on('click', function(){
    $('.contents__post__tips__display__click').hide();
    $('.contents__post__tips__wrap').show();
  });

  $('.contents__post__tips__wrap__save_and_delete__delete').on('click', function(e){
    $('.contents__post__tips__wrap').hide();
    $('.contents__post__tips__display__click').show();
    return false;
  });

  $('.contents__post__history__display__click').on('click', function(){
    $('.contents__post__history__display__click').hide();
    $('.contents__post__history__wrap').show();
  });

  $('.contents__post__history__wrap__save_and_delete__delete').on('click', function(){
    $('.contents__post__history__wrap').hide();
    $('.contents__post__history__display__click').show();
    return false;
  });

  $('.contents__post__history__wrap__save_and_delete__save').on('click', function(e){
    var input = $('.contents__post__history__wrap__form').val();

    if(input){
      e.preventDefault();
      $('.contents__post__history__result').text(input);
      $('.contents__post__history__wrap').hide();
      $('.contents__post__history__display__click').hide();
      $('.contents__post__history__result').show();
    }
    else{
      e.preventDefault();
      $('.contents__post__history__wrap').hide();
      $('.contents__post__history__display__click').show();
    }
  });

  $('.contents__post__history__result').on('click', function(){
    $('.contents__post__history__result').hide();
    $('.contents__post__history__wrap').show();
  });

  $('.contents__post__steps__step__text__click').on('click', function(){
    $(this).hide();
    $(this).siblings('.contents__post__steps__step__text').show();
  });

  $('.contents__post__steps__step__save_and_delete__delete').on('click', function(){
    $(this).parents('.step_input').hide();
    $(this).parents().children('.contents__post__steps__step__text.step_display').find('.contents__post__steps__step__text__click').show();
    return false;
  });

  $('.contents__post__steps__step__save_and_delete__save').on('click', function(e){
    e.preventDefault();
    var input = $(this).parents('.step_input').find('.contents__post__steps__step__text__form').val();

    if(input){
      e.preventDefault();
      $(this).parents('.step_display').find('.contents__post__steps__step__text__result').text(input);
      $(this).parents('.step_input').hide();
      $(this).parents('.step_display').find('.contents__post__steps__step__text__result').show();
    }
    else{
      e.preventDefault();
      $(this).parents('.step_input').hide();
      $(this).parents().children('.contents__post__steps__step__text.step_display').find('.contents__post__steps__step__text__click').show();
    }
  });

  $('.contents__post__steps__step__text__result').on('click', function(){
    console.log($(this).parents());
    $(this).parents('.contents__post__steps__step__text.step_display').find('.step_input').show();
    $(this).hide();
  });

  $('.contents__post__catch-copy__display__click').on('click', function(){
    $('.contents__post__catch-copy__display__click').hide();
    $('#catch-copy_input').show();
  });

  $('.contents__post__catch-copy__save_and_delete__delete').on('click', function(){
    $('#catch-copy_input').hide();
    $('.contents__post__catch-copy__display__click').show();
    return false;
  });

  $('.contents__post__catch-copy__save_and_delete__save').on('click', function(e){
    var input = $('.contents__post__catch-copy__form').val();

    if(input){
      e.preventDefault();
      $('#catch-copy_result').text(input);
      $('#catch-copy_input').hide();
      $('.contents__post__catch-copy__display__click').hide();
      $('#catch-copy_result').show();
    }
    else{
      e.preventDefault();
      $('#catch-copy_input').hide();
      $('.contents__post__catch-copy__display__click').show();
    }
  });

  $('#catch-copy_result').on('click',function(){
    $('#catch-copy_result').hide();
    $('#catch-copy_input').show();
  });

  $('.contents__post__material__click').on('click', function(){
    $('.contents__post__material__back').show();
    $('#ingredients_input').show();
  });

  $('.contents__post__material__back__form__close').on('click', function(){
    $('.contents__post__material__back').hide();
    $('#ingredients_input').hide();
  });

  $('.contents__post__name__display').on('click', function(){
    $('.contents__post__name__display').hide();
    $('.contents__post__name#name_input').show();
  });

  $('.contents__post__name__delete').on('click', function(){
    $('.contents__post__name#name_input').hide();
    $('.contents__post__name__display').show();
    return false;
  });

  $('.contents__post__name__save').on('click', function(e){
    var input = $('.contents__post__name__form').val();

    if(input){
      e.preventDefault();
      $('.contents__post__name__display').text(input);
      $('.contents__post__name#name_input').hide();
      $('.contents__post__name__display').show();
    }
    else{
      e.preventDefault();
      $('.contents__post__name#name_input').hide();
      $('.contents__post__name__display').show();
    }
  });

  $('.contents__post__tips__wrap__save_and_delete__save').on('click', function(e){
    var $input = $('.contents__post__tips__wrap__form').val();

    if($input){
      e.preventDefault();
      var html = buildTip($input);
      $('#tip_result').append(html);
      $('.contents__post__tips__wrap').hide();
      $('.contents__post__tips__display__click').hide();
    }
    else{
      e.preventDefault();
      $('.contents__post__tips__wrap').hide();
      $('.contents__post__tips__display__click').show();
    }
  });

  $('#tip_result').on('click', function(){
    $('.contents__post__tips__result__text').hide();
    $('.contents__post__tips__wrap').show();
  });

// レシピ写真をアップロードした時に、プレビューを表示させる
  var setFileInput = $('.contents__post__image'),
  setFileImg = $('.contents__post__image__dish');

  setFileInput.each(function(){
        var selfFile = $(this),
        selfInput = $(this).find('input[type=file]'),
        prevElm = selfFile.find(setFileImg),
        orgPass = prevElm.attr('src');

        selfInput.change(function(){
            var file = $(this).prop('files')[0],
            fileRdr = new FileReader();

            if(!this.files.length){
                prevElm.attr('src', orgPass);
                return;
            }
            else{
                if(!file.type.match('image.*')){
                    prevElm.attr('src', orgPass);
                    return;
                }
                else{
                    fileRdr.onload = function() {
                      prevElm.attr('src', fileRdr.result);
                    }
                    fileRdr.readAsDataURL(file);
                }
            }
        });
    });

    // 調理工程の文章にIDを追加する
  $('.contents__post__steps__step__text__form').each(function(i){
    $(this).attr('id', 'recipe_steps_attributes_' + i + '_how_to-' + (i+1));
  });

  // 調理工程の文章のラベルにインデックスを追加する
  $('.contents__post__steps__step__text__label').each(function(i){
    $(this).attr('for', 'recipe_steps_attributes_'+ i + '_how_to-' + (i+1));
  });

      // 調理工程のファイルにIDを追加する
  $('.contents__post__steps__step__image__file').each(function(i){
    $(this).attr('id', 'recipe_steps_attributes_' + i + '_step_image-' + (i+1));
  });

    // 調理工程の写真にIDを追加する
  $('.contents__post__steps__step__image__default').each(function(i){
    $(this).attr('id', 'step_image-' + (i+1));
  });

  // 調理工程の写真をアップロードし、プレビューを表示させる
  $('.contents__post__steps__step__image__default').on('click', function(){
      var image = $(this)
      var image_file = $(this).parents('.contents__post__steps__step__image').find('.contents__post__steps__step__image__file');
      console.log(image_file);
      image_file.on('change', function(e){
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(fl) {
      image.attr('src', fl.target.result);
      }
        reader.readAsDataURL(file);
    });
  });

  // 追加ボタンを押した時に、調理工程を増やす
  $('.contents__post__steps__step__add_and_delete__add').on('click', function(e){
    var step = $('.contents__post__steps__step').last().clone(true);
    var num = $('#steps').find('ul').length + 1;
    var array = num - 1;

    step.find('.contents__post__steps__step__num').text(num);
    step.find('.contents__post__steps__step__image').find('label').attr('for', 'recipe_steps_attributes_' + array + '_step_image-' + num);
    step.find('.contents__post__steps__step__image__file').attr({id: 'recipe_steps_attributes_' + array + '_step_image-' + num, name: 'recipe[steps_attributes][' + array + '][step_image]'});
    step.find('.contents__post__steps__step__image__default').attr('id', 'steps_step_image-' + num);
    step.find('.contents__post__steps__step__text__label').attr('for', 'recipe_steps_attributes_'+ array + '_how_to-' + num );
    step.find('.contents__post__steps__step__text__form').attr({id: 'recipe_steps_attributes_'+ array + '_how_to-' + num, name: 'recipe[steps_attributes][' + array + '][how_to]'});
    step.find('.contents__post__steps__step__image__default').attr('src', '/assets/写真をのせる-cf6f6731a4b4b45a16efd61bdec13fbfc01c4f5e135bea417efc85d76cc8b70e.png');
    step.find('.contents__post__steps__step__text__result').text('');
    step.find('.contents__post__steps__step__text__form').val('');
    step.find('.contents__post__steps__step__text__click').show();
    step.find('.step_input').hide();

    $('#steps').append(step);
    return false;
  });

  // 削除ボタンを押した時に、調理工程を減らす
  $('.contents__post__steps__step__add_and_delete__delete').on('click', function(){
    $(this).parents('.contents__post__steps__step').remove();

    $('.contents__post__steps__step').each(function(i){
      i = i + 1;
      $(this).find('.contents__post__steps__step__num').text(i);
      $(this).find('.contents__post__steps__step__image').find('label').attr('for', 'steps_step_image-' + i);
      $(this).find('.contents__post__steps__step__image__file').attr('id', 'steps_step_image-' + i);
      $(this).find('.contents__post__steps__step__image__default').attr('id', 'steps_step_image-' + i);
      $(this).find('.contents__post__steps__step__text__form').attr('id', 'contents__post__steps__step__text__form-' + i);
    });
    return false;
  });
  // 行を追加するのボタンを押した時に行を追加する
$('.contents__post__material__back__form__table__add_button').on('click', function(e){
  e.preventDefault();
  var i = $('.contents__post__material__back__form__table__row').length + 1;
  var array = i -1;

  var row = $('.contents__post__material__back__form__table__row').last().clone(true);
  row.find('.contents__post__material__back__form__table__name').attr({id: 'ingredients_name-' + i, name: 'recipe[ingredients_attributes][' + array + '][name]'});
  row.find('.contents__post__material__back__form__table__quantity').attr({id: 'ingredients_quantity-' + i, name: 'recipe[ingredients_attributes][' + array + '][quantity]'});
  $('.contents__post__material__back__form__table__row').last().after(row);
});

// 削除ボタンを押した時に、行を削除する
$('.contents__post__material__back__form__table__delete').on('click', function(){
  $(this).parents('.contents__post__material__back__form__table__row').remove();

  $('.contents__post__material__back__form__table__row').each(function(i){
    i = i + 1
    $(this).find('.contents__post__material__back__form__table__name').attr('id', 'indredients__name-' + i);
    $(this).find('.contents__post__material__back__form__table__quantity').attr('id', 'ingredients__quantity-' + i);
  });
});

// 保存して閉じるボタンを押した時に、画面を閉じられて食材の名前と量がリストで表示される
$('.contents__post__material__back__form__submit').on('click', function(e){
  e.preventDefault();
  $('.contents__post__ingredients__list').remove();
  $('.contents__post__material__back__form__table__row').each(function(i){
    var i = i + 1
    var name = $('#ingredients_name-' + i).val();
    var quantity = $('#ingredients_quantity-' + i).val();

    if(name.length >= 1 || quantity.length >= 1){
      if(name) var name_div = $('<div class = "contents__post__ingredients__list__name">').text(name);
      if(quantity) var qua_div = $('<div class = "contents__post__ingredients__list__quantity">').text(quantity);
      console.log(quantity);
      if(name || quantity) var newhtml = $('<div class="contents__post__ingredients__list">').append(name_div).append(qua_div);
      $('.contents__post__ingredients').append(newhtml);
    }
  });
    $('.contents__post__ingredients').css({display: 'inline-block'});
    if($('.contents__post__ingredients__list')){
      $('.contents__post__material__click').hide();
      $('.contents__post__ingredients').show();
    }
    if($('.contents__post__ingredients__list').length == 0){
      $('.contents__post__ingredients').hide();
      $('.contents__post__material__click').show();
    }
  $('.contents__post__material__back').hide();
  $('#ingredients_input').hide();
});

// 材料のリストをクリックすると、フォームが表示される
  $('.contents__post__ingredients').on('click', function(){
    $('.contents__post__material__back').show();
    $('#ingredients_input').show();
  });

  // クリックすると、隠された文章が出てくる
  $(document).on('click', '.slide_down', function(){
    $(this).siblings('p').slideDown('slow');
    $(this).find('.fa').attr('class','fa fa-chevron-up');
    $(this).attr('class', 'contents__side__how-to-write__body__title__bar slide_up');
    });

  // クリックすると、文章が隠される
  $(document).on('click', '.slide_up', function(){
    $(this).siblings('p').slideUp('slow');
    $(this).find('.fa').attr('class', 'fa fa-chevron-down');
    $(this).attr('class', 'contents__side__how-to-write__body__title__bar slide_down');
  });

  // 送信ボタンを押した際バリデーションを行い、アラート文を表示させる
  $('#recipe_form').on('submit', function(e){
      if($('.contents__post__steps__step__text__form').val() == ''){
        alert('作り方を入力してください');
        return false;
      }
      if($('.contents__post__history__wrap__form').val() == ''){
        alert('レシピの生い立ちを入力してください');
        return false;
      }
      else{
        return true;
      }
  });
});
