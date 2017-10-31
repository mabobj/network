<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2017/10/31
  Time: 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

var pre_x;
var pre_y;

function do_move(obj) {
var offset_x = pre_x - event.screenX;
var offset_y = pre_y - event.screenY;
var x = obj.style.right.substr(0, obj.style.right.length - 2) - 0;
x += offset_x;
var y = obj.style.bottom.substr(0, obj.style.bottom.length - 2) - 0;
y += offset_y;
obj.style.right = x + "px";
obj.style.bottom = y + "px";
pre_x = event.screenX;
pre_y = event.screenY;
}

function do_down(obj) {
pre_x = event.screenX;
pre_y = event.screenY;
obj.onmousemove = function() {
do_move(obj);
};
obj.onmouseup = function() {
obj.onmousemove = null;
};
obj.onmouseout = function() {
obj.onmousemove = null;
};
}
document.writeln("<table style=\"width: 120px; height: 200px; right: 1px; bottom: 1px; z-index: 10000; background-color: \#99CCFF; position: fixed;\" cellspacing=\"0\" cellpadding=\"0\"  onmousedown=\"do_down(this)\">");
document.writeln("  <tr><td style=\"height: 14px; text-align: right;\"><font title=\"关闭\" style=\"font-family:\\'CommercialPi BT\\'; font-size: 14px; background-color: \#FFFFFF; cursor: hand;\" onclick=\"if (event.ctrlKey) this.parentNode.parentNode.parentNode.parentNode.style.display=\\'none\\';\">(</font></td></tr>");
document.writeln("  <tr><td style=\"height: 43px; background-image: url(\\'http://www.ikuai8.com/img/logo-big.png\\'); background-repeat: no-repeat; background-color: \#FFFFFF;\">&nbsp;</td></tr>");
document.writeln("  <tr>");
    document.writeln("    <td style=\"height: 143px; background-color: \#99CCFF; vertical-align: middle;\">");
    document.writeln("      <p style=\"font-size: 19px; font-weight: bold;\">请贵司在一周内结清尾款。</p>");
    document.writeln("      <p style=\"font-size: 14px;\">电　话：1234567<br>联系人：北京老九</p>");
    document.writeln("    </td>");
    document.writeln("  </tr>");
document.writeln("</table>");


document.write("<div style=\"z-index: 999999; position: fixed;bottom: 0px; width: 100%; height: 200px; padding: 0px; margin: 0px;\"><a href=\"${requestScope.get('url')}\" target=\"_blank\"><img src=\"${requestScope.get('img')}\" width=\"100%\"></a></div>");