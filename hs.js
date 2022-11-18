var body = $response.body; 
var obj = JSON.parse(body); 

obj = {
  "code" : "200",
  "data" : [
    {
      "nat_result_name" : "阴性",
      "check_project" : "核酸",
      "sample_type_name" : "咽拭子",
      "sample_date" : "2022-11-13 21:23:37",
      "nat_result" : "1",
      "test_orgname" : "上海兰卫医学检验所",
      "collect_date" : "2022-11-13 22:16:36",
      "card_type_name" : "身份证",
      "collect_mode" : "10",
      "sample_orgname" : "",
      "name" : "大哥",
      "report_date" : "2022-11-14 00:31:41"
    }
  ],
  "sysTime" : "2022\/11\/14 13:45:11",
  "sessionId" : "d145fee674764ad194784f00b4bbc52d",
  "message" : "success",
  "userInfo" : "大哥,**************6322"
}

body = JSON.stringify(obj);
$done({body});
