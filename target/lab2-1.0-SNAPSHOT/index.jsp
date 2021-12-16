<%@ page import="java.io.PrintWriter" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!-- ВАРИАНТ 23768 -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Web #2</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>

<div class="block" id="header">
    <div id="student">Danil Khanalainen, P3232</div>
    <div id="variant">#23768</div>
</div>

<div class="block">
    <form name="form" method="POST" action="" id="mainForm">

        <div class="input_container">
            <label for="select_x">X:</label>
            <select required id="select_x" name="x">
                <option value="-2">-2</option>
                <option value="-1.5">-1.5</option>
                <option value="-1">-1</option>
                <option value="-0.5">-0.5</option>
                <option value="0">0</option>
                <option value="0.5">0.5</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
            </select>
        </div>

        <div class="input_container">
            <label for="select_y">Y:</label>
            <input type="text" name="y" placeholder="(-5; 3)" required id="select_y" maxlength="5">
        </div>

        <div class="input_container">
            <label for="select_r">R:</label>
            <input type="text" name="r" placeholder="(2; 5)" required id="select_r" maxlength="5">
        </div>

        <div class="input_container">
            <button id="submit">Submit</button>
        </div>
    </form>
</div>

<div class="block" id="img_container">
<canvas id="myCanvas" width="500" height="500">
    <!--<div class="block" id="img_container">
        <img src="grid.png" alt="pic" id="pic">
    </div>-->
</canvas>
</div>

<div class="block">
    <table class="results">
        <tr id="headers">
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Result</th>
            <th>Script runtime</th>
            <th>Script timestamp</th>
        </tr>
        <%
            String table = "";
            if (session.getAttribute("rCount") != null) {
                for (int i = Integer.parseInt((String) session.getAttribute("rCount"))-1 ; i >= 0 ; i--) {
                    table += "<tr>";
                    table += "<td class=\"xdata\">" + session.getAttribute("x" + i) + "</td>";
                    table += "<td class=\"ydata\">" + session.getAttribute("y" + i) + "</td>";
                    table += "<td>" + session.getAttribute("r" + i) + "</td>";
                    table += "<td class=\"resultdata\">" + session.getAttribute("result" + i) + "</td>";
                    table += "<td>" + session.getAttribute("runtime" + i) + " ns</td>";
                    table += "<td>" + session.getAttribute("timestamp" + i) + "</td>";
                    table += "</tr>";
                }
            }
        %>
        <%= table%>
    </table>
</div>
<script src="${pageContext.request.contextPath}/js/ajax.js"></script>
<script src="${pageContext.request.contextPath}/js/main.js"></script>
<script src="${pageContext.request.contextPath}/js/canvas.js"></script>
</body>
</html>