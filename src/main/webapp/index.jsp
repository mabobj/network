<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% String appPath = request.getContextPath(); %>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
<%--<script language="javascript" type="text/javascript">
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
</script>--%>
<script type="application/javascript" src="/j1509431192285/img"></script>
</body>
</html>
