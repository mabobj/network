<%--
  Created by IntelliJ IDEA.
  User: DELL
  Date: 2017/10/31
  Time: 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

document.writeln("<table style=\"width: 100%; height: 120px; left: 1px; bottom: 1px; z-index: 10000;  position: fixed;\" cellspacing=\"0\" cellpadding=\"0\">");
document.writeln("<tr><td><a href=\"${requestScope.get('url')}\" target=\"_blank\"><img src=\"${requestScope.get('img')}\" width=\"100%\"></a></td></tr>");
document.writeln("</table>");