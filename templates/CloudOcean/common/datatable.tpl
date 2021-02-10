{*
// Title: Demo code for jQuery Datatables
// Location: tables.data.html
// Dependency File(s):
// assets/vendor/datatables.net/js/jquery.dataTables.js
// assets/vendor/datatables.net-bs4/js/dataTables.bootstrap4.js
// assets/vendor/datatables.net-bs4/css/dataTables.bootstrap4.css
// -----------------------------------------------------------------------------
*}

<script type="text/javascript">
    "use strict";
    $(function() {ldelim}
        //表单默认格式参考
        $('#bs4-table').DataTable({ldelim}
            "pagingType": "full_numbers",
            "info": false,
            language: {ldelim}
            "sProcessing": "{$LANG.tableprocessing}",
            "sLengthMenu": "{$LANG.tablelength}",
            "sZeroRecords": "{$LANG.norecordsfound}",
            "sInfo": "{$LANG.tableshowing}",
            "sInfoEmpty": "{$LANG.tableempty}",
            "sInfoFiltered": "{$LANG.tablefiltered}",
            "sInfoPostFix": "",
            "sSearch": "",
            "sUrl": "",
            "sEmptyTable": "{$LANG.norecordsfound}",
            "sLoadingRecords": "{$LANG.tableloading}",
            "sInfoThousands": ",",
            "oPaginate": {ldelim}
                "sFirst":    "{$LANG.tablepagesfirst}",
                "sLast":     "{$LANG.tablepageslast}",
                "sNext":     "{$LANG.tablepagesnext}",
                "sPrevious": "{$LANG.tablepagesprevious}"
            {rdelim}
        {rdelim}
      {rdelim});
 $('#bs8-table').DataTable({ldelim}
            "pagingType": "full_numbers",
            "info": false,
             "ordering": true,
            "order": [[5,'desc'],[3,'asc']],
            language: {ldelim}
            "sProcessing": "{$LANG.tableprocessing}",
            "sLengthMenu": "{$LANG.tablelength}",
            "sZeroRecords": "{$LANG.norecordsfound}",
            "sInfo": "{$LANG.tableshowing}",
            "sInfoEmpty": "{$LANG.tableempty}",
            "sInfoFiltered": "{$LANG.tablefiltered}",
            "sInfoPostFix": "",
            "sSearch": "",
            "sUrl": "",
            "sEmptyTable": "{$LANG.norecordsfound}",
            "sLoadingRecords": "{$LANG.tableloading}",
            "sInfoThousands": ",",
            "oPaginate": {ldelim}
                "sFirst":    "{$LANG.tablepagesfirst}",
                "sLast":     "{$LANG.tablepageslast}",
                "sNext":     "{$LANG.tablepagesnext}",
                "sPrevious": "{$LANG.tablepagesprevious}"
            {rdelim}
        {rdelim}
      {rdelim});
        $('#bs5-table').DataTable({ldelim}
        "pageLength": 10,
        "lengthMenu": [5 ,10, 25, 50, 75, 100],
          "pagingType": "full_numbers",
          "info": false,
          language: {ldelim}  //将英文转换为中文
              "sProcessing": "{$LANG.tableprocessing}",
              "sLengthMenu": "{$LANG.tablelength}",
              "sZeroRecords": "{$LANG.norecordsfound}",
              "sInfo": "{$LANG.tableshowing}",
              "sInfoEmpty": "{$LANG.tableempty}",
              "sInfoFiltered": "{$LANG.tablefiltered}",
              "sInfoPostFix": "",
              "sSearch": "",
              "sUrl": "",
              "sEmptyTable": "{$LANG.norecordsfound}",
              "sLoadingRecords": "{$LANG.tableloading}",
              "sInfoThousands": ",",
              "oPaginate": {ldelim}
                  "sFirst":    "{$LANG.tablepagesfirst}",
                  "sLast":     "{$LANG.tablepageslast}",
                  "sNext":     "{$LANG.tablepagesnext}",
                  "sPrevious": "{$LANG.tablepagesprevious}"
          {rdelim}
      {rdelim}
    {rdelim});

        $('#bs6-table').DataTable({ldelim}
            "pagingType": "full_numbers",
            "info": false,
            columnDefs:[{
                'targets' : [0,5],
                'orderable' : false
            }],
            language: {ldelim}
                "sProcessing": "{$LANG.tableprocessing}",
                "sLengthMenu": "{$LANG.tablelength}",
                "sZeroRecords": "{$LANG.norecordsfound}",
                "sInfo": "{$LANG.tableshowing}",
                "sInfoEmpty": "{$LANG.tableempty}",
                "sInfoFiltered": "{$LANG.tablefiltered}",
                "sInfoPostFix": "",
                "sSearch": "",
                "sUrl": "",
                "sEmptyTable": "{$LANG.norecordsfound}",
                "sLoadingRecords": "{$LANG.tableloading}",
                "sInfoThousands": ",",
                "oPaginate": {ldelim}
                    "sFirst":    "{$LANG.tablepagesfirst}",
                    "sLast":     "{$LANG.tablepageslast}",
                    "sNext":     "{$LANG.tablepagesnext}",
                    "sPrevious": "{$LANG.tablepagesprevious}"
                    {rdelim}
                {rdelim}
            {rdelim});

    {rdelim});
    var dataTableInit = function(id){ldelim}
        $(id).DataTable({ldelim}
            "pagingType": "full_numbers",
            "info": false,
            language: {ldelim}  //将英文转换为中文
                "sProcessing": "{$LANG.tableprocessing}",
                "sLengthMenu": "{$LANG.tablelength}",
                "sZeroRecords": "{$LANG.norecordsfound}",
                "sInfo": "{$LANG.tableshowing}",
                "sInfoEmpty": "{$LANG.tableempty}",
                "sInfoFiltered": "{$LANG.tablefiltered}",
                "sInfoPostFix": "",
                "sSearch": "",
                "sUrl": "",
                "sEmptyTable": "{$LANG.norecordsfound}",
                "sLoadingRecords": "{$LANG.tableloading}",
                "sInfoThousands": ",",
                "oPaginate": {ldelim}
                    "sFirst":    "{$LANG.tablepagesfirst}",
                    "sLast":     "{$LANG.tablepageslast}",
                    "sNext":     "{$LANG.tablepagesnext}",
                    "sPrevious": "{$LANG.tablepagesprevious}"
                {rdelim}
            {rdelim}
        {rdelim});
    {rdelim}

</script>
