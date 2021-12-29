$(document).ready(()=>{

  const randNum = () => {
    return Math.random();
  }
  $('#moreHlw').click(()=>{
    $('#heatlossForm').append('<input class="hlw" type="number" name="hlwAdded" placeholder="in metres" min="0" step="any">');
    //$('input[name="hlwAdded"]').setAttribute('name', randNum());
  });

  $('#removeWall').click(()=>{
    $('#heatlossForm input:last-child').remove();
  });

  $('#calculate').click(()=>{
    let hlTotal = 0;
    $('.hlw').each(
      function() {
        hlTotal += Number($(this).val());
      }
    );
    $('.hlOutput').html(hlTotal.toFixed(2));
  });

  $('.hlw').keydown((e)=>{
    if (e.code === 'Enter') {
    let hlTotal = 0;
    $('.hlw').each(
      function() {
        hlTotal += Number($(this).val());
      }
    );
    $('.hlOutput').html(hlTotal.toFixed(2));
  }
  });

  $('#areaCalc').click(()=>{
    let area = ($('.width').val() * $('.length').val()).toFixed(2);
    $('.areaOutput').html(area+'m&#178;');
      }
  );

  $('.length').keydown((e)=>{
    if (e.code === 'Enter') {
    let area = ($('.width').val() * $('.length').val()).toFixed(2);
    $('.areaOutput').html(area+'m&#178;');
  }
      }
  );


  $('#pwCalc').click(()=>{
    let semiPerimeter = Number($('.width').val()) + Number($('.length').val());
    let heatlossP = Number($('.hlOutput').html());
    let partyWall = (semiPerimeter * 2) - heatlossP;
    $('.pwOutput').html(partyWall.toFixed(2));
  });

})
