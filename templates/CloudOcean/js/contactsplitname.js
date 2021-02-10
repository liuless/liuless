// $('#contactsubmit').click(function(){
//   var fullname = $('#contactfullname').val();
//   var name = new Array();
//   name = splitname(fullname);
//   $('#firstname').val(name[1]);
//   $('#lastname').val(name[0]);
//   $('#contactdetail').submit();
// });
function contactonsubmit() {
  var fullname = $.trim($('#contactfullname').val());
  var name = new Array();
  name = splitname(fullname);
  $('#firstname').val(name[1]);
  $('#lastname').val(name[0]);
  var phonenumber = $('#phonenumber').val();
  var patrn = /^(-)?\d+(\.\d+)?$/;
  var flag = true;
  $('#phonenumberwrong').hide();
  $('#phonenumisnull').hide();
  $('#nametooshort').hide();
  $('#formwrong').hide();
  if (patrn.exec(phonenumber) == null) {
    $('#phonenumberwrong').show();
    flag = false;
  }
  if (phonenumber == "") {
    $('#phonenumisnull').show();
    flag = false;
  }
  if ((!name[1])||(!name[0])) {
    $('#nametooshort').show();
    flag = false;
  }
  if (!flag) {
    $('#formwrong').show();
  }
  return flag;
}
function splitname(fullname){
        var hyphenated = ['欧阳','太史','端木','上官','司马','东方','独孤','南宫','万俟','闻人','夏侯','诸葛','尉迟','公羊','赫连','澹台','皇甫',
        '宗政','濮阳','公冶','太叔','申屠','公孙','慕容','仲孙','钟离','长孙','宇文','城池','司徒','鲜于','司空','汝嫣','闾丘','子车','亓官',
        '司寇','巫马','公西','颛孙','壤驷','公良','漆雕','乐正','宰父','谷梁','拓跋','夹谷','轩辕','令狐','段干','百里','呼延','东郭','南门',
        '羊舌','微生','公户','公玉','公仪','梁丘','公仲','公上','公门','公山','公坚','左丘','公伯','西门','公祖','第五','公乘','贯丘','公皙',
        '南荣','东里','东宫','仲长','子书','子桑','即墨','达奚','褚师'];
        var vLength = fullname.length;
        var lastname = '', firstname = '';//前为姓,后为名
        if(vLength > 2){
            var preTwoWords = fullname.substr(0, 2);//取命名的前两个字,看是否在复姓库中
            if($.inArray(preTwoWords, hyphenated) > -1){
                lastname = preTwoWords;
                firstname = fullname.substr(2);
            }else{
                lastname = fullname.substr(0, 1);
                firstname = fullname.substr(1);
            }
        }else if(vLength == 2){//全名只有两个字时,以前一个为姓,后一下为名
            lastname = fullname.substr(0, 1);
            firstname = fullname.substr(1);
        }else{
            lastname = fullname;
        }
        return [lastname, firstname];
    }
