//Render func to get all info in the list
const render = function (kudoList) {

  //Clearing the page to re-render
  $('#kudos').empty();

  //looping through the kudos and append each data to page
  for (let i = 0; i < kudoList.length; i++) {
    $('#kudos').append(`<div class='card card-kudos'>
    <h4 class=kudosSender> To: ${kudoList[i].to}</h4>

    <h4 class=kudosReciever> From: ${kudoList[i].from}</h4><br>
   
    <h3 class=kudosTitle> Title: ${kudoList[i].title}</h3>

    <h3 class=kudosBody>  ${kudoList[i].body}</h3>
  </div>
</div><br>`)
  }
}
//get each kudo to put to page
const getKudos = function () {

  $.get(`/api/kudos`)
    .then(function (data) {
      render(data)

    });
}
// TODO: finish this section- 
const getUsers = function () {
  $.get(`/api/users`)
    .then(function (data) {
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        $('#sendKudo').append(`<option value='${data[i]._id}'>${data[i].name}</option>`)
        $('#getKudo').append(`<option value='${data[i]._id}'>${data[i].name}</option>`)
      };
    });
}

//Posting the new kudo to page
const postKudos = function (e) {
  e.preventDefault();
  const kudosTitle = $('#titleHere').val().trim();

  const kudosBody = $('#bodyInput').val().trim();

  const kudoSend = $('#sendKudo').val();

  const kudoGet = $('#getKudo').val();

  $('#titleHere').val('');

  $('#bodyInput').val('');

  $.post('api/kudos', { title: kudosTitle, body: kudosBody, to: kudoGet, from: kudoSend })
    .then(function (data) {


      getKudos();
    })
}

getKudos();

$('#kudos-btn').on('click', postKudos)