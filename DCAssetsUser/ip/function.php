<?php
function curl_file_get_contents($durl){
if(SINA_SAE){
$f = new SaeFetchurl();
$content = $f->fetch($durl);
if($f->errno() == 0)$r=$content;
else $r=$f->errmsg();
}else{
$r=file_get_contents($durl);
}
return $r;
}
function get_real_ip(){
if(getenv('HTTP_CLIENT_IP') &&strcasecmp(getenv('HTTP_CLIENT_IP'),'unknown'))
{$ip = getenv('HTTP_CLIENT_IP');}
elseif(getenv('HTTP_X_FORWARDED_FOR') &&strcasecmp(getenv('HTTP_X_FORWARDED_FOR'),'unknown'))
{$ip = getenv('HTTP_X_FORWARDED_FOR');}
elseif(getenv('REMOTE_ADDR') &&strcasecmp(getenv('REMOTE_ADDR'),'unknown'))
{$ip = getenv('REMOTE_ADDR');}
elseif(isset($_SERVER['REMOTE_ADDR']) &&$_SERVER['REMOTE_ADDR'] &&strcasecmp($_SERVER['REMOTE_ADDR'],'unknown'))
{$ip = $_SERVER['REMOTE_ADDR'];}
return preg_match("/[\d\.]{7,15}/",$ip,$matches) ?$matches[0] : false;
}
function is_ip($str) {
$ip = explode(".",$str);if (count($ip)<4 ||count($ip)>4) return 0;
foreach($ip as $ip_addr) {if ( !is_numeric($ip_addr) ) return 0;if ( $ip_addr<0 ||$ip_addr>255 ) return 0;
}return 1;
}
function ipdata($ip,$name="0")
{
$url="http://ip.taobao.com/service/getIpInfo.php?ip=";
$data=json_decode(curl_file_get_contents($url.$ip));$ipdata=$data->data;
if($name=="all") {return $ipdata;}
else if($name=="0"){if($ipdata->city==$ipdata->region){$ipdata->region='';}return $ipdata->country.$ipdata->region.$ipdata->city.$ipdata->isp;}
}
function sinaip($ip)
{
$url="http://int.dpool.sina.com.cn/iplookup/iplookup.php?ip=";
$data=explode('',iconv('gbk','utf-8',curl_file_get_contents($url.$ip)));
return $data;
}
function cacheip($ip='',$num=12)
{
$cachetxt=SINA_SAE?"saemc://cacheip.txt":"cacheip.txt";
$olddata=unserialize(@file_get_contents($cachetxt));
$guolv=array('favicon.ico','robots.txt');
if($ip &&!in_array($ip,$guolv))
{if(preg_match('/((\w|-)+\.)+[a-z]{2,4}/i',$ip) ||preg_match("/[\d\.]{7,15}/",$ip)){
$newdata=is_array($olddata)?array_unique(array_merge($olddata,array($ip))):array($ip);
$ndata=(count($newdata)<=$num)?$newdata:array_slice($newdata,count($newdata)-$num,$num);
file_put_contents($cachetxt,serialize($ndata));
}else{krsort($olddata);return array_values($olddata);}
}else{krsort($olddata);return array_values($olddata);}
}
function ob_gzip($content){
if(!headers_sent()&&extension_loaded("zlib")&&strstr($_SERVER["HTTP_ACCEPT_ENCODING"],"gzip")){
$content = gzencode($content,9);
header("Content-Encoding: gzip");
header("Vary: Accept-Encoding");
header("Content-Length: ".strlen($content));
}
return $content;
}