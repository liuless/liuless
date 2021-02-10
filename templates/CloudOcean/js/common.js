/**
 * Created by admin on 2018/9/11.
 */
/*ajax加载表格*/
var tableInit = function(id,url,aoColumns){
    $(id).DataTable({
        "pagingType": "full_numbers",
        "info": false,
        language: {  //将英文转换为中文
            "sProcessing": "处理中...",
            "sLengthMenu": "显示 _MENU_ 项结果",
            "sZeroRecords": "没有匹配结果",
            "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
            "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
            "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
            "sInfoPostFix": "",
            "sSearch": "搜索:",
            "sUrl": "",
            "sEmptyTable": "表中数据为空",
            "sLoadingRecords": "载入中...",
            "sInfoThousands": ",",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "上页",
                "sNext": "下页",
                "sLast": "末页"
            }
        },
        "ajax": {
            // url可以直接指定远程的json文件，或是MVC的请求地址 /Controller/Action
            url: url,
            type: 'POST',
            // 传给服务器的数据，可以添加我们自己的查询参数
            data: function (param) {
                //param.opportunityNO = $('#txtSearch').val();
                return param;
            },
            //用于处理服务器端返回的数据。 dataSrc是DataTable特有的
            dataSrc: function (myJson) {
                if (myJson.timeout) {
                    return "";
                }
                return myJson;
            }
        },
        "aoColumns":aoColumns
    });
};
$(".alert-us div").click(function () {
    console.log(1);
    $(this).parent().hide();
})
