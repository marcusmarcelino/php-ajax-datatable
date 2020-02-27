$(document).ready(function () {
  $("#add").on('click', function () {
     limparCampos();
  });
  getList();
  listEstados();
});

function getList() {
  $.ajax({
     url: 'controller.php?op=getList',
     method: 'GET',
     dataType: 'text',
     success: function (response) { }
  }).done(function (response) {
     if (response != "BaseDeDadosVazia") {
        $('#tbody').html(response);
        $('#tabelaDeEventos').DataTable({
           "language": {
              "lengthMenu": "Mostrando _MENU_ registros por página",
              "zeroRecords": "Nada encontrado",
              "info": "Mostrando página _PAGE_ de _PAGES_",
              "infoEmpty": "Nenhum registro disponível",
              "infoFiltered": "(filtrado de _MAX_ registros no total)",
              "search": "Procurar por:",
              "paginate": {
                 "first": "Primeiro",
                 "last": "Ultimo",
                 "next": "Próximo",
                 "previous": "Anterior"
              },
           },
           "aaSorting": []
        });
        $('.dataTables_length').addClass('bs-select');
     }

  }).fail(function (error) {
     console.log(error);
  });
}

function listEstados() {
  $.ajax({
     url: 'controller.php?op=listEstados',
     method: 'GET',
     dataType: 'text',
     success: function (response) { }
  }).done(function (response) {
     $('#estadoEvento').html(response);
  }).fail(function (error) {
     console.log(error);
  });
}