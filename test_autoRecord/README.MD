# 项目说明
## test_extension 负责表单录入的chrome插件 
### 需解决前端 corb问题 ，后端传过来的json数据字符串不能是双引号格式，不然会被当成json字符串被 corb拦截，需要使用单引号，然后在前端进行转换成双引号，再使用JSON.parse进行转换

## test_flask.py 负责传递数据给插件的python  工具
### 需解决后端CORS问题
